var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET rig listing. */
router.get('/', function(req, res, next) {
  models.Rig.findAll({
  }).then(function(rigs){
  	res.json({rigs : inventrigsries});
  });
});

/* POST creating rig */
router.post('/', function(req, res) {
  req.checkBody('RigConfiguration', 'RigConfiguration is required').notEmpty();
  
  //Run the validators
  var errors = req.validationErrors();
  if(errors){
  	return res.json(errors);
  } else{
	models.Rig.create({
		RigConfiguration  : req.body.RigConfiguration,
	}).then(function() {
		res.json({status : 'success'});
	});
  }
});

/* DELETE deleting rig */
router.delete('/:id', function(req, res) {
  models.Rig.destroy({
    where: {
      UID: req.params.id
    }
  }).then(function() {
    res.json({status : 'success'});
  });
});

/* PUT updating rigs */
router.put('/:id', function(req, res){
  models.Rig.update(
  	{
      RigConfiguration  : req.body.RigConfiguration
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
