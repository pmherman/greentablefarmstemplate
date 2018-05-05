const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user"
router.post("/login", passport.authenticate('local'),
  function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect('/adminview');
  }  
);


module.exports = router;
