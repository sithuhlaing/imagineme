//Models
var models = require("../models");
var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {

	models.User.findAll()
		.then(users =>{
			res.json({users : users});
		});
});