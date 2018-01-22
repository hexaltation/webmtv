
import "./stylesheets/main.css";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote , ipcRenderer} from "electron";
import jetpack from "fs-jetpack";
import env from "env";
import request from 'request';
import os from 'os';
import fs from 'fs';
import mkdirp from 'mkdirp';
import fill2chanplaylist from './model/_2chan';
import fill4chanplaylist from './model/_4chan';
import fillnsfw4chanplaylist from './model/_nsfw4chan';
import fillissounsfwplaylist from './model/_nsfwissoutv';
import fillissouplaylist from './model/_issoutv';
import fillwebmlandplaylist from './model/_webmland';
import fillwebmshareplaylist from './model/_webmshare';
import fillwobmplaylist from './model/_wobm';
import fillwebmxyzplaylist from './model/_webmxyz';

if(!fs.existsSync(os.homedir()+'/Documents/webmtv/settings.json')){
  mkdirp(os.homedir()+'/Documents/webmtv/', function(err) {
if(!err){
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/settings.json', JSON.stringify([]));
}
});
}

let globalarray=[]
let globalindex=0;
const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

const qs=(e)=>{
  return document.querySelector(e)
}
const qsa=(e)=>{
  return document.querySelectorAll(e)
}

function storesettings(data){
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/settings.json', JSON.stringify(data));
}
function getsettings(data){
return JSON.parse(fs.readFileSync(os.homedir()+'/Documents/webmtv/settings.json', {encoding: "utf8"}))
}



function initcheckboxes(){


console.log(getsettings())
for(let o of getsettings()){
  qs('#do'+o).checked=true;
}


}


function whattoload(){

let playlists=[]
if(qs('#do2chan').checked){
  playlists.push("2chan")
}
if(qs('#do4chan').checked){
  playlists.push("4chan")
}
if(qs('#donsfw4chan').checked){
  playlists.push("nsfw4chan")
}
if(qs('#dowebmshare').checked){
  playlists.push("webmshare")
}
if(qs('#dowobm').checked){
  playlists.push("wobm")
}
if(qs('#doissoutv').checked){
  playlists.push("issoutv")
}
if(qs('#donsfwissoutv').checked){
  playlists.push("nsfwissoutv")
}
if(qs('#dowebmland').checked){
  playlists.push("webmland")
}
storesettings(playlists)

return playlists;
}






function play(){
  if(!qs('video').paused){
    qs('video').pause()
  }
  qs('#currentmedia').innerHTML=globalarray[globalindex]

  qs('video').src=globalarray[globalindex]
  qs('video').addEventListener('error',(e,d)=>{
    console.log(e,d)
  //next()
  })
  qs('video').addEventListener('ended',()=>{
  next()
  })

  qs('video').addEventListener( "loadedmetadata", function(e) {
    if(this.videoHeight>this.videoWidth){
      qs('video').classList.remove('normal')
      qs('video').classList.add('phone')
    }else{

      qs('video').classList.remove('phone')
        qs('video').classList.add('normal')
    }
}, false );
qs('video').addEventListener("canplay",(e,d)=>{
  console.log(e,d)
    qs('video').play()
})


}


function next(){


  globalindex++;

  if(globalindex>=globalarray.length){
globalindex=0

  }
play()


}
function prev(webmsarrays,index){
  globalindex--;
  if(globalindex<=0){
globalindex=0

  }
play()

}


let playlist=[]




function loadsite(site){
  switch(site){
  case "2chan":
  fill2chanplaylist((webmsarrays)=>{
  globalarray.push(...webmsarrays)
  })
  break;
  case "wobm":
  fillwobmplaylist((webmsarrays)=>{
  globalarray.push(...webmsarrays.reverse())
  })
  break;
  case "webmxyz":
  fillwebmxyzplaylist((webmsarrays)=>{
  globalarray.push(...webmsarrays)
  })
  break;
  case "4chan":
  fill4chanplaylist((webmsarrays)=>{
  globalarray.push(...webmsarrays)
  })
  break;
  case "nsfw4chan":
  fillnsfw4chanplaylist((webmsarrays)=>{
  globalarray.push(...webmsarrays)
  })
  break;
  case "webmshare":
  fillwebmshareplaylist((webmsarrays)=>{
  globalarray.push(...webmsarrays)
  })

  break;
  case "webmland":
  fillwebmlandplaylist((webmsarrays)=>{

  globalarray.push(...webmsarrays)

})
  break;
  case "issoutv":
  fillissouplaylist((webmsarrays)=>{
    console.log(webmsarrays)
    globalindex=0;
  globalarray.push(...webmsarrays)
  })
  break;
  case "nsfwissoutv":
  fillissounsfwplaylist((webmsarrays)=>{
    console.log(webmsarrays)
    //globalindex=0;
  globalarray.push(...webmsarrays)

  })


  break;


  }
}



function initplaylist(){

for(let o of whattoload()){

  loadsite(o)
}


 }

for(let o of qsa('input[type=checkbox]')){
  o.addEventListener('change',()=>{
    console.log('changed')
  console.log(whattoload())
  //initcheckboxes()
  })
}
  initcheckboxes()
qs('#initplaylist').addEventListener('click',(e)=>{
  globalindex=0;
  initplaylist()
  play()
})


 document.addEventListener('keydown',(e)=>{
   console.log(e)
   e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
   prev()
    }
    else if (e.keyCode == '39') {
   next()
    }
 })
