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
const mongodb_1 = require("mongodb");
const databaseConnector_1 = require("../../Services/databaseConnector");
function getIpsum(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.query.id;
            if (typeof id !== "string" || !mongodb_1.ObjectId.isValid(id)) {
                return res.status(400).json({ message: "Invalid ID" });
            }
            const karenId = new mongodb_1.ObjectId(id);
            const sentences = Number(req.query.sentences) || 5;
            const paragraphs = Number(req.query.paragraphs) || 1;
            const filter = {
                _id: karenId,
            };
            const connection = yield (0, databaseConnector_1.connectToDatabase)();
            const getIpsum = yield connection.collection("karens").findOne(filter);
            if (!getIpsum) {
                return res.status(404).json({ message: "Karen not found" });
            }
            const quotes = (getIpsum === null || getIpsum === void 0 ? void 0 : getIpsum.quotes) || [];
            const result = [];
            for (let i = 0; i < paragraphs; i++) {
                const paragraph = [];
                for (let j = 0; j < sentences; j++) {
                    const random = Math.floor(Math.random() * quotes.length);
                    paragraph.push(quotes[random] + " ");
                }
                result.push(paragraph.join(""));
            }
            return res
                .status(200)
                .json({ message: "Successfully retrieved", data: result });
        }
        catch (error) {
            next(error);
        }
    });
}
