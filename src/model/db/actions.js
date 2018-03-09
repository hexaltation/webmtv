
module.exports=(actions,db)=>{



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

console.log('inserting')

                        db[site].insert({
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
