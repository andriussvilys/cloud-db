const { MongoClient, ServerApiVersion } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db("restaurants")

async function connect() {
    try {

        await client.connect();

        await client.db("restaurants").command({ ping: 1 });

        console.log("**********************************")
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {connect, client, db}