import { BridgeTransactionState, UiBridgeTransaction } from '../../types';
export declare const getCachedIBCTransactionState: (transaction: UiBridgeTransaction) => BridgeTransactionState;
export declare const findEthereumTransactionByNonce: (transaction: UiBridgeTransaction, comparingTransaction: UiBridgeTransaction) => boolean | 0 | undefined;
export declare const findEthereumTransactionByTxHash: (transaction: UiBridgeTransaction, comparingTransaction: UiBridgeTransaction) => boolean | "";
export declare const findEthereumTransactionByTxHashes: (transaction: UiBridgeTransaction, comparingTransaction: UiBridgeTransaction) => boolean | undefined;
export declare const findIBCTransactionByTimeoutTimestamp: (transaction: UiBridgeTransaction, comparingTransaction: UiBridgeTransaction) => boolean | "" | undefined;
export declare const ibcTxNotPartOfInjectiveIbcTxs: (injectiveIbcTransactions: UiBridgeTransaction[]) => (transaction: UiBridgeTransaction) => boolean;
export declare const txNotPartOfPeggoDeposit: (peggoDepositTxs: UiBridgeTransaction[]) => (transaction: UiBridgeTransaction) => boolean;
export declare const txNotPartOfInjectivePeggyTxs: (injectivePeggyTransactions: UiBridgeTransaction[]) => (transaction: UiBridgeTransaction) => boolean;
//# sourceMappingURL=bridge.d.ts.map