var express = require('express');
var path = require('path');
const cors = require('cors');
const {connect} = require('./mongo.js')

var app = express();
app.use(cors());

var indexRouter = require('./routes/index');
var bookingsRouter = require('./routes/bookings');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'development') {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("build", "index.html"))
  );
}

app.use( indexRouter);
app.use( bookingsRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server runs on port ${port}`)
})

connect()

module.exports = app;
