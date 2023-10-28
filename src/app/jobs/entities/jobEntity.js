"use strict";
exports.__esModule = true;
exports.Job = void 0;
var mongoose_1 = require("mongoose");
var JobSchema = new mongoose_1.Schema({
    position: { type: String, require: true },
    salary: { type: Number, require: true },
    city: { type: String, require: true },
    jobWebsite: { type: String, require: true },
    technologies: { type: String, require: true },
    company: { type: String, require: true },
    jobDescription: { type: String, require: true },
    url: { type: String, require: true }
}, { timestamps: true });
var Job = mongoose_1["default"].model("Job", JobSchema);
exports.Job = Job;
