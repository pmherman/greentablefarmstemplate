const express = require("express");
// const path = require('path');
// const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
// const expressValidator = require('express-validator');
// const flash = require('connect-flash');
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require("mongoose");
const routes = require("./routes");
const auth_routes = require('./routes/api/auth_routes');

// Init App
const app = express();
const PORT = process.env.PORT || 3001;

const config = require('./config');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookieParser());

// Serve up static assets
app.use(express.static("client/build"));

// Handle Sessions
app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}))

// Express Validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//     var namespace = param.split('.')
//     , root  = namespace.shift()
//     , formParam = root;

//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));

// Connect Flash
// app.use(flash());

// Global Vars
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// This is also in routes/index.js 
app.use("/auth_routes", auth_routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/farmfresh");
mongoose.Promise = Promise;

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
