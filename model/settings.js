const fs= require('fs');
const os =require('os');
const mkdirp = require('mkdirp');


if(!fs.existsSync(os.homedir()+'/Documents/webmtv/settings.json')){
  mkdirp(os.homedir()+'/Documents/webmtv/', function(err) {
if(!err){
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/settings.json', JSON.stringify(["2chan"]));
}
});
}

let lib={}

lib.store=(data)=>{
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/settings.json', JSON.stringify(data));
}

lib.get=()=>{
return JSON.parse(fs.readFileSync(os.homedir()+'/Documents/webmtv/settings.json', {encoding: "utf8"}))
}


module.exports=lib
