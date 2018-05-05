const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// added created_at: Date at the end
const UserSchema = new Schema({

  // either make photo not required, try to include the upload file bit
  photo: { type: String, required: false },
  email: {
    type: String,
    require: true,
    unique: true
  },
  // username: { type: String, required: true },
  password: { type: String, required: true },
  created_at: Date
  // date: { type: Date, default: Date.now }
});

UserSchema.pre('save', function(next) {
  console.log("UserSchema inside user.js");
  let user = this;

  let date = new Date();

  // Checks if user exists
  if ( !user.create_at ) {
    user.create_at = date;

    // Encrypts the user's password
    bcrypt.hash(user.password, bcrypt.genSaltSync(10))
      .then(hash => {
        user.password = hash;
        next();
      })
  }
});

// Compares password with encription on signin
UserSchema.methods.comparePassword =  function(pass) {
  return bcrypt.compare(pass, this.password); // true or false
};

const User = mongoose.model("User", UserSchema);

module.exports = User;