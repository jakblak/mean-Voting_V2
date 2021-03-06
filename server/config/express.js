// Load the module dependencies
const config = require('./config');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorhandler = require('errorhandler');
const csrf = require('csurf');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

// Define the Express configuration method
module.exports = function(db) {
  // Create a new Express application instance
  const app = express();

  // Use the 'NODE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  // Use the 'body-parser' and 'method-override' middleware functions
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(errorhandler());
  app.use(cookieParser());
  app.use(csrf({ cookie: true }));

  app.use(function (req, res, next) {
      var csrfToken = req.csrfToken();
      res.locals._csrf = csrfToken;
      res.cookie('XSRF-TOKEN', csrfToken);
      next();
  });

  // Configure the MongoDB session storage
  const mongoStore = new MongoStore({
    mongooseConnection: db.connection
  });

  // Configure the 'session' middleware
  app.use(session({
    saveUninitialized: false,
    resave: true,
    secret: "416351*&(^&*FJIAS",
    store: mongoStore
  }));

  // Set the application view engine and 'views' folder
  app.set('views', './server/views');
  app.set('view engine', 'ejs');

  // Setup passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Configure static file serving
  app.use('/', express.static(path.resolve('./public')));

  // Load the routing files
  require('./../routes.js')(app);

  // Return the Server instance
  return app;
};