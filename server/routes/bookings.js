var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bookings', function(req, res, next) {
  res.send("bookings")
});

module.exports = router;
