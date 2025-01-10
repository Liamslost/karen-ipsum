import dotenv from "dotenv";
import { MongoClient, Db } from "mongodb";

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("MONGO_URI is not defined in environment variables");
  process.exit(1);
}

const client = new MongoClient(mongoURI);
let db: Db;

export async function connectToDatabase(): Promise<Db> {
  try {
    await client.connect();
    db = client.db("karen-ipsum");
    console.log("Connected to MongoDB");
    return db;
  } catch (error: any) {
    console.error("Failed to connect to MongoDB:", error.message || error);
    process.exit(1);
  }
}
