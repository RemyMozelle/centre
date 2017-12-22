const admin = require('../models/admin');
const week = require('../models/week');
const creneau = require('../models/creneau');

const appController = {
  
  home(req, res) {
    //rend la vue de la home
    //verifie si l'admin et bien connecté sinon affiche le formulaire d'authentification
    res.render('../views/pages/home', {
      admin: req.user,
    })
  },

  poste1(req, res) {
    //recupère tous les visiteurs
    admin.getAllUsers().then(user => {
      //recupère tous les 5 jours de la semaine
      week.getWeek().then(semaine => {
        //recupère tous les créneaux horraire
        creneau.getCreneau().then(crenaux => {
          //affiche le planing du poste 1
          admin.getUsersPlaningPostes('poste1', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste1', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste1', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste1', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste1', 'vendredi').then(vendredi => {
                    //rends la vue du poste 1
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
    //recupère tous les visiteurs
    admin.getAllUsers().then(user => {
      //recupère tous les 5 jours de la semaine
      week.getWeek().then(semaine => {
        //recupère tous les créneaux horraire
        creneau.getCreneau().then(crenaux => {
          //affiche le planing du poste 2
          admin.getUsersPlaningPostes('poste2', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste2', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste2', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste2', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste2', 'vendredi').then(vendredi => {
                    //rends la vue du poste 2
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
    //recupère tous les visiteurs
    admin.getAllUsers().then(user => {
      //recupère tous les 5 jours de la semaine
      week.getWeek().then(semaine => {
        //recupère tous les créneaux horraire
        creneau.getCreneau().then(crenaux => {
          //affiche le planing du poste 3
          admin.getUsersPlaningPostes('poste3', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste3', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste3', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste3', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste3', 'vendredi').then(vendredi => {
                    //rends la vue du poste 3
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
    //recupère tous les visiteurs
    admin.getAllUsers().then(user => {
      //recupère tous les 4 jours de la semaine
      week.getWeek().then(semaine => {
        //recupère tous les créneaux horraire
        creneau.getCreneau().then(crenaux => {
          //affiche le planing du poste 4
          admin.getUsersPlaningPostes('poste4', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste4', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste4', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste4', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste4', 'vendredi').then(vendredi => {
                    //rends la vue du poste 4
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
    //recupère tous les visiteurs
    admin.getAllUsers().then(user => {
      //recupère tous les 4 jours de la semaine
      week.getWeek().then(semaine => {
        //recupère tous les créneaux horraire
        creneau.getCreneau().then(crenaux => {
          //affiche le planing du poste 5
          admin.getUsersPlaningPostes('poste5', 'lundi').then(lundi => {
            admin.getUsersPlaningPostes('poste5', 'mardi').then(mardi => {
              admin.getUsersPlaningPostes('poste5', 'mercredi').then(mercredi => {
                admin.getUsersPlaningPostes('poste5', 'jeudi').then(jeudi => {
                  admin.getUsersPlaningPostes('poste5', 'vendredi').then(vendredi => {
                    //rends la vue du poste 5
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