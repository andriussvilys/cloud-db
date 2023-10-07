var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/menus', function(req, res, next) {
  res.send("menus")
});

module.exports = router;
