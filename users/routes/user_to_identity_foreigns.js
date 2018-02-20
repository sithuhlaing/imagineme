//Models
var models = require("../models");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.UserToIdentityForeignaccesstoken.findAll()
    .then(tokens =>{
      res.json({identity_foreign_accesstoken : tokens});
  });
});

router.post('/', function(req, res) {
  req.checkBody('UserID', 'UserID is required').notEmpty().isInt();
  req.checkBody('IdentityUID', 'IdentityUID is required').notEmpty().isInt();
  req.checkBody('ExpirationDate', 'ExpirationDate is required').notEmpty();//.isDATE();
  req.checkBody('LastHeartbeat', 'LastHeartbeat is required').notEmpty();
  
  //Run the validators
  var errors = req.validationErrors();
  if(errors){
  	return res.json(errors);
  } else{
	models.UserToIdentityForeignaccesstoken.create({
      UserID              : req.body.UserID,
      IdentityUID         : req.body.IdentityUID,
      ExpirationDate      : req.body.ExpirationDate,
      LastHeartbeat       : req.body.LastHeartbeat
	}).then(function() {
      res.json({status : 'success'});
	});
  }
});

router.delete('/:id', function(req, res) {
  models.UserToIdentityForeignaccesstoken.destroy({
    where: {
      UID: req.params.id
    }
  }).then(function() {
    res.json({status : 'success'});
  });
});

router.put('/:id', function(req, res){
  models.UserToIdentityForeignaccesstoken.update(
  	{
		  UserID              : req.body.UserID,
      IdentityUID         : req.body.IdentityUID,
      ExpirationDate      : req.body.ExpirationDate,
      LastHeartbeat       : req.body.LastHeartbeat
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
