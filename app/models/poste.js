const db = require('../../config/database/db');

const poste = {
  getPoste(){
    return new Promise((resolve, reject) => {
      db.getDb().query('SELECT * FROM ordinateurs', (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  }
}

module.exports = poste