POUR LA CONFIG EN LOCAL
    -> config/database/db.js
      -> mettre getDb(env) à la place de getDb(env = 'jaws')
        -> aller dans app.js à la racine
          -> changer new MySQLStore(db.schemaHeroku())
            -> new MySQLStore(db.schema())


soucis avec nodemon j'ai du install la version : 1.12.1
pour nodemon : npm install @1.12.1 


le centre fonctionnes sur 5 postes sur réservations de 1 semaines

problème : passport en ligne avec heroku impossible de se connecté, aucun soucis en local