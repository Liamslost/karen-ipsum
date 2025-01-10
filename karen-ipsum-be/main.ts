import { getAllMoods } from "./src/Controllers/getAllMoods";
import { getIpsum } from "./src/Controllers/getIpsum";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI!);
let db: any;

// Routes
app.get("/moods", getAllMoods);
app.get("/ipsum", getIpsum);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
