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


function query4chanAPI(index,array,cb){

  request.get('https://a.4cdn.org/wsg/'+index+'.json',(error,response,data)=>{
    let arr=[]
    let d=JSON.parse(data);
console.log(index,d)
    for(let i of d.threads){
      for (let o of i.posts){

        if(o.ext===".webm"){

          db.store('_4chan',{

            url:"http://i.4cdn.org/wsg/"+o.tim+o.ext,
            nsfw:false,
            tags:[],
            hash:null,
            local:'/medias/4chan/'+o.tim+o.ext

          }).then(data=>{
            console.log(data)
          }).catch(e=>{
            console.log(e)
          })
          arr.push("http://i.4cdn.org/wsg/"+o.tim+o.ext)

        }
      }

    }
    array.push(...arr)

    setTimeout(()=>{
      index++;
       qs('.load-4chan .progress-bar').style.width=(index/11)*100+"%";
      if(index===11){
        return cb();
      }else{
        query4chanAPI(index,array,cb)
      }


    },1000)

  })

}

export default function(playlist,cb){
let webms=[]
 let requestindex=0
let index=1
query4chanAPI(index,webms,()=>{
cb(webms)
})


}
