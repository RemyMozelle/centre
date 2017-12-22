POUR LA CONFIG EN LOCAL
    -> config/database/db.js
      -> mettre getDb(env) à la place de getDb(env = 'jaws')
        -> aller dans app.js à la racine
          -> changer new MySQLStore(db.schemaHeroku())
            -> new MySQLStore(db.schema())


le centre fonctionnes sur 5 postes sur réservations de 1 semaines

problème : passport en ligne avec heroku impossible de se connecté, aucun soucis en local