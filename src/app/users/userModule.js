"use strict";
exports.__esModule = true;
exports.UserModule = void 0;
var userEntity_1 = require("./entities/userEntity");
var userRepository_1 = require("./repositories/userRepository");
var userService_1 = require("./services/userService");
var userController_1 = require("./controllers/userController");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.getInstances = function () {
        var repository = new userRepository_1.UserRepository(userEntity_1.User);
        var service = new userService_1.UserService(repository);
        var controller = new userController_1.UserController(service);
        return { repository: repository, service: service, controller: controller };
    };
    return UserModule;
}());
exports.UserModule = UserModule;
