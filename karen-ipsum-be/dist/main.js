"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const getAllMoods_1 = require("./src/Controllers/getAllMoods");
const getIpsum_1 = require("./src/Controllers/getIpsum");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log('Backend __dirname:', __dirname);
console.log('Serving frontend from:', path_1.default.join(__dirname, '../../karen-ipsum-fe/dist'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../karen-ipsum-fe/dist')));
app.get("/moods", getAllMoods_1.getAllMoods);
app.get("/ipsum", getIpsum_1.getIpsum);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../karen-ipsum-fe/dist', 'index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
