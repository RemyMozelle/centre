const admin = require('../models/admin');
const passport = require('passport')
const expressValidator = require('express-validator')

const adminController = {
  /**
   * ajoute un visiteur dans la liste
   * puis la redirige vers le poste 1
   * @param {*req.body.name} req 
   * @param {*res.redirect("/")} res 
   */
  addUser(req, res) {
    const data = {
      name: req.body.name
    }
    ///Ajoute le nom du visiteur
    admin.getInsertUser(data)
    res.redirect('/poste1')
  },

  /**
   * Récupère les les champs du formulaire du poste 1
   * Redirige l'admin sur la pages du poste 1 après avoir inserer un visiteur dans le planning
   * @param {*req.body (users, creneau, jour, poste1)} req 
   * @param {*res.redirect} res 
   * @var {*} data
   */
  getDataPoste1(req, res) {
    const data = {
      user: req.body.users,
      creneau: req.body.creneau,
      jour: req.body.jour,
      poste: req.body.poste1
    }

    admin.getInsertPlaning(data)
    res.redirect('/poste1')
  },

  /**
   * Récupère les les champs du formulaire du poste 2
   * Redirige l'admin sur la pages du poste 2 après avoir inserer un visiteur dans le planning
   * @param {*req.body (users, creneau, jour, poste2)} req 
   * @param {*res.redirect} res 
   * @var {*} data
   */
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

  /**
   * Récupère les les champs du formulaire du poste 3
   * Redirige l'admin sur la pages du poste 3 après avoir inserer un visiteur dans le planning
   * @param {*req.body (users, creneau, jour, poste3)} req 
   * @param {*res.redirect} res 
   * @var {*} data
   */
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

  /**
   * Récupère les les champs du formulaire du poste 4
   * Redirige l'admin sur la pages du poste 4 après avoir inserer un visiteur dans le planning
   * @param {*req.body (users, creneau, jour, poste4)} req 
   * @param {*res.redirect} res 
   * @var {*} data
   */
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

  /**
   * Récupère les les champs du formulaire du poste 5
   * Redirige l'admin sur la pages du poste 5 après avoir inserer un visiteur dans le planning
   * @param {*req.body (users, creneau, jour, poste5)} req 
   * @param {*res.redirect} res 
   * @var {*} data
   */
  getDataPoste5(req, res) {
    const data = {
      user: req.body.users,
      creneau: req.body.creneau,
      jour: req.body.jour,
      poste: req.body.poste5
    }
    //appel la method du model "admin"
    admin.getInsertPlaning(data)
    res.redirect('/poste5')
  },

  /**
   * recupère l'id dans l'url
   * supprimer le planning du visiteur selon son id
   * redirige l'admin sur le même poste lors de la suppression du planning du visiteur
   * @param {*req.params.id} req 
   * @param {*res.redirect} res 
   */
  deleteUserPlaning1(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer planingposte1'))
    
    res.redirect('/poste1')
  },

  /**
   * recupère l'id dans l'url
   * supprimer le planning du visiteur selon son id
   * redirige l'admin sur le même poste lors de la suppression du planning du visiteur
   * @param {*req.params.id} req 
   * @param {*res.redirect} res 
   */
  deleteUserPlaning2(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer planingposte2'))
    res.redirect('/poste2')
  },

  /**
   * recupère l'id dans l'url
   * supprimer le planning du visiteur selon son id
   * redirige l'admin sur le même poste lors de la suppression du planning du visiteur
   * @param {*req.params.id} req 
   * @param {*res.redirect} res 
   */
  deleteUserPlaning3(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer planingposte3'))
    res.redirect('/poste3')
  },

  /**
   * recupère l'id dans l'url
   * supprimer le planning du visiteur selon son id
   * redirige l'admin sur le même poste lors de la suppression du planning du visiteur
   * @param {*req.params.id} req 
   * @param {*res.redirect} res 
   */
  deleteUserPlaning4(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer planingposte4'))
    res.redirect('/poste4')
  },
  /**
   * recupère l'id dans l'url
   * supprimer le planning du visiteur selon son id
   * redirige l'admin sur le même poste lors de la suppression du planning du visiteur
   * @param {*req.params.id} req 
   * @param {*res.redirect} res 
   */
  deleteUserPlaning5(req, res) {
    admin.getDeleteUsersPlaning(req.params.id).then(users => {
    }).catch(err => console.log('impossible de supprimer planingposte5'))
    res.redirect('/poste5')
  },

  /**
   * admin deconnecter
   * @param {*pour se déconnecter} req 
   * @param {*pour être redirigé vers la home} res 
   */
  logout(req, res) {
    req.logOut();
    res.redirect('/');
  }
}

module.exports = adminController;