const ffmpeg = require('ffmpeg-static');
const spawn = require('child_process').spawn;


module.exports=(input,output)=>{

  return new Promise((resolve,reject)=>{


const argz=["-i", input, "-ss", "00:00:01.000" ,"-vframes", "1", output+".png"]
const ff = spawn(ffmpeg.path, argz);

ff.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ff.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ff.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  resolve()
});

  })






}
