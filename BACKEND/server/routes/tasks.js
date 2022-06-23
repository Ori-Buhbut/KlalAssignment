var express = require('express');
var router = express.Router();
const {tasks} = require('../database/fakedata');

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  res.json(tasks);
});

module.exports = router;