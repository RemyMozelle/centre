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
      db.getDb().query(`
      INSERT INTO reservations SET ?`, data, (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  },

  getUsersPlaningPoste1(){
    return new Promise((resolve, reject) => {
        db.getDb().query(`
        SELECT users FROM reservations where jour = 'MARDI' ORDER BY creneau asc`, (err, result) => {
          err ? reject(err) : resolve(result)
        })
    })
  },
}

module.exports = admin