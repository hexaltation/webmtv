
const {remote, ipcRenderer} = require("electron");

const os = require('os');
const fs = require('fs');

const http = require('http-https');
const fileType = require('file-type');
const download=require('./download.js')

let globalarray = []
let globalindex = 0;
const app = remote.app;
const {qs,qsa,drawtags,build}=require('./frontend/common.js')
require('./frontend/tabpannel')()
require('./frontend/exports')()
require('./frontend/scrapper_ctrlz')()
require('./frontend/playlist')(globalarray,globalindex)
require('./frontend/player')(globalarray,globalindex)
const {build_tree,init_tree_event}=require('./frontend/browse_tree')




//////
/// BROWSER LOGIC
/////

ipcRenderer.on('gotplaylist', (event, arg) => {
  globalarray.length = 0

  globalarray.push(...arg)


  console.log('==============', globalarray)
})

ipcRenderer.on('gottree', (event, arg) => {

build_tree(arg).then(()=>{
init_tree_event()
}).catch(e=>{
  console.log(e)
})

  console.log('==============', arg)
})


ipcRenderer.send('gettree',[{site:"issoutv",nsfw:false},{site:"webmshare",nsfw:false}])

const obj=[
  {
    name:"2chan",
    items:[
    {
      url:"url",
      tags:["tag","tag"]
    }
  ]
},
   {
    name:"4chan",
    items:[
    {
      url:"url",
      tags:["tag","tag"]
    },
       {
      url:"url",
      tags:["tag","tag"]
    }, {
      url:"url",
      tags:["tag","tag"]
    }
      ]
}

 ]





/////
// editable
////
