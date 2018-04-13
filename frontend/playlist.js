const {qs,qsa,drawtags,build}=require('./common.js')
const {remote, ipcRenderer} = require("electron");

module.exports=(globalarray,globalindex)=>{


  function askPlaylist() {
    ipcRenderer.send('getPlaylist')
  }
  ipcRenderer.on('gotplaylist', (event, arg) => {
    globalarray.length = 0

    globalarray.push(...arg)
    console.log('==============', globalarray)
  })
  qs('#loadplaylist').addEventListener('click', () => {
    askPlaylist()
    globalindex = 0;
  })


askPlaylist()
}
