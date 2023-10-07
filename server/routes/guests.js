const { db } = require('../mongo');
const express = require('express');
const router = express.Router();

const guests = db.collection("guests");

router.get('/guests', async function(req, res, next) {
  console.log("GET guests")
  console.log(guests)
  const result = await guests.findOne()
  console.log({result})
  res.json(result);
  // return await guests.findOne({name: "milda"})

});

router.post('/guests', async function(req, res, next) {
  console.log("POST guests")
  console.log(guests)
  const result = await guests.insertOne({name: "lukas"})
  console.log({result})
  res.json(result);
  // return await guests.findOne({name: "milda"})

});

module.exports = router;
