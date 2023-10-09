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

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})


app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

app.use( indexRouter);
app.use( bookingsRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server runs on port ${port}`)
})

connect()

module.exports = app;
