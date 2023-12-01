import { MongoClient } from 'mongodb'

let db;

async function connectToDB(cb) {
  const client = new MongoClient('mongodb://127.0.0.1:27017')
  const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD} `)
  await client.connect();

  const db = client.db('react-blog-db');

  cb();
}

export {
  db,
  connectToDB,
}