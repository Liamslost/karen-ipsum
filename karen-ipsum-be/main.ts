import { getAllMoods } from "./src/Controllers/getAllMoods";
import { getIpsum } from "./src/Controllers/getIpsum";
import express, { Request, Response, NextFunction } from 'express';
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

app.get("/moods", getAllMoods);
app.get("/ipsum", getIpsum);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
