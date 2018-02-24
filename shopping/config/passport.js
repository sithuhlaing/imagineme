var bCrypt = require('bcrypt-nodejs');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models').User;
var config = require('./main');

module.exports = function(passport){

    var opts = {};
    opts.JwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;

    // var LocalStrategy = require('passport-local').Strategy;

    // passport.serializeUser(function(user, done) {
    //     done(null, user.id);
    // });

    // // used to deserialize the user
    // passport.deserializeUser(function(id, done) {
    //     User.findById(id).then(function(user) {
    //     if(user){
    //         done(null, user.get());
    //     }
    //     else{
    //         done(user.errors,null);
    //     }
    //     });

    // });

    // passport.use('local-signup', new LocalStrategy(
    //     {
    //         usernameField: 'email',
    //         passwordField: 'password',
    //         passReqToCallback: true
    //     },
    //     function(req, email, password, done){
    //         var generateHash = function(password){
    //             return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    //         };

    //         User.findOne({
    //             where: {
    //                 email: email
    //             }
    //         }).then(function(user){
    //             if(user){
    //                 return done(null, false, {
    //                     message: 'That email is already taken'
    //                 });
    //             } else {
    //                 var userPassword = generateHash(password);
    //                 var data = {
    //                     email     : email,
    //                     password  : userPassword,
    //                     firstname : req.body.firstname,
    //                     lastname  : req.body.lastname 
    //                 };
    //                 User.create(data).then(function(newUser, created){
    //                     if(!newUser){
    //                         return done(null, false);
    //                     }
    //                     if(newUser){
    //                         return done(null, newUser);
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // ));

    // passport.use('local-signin', new LocalStrategy(
    //     {
    //         usernameField: 'email',
    //         passwordField: 'password',
    //         passReqToCallback: true
    //     },
    //     function(req, email, password, done){
    //         var User = user;
    //         var isValidPassword = function(userpass, password){
    //             return bCrypt.compareSync(password, userpass);
    //         }
    //         User.findOne({
    //             where: {
    //                 email : email
    //             }
    //         }).then(function(user){
    //             if(!user){
    //                 return done(null, false, {
    //                     message: 'Email does not exit'
    //                 });
    //             }
    //             if(!isValidPassword(user.password, password)){
    //                 return done(null, false, {
    //                     message: 'Incorrect password.'
    //                 });
    //             }
    //             var userinfo = user.get();
    //             return done(null, userinfo);
    //         }).catch(function(err){
    //             console.log('Error:', err);
    //             return done(null, false, {
    //                 message: 'Something went wrong with your Signin'
    //             });
    //         });
    //     }
    // ));
}