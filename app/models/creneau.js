const db = require('../../config/database/db');

const creneau = {

  /**
   * récupère tous les créneaux et l'affiche dans le select (HTML)
   */
  getCreneau(){
    return new Promise((resolve, reject) => {
      db.getDb().query('SELECT * FROM creneaux', (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  }
}

module.exports = creneau