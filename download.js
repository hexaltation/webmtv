
  const dl = require('download-file-with-progressbar');
const os=require('os')
lib={}

lib.dl=(input,target,el)=>{


option = {
    filename: input.split('/').pop(),
    dir: os.homedir()+'/Documents/webmtv/medias/',
    onDone: (info)=>{
        console.log('done', info);
    },
    onError: (err) => {
        console.log('error', err);
    },
    onProgress: (curr, total) => {
        el.innerHTML=('progress', (curr / total * 100).toFixed(2) + '%');
    },
}

var dd = dl(input, option);
return dd;
}

lib.abort=(dd)=>{
  dd.abort();
}

module.exports=lib
