const { db } = require('../mongo');
const express = require('express');
const router = express.Router();

const bookings = db.collection("bookings");

const path = '/bookings'
router.get(path, async (req, res, next) => {

    const cursor = bookings.find();

    if ((await bookings.countDocuments()) === 0) {

      console.log("No documents found!");

    }
    const bookingsList = []
    for await (const doc of cursor) {

      bookingsList.push(doc)

    }

    res.json(bookingsList)

});

router.post(path, async (req,res) => {
  console.log({req: req.body})
  const result = await bookings.insertOne(req.body)
    res.json(result)
})

module.exports = router;
