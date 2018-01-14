
import "./stylesheets/main.css";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote , ipcRenderer} from "electron";
import jetpack from "fs-jetpack";
import env from "env";
import request from 'request';
import cheerio from 'cheerio';
import fill2chanplaylist from './model/_2chan';
import fill4chanplaylist from './model/_4chan';
import fillnsfw4chanplaylist from './model/_nsfw4chan';
import fillissounsfwplaylist from './model/_nsfwissoutv';
import fillissouplaylist from './model/_issoutv';
import fillwebmlandplaylist from './model/_webmland';
import fillwebmshareplaylist from './model/_webmshare';
import fillwobmplaylist from './model/_wobm';
import fillwebmxyzplaylist from './model/_webmxyz';

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

function whattoload(){

let playlists=[]
if(qs('#do2chan').checked){
  playlists.push("2chan")
}
if(qs('#do4chan').checked){
  playlists.push("4chan")
}
if(qs('#do4channsfw').checked){
  playlists.push("nsfw4chan")
}
if(qs('#dowebmshare').checked){
  playlists.push("webmshare")
}
if(qs('#dowobm').checked){
  playlists.push("wobm")
}
if(qs('#doissoutv').checked){
  playlists.push("wobm")
}
if(qs('#doissoutvnsfw').checked){
  playlists.push("nsfwissoutv")
}
}




function getprefix(){
  let prefix='';
  switch(localStorage.getItem("current_site")){
    case "issoutv":
   prefix="http://issoutv.com"
    break;
    case "nsfwissoutv":
   prefix="http://issoutv.com"
    break;
    case "2chan":
prefix="http://may.2chan.net"
    break;
    case "4chan":
prefix="http://i.4cdn.org/wsg/";
    break;
    case "nsfw4chan":
prefix="http://i.4cdn.org/gif/";
    break;
    case "webmland":
prefix="http://webm.land/media/";
    break;
    case "webmshare":
prefix="https:";
    break;
  }
  return prefix;
}

function play(){

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
  console.log(globalarray[globalindex])
  if(globalindex>=globalarray.length){
globalindex=0

  }

  qs('video').src=getprefix()+globalarray[globalindex]
play()
}
function prev(webmsarrays,index){
  globalindex--;

  qs('video').src=getprefix()+globalarray[globalindex]
  play()
}


let playlist=[]

ipcRenderer.on('change_site' , function(event , data){
  localStorage.setItem("current_site", data.site);
switch(data.site){

case "2chan":
fill2chanplaylist((webmsarrays)=>{

    globalindex=0;
      globalarray=webmsarrays;
  qs('video').src=getprefix()+globalarray[globalindex]
  play()

})

break;
case "wobm":
fillwobmplaylist((webmsarrays)=>{

    globalindex=0;
      globalarray=webmsarrays;
  qs('video').src=getprefix()+globalarray[globalindex]
  play()

})

break;
case "webmxyz":
fillwebmxyzplaylist((webmsarrays)=>{

    globalindex=0;
      globalarray=webmsarrays;
  qs('video').src=getprefix()+globalarray[globalindex]
  play()

})

break;
case "4chan":
fill4chanplaylist((webmsarrays)=>{

    globalindex=0;
      globalarray=webmsarrays;
    qs('video').src=getprefix()+globalarray[globalindex]
    play()

})


break;
case "nsfw4chan":
fillnsfw4chanplaylist((webmsarrays)=>{
  globalindex=0;
    globalarray=webmsarrays;
    qs('video').src=getprefix()+globalarray[globalindex]
    play()


})


break;
case "webmshare":
fillwebmshareplaylist((webmsarrays)=>{

    globalindex=0;
      globalarray=webmsarrays;
    qs('video').src=getprefix()+globalarray[globalindex]
    play()


})

break;
case "webmland":
fillwebmlandplaylist((webmsarrays)=>{
  globalindex=0;
    globalarray=webmsarrays;
    qs('video').src=getprefix()+globalarray[globalindex]
    play()


})

break;
case "issoutv":
fillissouplaylist((webmsarrays)=>{
  console.log(webmsarrays)
  globalindex=0;
globalarray=webmsarrays
    qs('video').src=getprefix()+globalarray[globalindex]
    play()

})


break;
case "nsfwissoutv":
fillissounsfwplaylist((webmsarrays)=>{
  console.log(webmsarrays)
  globalindex=0;
globalarray=webmsarrays
    qs('video').src=getprefix()+globalarray[globalindex]
    play()

})


break;


}


 });




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
