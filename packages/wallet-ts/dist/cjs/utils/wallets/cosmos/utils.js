"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCosmosWalletInstalled = exports.isCosmosWallet = exports.makeTimeoutTimestampInNs = exports.makeTimeoutTimestamp = void 0;
const utils_1 = require("@injectivelabs/utils");
const enums_1 = require("../../../types/enums");
/**
 * Returns a timeout timestamp in milliseconds so its compatible
 * with the way Cosmos handles transactions
 */
const makeTimeoutTimestamp = (timeoutInMs = utils_1.DEFAULT_TIMESTAMP_TIMEOUT_MS) => {
    const now = new Date();
    const timestamp = new Date(now.getTime() + timeoutInMs);
    const actualTimestamp = timestamp.getTime();
    return actualTimestamp;
};
exports.makeTimeoutTimestamp = makeTimeoutTimestamp;
/**
 * Returns a timeout timestamp in nanoseconds so its compatible
 * with the way Cosmos handles transactions
 */
const makeTimeoutTimestampInNs = (timeoutInMs = utils_1.DEFAULT_TIMESTAMP_TIMEOUT_MS) => (0, exports.makeTimeoutTimestamp)(timeoutInMs) * 1e6;
exports.makeTimeoutTimestampInNs = makeTimeoutTimestampInNs;
const isCosmosWallet = (wallet) => [enums_1.Wallet.Cosmostation, enums_1.Wallet.Leap, enums_1.Wallet.Keplr].includes(wallet);
exports.isCosmosWallet = isCosmosWallet;
const isCosmosWalletInstalled = (wallet) => {
    const $window = (typeof window !== 'undefined' ? window : {});
    switch (wallet) {
        case enums_1.Wallet.Keplr:
            return $window.keplr !== undefined;
        case enums_1.Wallet.Cosmostation:
            return $window.cosmostation !== undefined;
        case enums_1.Wallet.Leap:
            return $window.leap !== undefined;
        default:
            return false;
    }
};
exports.isCosmosWalletInstalled = isCosmosWalletInstalled;
//# sourceMappingURL=utils.js.map