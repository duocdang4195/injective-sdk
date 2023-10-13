"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseConcreteStrategy {
    constructor({ chainId, ethereumOptions }) {
        this.ethereumChainId = ethereumOptions
            ? ethereumOptions.ethereumChainId
            : undefined;
        this.chainId = chainId;
    }
}
exports.default = BaseConcreteStrategy;
//# sourceMappingURL=Base.js.map