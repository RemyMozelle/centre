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
          admin.getUsersPlaningPoste1().then(userPlanings => {
            res.render('../views/pages/home', {
              admin : req.user,
              message : req.flash('message'),
              week : semaine,
              creneau : crenaux,
              users : user,
              userPlaning : userPlanings
            })
          })
        })
      })
    })
  }  
}

module.exports = appController;