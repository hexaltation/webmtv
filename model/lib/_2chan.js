const os = require('os');
const fs = require('fs');



let db
const request = require('request');
const cheerio = require('cheerio');
const cleanArray = require('./cleanarray');


const Y = a=>(a=>a(a))(b=>a(a=>b(b)(a)));

const saveindb=(array,cb)=>{
let fn,rtest;
let index =0;

rtest=()=>{
  if (index < array.length) {
    fn();
  }else{

     cb()
  }
}
fn = Y(fn => () => {


   db.store('playlist',{
     site:'2chan',
     url:array[index],
     nsfw:false,
     tags:[],
     hash:null,
     local:'/medias/'+array[index].split('/').pop()

   }).then(data=>{
     index++
     rtest()
    // console.log("data saved========================")
    // console.log(data)
   }).catch(e=>{
     index++
     console.log('error')
     console.log(e)
    rtest()
   })




})
fn()
}

module.exports=(_db,mainWindow,cb)=>{
  db=_db
  // const qs=(e)=>{
  //   return document.querySelector(e)
  // }
  // const qsa=(e)=>{
  //   return document.querySelectorAll(e)
  // }
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
     console.log('===============TTTTTTTTTTTTTTT',i.split('.webm')[1])
      console.log('===============KKKKKKKKKKKKKKKKKKK', requestindex)
     if(i.split('.webm')[1]!=undefined){


      //  db.store('playlist',{
      //    site:'2chan',
      //    url:"http://may.2chan.net"+i,
      //    nsfw:false,
      //    tags:[],
      //    hash:null,
      //    local:'/medias/2chan/'+i.split('/').pop()
       //
      //  }).then(data=>{
      //   // console.log("data saved========================")
      //   // console.log(data)
      //  }).catch(e=>{
      //    console.log('error')
      //    console.log(e)
      //  })
           uniqueNames.push("http://may.2chan.net"+i)

     }

   }
 }

 webmsarrays.push(...uniqueNames)
 requestindex++;
 mainWindow.webContents.send('update-progress',{_class:'.load-2chan',percent:(requestindex/6)*100+"%"})
 console.log((requestindex/6)*100+"%")
 //qs('.load-2chan .progress-bar').style.width=(requestindex/6)*100+"%";
 if(requestindex===6){
   console.log('completed')
   saveindb(cleanArray(webmsarrays),()=>{
     cb()
   })
 }



         }

   })
  }
 }
