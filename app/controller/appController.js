const admin = require('../models/admin');
const week = require('../models/week');
const creneau = require('../models/creneau');

const appController = {
  /**
   * @param {*res.redirect("/")} res 
   */
  home(req, res) {
    week.getWeek().then(semaine => {
      creneau.getCreneau().then(crenaux => {
        admin.getAllUsers().then(user => {
          res.render('../views/pages/home', {
            admin: req.user,
            message: req.flash('message'),
            week: semaine,
          })
        })
      })
    })
  },

  poste1(req, res) {
    admin.getAllUsers().then(user => {
      week.getWeek().then(semaine => {
        creneau.getCreneau().then(crenaux => {
          admin.getUsersPlaningPostes('poste1', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste1', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste1', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste1', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste1', 'vendredi').then(vendredi => {
                    res.render('../views/pages/poste1', {
                      admin: req.user,
                      users: user,
                      week: semaine,
                      creneau: crenaux,
                      lundi: lundi,
                      mardi: mardi,
                      mercredi: mercredi,
                      jeudi: jeudi,
                      vendredi: vendredi,
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },

  poste2(req, res) {
    admin.getAllUsers().then(user => {
      week.getWeek().then(semaine => {
        creneau.getCreneau().then(crenaux => {
          admin.getUsersPlaningPostes('poste2', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste2', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste2', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste2', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste2', 'vendredi').then(vendredi => {
                    res.render('../views/pages/poste2', {
                      admin: req.user,
                      users: user,
                      week: semaine,
                      creneau: crenaux,
                      lundi: lundi,
                      mardi: mardi,
                      mercredi: mercredi,
                      jeudi: jeudi,
                      vendredi: vendredi,
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },

  poste3(req, res) {
    admin.getAllUsers().then(user => {
      week.getWeek().then(semaine => {
        creneau.getCreneau().then(crenaux => {
          admin.getUsersPlaningPostes('poste3', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste3', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste3', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste3', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste3', 'vendredi').then(vendredi => {
                    res.render('../views/pages/poste3', {
                      admin: req.user,
                      users: user,
                      week: semaine,
                      creneau: crenaux,
                      lundi: lundi,
                      mardi: mardi,
                      mercredi: mercredi,
                      jeudi: jeudi,
                      vendredi: vendredi,
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },

  poste4(req, res) {
    admin.getAllUsers().then(user => {
      week.getWeek().then(semaine => {
        creneau.getCreneau().then(crenaux => {
          admin.getUsersPlaningPostes('poste4', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste4', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste4', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste4', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste4', 'vendredi').then(vendredi => {
                    res.render('../views/pages/poste4', {
                      admin: req.user,
                      users: user,
                      week: semaine,
                      creneau: crenaux,
                      lundi: lundi,
                      mardi: mardi,
                      mercredi: mercredi,
                      jeudi: jeudi,
                      vendredi: vendredi,
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },

  poste5(req, res) {
    admin.getAllUsers().then(user => {
      week.getWeek().then(semaine => {
        creneau.getCreneau().then(crenaux => {
          admin.getUsersPlaningPostes('poste5', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste5', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste5', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste5', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste5', 'vendredi').then(vendredi => {
                    res.render('../views/pages/poste5', {
                      admin: req.user,
                      users: user,
                      week: semaine,
                      creneau: crenaux,
                      lundi: lundi,
                      mardi: mardi,
                      mercredi: mercredi,
                      jeudi: jeudi,
                      vendredi: vendredi,
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },
}
  module.exports = appController;