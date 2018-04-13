
module.exports=(actions,db)=>{



actions.remove=(o)=>{
console.log(o)
return new Promise((resolve,reject)=>{
  db.playlist.find({
  url:o.url

  },(err,docs)=>{
console.log(err,docs)
if(docs.length>0){

  db.playlist.remove({ url:o.url }, {}, function (err, numRemoved) {

    console.log(err,numRemoved)
    resolve()
    // numRemoved = 1
  });

}else{
  reject()
}


  //  resolve(docs)
  })



})


}




   actions.getPlaylist=(o)=>{

     return new Promise((resolve,reject)=>{
console.log("++++++++++",o)
db.playlist.find(o,(err,docs)=>{
  console.log(err,docs)
  resolve(docs)
})


     })
   }



  actions.store = (site,data) => {
    console.log(site,data)
    return new Promise((resolve, reject) => {
      db[site].findOne({
        url: data.url
      }, (err, d) => {
console.log(err,d)
        if (err) {

          reject({
            error: true,
            debug: JSON.stringify(err)
          })
        } else {
          if (d) {
            console.log('rejecting')

            reject({
              error: true,
              debug: 'aldready in database'
            })

          } else {



                        db[site].insert({
                                   site:data.site,
                                   url: data.url,
                                   hash: data.hash,
                                   creation_date: Date.now(),
                                   tags: data.tags,
                                   local:data.local,
                                   nsfw: data.nsfw

                                 }, (e, d) => {


                                   resolve({error:false,msg:'stored'})
                                 })



            resolve(d)
          }

        }
      });

    })
  }





    actions.tree=(srch) => {


return new Promise((resolve, reject) => {
  let obj = []
  let idx = 0
  for (let u of srch) {
    db.playlist.find({
      site: u.site,
      nsfw: u.nsfw
    }, (err, doc) => {

      idx++;
      let key = {}
      key.name = u.site
      key.items=doc
      obj.push(key)
      if (idx >= srch.length) {

        resolve(obj)
      }
    })

  }
})
    }


}
