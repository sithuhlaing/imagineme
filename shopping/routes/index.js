var express = require('express');
var router = express.Router();

function isLoggedIn(req, res, next){
  if(req.isAuthenticated())
    return next();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status : 'fail'}));
}

module.exports = function(passport){
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup',function(err, user, info){
      if (err) { 
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status : 'fail', err : err}));
      }
      if (!user) { 
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status : 'fail', err : err}));
      }
      req.logIn(user, function(err) {
        if (err) {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({ status : 'fail', err : err}));
        }
        return user;
      });
    })(req, res, next);
  });

  router.post('/signin', function(req, res, next){
    passport.authenticate('local-signin',function(err, user, info){
      if (err) { 
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status : 'fail', err : err}));
      }
      if (!user) { 
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status : 'fail', err : err}));
      }
      req.logIn(user, function(err) {
        if (err) {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({ status : 'fail', err : err}));
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ status : 'sccess', user: user}));
      });
    })(req, res, next);
  });

  router.get('/dashboard', isLoggedIn, function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status : 'sccess'}));
  });

  router.post('/logout', function(req, res){
    req.session.destroy(function(err){
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ status : 'sccess'}));
    })
  });

  return router;
}
