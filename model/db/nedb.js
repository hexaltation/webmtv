const Datastore   = require('nedb');
const path        = require('path');
const os          = require('os');
const fs          = require('fs');
const mkdirp =  require('mkdirp');
const settings = require('electron-settings');
if(!settings.get('workingdir')){
  settings.set('workingdir',os.homedir())
}
if(!fs.existsSync(settings.get('workingdir')+'/db/')){
  mkdirp(settings.get('workingdir')+'/db/', function(err) {
    console.log(err)
if(!err){
//  fs.writeFileSync(os.homedir()+'/Documents/webmtv/db/_we.db', JSON.stringify([]));

}
});
}


  const databasePath = function(name){
    return path.join(settings.get('workingdir'),'/', `${name}.db`)
  }

  const db = {
    playlist:new Datastore({filename: databasePath('playlist'),         autoload: true}),

  }

  const actions = {};
  require('./actions')(actions, db)


module.exports = actions
