const express = require('express');
const route = express.Router();
const expressValidator = require('express-validator')
const passport = require('passport')
const adminController = require('../../app/controller/adminController');
const appController = require('../../app/controller/appController');

route.get('/', appController.home);
route.get('/logout', adminController.logout);
route.get('/deletePlanning1/:id', adminController.deleteUserPlaning1);
route.get('/deletePlanning2/:id', adminController.deleteUserPlaning2);
route.get('/deletePlanning3/:id', adminController.deleteUserPlaning3);
route.get('/deletePlanning4/:id', adminController.deleteUserPlaning4);
route.get('/deletePlanning5/:id', adminController.deleteUserPlaning5);
route.get('/poste1', appController.poste1)
route.get('/poste2', appController.poste2)
route.get('/poste3', appController.poste3)
route.get('/poste4', appController.poste4)
route.get('/poste5', appController.poste5)

route.post('/insertUser', adminController.addUser);
route.post('/data', adminController.getDataPoste1);
route.post('/data2', adminController.getDataPoste2);
route.post('/data3', adminController.getDataPoste3);
route.post('/data4', adminController.getDataPoste4);
route.post('/data5', adminController.getDataPoste5);

//se connecte directement si email et mot de passe sont correct
route.post('/login',
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  })
);

module.exports = route;