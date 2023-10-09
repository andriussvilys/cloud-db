const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/api/', function(req, res, next) {
  res.json({word:"Hello world"})
});

module.exports = router;
