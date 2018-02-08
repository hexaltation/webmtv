
import request from 'request';
import cheerio from 'cheerio';
import cleanArray from './cleanarray';
const qs=(e)=>{
  return document.querySelector(e)
}
const qsa=(e)=>{
  return document.querySelectorAll(e)
}
export default function(playlist,cb){


    console.log('issou filling')
  let requestindex=0

   request.get("http://issoutv.com/",(error, response, html)=>{

     if(!error){

         let $ = cheerio.load(html);
         let arr=$('.v-pagination li a').map(function(i,el) { return $(el).html(); }).get()
         let arr2=[]
         for(let i of arr){
           if(!isNaN(i)){
             arr2.push(Number(i))
           }
         }
         requestindex=arr2[arr2.indexOf(Math.max(...arr2))]
         let issoupages=[]
         for(let o=requestindex;o>0;o--){

           issoupages.push("http://issoutv.com/videos/page/"+o)
         }
         console.log(issoupages,requestindex)
         let webmsarrays=[]
         for(let pageurl of issoupages){

           request.get(pageurl,(error, response, html)=>{
             console.log("issou/"+pageurl)
                 if(!error){
                     // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
                     let $ = cheerio.load(html);
         var allLinks = $('video').map(function(i,el) { console.log("===",el.children[0].attribs.src,"++++");return el.children[0].attribs.src; }).get();
         //console.log($('video'))
         var regex = new RegExp(".webm");

         let webms = allLinks.filter(/./.test.bind(new RegExp('.webm')));
         var uniqueNames = [];
         for(let i of webms){
           if(uniqueNames.indexOf(i)=== -1){
             console.log(i.split('.webm')[1])
             if(i.split('.webm')[1]!=undefined){
                   uniqueNames.push("http://issoutv.com"+i)
             }

           }
         }
         webmsarrays.push(...uniqueNames)
         requestindex--;
         qs('.load-issoutv .progress-bar').style.width=(100-(requestindex/issoupages.length)*100)+"%";

         console.log(requestindex)
         if(requestindex===0){
           console.log('completed')
           cb(webmsarrays)
         }

                 }

           })
          }



       }

   })

   }
