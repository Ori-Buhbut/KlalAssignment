var express = require('express');
var router = express.Router();
const {departments} = require('../database/fakedata');

/* GET departments listing. */
router.get('/', function(req, res, next) {
  res.json(departments);
});

module.exports = router;