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
          admin.getUsersPlaningPostes('poste1', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste1', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste1', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste1', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste1', 'vendredi').then(vendredi => {
                    res.render('../views/pages/home', {
                      admin: req.user,
                      message: req.flash('message'),
                      week: semaine,
                      creneau: crenaux,
                      users: user,
                      lundi: lundi,
                      mardi: mardi,
                      mercredi: mercredi,
                      jeudi: jeudi,
                      vendredi: vendredi
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