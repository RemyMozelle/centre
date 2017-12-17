const admin = require('../models/admin');
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
    const errors = req.validationErrors()
    if(errors) {
      res.render('../views/pages/home', {
        flashErrors: errors
      })
    } else {
      //si il n'y a pas d'erreur alors on stock le champ "name"
      const data = {
        name : req.body.name
      }
      //Ajoute le nom du visiteur
      admin.insertUser(data)
      //redirige l'administrateur une fois l'insertion effectué
      res.render('../views/pages/home', {
        flashSuccess: `vous avez bien ajouter Mr ou Mme : "${data.name}"`
      })
    }
  }
}

module.exports = adminController;