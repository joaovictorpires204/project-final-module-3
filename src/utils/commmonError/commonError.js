"use strict";
exports.__esModule = true;
exports.commonError = void 0;
function commonError(message, status) {
    return {
        error: true,
        status: status,
        message: message
    };
}
exports.commonError = commonError;
