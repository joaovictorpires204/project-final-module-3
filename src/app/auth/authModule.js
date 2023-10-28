"use strict";
exports.__esModule = true;
exports.AuthModule = void 0;
var userModule_1 = require("../users/userModule");
var authMiddleware_1 = require("./controllers/authMiddleware");
var authService_1 = require("./services/authService");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.getInstances = function () {
        var repository = userModule_1.UserModule.getInstances().repository;
        var service = new authService_1.AuthService(repository);
        var controller = new authMiddleware_1.AuthController(service);
        return { service: service, controller: controller };
    };
    return AuthModule;
}());
exports.AuthModule = AuthModule;
