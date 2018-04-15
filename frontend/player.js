const {qs, qsa, drawtags, build} = require('./common.js')
const {remote, ipcRenderer} = require("electron");
const canvas = qs('canvas')
const video = qs('video')
const ctx = canvas.getContext('2d');
const meter = require('./audiometer')
const volctrl = require('./volume_ctrl')
let gainNode

module.exports = () => {

  function initAudio() {
    const Audioctx = new(window.AudioContext)
    // Feed the HTMLMediaElement into it
    let source = Audioctx.createMediaElementSource(video);

    // Create a gain node
    gainNode = Audioctx.createGain();
    source.connect(gainNode);

    gainNode.connect(Audioctx.destination);
    let meterNode = meter.createMeterNode(gainNode, Audioctx);
    meter.createMeter(qs('.meter'), meterNode, {});
    //qs('#volume_ctrl').value=gainNode.gain.value
    volctrl(qs('.ctrla'), gainNode)
  }
  initAudio()

  function drawLoop() {
    ctx.drawImage(video, 0, 0);

    requestAnimationFrame(drawLoop)
  }

  drawLoop()

  function random() {
    globalindex = Math.floor(Math.random() * (globalarray.length - 1));
    play()
  }

  qs('#volume_ctrl').addEventListener('input', (e) => {

    //gainNode.gain.value=e.target.value

  })
  qs('video').addEventListener('error', (e, d) => {
    //  qs('video').removeEventListener('error');
    console.log(e, d)
    //next()
  })
  qs('video').addEventListener('ended', () => {
    //    console.log('=============ended')
    //qs('video').removeEventListener('ended');
    setTimeout(() => {
      next()
    }, 750)

  })

  qs('video').addEventListener('timeupdate', function() {
    var duration = qs('video').duration;
    if (duration > 0) {
      qs('#progress_play').style.width = ((qs('video').currentTime / duration) * 100) + "%";
    }
  });
  qs('video').addEventListener('progress', function() {
    try {
      var bufferedEnd = qs('video').buffered.end(qs('video').buffered.length - 1);
      var percentLoaded = parseInt(((qs('video').buffered.end(0) / qs('video').duration) * 100));
      qs('#progress_load').style.width = percentLoaded + '%';
      console.log('buffering', percentLoaded)
      var duration = qs('video').duration;
      if (duration > 0) {
        var buffPercent = (bufferedEnd / duration) * 100;
        //console.log(buffPercent)
      }
    } catch (e) {
      console.log(e)
    }

  });

  qs("#progress_wrap").addEventListener("click", function(e) {
    var offset = e.target.getBoundingClientRect();
    var left = (e.pageX - offset.left);
    var totalWidth = e.target.offsetWidth;
    var percentage = (left / totalWidth);
    var vidTime = qs('video').duration * percentage;
    qs('video').currentTime = vidTime;
  });

  qs('video').addEventListener("loadedmetadata", function(e) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    //  qs('video').removeEventListener('loadedmetadata');
    if (this.videoHeight > this.videoWidth) {
      qs('canvas').classList.remove('normal')
      qs('canvas').classList.add('phone')
    } else {

      qs('canvas').classList.remove('phone')
      qs('canvas').classList.add('normal')
    }
    console.log(qs('canvas').classList)
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
        //console.log(fileType(chunk));
        //=> {ext: 'gif', mime: 'image/gif'}
        if (!fileType(chunk)) {

          ipcRenderer.send('removeURL', {url: globalarray[globalindex].url})
          return next()
        }

        if (fileType(chunk).mime == 'video/webm') {
          console.log(globalarray[globalindex])
          if (fs.existsSync(os.homedir() + '/Documents/webmtv' + globalarray[globalindex])) {
            qs('video').src = os.homedir() + '/Documents/webmtv' + globalarray[globalindex]
          } else {
            qs('video').src = globalarray[globalindex].url
          }
          ipcRenderer.send('generateThumb',globalarray[globalindex].url)
          if (qs('#autodl').checked) {


            //  console.log(globalarray[globalindex].url,globalarray[globalindex].local,qs('#status_info'))
            // let dl_instance = download.dl(globalarray[globalindex].url, globalarray[globalindex].local, qs('#status_info'))
            // if (qs('#cancel_dl')) {
            //   qs('#cancel_dl').removeEventListener("click", () => {});
            //   qs('#cancel_dl').addEventListener('click', () => {
            //     dl_instance.abort()
            //   })
            // }

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
    } else if (e.keyCode = '32') {
      if (!qs('video').paused) {
        qs('video').pause()
      } else {
        if (qs('video').src) {
          qs('video').play()
        } else {
          play()
        }

      }

    }
  })

  qs('#playpause').addEventListener('click', (e) => {
    const video = qs('video');
    if (video.paused) {

      e.target.classList.remove('playBtn')
      e.target.classList.add('pauseBtn')
      video.play()

    } else {
      e.target.classList.remove('pauseBtn')
      e.target.classList.add('playBtn')
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

}
