var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET rodsetups listing. */
router.get('/', function (req, res, next) {
  models.RodSetup.findAll({
    // include: [models.ItemClass]
  }).then(function (rodsetups) {
    res.json({ rodsetups: rodsetups });
  });
});

/* POST creating rodsetups */
router.post('/', function (req, res) {
  req.checkBody('SlotID', 'SlotID is required').notEmpty();
  req.checkBody('SlotID', 'SlotID is integer').isInt();
  req.checkBody('RodInstanceID', 'RodInstanceID is required').notEmpty();
  req.checkBody('RodInstanceID', 'RodInstanceID is integer').isInt();
  req.checkBody('LineInstanceID', 'LineInstanceID is required').notEmpty();
  req.checkBody('LineInstanceID', 'LineInstanceID is integer').isInt();
  req.checkBody('ReelInstanceID', 'ReelInstanceID is required').notEmpty();
  req.checkBody('ReelInstanceID', 'ReelInstanceID is integer').isInt();
  req.checkBody('RigID', 'RigID is required').notEmpty();
  req.checkBody('RigID', 'RigID is integer').isInt();

  var errors = req.validationErrors();
  if (errors) {
    return res.json(errors);
  } else {
    models.RodSetup.create({
      SlotID: req.body.SlotID,
      RodInstanceID: req.body.RodInstanceID,
      LineInstanceID: req.body.LineInstanceID,
      ReelInstanceID: req.body.ReelInstanceID,
      RigID: req.body.RigID
    }).then(function () {
      res.json({ status: 'success' });
    });
  }
});

/* DELETE deleting rodsetups */
router.delete('/:id', function (req, res) {
  models.RodSetup.destroy({
    where: {
      IdentityUID: req.params.id
    }
  }).then(function () {
    res.json({ status: 'success' });
  });
});

/* PUT updating rodsetups */
router.put('/:id', function (req, res) {
  models.RodSetup.update(
    {
      SlotID: req.body.SlotID,
      RodInstanceID: req.body.RodInstanceID,
      LineInstanceID: req.body.LineInstanceID,
      ReelInstanceID: req.body.ReelInstanceID,
      RigID: req.body.RigID
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
