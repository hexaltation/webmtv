const Datastore   = require('nedb');
const path        = require('path');
const os          = require('os');
const fs          = require('fs');
const mkdirp =  require('mkdirp');
if(!fs.existsSync(path.join(os.homedir(),'/Documents/webmtv/db/'))){
  mkdirp(path.join(os.homedir(),'/Documents/webmtv/db/'), function(err) {
    console.log(err)
if(!err){
//  fs.writeFileSync(os.homedir()+'/Documents/webmtv/db/_we.db', JSON.stringify([]));


}
});
}






  const databasePath = function(name){
    return path.join(os.homedir(),'/Documents/webmtv/db/', `${name}.db`)
  }

  const db = {
    playlist:new Datastore({filename: databasePath('playlist'),         autoload: true}),

  }



  const actions = {};
  require('./actions')(actions, db)

console.log(actions)
module.exports = actions
