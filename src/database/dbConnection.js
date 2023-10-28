"use strict";
exports.__esModule = true;
exports.DatabaseConfig = void 0;
var mongoose_1 = require("mongoose");
var DatabaseConfig = /** @class */ (function () {
    function DatabaseConfig() {
    }
    DatabaseConfig.initializeDb = function () {
        mongoose_1["default"].connection.on("open", function () {
            console.log("DATABASE WAS CONNECT");
        });
        mongoose_1["default"].connect(process.env.DATABASE_URL);
    };
    return DatabaseConfig;
}());
exports.DatabaseConfig = DatabaseConfig;
