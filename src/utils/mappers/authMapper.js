"use strict";
exports.__esModule = true;
exports.AuthMapper = void 0;
var AuthMapper = /** @class */ (function () {
    function AuthMapper() {
    }
    AuthMapper.toApi = function (user) {
        return {
            id: user._id,
            email: user.email,
            name: user.name
        };
    };
    return AuthMapper;
}());
exports.AuthMapper = AuthMapper;
