
import request from 'request';
import cheerio from 'cheerio';
const qs=(e)=>{
  return document.querySelector(e)
}
const qsa=(e)=>{
  return document.querySelectorAll(e)
}
export default function(cb){


    console.log('issou filling')
  let requestindex=1

   request.get("http://webm.land/",(error, response, html)=>{

     if(!error){

         let $ = cheerio.load(html);
         let arr=$('.pagination li a').map(function(i,el) { return $(el).html(); }).get()
         let arr2=[]
         for(let i of arr){
           if(!isNaN(i)){
             arr2.push(Number(i))
           }
         }
         requestindex=arr2[arr2.indexOf(Math.max(...arr2))]
         let issoupages=[]
         for(let o=requestindex;o>0;o--){
           issoupages.push("http://webm.land/?page="+o)
         }
         console.log(issoupages,requestindex)
         let webmsarrays=[]
         for(let pageurl of issoupages){

           request.get(pageurl,(error, response, html)=>{
             console.log("webm.land/"+pageurl)
                 if(!error){
                     // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
                     let $ = cheerio.load(html);
         var allLinks = $('.webms a').map(function(i,el) { console.log("===",el.attribs.href,"++++");return el.attribs.href; }).get();
         console.log(allLinks)
let webms=[]
      for (let t of allLinks){
        webms.push(t.split('/w/')[1].split('/')[0])
      }
         var uniqueNames = [];
         for(let i of webms){
        uniqueNames.push("http://webm.land/media/"+i+'.webm')
         }
         webmsarrays.push(...uniqueNames)
         requestindex--;
         qs('.load-webmland .progress-bar').style.width=(100-(requestindex/issoupages.length)*100)+"%";

         console.log(requestindex)
         if(requestindex===0){
           console.log('completed',webmsarrays)
           cb(webmsarrays)
         }

                 }

           })
          }



       }

   })

   }
