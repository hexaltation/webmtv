const {qs,qsa,drawtags,build}=require('./common.js')
const {remote, ipcRenderer} = require("electron");

module.exports=()=>{

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

for (let i of qsa('input[type=checkbox]')) {
  console.log(i)
  i.addEventListener('change', () => {

    storesettings()
  })
}

qs('#scrap').addEventListener('click', () => {

  ipcRenderer.send('scrap')
})
ipcRenderer.on('update-progress', (e, d) => {
  console.log(e, d)
  qs(d._class + ' .progress-bar').style.width = d.percent

})



initcheckboxes()


}
