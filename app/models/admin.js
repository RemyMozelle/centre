const db = require('../../config/database/db');

const admin = {
  insertUser(nom){
    return new Promise((resolve, reject) => {
      db.getDb().query('INSERT INTO users SET ?', nom, (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  }
}

module.exports = admin