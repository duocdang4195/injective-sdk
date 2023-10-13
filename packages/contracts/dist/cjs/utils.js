"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PEGGY_TRANSFER_DEFAULT_GAS_LIMIT = exports.ALLOWANCE_DEFAULT_GAS_LIMIT = exports.getTransactionOptionsAsNonPayableTx = void 0;
const getTransactionOptionsAsNonPayableTx = (transactionOptions) => {
    var _a;
    return ({
        from: transactionOptions.from,
        to: transactionOptions.to,
        gas: (_a = transactionOptions.gas) === null || _a === void 0 ? void 0 : _a.toString(),
        gasPrice: transactionOptions.gasPrice
            ? transactionOptions.gasPrice.toString()
            : 0,
    });
};
exports.getTransactionOptionsAsNonPayableTx = getTransactionOptionsAsNonPayableTx;
exports.ALLOWANCE_DEFAULT_GAS_LIMIT = 45000;
exports.PEGGY_TRANSFER_DEFAULT_GAS_LIMIT = 100000;
//# sourceMappingURL=utils.js.map