import { convertTimestampToMilliseconds } from '@injectivelabs/utils';
import { BridgeTransactionState } from '../../types';
const sameTxHash = (txHashOne, txHashTwo) => txHashOne &&
    txHashTwo &&
    txHashOne.replace('0x', '').toLowerCase() ===
        txHashTwo.replace('0x', '').toLowerCase();
export const getCachedIBCTransactionState = (transaction) => {
    if (transaction.timeoutTimestamp &&
        transaction.state === BridgeTransactionState.Submitted) {
        const now = Date.now();
        const bufferTime = 60 * 1000; // hardcode to 1 minute
        const timeoutTimestampWithBuffer = convertTimestampToMilliseconds(parseInt(transaction.timeoutTimestamp, 10)) + bufferTime;
        if (now >= timeoutTimestampWithBuffer) {
            return BridgeTransactionState.Failed;
        }
        return BridgeTransactionState.Submitted;
    }
    return transaction.state;
};
export const findEthereumTransactionByNonce = (transaction, comparingTransaction) => transaction.nonce &&
    comparingTransaction.nonce &&
    transaction.nonce === comparingTransaction.nonce;
export const findEthereumTransactionByTxHash = (transaction, comparingTransaction) => transaction.txHash &&
    comparingTransaction.txHash &&
    sameTxHash(transaction.txHash, comparingTransaction.txHash);
export const findEthereumTransactionByTxHashes = (transaction, comparingTransaction) => transaction.txHashes &&
    transaction.txHashes.find((hash) => sameTxHash(hash, comparingTransaction.txHash)) !== undefined;
export const findIBCTransactionByTimeoutTimestamp = (transaction, comparingTransaction) => transaction.sender === comparingTransaction.sender &&
    transaction.receiver === comparingTransaction.receiver &&
    transaction.timeoutTimestamp &&
    comparingTransaction.timeoutTimestamp &&
    convertTimestampToMilliseconds(transaction.timeoutTimestamp) ===
        convertTimestampToMilliseconds(comparingTransaction.timeoutTimestamp);
export const ibcTxNotPartOfInjectiveIbcTxs = (injectiveIbcTransactions) => (transaction) => injectiveIbcTransactions.find((injectiveIbcTransaction) => findIBCTransactionByTimeoutTimestamp(injectiveIbcTransaction, transaction)) === undefined;
export const txNotPartOfPeggoDeposit = (peggoDepositTxs) => (transaction) => peggoDepositTxs.find((peggoDepositTx) => findEthereumTransactionByTxHash(peggoDepositTx, transaction)) === undefined;
export const txNotPartOfInjectivePeggyTxs = (injectivePeggyTransactions) => (transaction) => injectivePeggyTransactions.find((injectiveTransaction) => findEthereumTransactionByNonce(injectiveTransaction, transaction) ||
    findEthereumTransactionByTxHashes(injectiveTransaction, transaction) ||
    findEthereumTransactionByTxHash(injectiveTransaction, transaction)) === undefined;
//# sourceMappingURL=bridge.js.map