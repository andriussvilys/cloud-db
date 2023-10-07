var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dishes', function(req, res, next) {
  res.send("dishes")
});

module.exports = router;
