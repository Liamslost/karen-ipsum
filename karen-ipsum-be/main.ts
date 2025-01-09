import { getAllMoods } from "./src/Controllers/getAllMoods";
import express from "express";
import cors from "cors";
import { getIpsum } from "./src/Controllers/getIpsum";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/moods", getAllMoods);
app.get("/ipsum", getIpsum);

app.listen(port);
