var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET inventory listing. */
router.get('/', function (req, res, next) {
  models.InventoryItem.findAll({
    // include: [models.ItemClass]
  }).then(function (inventories) {
    res.json({ inventories: inventories });
  });
});

/* POST creating inventory */
router.post('/', function (req, res) {
  req.checkBody('ItemClassUID', 'ItemClassUID is required').notEmpty();
  req.checkBody('ItemClassUID', 'ItemClassUID is required').isInt();
  req.checkBody('InstanceID', 'InstanceID is required').notEmpty();
  req.checkBody('InstanceID', 'InstanceID is integer').isInt();
  req.checkBody('StackQuantity', 'StackQuantity is required').notEmpty();
  req.checkBody('StackQuantity', 'StackQuantity is integer').isInt();
  // req.checkBody('IsCarryOn', 'IsCarryOn is required').notEmpty();

  //Run the validators
  var errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    return res.json(errors);
  } else {
    models.InventoryItem.create({
      ItemClassUID: req.body.ItemClassUID,
      InstanceID: req.body.InstanceID,
      StackQuantity: req.body.StackQuantity,
      IsCarryOn: req.body.IsCarryOn ? req.body.IsCarryOn : false
    }).then(function () {
      res.json({ status: 'success' });
    });
  }
});

/* DELETE deleting inventory */
router.delete('/:id', function (req, res) {
  models.InventoryItem.destroy({
    where: {
      IdentityUID: req.params.id
    }
  }).then(function () {
    res.json({ status: 'success' });
  });
});

/* PUT updating inventories */
router.put('/:id', function (req, res) {
  models.InventoryItem.update(
    {
      ItemClassUID: req.body.ItemClassUID,
      InstanceID: req.body.InstanceID,
      StackQuantity: req.body.StackQuantity,
      IsCarryOn: req.body.IsCarryOn ? req.body.IsCarryOn : false
    }, {
      where: { IdentityUID: req.params.id }
    }
  ).then(function (result) {
    console.log(result);
    res.json({ status: 'success' });
  }).error(function (err) {
    res.json(err);
  });
});

module.exports = router;
