/**
 * Main application routes
 */
module.exports = function(app) {

  // Insert routes below
  app.use('/api/users', require('./api/User'));
  app.use('/api/categories', require('./api/Category'));
  app.use('/api/posts', require('./api/Post'));
  app.use('/api/comments', require('./api/Comment'));

};
