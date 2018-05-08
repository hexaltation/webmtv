const ffmpeg = require('ffmpeg-static');
const spawn = require('child_process').spawn;
const settings=require('electron-settings')
const db=require('../model/db')
const fs= require('fs')
const webp=require('webp-converter');
//const sharp = require('sharp')

module.exports=(input)=>{

  return new Promise((resolve,reject)=>{

// const filename=Date.now()
//
// const argz=["-i", input,"-s","80x60", "-ss", "00:00:01.000" ,"-vframes", "1","input.webp","-y"]
// const ff = spawn(ffmpeg.path, argz);
//
// ff.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
//
// ff.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });
//
// ff.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
//
//
//     let b64=new Buffer(fs.readFileSync('input.webp')).toString("base64")
//     console.log(b64)
//         fs.unlink('input.webp',(err)=>{
//           console.log(err)
//         })
//         //fs.unlink('output.webp')
//       resolve()
//
//   });
resolve()

});

  //})






}
