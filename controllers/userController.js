const db = require("../models");
const passport = require('passport');

module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(user => {
        req.login({id: user._id, email: user.email, photo: user.photo}, err => {
          if ( err ) return res.status(403).send(err);

          res.json(req.user);
        });
        console.log("This works!");
      })
      .catch(err => {
        console.log(err);
        res.status(422).json({ error: err, message: 'test' });
      });
  },
  login: function(req, res) {
    console.log("This is running!");
    console.log("User: " + req.body.id);
    passport.authenticate('local')(req, res, result => {
      res.status(200).send(req.user);
      passport.serializeUser(function (user_id, done) {
        done(null, user_id);
      });
      passport.deserializeUser(function (user_id, done) {
        done(null, user_id);
      });
    })
  },      
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};