const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var crypto = require('crypto');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  // dont store the password as plain text
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();

  this.password = this.encryptPassword(this.password);
  next();
})

UserSchema.methods = {
  // check the passwords on signin
  authenticate: function(plainTextPword) {
    return crypto.compareSync(plainTextPword, this.password);
  },
  // hash the passwords
  encryptPassword: function(plainTextPword) {
    if (!plainTextPword) {
      return ''
    } else {
      const salt = crypto.genSaltSync(10);
      return crypto.hashSync(plainTextPword, salt);
    }
  },

  toJson: function() {
    const obj = this.toObject()
    delete obj.password;
    return obj;
  }
};

module.exports = mongoose.model('User', UserSchema);