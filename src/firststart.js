import os from 'os';
import fs from 'fs';
import mkdirp from 'mkdirp';

export default function(){



if(!fs.existsSync(os.homedir()+'/Documents/webmtv/settings.json')){
  mkdirp(os.homedir()+'/Documents/webmtv/', function(err) {
if(!err){
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/settings.json', JSON.stringify([]));
}
});
}
if(!fs.existsSync(os.homedir()+'/Documents/webmtv/db/.db')){
  mkdirp(os.homedir()+'/Documents/webmtv/db/.db', function(err) {
if(!err){
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/db/.db', JSON.stringify([]));
}
});
}
if(!fs.existsSync(os.homedir()+'/Documents/webmtv/medias/.medias')){
  mkdirp(os.homedir()+'/Documents/webmtv/medias/.medias', function(err) {
if(!err){
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/medias/.medias', JSON.stringify([]));
}
});
}
if(!fs.existsSync(os.homedir()+'/Documents/webmtv/encoded/.encoded')){
  mkdirp(os.homedir()+'/Documents/webmtv/encoded/.encoded', function(err) {
if(!err){
  fs.writeFileSync(os.homedir()+'/Documents/webmtv/encoded/.encoded', JSON.stringify([]));
}
});
}
}
