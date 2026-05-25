// to connect with mongodb using any ip address
const dns = require("dns");
dns.setServers(["1.1.1.1"]);

require('dotenv').config();



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = await client.db("");
    await db.command({ ping: 1 });

    // const result = await db.collection("test").insertMany([
    //     {
    //         name: "test2",
    //         age: 22
    //     },
    //     {
    //         name: "test3",
    //         age: 25
    //     },
    //     {
    //         name: "test4",
    //         age: 30
    //     }
    // ]);

    // console.log(result);

    // const result = await db.collection("test").find({}).toArray();

    // console.log(result);

    // const result1 = await db.collection("test").find({
    //     name: "test1"
    // }).toArray();

    // console.log(result1);

    // const result2 = await db.collection("test").find({
    //     age: 25
    // }).toArray();

    // console.log(result2);

    // const result3 = await db.collection("test").find({
    //     _id: new ObjectId("6a14003109cec578fef3c17e")
    // }).toArray();

    // console.log(result3);


    // const output = await db.collection("test").insertMany([
    //     {name: "shubham", age: 15, course: "BCA", marks: 99, city: "mumbai"},
    //     {name: "vedant", age: 31, course: "BBC", marks: 80, city: "pune"},
    //     {name: "yogesh", age: 51, course: "BSC", marks: 88, city: "delhi"},
    //     {name: "ashish", age: 70, course: "BCA", marks: 50, city: "nagpur"},
    // ]);

    // const output1 = await db.collection("test").insertMany([
    //     {name: "test1", age: 15, course: "BCA", marks: 99, city: "mumbai"},
    //     {name: "test12", age: 31, course: "BBC", marks: 80, city: "pune"},
    //     {name: "test13", age: 51, course: "BSC", marks: 88, city: "delhi"},
    //     {name: "test14", age: 70, course: "BCA", marks: 50, city: "nagpur"},
    // ]);

    // console.log("output: ", output);

    // console.log(await db.collection("test").findOne({
    //     course: "BCA",
    // }));

    // const result = await db.collection("test").updateOne(
    //     {name: "shubham"},
    //     {$set: {age: 50}}
    // );

    // const result = await db.collection("test").updateMany(
    //     {course: "BCA"},
    //     {$set: {marks: 999}}
    // );

    // const result = await db.collection("test").updateMany(
    //     {},
    //     {$set: {active: true}}
    // );

    // const result = await db.collection('test').deleteOne({
    //     name: "test12"
    // });

    // const result = await db.collection('test').deleteMany({
    //     course: "BCA"
    // })

    // const result = await db.collection('test').deleteMany(
    //     {marks: {$lt: 70}}
    // );

    const result = await db.collection("test").find({
        age: {$gte: 18}
    }).toArray();

    console.log(result);



    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
