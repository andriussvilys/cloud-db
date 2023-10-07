var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/guests', function(req, res, next) {
  res.send('guests');
});

module.exports = router;
