const db = require('../../config/database/db');

const week = {
  getWeek(){
    return new Promise((resolve, reject) => {
      db.getDb().query('SELECT * FROM semaines', (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  }
}

module.exports = week