const fs=require('fs')
const path=require('path')
const {qs,qsa,drawtags,build,hasClass}=require('./common.js')
let profiles={}



function draw_preset(profile,selected){

  if(!selected){
    selected="medium"
  }

if(profile.preset){
  let o='<select id="'+profile.name+'_preset">';

  for(let i of profile.preset.value){
    if( selected==i){
      o+='<option value="'+i+'" selected>'+i+'</option>'
    }else {

     o+='<option value="'+i+'">'+i+'</option>'
   }
  }
  o+='</select>'
  return o;
}
else {
  return '';
}

}
function draw_tune(profile,selected){
  console.log(profile)
  if(!selected){
    selected="film"
  }
let u='',o='';
if(profile.tune){
 o+='<select id="h264_tune">';

for(let i of profile.tune.value){
console.log(i)
  if( selected==i.mode){
    o+='<option data-info="'+i.description+'" value="'+i.mode+'" selected>'+i.mode+'</option>'
    u=i.description
  }else {

   o+='<option data-info="'+i.description+'" value="'+i.mode+'">'+i.mode+'</option>'
 }
}
o+='</select>'
o+='<div id="tuneinfo">'+u+'</div>'
}
return o;
}






function draw_profile(profile,preset){


  return `
  <div>
  overwrite:<input type="checkbox" id="overwrite" checked><br>
  presets:`+draw_preset(profile,null)+`<br>
  Constant Rate Factor:<br> lossless<input id="crf_ctrl" type="range" min="0" max="51" value="0" >worst<br>
  tune:<input type="checkbox" id="tune" checked><br>
  `+draw_tune(profile,null)+`
  <br>

  <input type="text" id="foldername">
  <input type="text" id="filename">
  <button id="ffdraw">test</button>
  <div id="ffmpeg_cli"></div>
  </div>
  `

}
function cli_write(){
  let cli =[]
  if(qs('#overwrite').checked){
    cli.push('-y')
  }

  cli.push('-i')
  cli.push(globalarray[globalindex])
  cli.push('-c:v')
  cli.push('libx264')
  cli.push('-crf')
  cli.push(qs('#crf_ctrl').value)
  cli.push('-preset')
  cli.push(qs('#h264_preset').value)
  if(qs('#tune').checked){
    cli.push('-tune')
    cli.push(qs('#h264_tune').value)
  }
  cli.push('-o')
  cli.push(qs('#foldername').value+qs('#filename').value+'.mp4')

  qs('#ffmpeg_cli').innerHTML=cli.join(' ')

return cli;
}


module.exports=()=>{

//  //  fs.readdir('20', function(err, files){
//  // //对文件进行排序
//  // files.sort(function(val1, val2){
//  //  //读取文件信息
//  //  var stat1 = fs.statSync('20/' + val1);
//  //  var stat2 = fs.statSync('20/' + val2);
//  //
//  //  //根据时间从最新到最旧排序
//  //  return stat2.mtime - stat1.mtime;
//  // });
//
//  //这个时候的files就是排序之后的，前三个一定是最新的，
//  for(var i=0;i<3;i++){
//   console.log('%s', files[i]);
//  }
//
// });
  let targets=[]
  console.log(path.resolve(__dirname,'../video_engine/profiles/'))

  for(i of fs.readdirSync(path.resolve(__dirname,'../video_engine/profiles/'))){

    targets.push(i.split('.')[0])
    profiles[i.split('.')[0]]=require('../video_engine/profiles/'+i)

  }
  console.log(targets)
  console.log(profiles)
  let p=''
  for (let i of targets){
    p+='<option value="'+i+'">'+i+'</option>'
  }
//profiles.h264=require('../video_engine/profiles/mp4')
let container_target='<div >targets: <select id="targetz">'+p+'</select></div><br><div id="profile_ctrl"></div>';



qs('#tab4').innerHTML=container_target
qs('#targetz').addEventListener('change',(e)=>{

qs('#profile_ctrl').innerHTML=draw_profile(profiles[e.target.value])
qs('#h264_tune').addEventListener('change',(e)=>{

  qs('#tuneinfo').innerHTML=e.target.options[e.target.selectedIndex].dataset.info
})

qs('#ffdraw').addEventListener('click',()=>{
cli_write()

})
})




}
