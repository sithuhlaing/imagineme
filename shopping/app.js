//import require libs
var express = require('express');
var validator = require('express-validator');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var OAuthServer = require('express-oauth-server');

//routing for each component
var index = require('./routes/index');
var inventories = require('./routes/inventories');
var items = require('./routes/items');
var categories = require('./routes/categories');

var app = express();

app.oauth = new OAuthServer({
  model: require('./models'),
  grants: ['password', ' client_credentials', 'refresh_token'],
  debug: true,
  accessTokenLifetime: process.env.NODE_ENV ? null : 1
});

app.use(app.oauth.errorHandler());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  safeFileNames: true,
  preserveExtension: true
}));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/inventories', inventories);
app.use('/items', items);
app.use('/categories', categories);
app.use('/static', express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
