var models = require('../models');
var express = require('express');
// var path = require('path');
// var fs = require('fs');
var async = require("async");
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  models.ItemClass.findAll({
    // include: [models.ItemClass]
  }).then(function (items) {
    res.json({ items: items });
  });
});

function getNewName(name) {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(name)[1];
  return (new Date()).getTime() + '.' + ext;
}

function fileUpload(files, name) {
  if (files.hasOwnProperty(name)) {
    let file = files[name];
    var imageName = getNewName(file.name);

    // Use the mv() method to place the file somewhere on your server 
    file.mv('files/' + imageName, function (err) {
      if (err)
        return err;
    });

    return true;
  } else {
    return false;
  }
}

// async function upload(files){
//   isImageUpload = wait fileUpload(files, 'image');
//   isModelUpload = wait fileUpload(files, 'model');
//   return isImageUpload && isModelUpload;
// }

function val(x) {
  return x;
}

router.post('/', function (req, res) {

  if (!req.files)
    return res.status(400).json({ status: 'No files were uploaded.' });

  if (Object.keys(req.files).length < 2)
    return res.status(400).json({ status: 'One file needed.' });

  // req.checkBody('Name', 'Name is required').notEmpty();
  // req.checkBody('ItemType', 'ItemType is required').notEmpty();
  // req.checkBody('Statistics', 'Statistics is required').notEmpty();
  // req.checkBody('FlavourText', 'FlavourText is required').notEmpty();
  // req.checkBody('StackQuantityLimit', 'StackQuantityLimit is required').notEmpty();
  // req.checkBody('StackQuantityLimit', 'StackQuantityLimit is integer').isInt();

  // //Run the validators
  var errors = req.validationErrors();
  if (errors) {
    return res.json(errors);
  } else {

    var PictureUID;
    var ModelUID;

    async.parallel([
      function (callback) {
        let file = req.files['image'];
        var name = getNewName(file.name);

        file.mv('files/' + name, function (err) {
          if (err)
            return res.json(err);
        });

        models.Picture.create({
          RemotePath: 'files/' + name
        }).then(function (x) {
          PictureUID = x.get('UID');
          console.log('image file uploaded is complete!');
          callback();
        }).catch(function (err) {
          return res.json(err);
        });
      },
      function (callback) {
        let file = req.files['model'];
        var name = getNewName(file.name);

        file.mv('files/' + name, function (err) {
          if (err)
            return res.json(err);
        });

        models.Model.create({
          RemotePath: 'files/' + name
        }).then(function (x) {
          ModelUID = x.get('UID');
          console.log('model file uploaded is complete!');
          callback();
        }).catch(function (err) {
          return res.json(err);
        });
      }
    ], function (err, results) {
      console.log('PictureUID ' + PictureUID);
      console.log('ModelUID ' + ModelUID);

      models.ItemClass.create({
        ItemClassUID: req.body.ItemClassUID,
        Name: req.body.Name,
        ItemType: req.body.ItemType,
        Statistics: req.body.Statistics,
        FlavourText: req.body.FlavourText,
        ModelUID: ModelUID,
        PictureUID: PictureUID,
        StackQuantityLimit: req.body.StackQuantityLimit
      }).then(function () {
        res.json({ status: 'success' });
      });
    });

  }
});

router.delete('/:id', function (req, res) {
  models.ItemClass.destroy({
    where: {
      UID: req.params.id
    }
  }).then(function () {
    res.json({ status: 'success' });
  });
});

router.put('/:id', function (req, res) {
  models.ItemClass.update(
    {
      ItemClassUID: req.body.ItemClassUID ? req.body.ItemClassUID : ItemClassUID,
      Name: req.body.Name ? req.body.Name : Name,
      ItemType: req.body.ItemType ? req.body.ItemType : ItemType,
      Statistics: req.body.Statistics ? req.body.Statistics : Statistics,
      FlavourText: req.body.FlavourText ? req.body.FlavourText : FlavourText,
      ModelUID: req.body.ModelUID ? req.body.ModelUID : ModelUID,
      PictureUID: req.body.PictureUID ? req.body.PictureUID : PictureUID,
      StackQuantityLimit: req.body.StackQuantityLimit ? req.body.StackQuantityLimit : StackQuantityLimitName
    }, {
      where: { UID: req.params.id }
    }
  ).then(function (result) {
    console.log(result);
    res.json({ status: 'success' });
  }).error(function (err) {
    res.json(err);
  });
});

module.exports = router;
