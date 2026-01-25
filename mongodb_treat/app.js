import mongodb from "mongodb"

const client = new mongodb.MongoClient("mongodb://127.0.0.1")
await client.connect()

const db = client.db("nodejsDB")
const userCollection = db.collection("users")

// Insert

// userCollection.insertOne({name: "Ashiqur Rahman", age: 25})

// userCollection.insertMany([
//     {name: "Ashiqur Rahman", age: 25},
//     {name: "Era Rahman", age: 18},
//     {name: "Ariful Islam", age: 21},
//     {name: "Liakot Ali", age: 26},
//     {name: "Ripon Sheikh", age: 25},
// ])


// Read

// const users = await userCollection.find().toArray()
// console.log(user)

// const user = await userCollection.findOne({name: "Ashiqur Rahman"})
// console.log(user)


// Update

// userCollection.updateOne({name : "Ashiqur Rahman"}, {$set: {age: 23}})

// userCollection.updateMany({name : "md.ASHIQUR RAHMAN"}, {$set: {age: 23, name: "ASHIQUR RAHMAN"}})

// Delete

// userCollection.deleteOne({name: "Liakot Ali"})


// const result = await userCollection.deleteMany({name: "Ripon Sheikh"})
// console.log(result.deletedCount)


