"use strict";
exports.__esModule = true;
exports.app = void 0;
var express = require("express");
var dotenv = require("dotenv");
var dbConnection_1 = require("./database/dbConnection.cjs");
var routes_1 = require("./routes/index.cjs");
dotenv.config();
dbConnection_1.DatabaseConfig.initializeDb();
var port = process.env.PORT || 7007;
var app = express();
exports.app = app;
app.use(express.json());
app.use(routes_1.routes);
app.listen(port, function () { return console.log("Server is running on port http://localhost:".concat(port)); });
