
const request = require('request');
const cheerio = require('cheerio');
const cleanArray = require('./cleanarray');


let db;
let mainWindow;


function query4chanAPI(index,array,cb){

  request.get('https://a.4cdn.org/wsg/'+index+'.json',(error,response,data)=>{
    let arr=[]
    let d=JSON.parse(data);

    for(let i of d.threads){
      for (let o of i.posts){

        if(o.ext===".webm"){

          db.store('playlist',{
            site:'4chan',
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
      mainWindow.webContents.send('update-progress',{_class:'.load-4chan',percent:(index/11)*100+"%"})
      // qs('.load-4chan .progress-bar').style.width=(index/11)*100+"%";
      if(index===11){
        return cb();
      }else{
        query4chanAPI(index,array,cb)
      }


    },1000)

  })

}

module.exports=(_db,_mainWindow,cb)=>{
  db=_db
  mainWindow=_mainWindow
let webms=[]
 let requestindex=0
let index=1
query4chanAPI(index,webms,()=>{
cb(webms)
})


}
