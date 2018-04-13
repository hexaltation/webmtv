
const request = require('request');
const cheerio = require('cheerio');
const cleanArray = require('./cleanarray');



const Y = a=>(a=>a(a))(b=>a(a=>b(b)(a)));


module.exports=(db,mainWindow,cb)=>{


    console.log('webm.xyz filling')

  let webmz=[]



   request.get("https://webm.xyz/",(error, response, html)=>{

     if(!error){

         let $ = cheerio.load(html);
         let pagesmax=$('#pagination').data('pages')
         console.log(pagesmax)
         let o=Number(pagesmax)
                 let fn = Y(fn => () => {
console.log(o)
       request.get({
          url:"https://webm.xyz/page/"+o,
          headers: {  'X-Requested-With':'XMLHttpRequest',  'Referer':'https://webm.xyz/'},
          timeout: 1200

        	},(error, response, html)=>{

     if(!error){
       let $ = cheerio.load(html);

      $('.webm-list-item').each(function(i, elem) {
        webmz.push('https://ungern.webm.xyz/'+elem.attribs["data-href"].split('webm/')[1]+'.webm')
        console.log('https://ungern.webm.xyz/'+elem.attribs["data-href"].split('webm/')[1]+'.webm')
        db.store('playlist',{
          site:'webmxyz',
          url:'https://ungern.webm.xyz/'+elem.attribs["data-href"].split('webm/')[1]+'.webm',
          nsfw:false,
          tags:[],
          hash:null,
          local:'/medias/'+elem.attribs["data-href"]+'.webm'

        }).then(data=>{
          console.log(data)

        }).catch(e=>{
          console.log(e)

        })

        //console.log(elem.data('href'))

});

  //      for(let i of els){
  // console.log(i.get(0).attribs)
  //
  //
  //      }
     }
     mainWindow.webContents.send('update-progress',{_class:'.load-webmxyz',percent:(100-(o/pagesmax)*100)+"%"})

  //    qs('.load-webmxyz .progress-bar').style.width=(100-(o/pagesmax)*100)+"%";
o--;
     if (o >= 0) {
       fn();
     }else{

        cb(webmz)
     }


       })



   })
      fn()
    }
   })


   }
