
const request = require('request');
const cheerio = require('cheerio');
const cleanArray = require('./cleanarray');


let db;
let mainWindow;
let boardindex;
//let boards=["a","b","c","d","e","f","g","gif","h","hr","k","m","o","p","r","s","t","u","v","vg","vr","w","wg","i","ic","r9k","s4s","vip","qa","cm","hm","lgbt","y","3","aco","adv","an","asp","bant","biz","cgl","ck","co","diy","fa","fit","gd","hc","his","int","jp","lit","mlp","mu","n","news","out","po","pol","qst","sci","soc","sp","tg","toy","trv","tv","vp","wsg","wsr","x"]
let boards=[]
function getBoardz(cb){
  request.get('https://a.4cdn.org/boards.json',(error,response,data)=>{
    console.log( JSON.parse(data) )
  let b =[]
if(!error){

  for(let i of JSON.parse(data).boards){

    b.push(i.board)
  }
  console.log(b)
  cb(null,b)
}else{
  cb(error,b)
}

  })
}



function query4chanAPI(index,array,boardindex,cb){

  request.get('https://a.4cdn.org/'+boards[boardindex]+'/'+index+'.json',(error,response,data)=>{
  //  console.log("+++++++++++++++++++++++++++++==",error)
    let arr=[]
  //  console.log('https://a.4cdn.org/'+boards[boardindex]+'/'+index+'.json')
    let d={}


     try{
if(response.rawHeaders.statusCode != 404 || response.rawHeaders.statusCode != 403) {
    d=JSON.parse(data);

}else{
return setTimeout(()=>{
  if(index===11){
    index=1
    boardindex++
    if(boardindex===boards.length){
        return cb();
    }else{
  query4chanAPI(index,array,boardindex,cb)
    }
  }
},1000)
}

     }catch(e){
    
      return setTimeout(()=>{
         index++;
         mainWindow.webContents.send('update-progress',{_class:'.load-4chan',percent:(boardindex/boards.length)*100+"%"})
         // qs('.load-4chan .progress-bar').style.width=(index/11)*100+"%";
         if(index===11){
           index=1
           boardindex++
           if(boardindex===boards.length){
               return cb();
           }else{
         query4chanAPI(index,array,boardindex,cb)
           }

         }else{
       query4chanAPI(index,array,boardindex,cb)
         }


       },1000)

     }


    for(let i of d.threads){
      for (let o of i.posts){
        console.log(o)
        let nsfw=true
if(boards[boardindex]=='wsg'){
  nsfw=false
}

        if(o.ext===".webm"){

          db.store('playlist',{
            site:'4chan',
            url:"http://i.4cdn.org/"+boards[boardindex]+"/"+o.tim+o.ext,
            nsfw:nsfw,
            tags:[],
            hash:null,
            local:'/medias/'+o.tim+o.ext

          }).then(data=>{
            console.log(data)
          }).catch(e=>{
            console.log(e)
          })
          arr.push("http://i.4cdn.org/"+boards[boardindex]+"/"+o.tim+o.ext)

        }
      }

    }
    array.push(...arr)

    return setTimeout(()=>{
      index++;
      mainWindow.webContents.send('update-progress',{_class:'.load-4chan',percent:(boardindex/boards.length)*100+"%"})
      // qs('.load-4chan .progress-bar').style.width=(index/11)*100+"%";
      if(index===11){
        index=1
        boardindex++
        if(boardindex===boards.length){
            return cb();
        }else{
       query4chanAPI(index,array,boardindex,cb)
        }

      }else{
       query4chanAPI(index,array,boardindex,cb)
      }


    },1000)

  })

}

module.exports=(_db,_mainWindow,cb)=>{
getBoardz((err,b)=>{
  if(!err){
    boards=b

  db=_db
  mainWindow=_mainWindow
let webms=[]
 let requestindex=0
let index=1
 boardindex=0
setTimeout(()=>{
  query4chanAPI(index,webms,boardindex,()=>{
  cb(webms)
},1000)

})
}else{
  cb([])
}
})
}
