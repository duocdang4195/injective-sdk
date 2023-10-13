"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peggyDenomToContractAddress = exports.getTransactionOptions = void 0;
const constants_1 = require("../../constants");
const getTransactionOptions = (transactionOptions) => ({
    from: transactionOptions.from,
    gas: transactionOptions.gas ? transactionOptions.gas : constants_1.TX_DEFAULTS_GAS,
    gasPrice: transactionOptions.gasPrice
        ? transactionOptions.gasPrice.toString()
        : constants_1.DEFAULT_GAS_PRICE.toString(),
});
exports.getTransactionOptions = getTransactionOptions;
const peggyDenomToContractAddress = (denom) => denom.replace('peggy', '');
exports.peggyDenomToContractAddress = peggyDenomToContractAddress;
//# sourceMappingURL=utils.js.map