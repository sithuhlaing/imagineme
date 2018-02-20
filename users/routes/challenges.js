//Models
var models = require("../models");
var express = require('express');
var router = express.Router();

/* GET challenges listing. */
router.get('/', function(req, res, next) {
	models.Challenge.findAll()
		.then(challenges =>{
			res.json({challenges : challenges});
		});
});

/* POST creating challenge. */
router.post('/', function(req, res) {
  req.checkBody('ChallengeClassUID', 'ChallengeClassUID is required').notEmpty().isInt();
  req.checkBody('Progression', 'Progression is required').notEmpty();//.isInt();
  
  //Run the validators
  var errors = req.validationErrors();
  if(errors){
  	return res.json(errors);
  } else{
	models.Challenge.create({
    ChallengeClassUID : req.body.ChallengeClassUID,
    Progression       : req.body.Progression
	}).then(function() {
		res.json({status : 'success'});
	});
  }
});

/* DELETE deleting challenge. */
router.delete('/:id', function(req, res) {
  models.Challenge.destroy({
    where: {
      IdentityUID: req.params.id
    }
  }).then(function() {
    res.json({status : 'success'});
  });
});

/* PUT updating challenge. */
router.put('/:id', function(req, res){
  models.Challenge.update(
  	{
		  ChallengeClassUID : req.body.ChallengeClassUID,
      Progression       : req.body.Progression
  	},{
    	where: { IdentityUID: req.params.id }
  	}
  ).then(function(result) {
  	console.log(result);
    res.json({status : 'success'});
  }).error(function(err){
  	res.json(err);
  });
});

module.exports = router;
