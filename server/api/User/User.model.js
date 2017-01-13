const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username is required',
    trim: true
  },
  email: {
    type: String,
    // Validate the email format
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
  },
  password: {
    type: String,
    validate: [
      (password) => password && password.length > 2,
      'Password should be longer'
    ]
  },
  salt: {
    type: String
  }
});


};

module.exports = mongoose.model('User', UserSchema);