const db = require('../../config/database/db');

const admin = {

  getInsertUser(nom){
    return new Promise((resolve, reject) => {
      db.getDb().query('INSERT INTO users SET ?', nom, (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  },

  getAllUsers(){
    return new Promise((resolve, reject) => {
      db.getDb().query('SELECT * FROM users', (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  },

  getInsertPlaning(data){
    return new Promise((resolve, reject) => {
      console.log(data.creneau);
      db.getDb().query(`SELECT COUNT(*) AS count FROM reservations WHERE creneau ='${data.creneau}' && jour = 'lundi'`, data, (err, onlyOne) => {
        if (onlyOne[0].count == 0) {
          db.getDb().query(`
          INSERT INTO reservations SET ?`, data, (err, result) => {
            console.log(result);
            err ? reject(err) : resolve(result)
          })
        } else {
          return false
        }
      })
    })
  },

  getUsersPlaningPostes(poste, jour){
    return new Promise((resolve, reject) => {
        db.getDb().query(`
        SELECT user, creneau FROM reservations where jour = '${jour}' && poste = '${poste}' ORDER BY creneau asc`, (err, result) => {
          err ? reject(err) : resolve(result)
        })
    })
  },
}

module.exports = admin