"use strict";
exports.__esModule = true;
exports.authRouter = void 0;
var express_1 = require("express");
var authModule_1 = require("../app/auth/authModule.cjs");
var authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
var controller = authModule_1.AuthModule.getInstances().controller;
authRouter.post("/", controller.auth.bind(controller));
