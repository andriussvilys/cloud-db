var express = require('express');
var path = require('path');
const cors = require('cors');


var app = express();
app.use(cors());

var indexRouter = require('./routes/index');
var guestsRouter = require('./routes/guests');
var menusRouter = require('./routes/menus');
var dishesRouter = require('./routes/dishes');
var bookingsRouter = require('./routes/bookings');
const { connect } = require('./mongo');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/guestsRouter', guestsRouter)
app.use('/menusRouter', menusRouter)
app.use('/dishesRouter', dishesRouter)
app.use('/bookingsRouter', bookingsRouter)

const port = '5000';
app.listen(port, () => {
    console.log(`server runs on port ${port}`)
})

connect()


module.exports = app;
