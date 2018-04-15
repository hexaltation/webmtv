const fs= require('fs');
const os =require('os');
const mkdirp = require('mkdirp');
const settings = require('electron-settings');
if(!settings.has('settings')){
  settings.set('settings',['2chan']);
}



let lib={}

lib.store=(data)=>{
settings.set('settings',data);
  //fs.writeFileSync(os.homedir()+'/Documents/webmtv/settings.json', JSON.stringify(data));
}

lib.get=()=>{

return settings.get('settings');//JSON.parse(fs.readFileSync(os.homedir()+'/Documents/webmtv/settings.json', {encoding: "utf8"}))
}

lib.initDir=()=>{


  if(!settings.has('workingdir')){
    settings.set('workingdir',os.homedir()+'/webmtv');
  }

  if(!fs.existsSync(settings.get('workingdir')+'/thumbs')){
    mkdirp(settings.get('workingdir')+'/thumbs', function(err) {
  if(!err){

  }
  });
  }
  if(!fs.existsSync(settings.get('workingdir')+'/exports')){
    mkdirp(settings.get('workingdir')+'/exports', function(err) {
  if(!err){

  }
  });
  }
  if(!fs.existsSync(settings.get('workingdir')+'/medias/')){
    mkdirp(settings.get('workingdir')+'/medias/', function(err) {
      console.log(err)
  if(!err){
  //  fs.writeFileSync(os.homedir()+'/Documents/webmtv/db/_we.db', JSON.stringify([]));

  }
  });
  }

}

module.exports=lib
