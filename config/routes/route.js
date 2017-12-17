const express = require('express');
const route = express.Router();
const adminController = require('../../app/controller/adminController');
const expressValidator = require('express-validator')
const passport = require('passport')

route.get('/', (req, res) => {
  res.render('pages/home.ejs', {
    admin : req.user,
    message : req.flash('message')
  });
}) 

//route.post('/', adminController.addUser);

route.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

route.post('/login',
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  })
);

module.exports = route;