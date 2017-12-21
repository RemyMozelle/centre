const db = require('../../config/database/db');

const admin = {

  getInsertUser(nom){
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;
        connexion.query('INSERT INTO users SET ?', nom, (err, result, fields) => {
          connexion.release();
          err ? reject(err) : resolve(result)
        })
      })
    })
  },

  getAllUsers(){
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;
        connexion.query('SELECT * FROM users', (err, result, fields) => {
          connexion.release();
          err ? reject(err) : resolve(result)
        })
      })
    })
  },

  getInsertPlaning(data){
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;

        db.getDb().query(`SELECT COUNT(*) AS count 
        FROM reservations 
        WHERE creneau ='${data.creneau}' && jour = '${data.jour}' && poste = '${data.poste}'`, data, (err, onlyOne, fields) => {
          connexion.release()
          if (onlyOne[0].count == 0) {
            db.getDb().query(`
            INSERT INTO reservations SET ?`, data, (err, result, fields) => {
              err ? reject(err) : resolve(result)
            })
          }
        })
      })
    })
  },

  getDeleteUsersPlaning(id) {
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;

        connexion.query('DELETE FROM reservations WHERE id = ?', id, (err, result, fields) => {
          connexion.release();
          err ? reject(err) : resolve(result)
        })
      })
    });
  },

  getUsersPlaningPostes(poste, jour){
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;
        
        connexion.query(`
          SELECT id, user, creneau FROM reservations where jour = '${jour}' && poste = '${poste}' ORDER BY id`, (err, result, fields) => {
            err ? reject(err) : resolve(result)
          })
      })
    })
  },
}

module.exports = admin