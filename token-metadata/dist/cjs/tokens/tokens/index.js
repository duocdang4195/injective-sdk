"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testnetTokens = exports.devnetTokens = exports.ibcTokens = exports.ibcBaseDenoms = void 0;
const devnet_tokens_1 = require("./devnet-tokens");
Object.defineProperty(exports, "devnetTokens", { enumerable: true, get: function () { return devnet_tokens_1.devnetTokens; } });
const testnet_tokens_1 = require("./testnet-tokens");
Object.defineProperty(exports, "testnetTokens", { enumerable: true, get: function () { return testnet_tokens_1.testnetTokens; } });
const cw20_tokens_1 = __importDefault(require("./cw20-tokens"));
const ibc_1 = __importDefault(require("./ibc"));
exports.ibcTokens = ibc_1.default;
const tokens_1 = __importDefault(require("./tokens"));
const allTokens = Object.assign(Object.assign({}, tokens_1.default), cw20_tokens_1.default);
exports.ibcBaseDenoms = Object.keys(allTokens)
    .filter((token) => allTokens[token].ibc)
    .map((token) => allTokens[token].ibc.baseDenom);
exports.default = allTokens;
//# sourceMappingURL=index.js.map