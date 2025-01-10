"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
const mongodb_1 = require("mongodb");
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("MONGO_URI is not defined in environment variables");
    process.exit(1);
}
const client = new mongodb_1.MongoClient(mongoURI);
let db;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            db = client.db("karen-ipsum");
            console.log("Connected to MongoDB");
            return db;
        }
        catch (error) {
            console.error("Failed to connect to MongoDB:", error.message || error);
            process.exit(1);
        }
    });
}
