var express = require('express');
var path = require('path');
const cors = require('cors');

var app = express();
app.use(cors());

var indexRouter = require('./routes/index');
var bookingsRouter = require('./routes/bookings');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.join(__dirname, './build')));
}

app.use( indexRouter);
app.use( bookingsRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server runs on port ${port}`)
})


module.exports = app;
