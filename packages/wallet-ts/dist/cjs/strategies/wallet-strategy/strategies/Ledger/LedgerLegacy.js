"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const Base_1 = __importDefault(require("./Base"));
class LedgerLegacy extends Base_1.default {
    constructor(args) {
        super(Object.assign(Object.assign({}, args), { derivationPathType: types_1.LedgerDerivationPathType.LedgerMew }));
    }
}
exports.default = LedgerLegacy;
//# sourceMappingURL=LedgerLegacy.js.map