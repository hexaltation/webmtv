
import request from 'request';
import cheerio from 'cheerio';
import cleanArray from './cleanarray';
export default function(playlist,cb){
  const qs=(e)=>{
    return document.querySelector(e)
  }
  const qsa=(e)=>{
    return document.querySelectorAll(e)
  }
 let requestindex=0
 let nichanpages=["http://may.2chan.net/webm/futaba.htm","http://may.2chan.net/webm/1.htm","http://may.2chan.net/webm/2.htm","http://may.2chan.net/webm/3.htm","http://may.2chan.net/webm/4.htm","http://may.2chan.net/webm/5.htm"]
 let webmsarrays=[]

 for(let pageurl of nichanpages){

   request.get(pageurl,(error, response, html)=>{
         if(!error){
             // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
             let $ = cheerio.load(html);
 var allLinks = $('.thre a').map(function(i,el) { return $(el).attr('href'); }).get();

 var regex = new RegExp(".webm");

 let webms = allLinks.filter(/./.test.bind(new RegExp('.webm')));
 var uniqueNames = [];
 for(let i of webms){
   if(uniqueNames.indexOf(i)=== -1){
     console.log(i.split('.webm')[1])
     if(i.split('.webm')[1]!=undefined){
           uniqueNames.push("http://may.2chan.net"+i)
     }

   }
 }
 webmsarrays.push(...uniqueNames)
 requestindex++;
 qs('.load-2chan .progress-bar').style.width=(requestindex/6)*100+"%";
 if(requestindex===6){
   console.log('completed')
   cb(webmsarrays)
 }



         }

   })
  }
 }
