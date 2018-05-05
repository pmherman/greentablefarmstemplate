const router = require("express").Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../models');
const db = require("../../models");


// passport.authenticate() --> Logs the user in after checking user information
passport.use(new LocalStrategy({
    usernameField: 'email'
},  (email, password, done) => {
    db.User.findOne({email: email})
        .then(user => {
            if ( !user ) done(null, false); // if user doesn't exist then fail login

            // now need to make sure password given is correct
            if ( !user.comparePassword(password) ) done(null, false);

            // if they pass these checks, we can log them in
            done(null, {
                // Saving to the req object to pass across the site
                id: user._id,
                email: user.email
            });
        });
}));

passport.serializeUser(function (user_id, done) {
    done(null, user_id);
});

passport.deserializeUser(function (user_id, done) {
    done(null, user_id);
});

module.exports = router;