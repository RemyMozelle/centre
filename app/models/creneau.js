const db = require('../../config/database/db');

const creneau = {
  getCreneau(){
    return new Promise((resolve, reject) => {
      db.getDb().query('SELECT * FROM creneaux', (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  }
}

module.exports = creneau