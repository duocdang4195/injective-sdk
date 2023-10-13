import { DEFAULT_TIMESTAMP_TIMEOUT_MS } from '@injectivelabs/utils';
import { Wallet } from '../../../types/enums';
/**
 * Returns a timeout timestamp in milliseconds so its compatible
 * with the way Cosmos handles transactions
 */
export const makeTimeoutTimestamp = (timeoutInMs = DEFAULT_TIMESTAMP_TIMEOUT_MS) => {
    const now = new Date();
    const timestamp = new Date(now.getTime() + timeoutInMs);
    const actualTimestamp = timestamp.getTime();
    return actualTimestamp;
};
/**
 * Returns a timeout timestamp in nanoseconds so its compatible
 * with the way Cosmos handles transactions
 */
export const makeTimeoutTimestampInNs = (timeoutInMs = DEFAULT_TIMESTAMP_TIMEOUT_MS) => makeTimeoutTimestamp(timeoutInMs) * 1e6;
export const isCosmosWallet = (wallet) => [Wallet.Cosmostation, Wallet.Leap, Wallet.Keplr].includes(wallet);
export const isCosmosWalletInstalled = (wallet) => {
    const $window = (typeof window !== 'undefined' ? window : {});
    switch (wallet) {
        case Wallet.Keplr:
            return $window.keplr !== undefined;
        case Wallet.Cosmostation:
            return $window.cosmostation !== undefined;
        case Wallet.Leap:
            return $window.leap !== undefined;
        default:
            return false;
    }
};
//# sourceMappingURL=utils.js.map