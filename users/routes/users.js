//Models
var models = require("../models");
var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	console.log(req.body);
	next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	models.User.findAll()
		.then(users =>{
			res.json({users : users});
		});
});

router.post('/', function(req, res) {
	//will be different
  req.checkBody('LastIdentityUIDSP', 'LastIdentityUIDSP is required').notEmpty().isInt();
  req.checkBody('LastIdentityUIDMP1', 'LastIdentityUIDMP1 is required').notEmpty().isInt();
  req.checkBody('LastIdentityUIDMP2', 'LastIdentityUIDMP2 is required').notEmpty().isInt();
  req.checkBody('LastIdentityUIDMP3', 'LastIdentityUIDMP3 is required').notEmpty().isInt();
  req.checkBody('LastIdentityUIDMP4', 'LastIdentityUIDMP4 is required').notEmpty().isInt();
  
  //Run the validators
  var errors = req.validationErrors();
  if(errors){
  	return res.json(errors);
  } else{
	models.User.create({
		PlatformAccountToken : req.body.PlatformAccountToken,
		LastIdentityUIDSP    : req.body.LastIdentityUIDSP,
		LastIdentityUIDMP1   : req.body.LastIdentityUIDMP1,
		LastIdentityUIDMP2   : req.body.LastIdentityUIDMP2,
		LastIdentityUIDMP3   : req.body.LastIdentityUIDMP3,
		LastIdentityUIDMP4   : req.body.LastIdentityUIDMP4,
	}).then(function() {
		res.json({status : 'success'});
	});
  }
});

router.delete('/:id', function(req, res) {
  models.User.destroy({
    where: {
      UID: req.params.id
    }
  }).then(function() {
    res.json({status : 'success'});
  });
});

router.put('/:id', function(req, res){
  models.User.update(
  	{
			PlatformAccountToken : req.body.PlatformAccountToken,
	    LastIdentityUIDSP    : req.body.LastIdentityUIDSP,
	    LastIdentityUIDMP1   : req.body.LastIdentityUIDMP1,
	    LastIdentityUIDMP2   : req.body.LastIdentityUIDMP2,
	    LastIdentityUIDMP3   : req.body.LastIdentityUIDMP3,
	    LastIdentityUIDMP4   : req.body.LastIdentityUIDMP4,
  	},{
    	where: { UID: req.params.id }
  	}
  ).then(function(result) {
  	console.log(result);
    res.json({status : 'success'});
  }).error(function(err){
  	res.json(err);
  });
});

module.exports = router;
