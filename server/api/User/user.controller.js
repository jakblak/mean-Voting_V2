const User = require('./User.model');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/env/development.json');

const validationError = function(res, err) {
  return res.json(422, err);
};

exports.signup = function(req, res, next) {
  if(!req.user) {
    let user = new User(req.body);
    user.provider = 'local';

      newUser.save(function(err, user) {
        if (err) return validationError(res, err);
        let token = auth.signToken(user._id);
      //   let token = jwt.sign({
      //     id: user._id
      //   }, config.databaseConfig.sessionSecret, {
      //     expiresInMinutes: 60 * 5
      // });
      res.json({
        token: token
      });
    });
  }
  return res.redirect('/');
}

exports.login = function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    let error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, { message: 'Something went wrong, please try again.' });

    let token = auth.signToken(user._id);
    // let token = jwt.sign({
    //       id: user._id
    //     }, config.databaseConfig.sessionSecret, {
    //       expiresInMinutes: 60 * 5
    //   });
    res.json({
      token: token
    });
  });
}

exports.signout = function(req, res) {
  // Use the Passport 'logout' method to logout
  req.logout();

  // Redirect the user back to the main application page
  res.redirect('/');
};