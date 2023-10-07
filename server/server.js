var express = require('express');
var path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express();
app.use(cors());

var indexRouter = require('./routes/index');
var guestsRouter = require('./routes/guests');
var menusRouter = require('./routes/menus');
var dishesRouter = require('./routes/dishes');
var bookingsRouter = require('./routes/bookings');


const uri = process.env.MONGODB_URI

console.log("uri ***************************************************")
console.log(uri)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch(err){
        console.log(err)
    }
}
run()


module.exports = app;
