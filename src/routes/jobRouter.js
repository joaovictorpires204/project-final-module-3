"use strict";
exports.__esModule = true;
exports.jobRouter = void 0;
var express_1 = require("express");
var jobModuler_1 = require("../app/jobs/jobModuler");
var jobRouter = (0, express_1.Router)();
exports.jobRouter = jobRouter;
var controller = jobModuler_1.JobModule.getInstances().controller;
jobRouter.post("/", controller.create.bind(controller));
jobRouter.get("/", controller.findByQuery.bind(controller));