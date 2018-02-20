//Models
var models = require("../models");
var express = require('express');
var router = express.Router();

/* GET achievement listing. */
router.get('/', function(req, res, next) {
	models.Achievement.findAll()
		.then(achievements =>{
			res.json({achievements : achievements});
		});
});

/* POST creating achievement. */
router.post('/', function(req, res) {
  req.checkBody('AchievementClassUID', 'AchievementClassUID is required').notEmpty().isInt();
  req.checkBody('Progression', 'Progression is required').notEmpty();
  
  //Run the validators
  var errors = req.validationErrors();
  if(errors){
  	return res.json(errors);
  } else{
	models.Achievement.create({
        AchievementClassUID : req.body.AchievementClassUID,
        Progression         : req.body.Progression
	}).then(function() {
		res.json({status : 'success'});
	});
  }
});

/* DELETE deleting achievement. */
router.delete('/:id', function(req, res) {
  models.Achievement.destroy({
    where: {
      IdentityUID: req.params.id
    }
  }).then(function() {
    res.json({status : 'success'});
  });
});

/* PUT updating achievement. */
router.put('/:id', function(req, res){
  models.Achievement.update(
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
