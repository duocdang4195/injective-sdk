"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.txNotPartOfInjectivePeggyTxs = exports.txNotPartOfPeggoDeposit = exports.ibcTxNotPartOfInjectiveIbcTxs = exports.findIBCTransactionByTimeoutTimestamp = exports.findEthereumTransactionByTxHashes = exports.findEthereumTransactionByTxHash = exports.findEthereumTransactionByNonce = exports.getCachedIBCTransactionState = void 0;
const utils_1 = require("@injectivelabs/utils");
const types_1 = require("../../types");
const sameTxHash = (txHashOne, txHashTwo) => txHashOne &&
    txHashTwo &&
    txHashOne.replace('0x', '').toLowerCase() ===
        txHashTwo.replace('0x', '').toLowerCase();
const getCachedIBCTransactionState = (transaction) => {
    if (transaction.timeoutTimestamp &&
        transaction.state === types_1.BridgeTransactionState.Submitted) {
        const now = Date.now();
        const bufferTime = 60 * 1000; // hardcode to 1 minute
        const timeoutTimestampWithBuffer = (0, utils_1.convertTimestampToMilliseconds)(parseInt(transaction.timeoutTimestamp, 10)) + bufferTime;
        if (now >= timeoutTimestampWithBuffer) {
            return types_1.BridgeTransactionState.Failed;
        }
        return types_1.BridgeTransactionState.Submitted;
    }
    return transaction.state;
};
exports.getCachedIBCTransactionState = getCachedIBCTransactionState;
const findEthereumTransactionByNonce = (transaction, comparingTransaction) => transaction.nonce &&
    comparingTransaction.nonce &&
    transaction.nonce === comparingTransaction.nonce;
exports.findEthereumTransactionByNonce = findEthereumTransactionByNonce;
const findEthereumTransactionByTxHash = (transaction, comparingTransaction) => transaction.txHash &&
    comparingTransaction.txHash &&
    sameTxHash(transaction.txHash, comparingTransaction.txHash);
exports.findEthereumTransactionByTxHash = findEthereumTransactionByTxHash;
const findEthereumTransactionByTxHashes = (transaction, comparingTransaction) => transaction.txHashes &&
    transaction.txHashes.find((hash) => sameTxHash(hash, comparingTransaction.txHash)) !== undefined;
exports.findEthereumTransactionByTxHashes = findEthereumTransactionByTxHashes;
const findIBCTransactionByTimeoutTimestamp = (transaction, comparingTransaction) => transaction.sender === comparingTransaction.sender &&
    transaction.receiver === comparingTransaction.receiver &&
    transaction.timeoutTimestamp &&
    comparingTransaction.timeoutTimestamp &&
    (0, utils_1.convertTimestampToMilliseconds)(transaction.timeoutTimestamp) ===
        (0, utils_1.convertTimestampToMilliseconds)(comparingTransaction.timeoutTimestamp);
exports.findIBCTransactionByTimeoutTimestamp = findIBCTransactionByTimeoutTimestamp;
const ibcTxNotPartOfInjectiveIbcTxs = (injectiveIbcTransactions) => (transaction) => injectiveIbcTransactions.find((injectiveIbcTransaction) => (0, exports.findIBCTransactionByTimeoutTimestamp)(injectiveIbcTransaction, transaction)) === undefined;
exports.ibcTxNotPartOfInjectiveIbcTxs = ibcTxNotPartOfInjectiveIbcTxs;
const txNotPartOfPeggoDeposit = (peggoDepositTxs) => (transaction) => peggoDepositTxs.find((peggoDepositTx) => (0, exports.findEthereumTransactionByTxHash)(peggoDepositTx, transaction)) === undefined;
exports.txNotPartOfPeggoDeposit = txNotPartOfPeggoDeposit;
const txNotPartOfInjectivePeggyTxs = (injectivePeggyTransactions) => (transaction) => injectivePeggyTransactions.find((injectiveTransaction) => (0, exports.findEthereumTransactionByNonce)(injectiveTransaction, transaction) ||
    (0, exports.findEthereumTransactionByTxHashes)(injectiveTransaction, transaction) ||
    (0, exports.findEthereumTransactionByTxHash)(injectiveTransaction, transaction)) === undefined;
exports.txNotPartOfInjectivePeggyTxs = txNotPartOfInjectivePeggyTxs;
//# sourceMappingURL=bridge.js.map