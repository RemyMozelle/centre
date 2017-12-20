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
      
      db.getDb().query(`SELECT COUNT(*) AS count 
      FROM reservations 
      WHERE creneau ='${data.creneau}' && jour = '${data.jour}'`, data, (err, onlyOne) => {
        
        if (onlyOne[0].count == 0) {
          db.getDb().query(`
          INSERT INTO reservations SET ?`, data, (err, result) => {
            err ? reject(err) : resolve(result)
          })
        } else {
          return false
        }
      })
    })
  },

  getDeleteUsersPlaning(id) {
    return new Promise((resolve, reject) => {
      db.getDb().query('DELETE FROM reservations WHERE id = ?', id, (err, result) => {
        err ? reject(err) : resolve(result)
      })
    });
  },

  getUsersPlaningPostes(poste, jour){
    return new Promise((resolve, reject) => {
      db.getDb().query(`
      SELECT id, user, creneau FROM reservations where jour = '${jour}' && poste = '${poste}' ORDER BY id`, (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  },
}

module.exports = admin