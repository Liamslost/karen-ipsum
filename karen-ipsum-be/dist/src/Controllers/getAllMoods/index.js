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
exports.getAllMoods = getAllMoods;
const databaseConnector_1 = require("../../Services/databaseConnector");
function getAllMoods(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield (0, databaseConnector_1.connectToDatabase)(); // Get the db object
            const moodsCollection = db.collection("karens"); // Access the collection
            const getMoods = yield moodsCollection
                .find({})
                .project({ _id: 1, name: "$style" }) // Project the fields
                .toArray(); // Convert the result to an array
            console.log("Retrieved Moods:", getMoods);
            res.status(200).json({
                message: "Successfully retrieved all Karen moods",
                data: getMoods,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Error retrieving moods:", error.stack);
                res.status(500).json({
                    message: "Unexpected Error",
                    data: [],
                    error: error.message,
                });
            }
            else {
                console.error("Unexpected error:", error);
                res.status(500).json({
                    message: "Unexpected Error",
                    data: [],
                    error: "An unknown error occurred",
                });
            }
        }
    });
}
