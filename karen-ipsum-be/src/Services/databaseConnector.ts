import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);
let db: Db;

export async function connectToDatabase(): Promise<Db> {
  try {
    await client.connect();
    db = client.db("karen-ipsum");
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}