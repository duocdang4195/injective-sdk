import { Wallet } from '../../../types/enums';
/**
 * Returns a timeout timestamp in milliseconds so its compatible
 * with the way Cosmos handles transactions
 */
export declare const makeTimeoutTimestamp: (timeoutInMs?: number) => number;
/**
 * Returns a timeout timestamp in nanoseconds so its compatible
 * with the way Cosmos handles transactions
 */
export declare const makeTimeoutTimestampInNs: (timeoutInMs?: number) => number;
export declare const isCosmosWallet: (wallet: Wallet) => boolean;
export declare const isCosmosWalletInstalled: (wallet: Wallet) => boolean;
//# sourceMappingURL=utils.d.ts.map