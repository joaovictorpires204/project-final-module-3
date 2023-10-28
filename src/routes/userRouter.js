"use strict";
exports.__esModule = true;
exports.userRouter = void 0;
var express_1 = require("express");
var userModule_1 = require("../app/users/userModule");
var userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
var controller = userModule_1.UserModule.getInstances().controller;
userRouter.post("/", controller.create.bind(controller));
