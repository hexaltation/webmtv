let lib = {}
const db = require('./db/nedb')
const settings = require('./settings')

const _2chan = require('./lib/_2chan')
const _4chan = require('./lib/_4chan')
const _nsfw4chan = require('./lib/_nsfw4chan')
const _issoutv = require('./lib/_issoutv')
const _nsfwissoutv = require('./lib/_nsfwissoutv')
const _webmland = require('./lib/_webmland')
const _webmshare = require('./lib/_webmshare')
const _wobm = require('./lib/_wobm')
const _webmxyz = require('./lib/_webmxyz')

lib.getPlaylist = () => {
  return new Promise((resolve, reject) => {
    let playlist = [];
    let set = settings.get();
    let index = 0;
    for (let o of set) {
      let _search = {
        "site": o,
        "nsfw": false
      }
      if (o === "nsfw4chan") {
        _search = {
          "site": "4chan",
          "nsfw": true
        }
      }
      if (o === "nsfwissoutv") {
        _search = {
          "site": "issoutv",
          "nsfw": true
        }
      }

      db.getPlaylist(_search).then(data => {
        playlist.push(...data)
        index++;
        console.log(index, playlist, data)
        if (index === set.length) {
          resolve(playlist)
        }

      })

    }

  })

}

lib.scrap = (mainWindow) => {

  let set = settings.get()
  console.log(set, set.indexOf('webmxyz') > 0, set.indexOf('webmxyz'))

  //
  if (set.indexOf('2chan') >= 0) {
    _2chan(db, mainWindow, () => {
      console.log('2chan scrapped ================')

    })
  }
  if (set.indexOf('4chan') >= 0) {
    _4chan(db, mainWindow, () => {
      console.log('4chan scrapped ================')

    })
  }
  if (set.indexOf('nsfw4chan') >= 0) {
    _nsfw4chan(db, mainWindow, () => {
      console.log('nsfw4chan scrapped ================')

    })
  }
  if (set.indexOf('issoutv') >= 0) {
    _issoutv(db, mainWindow, () => {
      console.log('issoutv scrapped ================')

    })
  }
  if (set.indexOf('nsfwissoutv') >= 0) {
    _nsfwissoutv(db, mainWindow, () => {
      console.log('nsfwissoutv scrapped ================')

    })
  }
  if (set.indexOf('wobm') >= 0) {
    _wobm(db, mainWindow, () => {
      console.log('wobm scrapped ================')

    })
  }
  if (set.indexOf('webmland') >= 0) {
    _webmland(db, mainWindow, () => {
      console.log('webmland scrapped ================')

    })
  }
  if (set.indexOf('webmshare') >= 0) {
    _webmshare(db, mainWindow, () => {
      console.log('webmshare scrapped ================')

    })
  }
  if (set.indexOf('webmxyz') >= 0) {
    console.log('scrap webmxyz')
    _webmxyz(db, mainWindow, () => {
      console.log('webmxyz scrapped ================')

    })
  }

}

lib.tree = (srch) => {

return new Promise((resolve,reject)=>{

  db.tree(srch).then(data=>{
    resolve(data)
  })
})

  console.log("=========", srch)

}

module.exports = lib;
