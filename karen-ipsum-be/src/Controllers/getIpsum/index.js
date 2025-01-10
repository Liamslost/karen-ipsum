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
exports.getIpsum = getIpsum;
const databaseConnector_1 = require("../../Services/databaseConnector");
const mongodb_1 = require("mongodb");
function getIpsum(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.query.id;
            if (typeof id !== "string" || !mongodb_1.ObjectId.isValid(id)) {
                res.status(400).json({ message: "Invalid ID" });
                return;
            }
            const karenId = new mongodb_1.ObjectId(id);
            const sentences = Number(req.query.sentences) || 5;
            const parragraphs = Number(req.query.parragraphs) || 1;
            const filter = {
                _id: karenId,
            };
            const connection = yield (0, databaseConnector_1.getDatabase)();
            const getIpsum = yield connection
                .db("karen-ipsum")
                .collection("karens")
                .findOne(filter);
            if (!getIpsum) {
                res.status(404).json({ message: "Karen not found" });
                return;
            }
            const quotes = (getIpsum === null || getIpsum === void 0 ? void 0 : getIpsum.quotes) || [];
            const result = [];
            for (let i = 0; i < parragraphs; i++) {
                const parragraph = [];
                for (let j = 0; j < sentences; j++) {
                    const random = Math.floor(Math.random() * quotes.length);
                    parragraph.push(quotes[random] + " ");
                }
                result.push(parragraph);
            }
            res.status(200).json({ message: "Successfully retrieved", data: result });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    message: "Unexpected Error",
                    data: [],
                    error: error.message,
                });
            }
            else {
                res.status(500).json({
                    message: "Unexpected Error",
                    data: [],
                    error: "Unknown error",
                });
            }
        }
    });
}
