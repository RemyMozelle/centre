const admin = require('../models/admin');
const week = require('../models/week');
const creneau = require('../models/creneau');
const poste = require('../models/poste');

const appController = {
  /**
   * @param {*res.redirect("/")} res 
   */
  home(req, res){
    week.getWeek().then(semaine => {
      creneau.getCreneau().then(crenaux => {
        admin.getAllUsers().then(user => {
          admin.getUsersPlaningPostes('poste1', 'lundi').then(lundiPoste1 => {
            admin.getUsersPlaningPostes('poste1', 'mardi').then(mardiPoste1 => {
              admin.getUsersPlaningPostes('poste1', 'mercredi').then(mercrediPoste1 => {
                admin.getUsersPlaningPostes('poste1', 'jeudi').then(jeudiPoste1 => {
                  admin.getUsersPlaningPostes('poste1', 'vendredi').then(vendrediPoste1 => {
                    admin.getUsersPlaningPostes('poste2', 'lundi').then(lundiPoste2 => {
                      res.render('../views/pages/home', {
                        admin: req.user,
                        message: req.flash('message'),
                        week: semaine,
                        creneau: crenaux,
                        users: user,
                        lundiPoste1: lundiPoste1,
                        mardiPoste1: mardiPoste1,
                        mercrediPoste1: mercrediPoste1,
                        jeudiPoste1: jeudiPoste1,
                        vendrediPoste1: vendrediPoste1,
                        lundiPoste2 : lundiPoste2
                      })
                    })  
                  })
                })
              })
            })
          })
        })
      })
    })
  }  
}

module.exports = appController;