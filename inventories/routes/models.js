var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Model.findAll({
  	// include: [models.Model]
  }).then(function(models){
  	res.json({models : models});
  });
});

router.post('/', function(req, res) {
  // req.checkBody('RemotePath', 'RemotePath is required').notEmpty();
 
  // //Run the validators
  // var errors = req.validationErrors();
  // if(errors){
  // 	return res.json(errors);
  // } else{
	  models.Model.create({
  		RemotePath: req.body.RemotePath
  	}).then(function() {
  		res.json({status : 'success'});
  	});
  // }
});

router.delete('/:id', function(req, res) {
  models.Model.destroy({
    where: {
      UID: req.params.id
    }
  }).then(function() {
    res.json({status : 'success'});
  });
});

router.put('/:id', function(req, res){
  models.Model.update(
  	{
  		RemotePath: req.body.RemotePath ? req.body.RemotePath : ''
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
