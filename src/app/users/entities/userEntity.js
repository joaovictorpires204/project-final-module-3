"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, reuire: true, unique: true }
}, { timestamps: true });
var User = mongoose_1["default"].model("User", UserSchema);
exports.User = User;
