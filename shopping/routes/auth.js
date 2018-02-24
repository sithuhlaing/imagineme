const express = require('express');
const router  = express.Router();

const jwt      = require('jsonwebtoken');
const passport = require('passport');
var User = require('../models').User;

var bCrypt = require('bcrypt-nodejs');

/* POST login. */
router.post('/login', function (req, res, next) {

    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(err);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }

            const token = jwt.sign(user, 'your_jwt_secret');

            return res.json({user, token});
        });
    })
    (req, res);

});

router.post('/register', function(req, res, next){

    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('password', 'password is required').notEmpty();
    req.checkBody('firstname', 'firstname is required').notEmpty();
    req.checkBody('lastname', 'lastname is required').notEmpty();
    
    var errors = req.validationErrors();
    if(errors) {
        return res.json(errors);
    } else{
        var generateHash = function(password){
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(user){
            if(user){
                res.json({
                    message: 'That email is already taken'
                });
            } else {
                var userPassword = generateHash(req.body.password);
                
                var data = {
                    email     : req.body.email,
                    password  : userPassword,
                    firstname : req.body.firstname,
                    lastname  : req.body.lastname 
                };
                
                User.create(data)
                    .then(function(newUser, created){
                        if(!newUser){
                            res.json({status: 'System error'})
                        } else {
                            res.json({user : newUser});
                        }
                });
            }
        });
    }
});

module.exports = router;