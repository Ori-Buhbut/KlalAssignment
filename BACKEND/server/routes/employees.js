var express = require('express');
var router = express.Router();
const {employees} = require('../database/fakedata');

/* GET employees listing. */
router.get('/', function(req, res, next) {
  res.json(employees);
});

module.exports = router;