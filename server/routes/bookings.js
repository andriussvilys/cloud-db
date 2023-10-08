const { db } = require('../mongo');
const { ObjectId } = require('mongodb');
const express = require('express');
const router = express.Router();

const bookings = db.collection("bookings");

const path = '/bookings'
router.get(path, async (req, res, next) => {

    const cursor = bookings.find();

    if ((await bookings.countDocuments()) === 0) {

      res.status(404).send("No results")

    }
    const bookingsList = []
    for await (const doc of cursor) {

      bookingsList.push(doc)

    }

    res.json(bookingsList)

});

router.post(path, async (req,res) => {
  const result = await bookings.insertOne(req.body)
  res.json(result)
})

router.delete(path, async (req, res) => {

  const query = {_id: new ObjectId(req.body._id), ...req.params.query}
    
  bookings.deleteOne(query)
  .then( delete_res => {

      res.status(200).send( delete_res )
  })

  .catch( err => {
      res.status(500).send( { error: err.message } )
  })
})

router.put(path, async (req,res) => {
    
    const reqBody = {
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      tableSize:req.body.tableSize,
      phone: req.body.phone
    }
    console.log("PUT", reqBody, req.body._id)
    const result = await bookings.updateOne({_id: new ObjectId(req.body._id)}, {$set: reqBody});
    res.json(result)
})

module.exports = router;
