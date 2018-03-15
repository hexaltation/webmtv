const request = require('request');
const cheerio = require('cheerio');
const cleanArray = require('./cleanarray');

module.exports = (db, mainWindow, cb) => {
  let requestindex = 1;
  request.get("http://webm.land/", (error, response, html) => {
    if (!error) {
      let $ = cheerio.load(html);
      let arr = $('.pagination li a').map(function(i, el) {
        return $(el).html();
      }).get()
      let arr2 = []
      for (let i of arr) {
        if (!isNaN(i)) {
          arr2.push(Number(i))
        }
      }
      requestindex = arr2[arr2.indexOf(Math.max(...arr2))]
      let issoupages = []
      for (let o = requestindex; o > 0; o--) {
        issoupages.push("http://webm.land/?page=" + o)
      }
      let webmsarrays = []
      for (let pageurl of issoupages) {
        request.get(pageurl, (error, response, html) => {
          if (!error) {
            let $ = cheerio.load(html);
            var allLinks = $('.webms a').map(function(i, el) {
              console.log("===", el.attribs.href, "++++");
              return el.attribs.href;
            }).get();
            let webms = []
            for (let t of allLinks) {
              webms.push(t.split('/w/')[1].split('/')[0])
            }
            var uniqueNames = [];
            for (let i of webms) {
              db.store('playlist', {
                site: 'webmland',
                url: "http://webm.land/media/" + i + '.webm',
                nsfw: false,
                tags: [],
                hash: null,
                local: '/medias/' + i + '.webm'

              }).then(data => {
                console.log(data)
              }).catch(e => {
                console.log(e)
              })
              uniqueNames.push("http://webm.land/media/" + i + '.webm')
            }
            webmsarrays.push(...uniqueNames)
            requestindex--;
            mainWindow.webContents.send('update-progress', {
              _class: '.load-webmland',
              percent: (100 - (requestindex / issoupages.length) * 100) + "%"
            })
            if (requestindex === 0) {
              cb()
            }
          }
        })
      }
    }
  })
}
