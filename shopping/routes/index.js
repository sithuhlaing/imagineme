var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('welcome to shopping');
});

module.exports = router;