const {qs, qsa, drawtags, build} = require('./common.js')
const {remote, ipcRenderer} = require("electron");
const settings = require('electron-settings');
module.exports=()=>{


qs('#workingdir').innerText=settings.get('workingdir')

qs('#select_working_dir').addEventListener('click',(e)=>{
  e.preventDefault()
let dir=remote.dialog.showOpenDialog({properties: [ 'openDirectory']})
if(dir){
  settings.set('workingdir',dir+'/webmtv')
  qs('#workingdir').innerText=dir+'/webmtv'
  ipcRenderer.send('makeDir')

}

  })


}
