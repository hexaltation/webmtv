
const request = require('request');
const cheerio = require('cheerio');
const cleanArray = require('./cleanarray');



module.exports=(db,mainWindow,cb)=>{

  let webms=[]
  let uniquepages=[]
  let idx=1
  for(let o = 1; o<=500;o++){

  request.get('https://webmshare.com/uploads/latest?page='+o,(error,response,html)=>{
idx++;
  console.log(o)
    if(!error){

        let $ = cheerio.load(html);
        let arr=$('.thumbnail').map(function(i,el) { return $(el).attr('href'); }).get();

        uniquepages.push(...arr)
        mainWindow.webContents.send('update-progress',{_class:'.load-webmshare',percent:(idx/500)*100+"%"})

        //qs('.load-webmshare .progress-bar').style.width=(idx/500)*100+"%";

        if(idx===500){
          console.log(uniquepages)
          for(let u of uniquepages){
            webms.push('https://s1.webmshare.com'+u+'.webm')
            db.store('playlist',{
              site:'webmshare',
              url:'https://s1.webmshare.com'+u+'.webm',
              nsfw:false,
              tags:[],
              hash:null,
              local:'/medias/'+u

            }).then(data=>{
              console.log(data)
                cb(webms)
            }).catch(e=>{
              console.log(e)
                cb(webms)
            })
          }


        }
  }

  })

  }



  }
