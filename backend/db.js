// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config();

// const client = new MongoClient(process.env.MONGO_URI);
// const dbName = "employeeDB";

// export async function connectDB() {
//   await client.connect();
//   console.log("Connected to MongoDB");
//   const db = client.db(dbName);
//   return db;
// }
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
const dbName = "employeeDB";
let dbInstance = null;

export async function connectDB() {
  if (dbInstance) return dbInstance;
  await client.connect();
  console.log("✅ Connected to MongoDB");
  dbInstance = client.db(dbName);
  return dbInstance;
}
