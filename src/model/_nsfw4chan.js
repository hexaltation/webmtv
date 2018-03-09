import os from 'os';
const db = require('./db/nedb')(
os.homedir()+'/Documents/webmtv/db/'
 )
import request from 'request';
import cheerio from 'cheerio';
import cleanArray from './cleanarray';
const qs=(e)=>{
  return document.querySelector(e)
}
const qsa=(e)=>{
  return document.querySelectorAll(e)
}
function querynsfw4chanAPI(index,array,cb){

  request.get('https://a.4cdn.org/gif/'+index+'.json',(error,response,data)=>{
    let arr=[]
    let d=JSON.parse(data);
console.log(index,d)
    for(let i of d.threads){
      for (let o of i.posts){

        if(o.ext===".webm"){
          arr.push("http://i.4cdn.org/gif/"+o.tim+o.ext)
          db.store('_4chan',{

            url:"http://i.4cdn.org/gif/"+o.tim+o.ext,
            nsfw:true,
            tags:[],
            hash:null,
            local:'/medias/4chan/'+o.tim+o.ext

          }).then(data=>{
            console.log(data)
          }).catch(e=>{
            console.log(e)
          })
        }
      }

    }
    array.push(...arr)

    setTimeout(()=>{
      index++;
         qs('.load-nsfw4chan .progress-bar').style.width=(index/11)*100+"%";
      if(index===11){

        return cb();
      }else{
        querynsfw4chanAPI(index,array,cb)
      }


    },1000)

  })

}

export default function(playlist,cb){


  let webms=[]
   let requestindex=0
  let index=1
  querynsfw4chanAPI(index,webms,()=>{
  cb(webms)
  })

}
