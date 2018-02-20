var express = require('express');
var passport = require('passport');
var models = require("../models");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/register', function(req, res){
// 	res.render('register', {});
// });

router.post('/register', function(req, res){
  token = bCrypt.hashSync(req.body.password, req.body.username);

  models.User.create({
		PlatformAccountToken: token,
		LastIdentityUIDSP   : 1
	}).then(function() {
		res.json({status : 'success'});
	});
  
});

function isValidPassword(userpass, password){
  bCrypt.compareSync(password, userpass);
}

router.post('/login', function(req, res){
  // check login and token 
  //req.body.username+'@'+req.body.password
  // token = bCrypt.hashSync(req.body.password, req.body.username);
  

  // get the token and save it

});

module.exports = router;
