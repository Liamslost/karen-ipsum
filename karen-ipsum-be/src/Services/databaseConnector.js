"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabase = getDatabase;
const mongodb_1 = require("mongodb");
const config_1 = require("../../config");
function getDatabase() {
    return mongodb_1.MongoClient.connect(config_1.settings.db);
}
;
