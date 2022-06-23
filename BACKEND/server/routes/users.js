var express = require('express');
var router = express.Router();
const {list} = require('../database/fakedata');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(list);
});

module.exports = router;
