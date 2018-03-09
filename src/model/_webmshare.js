
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
        qs('.load-webmshare .progress-bar').style.width=(idx/500)*100+"%";

        if(idx===500){
          console.log(uniquepages)
          for(let u of uniquepages){
            webms.push('https://s1.webmshare.com'+u+'.webm')
          }
          cb(webms)

        }
  }

  })

  }



  }
