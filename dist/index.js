"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var SigningStargateClient = require("./SigningStargateClient");
var StargateClient = require("./StargateClient");
var accountParser = require("./accountParser");
exports.default = __assign(__assign(__assign({}, SigningStargateClient), StargateClient), accountParser);
// export default {  ...StargateClient }
