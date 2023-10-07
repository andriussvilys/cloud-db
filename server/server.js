var express = require('express');
var path = require('path');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = '5000';
app.listen(port, () => {
    console.log(`server runs on port ${port}`)
})


module.exports = app;
