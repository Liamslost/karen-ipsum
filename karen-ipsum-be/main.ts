import dotenv from "dotenv";
import { getAllMoods } from "./src/Controllers/getAllMoods";
import { getIpsum } from "./src/Controllers/getIpsum";
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(cors());
app.use(express.json());

app.get("/moods", getAllMoods);
app.get("/ipsum", getIpsum);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
