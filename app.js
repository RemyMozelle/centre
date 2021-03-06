const express = require('express');
const app = express();
const dotenv = require('dotenv').config({ path: '.env' })
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const db = require('./config/database/db');
const expressValidator = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore(db.schemaHeroku())

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Authentification
app.use(expressValidator())
app.use(cookieParser())
app.use(session({
  secret: 'azertyuiopqsdfghjklm',
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
}))


/**
 * PARTI PASSPORT JS
 */

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  db.getDb().query('SELECT * FROM admin WHERE id = ?', [id], (err, result, fields) => {
    if (err) throw err;
    done(null, result[0]);
  })
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,

},

  function (req, usernameField, passwordField, done) {
    db.getDb().query(`SELECT id, email, password FROM admin WHERE email='${usernameField}' && password='${passwordField}' `, (err, result, fields) => {

      if (err) { return done(err) }
      if (result.length === 0) {
        return done(null, false, req.flash('message', 'mot de passe ou email incorrect'));
      }
      return done(null, result[0]);
    })
  }
));

app.use('/', (req, res, next) => {
  if (req.isAuthenticated()) {

  }
  next();
})

app.use(require('./config/routes/route'));

app.listen(process.env.PORTENV);