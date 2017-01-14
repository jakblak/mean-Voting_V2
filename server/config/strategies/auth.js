const jwt = require('jsonwebtoken');
const config = require('../config/env/development.json');

exports.signToken = function(id) {
    return jwt.sign({
        _id: id
    }, config.databaseConfig.sessionSecret, {
        expiresInMinutes: 60 * 5
    });
}