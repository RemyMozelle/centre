const db = require('../../config/database/db');

const week = {

  /**
   * récupère tous les jours de la semaines (lundi au vendredi) et l'affiche dans le select (HTML)
   */
  getWeek(){
    return new Promise((resolve, reject) => {
      db.getDb().query('SELECT * FROM semaines', (err, result) => {
        err ? reject(err) : resolve(result)
      })
    })
  }
}

module.exports = week