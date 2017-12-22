const db = require('../../config/database/db');

const admin = {
  /**
   * INSERT un visiteur
   * @param {*nom du visiteur} nom 
   */
  getInsertUser(nom){
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;
        connexion.query('INSERT INTO users SET ?', nom, (err, result, fields) => {
          //met fin a requete sql (reduire le nombre de requete)
          connexion.release();
          err ? reject(err) : resolve(result)
        })
      })
    })
  },

  /**
   * permet de récupérer tous les visiteurs
   */
  getAllUsers(){
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;
        connexion.query('SELECT * FROM users', (err, result, fields) => {
          //met fin a requete sql (reduire le nombre de requete)
          connexion.release();
          err ? reject(err) : resolve(result)
        })
      })
    })
  },

  /**
   * 
   * @param {*objet data du formulaire lors de la selections (du select HTML) } data 
   */
  getInsertPlaning(data){
    return new Promise((resolve, reject) => {
      db.getDb().getConnection((error, connexion) => {
        if (error) throw error;
        //permet de vérifier si le créneaux et déjà pris avant de l'ajouter dans le planning
        db.getDb().query(`SELECT COUNT(*) AS count 
        FROM reservations 
        WHERE creneau ='${data.creneau}' && jour = '${data.jour}' && poste = '${data.poste}'`, data, (err, onlyOne, fields) => {
          //met fin a requete sql (reduire le nombre de requete)
          connexion.release()
          //si la requete est égal a 0 alors il n'y a personne sur le créneau et insert dans la bdd
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

  /**
   * permet la suppression du visiteur selon son id
   * @param {* id du visiteur} id 
   */
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

  /**
   * Affiche le planning de chaque utilisateurs
   * Sur chaque creneau
   * @param {*poste} poste 
   * @param {*jour de la semaine} jour 
   */
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