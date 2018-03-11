
module.exports=(actions,db)=>{

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



}
