// ----------------------------------------------------------------------------
// webmtv frontend logic
// ----------------------------------------------------------------------------

const {remote, ipcRenderer} = require("electron");

const os = require('os');
const fs = require('fs');

const http = require('http-https');
const fileType = require('file-type');
const download=require('./download.js')

let globalarray = []
let globalindex = 0;
const app = remote.app;

const qs = (e) => {
  return document.querySelector(e)
}
const qsa = (e) => {
  return document.querySelectorAll(e)
}

ipcRenderer.on('gotplaylist', (event, arg) => {
  globalarray.length = 0

  globalarray.push(...arg)
  console.log('==============', globalarray)
})

function askPlaylist() {
  ipcRenderer.send('getPlaylist')
}

function storesettings() {

  ipcRenderer.send('store-settings', whattoload())
}

function initcheckboxes() {

  ipcRenderer.send('grab-settings')
  ipcRenderer.on('grabed-settings', (event, data) => {
    console.log(data)
    for (let o of data) {
      qs('#do' + o).checked = true;
    }

  })

}

function whattoload() {

  let playlists = []
  if (qs('#do2chan').checked) {
    playlists.push("2chan")
  }
  if (qs('#do4chan').checked) {
    playlists.push("4chan")
  }
  if (qs('#donsfw4chan').checked) {
    playlists.push("nsfw4chan")
  }
  if (qs('#dowebmshare').checked) {
    playlists.push("webmshare")
  }
  if (qs('#dowobm').checked) {
    playlists.push("wobm")
  }
  if (qs('#doissoutv').checked) {
    playlists.push("issoutv")
  }
  if (qs('#donsfwissoutv').checked) {
    playlists.push("nsfwissoutv")
  }
  if (qs('#dowebmland').checked) {
    playlists.push("webmland")
  }
  if (qs('#dowebmxyz').checked) {
    playlists.push("webmxyz")
  }

  return playlists;
}

function random() {
  globalindex = Math.floor(Math.random() * (globalarray.length - 1));
  play()
}

qs('video').addEventListener('error', (e, d) => {
  //  qs('video').removeEventListener('error');
  console.log(e, d)
  //next()
})
qs('video').addEventListener('ended', () => {
  console.log('=============ended')
  //qs('video').removeEventListener('ended');
  setTimeout(() => {
    next()
  }, 750)

})

qs('video').addEventListener('timeupdate', function() {
  var duration = qs('video').duration;
  if (duration > 0) {
    qs('#seekbar span').style.width = ((qs('video').currentTime / duration) * 100) + "%";
  }
});
qs('video').addEventListener('progress', function() {
  var bufferedEnd = qs('video').buffered.end(qs('video').buffered.length - 1);
  console.log('buffer', bufferedEnd)
  var duration = qs('video').duration;
  if (duration > 0) {
    var buffPercent = (bufferedEnd / duration) * 100;
    console.log(buffPercent)
  }
});

qs("#seekbar").addEventListener("click", function(e) {
  var offset = qs("#seekbar").getBoundingClientRect();
  var left = (e.pageX - offset.left);
  var totalWidth = qs("#seekbar").offsetWidth;
  var percentage = (left / totalWidth);
  var vidTime = qs('video').duration * percentage;
  qs('video').currentTime = vidTime;
});

qs('video').addEventListener("loadedmetadata", function(e) {
  //  qs('video').removeEventListener('loadedmetadata');
  if (this.videoHeight > this.videoWidth) {
    qs('video').classList.remove('normal')
    qs('video').classList.add('phone')
  } else {

    qs('video').classList.remove('phone')
    qs('video').classList.add('normal')
  }
}, false);

qs('video').addEventListener("canplay", (e, d) => {

  qs('video').play()
})

function play() {
  if (!qs('video').paused) {
    qs('video').pause()
  }
  qs('#currentmedia').innerHTML = globalarray[globalindex].url
  qs('.playlist-position').innerHTML = (globalindex + 1) + '/' + globalarray.length
  qs('.load-all .progress-bar').style.width = ((globalindex + 1) / globalarray.length) * 100 + "%";
  http.get(globalarray[globalindex].url, res => {
    res.once('data', chunk => {
      res.destroy();
      console.log(fileType(chunk));
      //=> {ext: 'gif', mime: 'image/gif'}
      if (fileType(chunk).mime == 'video/webm') {
        qs('video').src = globalarray[globalindex].url
        if(qs('#autodl').checked){
      let dl_instance= download.dl(globalarray[globalindex].url,globalarray[globalindex].local,qs('#status_info'))
       qs('cancel_dl').removeEventListener("click");
       qs('cancel_dl').addEventListener('click',()=>{
         dl_instance.abort()
       })
        }
      } else {
        qs('#currentmedia').innerHTML = 'error not a webm  :' + fileType(chunk).mime + ' => next()'
        //next()
      }
    });
  });
}

function next() {
  globalindex++;
  if (globalindex >= globalarray.length) {
    globalindex = 0
  }
  play()
}

function prev(webmsarrays, index) {
  globalindex--;
  if (globalindex <= 0) {
    globalindex = 0
  }
  play()
}
let playlist = [];
function initplaylist(next) {
  let index = 0
  for (let o of whattoload()) {
    loadsite(o, () => {
      index++;
      if (index >= whattoload().length) {
        next()
      }
    })
  }
}

document.addEventListener('keydown', (e) => {
  console.log(e)
  e = e || window.event;

  if (e.keyCode == '38') {
    // up arrow
    random()
  } else if (e.keyCode == '40') {
    // down arrow
  } else if (e.keyCode == '37') {
    prev()
  } else if (e.keyCode == '39') {
    next()
  }
})

qs('.playctrl').addEventListener('click', () => {
  const video = qs('video');
  if (video.paused) {

    qs('.playctrl').classList.remove('playBtn')
    qs('.playctrl').classList.add('pauseBtn')
    video.play()

  } else {
    qs('.playctrl').classList.remove('pauseBtn')
    qs('.playctrl').classList.add('playBtn')
    video.pause()

  }

})
qs(".load-all").addEventListener("click", function(e) {

  let offset = qs(".load-all").getBoundingClientRect();
  let left = (e.pageX - offset.left);
  let totalWidth = qs(".load-all").offsetWidth;
  let percentage = (left / totalWidth);
  let current = globalarray.length * percentage

  globalindex = parseInt(current);
  console.log(globalindex)
  play()
  //var vidTime = qs('video').duration * percentage;

});

for (let i of qsa('input[type=checkbox]')) {
  console.log(i)
  i.addEventListener('change', () => {

    storesettings()
  })
}

qs('#scrap').addEventListener('click', () => {

  ipcRenderer.send('scrap')
})
qs('#loadplaylist').addEventListener('click', () => {
  askPlaylist()
  globalindex = 0;
})

ipcRenderer.on('update-progress', (e, d) => {
  console.log(e, d)
  qs(d._class + ' .progress-bar').style.width = d.percent

})



initcheckboxes()
askPlaylist()
