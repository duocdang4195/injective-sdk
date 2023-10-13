"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyFromRpcUrl = void 0;
const getKeyFromRpcUrl = (rpcUrl) => {
    if (!rpcUrl.includes('alchemyapi.io')) {
        return rpcUrl;
    }
    const [key] = rpcUrl.split('/').reverse();
    return key;
};
exports.getKeyFromRpcUrl = getKeyFromRpcUrl;
//# sourceMappingURL=alchemy.js.map