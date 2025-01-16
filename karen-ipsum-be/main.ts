import dotenv from "dotenv";
import { getAllMoods } from "./src/Controllers/getAllMoods";
import { getIpsum } from "./src/Controllers/getIpsum";
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import path from 'path';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log('Backend __dirname:', __dirname);

console.log('Serving frontend from:', path.join(__dirname, '../../karen-ipsum-fe/dist'));
app.use(express.static(path.join(__dirname, '../../karen-ipsum-fe/dist')));

app.get("/moods", getAllMoods);
app.get("/ipsum", getIpsum);
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../../karen-ipsum-fe/dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);

});