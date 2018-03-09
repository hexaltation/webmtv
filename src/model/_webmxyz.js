import os from 'os';
const db = require('./db/nedb')(
os.homedir()+'/Documents/webmtv/db/'
 )
import request from 'request';
import cheerio from 'cheerio';
const Y = a=>(a=>a(a))(b=>a(a=>b(b)(a)));
import cleanArray from './cleanarray';
const qs=(e)=>{
  return document.querySelector(e)
}
const qsa=(e)=>{
  return document.querySelectorAll(e)
}
export default function(playlist,cb){


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
        db.store('_webmshare',{

          url:'https://ungern.webm.xyz/'+elem.attribs["data-href"].split('webm/')[1]+'.webm',
          nsfw:false,
          tags:[],
          hash:null,
          local:'/medias/webmxyz/'+elem.attribs["data-href"]+'.webm'

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
      qs('.load-webmxyz .progress-bar').style.width=(100-(o/pagesmax)*100)+"%";
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
