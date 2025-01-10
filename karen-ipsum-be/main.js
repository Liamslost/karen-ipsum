"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllMoods_1 = require("./src/Controllers/getAllMoods");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const getIpsum_1 = require("./src/Controllers/getIpsum");
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/moods", getAllMoods_1.getAllMoods);
app.get("/ipsum", getIpsum_1.getIpsum);
app.listen(port);
