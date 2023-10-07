// const { db } = require('../mongo');

const express = require('express');
const router = express.Router();

// const guests = db.collection("guests");

router.get('/guests', function(req, res, next) {
  // const result = await guests.find({}).toArray()
  console.log("GUEST QUERY")
  res.send("GUEST result");
});

module.exports = router;
