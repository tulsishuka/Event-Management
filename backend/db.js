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

console.log("✅ MONGO_URI =", process.env.MONGO_URI ? "Loaded ✅" : "❌ Not Loaded!");

const client = new MongoClient(process.env.MONGO_URI);
const dbName = "employeeDB";
let dbInstance = null;

export async function connectDB() {
  try {
    if (dbInstance) return dbInstance;

    console.log("🟡 Attempting to connect to MongoDB...");
    await client.connect();

    dbInstance = client.db(dbName);
    console.log("✅ Connected to MongoDB, database:", dbName);

    return dbInstance;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    return null;
  }
}
