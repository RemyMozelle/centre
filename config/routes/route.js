const express = require('express');
const route = express.Router();
const expressValidator = require('express-validator')
const passport = require('passport')
const adminController = require('../../app/controller/adminController');
const appController = require('../../app/controller/appController');


route.get('/', appController.home)
route.get('/logout', adminController.logout)
route.post('/data', adminController.getDataPoste1)


//se connecte directement si email et mot de passe sont correct
route.post('/login',
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  })
);

module.exports = route;