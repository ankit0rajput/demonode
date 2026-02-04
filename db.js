require('dotenv').config();

const { MongoClient } = require('mongodb');
console.log(process.env.MONGO_HOST)
const url = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;
const dbName = process.env.MONGO_DB;

let db;

async function connectDB() {
    if (db) return db;

    const client = new MongoClient(url);
    await client.connect();

    console.log("MongoDB connected successfully");
    db = client.db(dbName);
    return db;
}

module.exports = connectDB;
