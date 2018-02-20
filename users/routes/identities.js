//Models
var models = require("../models");
var express = require('express');
var router = express.Router();

/* GET identity listing. */
router.get('/', function(req, res, next) {
	models.Identity.findAll()
		.then(identities =>{
			res.json({identities : identities});
		});
});

/* POST creating identity. */
router.post('/', function(req, res) {
  req.checkBody('OwnedByUser', 'OwnedByUser is required').notEmpty().isInt();
//   req.checkBody('CharSkin', 'CharSkin is required').notEmpty();
//   req.checkBody('CharOutfit', 'CharOutfit is required').notEmpty();
//   req.checkBody('CharDecalColor', 'CharDecalColor is required').notEmpty();
//   req.checkBody('CurrencyPrimary', 'CurrencyPrimary is required').notEmpty();
//   req.checkBody('ExperiencePoints', 'ExperiencePoints is required').notEmpty();
//   req.checkBody('CharName', 'CharName is required').notEmpty();
  
  //Run the validators
  var errors = req.validationErrors();
  if(errors){
  	return res.json(errors);
  } else{
	models.Identity.create({
		OwnedByUser      : req.body.OwnedByUser,
		CharSkin         : req.body.CharSkin,
		CharOutfit       : req.body.CharOutfit,
		CharDecalColor   : req.body.CharDecalColor,
		CurrencyPrimary  : req.body.CurrencyPrimary,
		ExperiencePoints : req.body.ExperiencePoints,
		CharName         : req.body.CharName
	}).then(function() {
		res.json({status : 'success'});
	});
  }
});

/* DELETE deleting identity. */
router.delete('/:id', function(req, res) {
  models.Identity.destroy({
    where: {
      UID: req.params.id
    }
  }).then(function() {
    res.json({status : 'success'});
  });
});

/* PUT updating identity. */
router.put('/:id', function(req, res){
  models.Identity.update(
  	{
		OwnedByUser      : req.body.OwnedByUser,
		CharSkin         : req.body.CharSkin,
		CharOutfit       : req.body.CharOutfit,
		CharDecalColor   : req.body.CharDecalColor,
		CurrencyPrimary  : req.body.CurrencyPrimary,
		ExperiencePoints : req.body.ExperiencePoints,
		CharName         : req.body.CharName
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
