const {qs,qsa,drawtags,build,hasClass}=require('./common.js')
const settings = require('electron-settings');
const {remote, ipcRenderer} = require("electron");
module.exports=(globalarray,globalindex){



qs('#search').addEventListener('submit',(e)=>{
e.preventDefault()




ipcRenderer.send('search',payload)


})


}
