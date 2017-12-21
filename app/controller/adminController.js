const admin = require('../models/admin');
const passport = require('passport')
const expressValidator = require('express-validator')

const adminController = {
  /**
   * @param {*req.body.name} req 
   * @param {*res.redirect("/")} res 
   */
  addUser(req, res){
    //verifie si le champ name n'est pas vide
    req.checkBody('name', 'le nom du visiteur ne peut être vide').notEmpty()
    //si le champ name est vide alors on rend une erreur
    /*const errors = req.validationErrors()
    if(errors) {
      res.render('../views/pages/home', {
        flashErrors: errors
      })
    } else {*/
      //si il n'y a pas d'erreur alors on stock le champ "name"
      const data = {
        name : req.body.name
      }
      ///Ajoute le nom du visiteur
    console.log(data)
    admin.getInsertUser(data)
    res.redirect('/')
      //redirige l'administrateur une fois l'insertion effectué
      /*res.render('../views/pages/home', {
        flashSuccess: `vous avez bien ajouter Mr ou Mme : "${data.name}"`
      })*/
    //}
  },

  getDataPoste1(req, res){
    const data = {
      user : req.body.users,
      creneau : req.body.creneau,
      jour : req.body.jour,
      poste : req.body.poste1
    }

    admin.getInsertPlaning(data)
    
    res.redirect('/poste1')
  },

  getDataPoste2(req, res) {

    const data = {
      user: req.body.users,
      creneau: req.body.creneau,
      jour: req.body.jour,
      poste: req.body.poste2
    }

    admin.getInsertPlaning(data)

    res.redirect('/poste2')
  },

  getDataPoste3(req, res) {
    const data = {
      user: req.body.users,
      creneau: req.body.creneau,
      jour: req.body.jour,
      poste: req.body.poste3
    }

    admin.getInsertPlaning(data)

    res.redirect('/poste3')
  },

  getDataPoste4(req, res) {
    const data = {
      user: req.body.users,
      creneau: req.body.creneau,
      jour: req.body.jour,
      poste: req.body.poste4
    }

    admin.getInsertPlaning(data)

    res.redirect('/poste4')
  },

  getDataPoste5(req, res) {
    const data = {
      user: req.body.users,
      creneau: req.body.creneau,
      jour: req.body.jour,
      poste: req.body.poste5
    }

    admin.getInsertPlaning(data)

    res.redirect('/poste5')
  },

  deleteUserPlaning1(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer'))
    res.redirect('/poste1')
  },

  deleteUserPlaning2(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer'))
    res.redirect('/poste2')
  },

  deleteUserPlaning3(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer'))
    res.redirect('/poste3')
  },

  deleteUserPlaning4(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer'))
    res.redirect('/poste4')
  },

  deleteUserPlaning5(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer'))
    res.redirect('/poste5')
  },

  /**
   * 
   * @param {*pour se déconnecter} req 
   * @param {*pour être redirigé vers la home} res 
   */
  logout(req, res) {
    req.logOut();
    res.redirect('/');
  }
}

module.exports = adminController;