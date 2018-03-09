const Datastore   = require('nedb');
const path        = require('path')


module.exports = function (dbBasePath) {

  const databasePath = function(name){
    return path.join(dbBasePath, `${name}.db`)
  }

  const db = {
    _wobm:                new Datastore({filename: databasePath('wobm'),         autoload: true}),
    _webmxyz:             new Datastore({filename: databasePath('webmxyz'),      autoload: true}),
    _issoutv:             new Datastore({filename: databasePath('issoutv'),      autoload: true}),
    _4chan:              new Datastore({filename: databasePath('4chan'),        autoload: true}),
    _2chan:              new Datastore({filename: databasePath('2chan'),        autoload: true}),
    _webmland:            new Datastore({filename: databasePath('webmland'),     autoload: true}),
    _webmshare:           new Datastore({filename: databasePath('webmshare'),    autoload: true}),

  }



  const actions = {};
  require('./actions')(actions, db)


  return actions
}
