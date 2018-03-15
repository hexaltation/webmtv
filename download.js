
  const dl = require('download-file-with-progressbar');

lib={}

lib.dl=(input,target,el)=>{


option = {
    filename: 'the filename to store, default = path.basename(YOUR_URL) || "unknowfilename"',
    dir: 'the folder to store, default = os.tmpdir()',
    onDone: (info)=>{
        console.log('done', info);
    },
    onError: (err) => {
        console.log('error', err);
    },
    onProgress: (curr, total) => {
        console.log('progress', (curr / total * 100).toFixed(2) + '%');
    },
}

var dd = dl('YOUR_URL', option);
return dd;
}

lib.abort=(dd)=>{
  dd.abort();
}

module.exports=lib
