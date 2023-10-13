"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeapWallet = void 0;
const launchpad_1 = require("@cosmjs/launchpad");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exceptions_1 = require("@injectivelabs/exceptions");
const endpoints_1 = require("../cosmos/endpoints");
const sdk_ts_2 = require("@injectivelabs/sdk-ts");
const $window = (typeof window !== 'undefined' ? window : {});
class LeapWallet {
    constructor(chainId, endpoints) {
        this.checkChainIdSupport = () => __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const leap = this.getLeap();
            try {
                yield leap.getKey(chainId);
                // Chain exists already on Leap
                return true;
            }
            catch (e) {
                return false;
            }
        });
        this.chainId = chainId;
        this.endpoints = endpoints || (0, endpoints_1.getEndpointsFromChainId)(chainId);
    }
    getLeapWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const leap = this.getLeap();
            try {
                yield leap.enable(chainId);
                return leap;
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message));
            }
        });
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const leap = this.getLeap();
            try {
                return leap.getOfflineSigner(chainId).getAccounts();
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    contextModule: exceptions_1.WalletErrorActionModule.GetAccounts,
                });
            }
        });
    }
    getKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const leap = yield this.getLeapWallet();
            try {
                return leap.getKey(this.chainId);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    contextModule: 'Leap',
                });
            }
        });
    }
    getOfflineSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const leap = yield this.getLeapWallet();
            try {
                return leap.getOfflineSigner(chainId);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    contextModule: 'Leap',
                });
            }
        });
    }
    /**
     * This method is used to broadcast a transaction to the network.
     * Since it uses the `Sync` mode, it will not wait for the transaction to be included in a block,
     * so we have to make sure the transaction is included in a block after its broadcasted
     *
     * @param txRaw - raw transaction to broadcast
     * @returns tx hash
     */
    broadcastTx(txRaw) {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const leap = yield this.getLeapWallet();
            try {
                const result = yield leap.sendTx(chainId, sdk_ts_2.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), launchpad_1.BroadcastMode.Sync);
                if (!result || result.length === 0) {
                    throw new exceptions_1.TransactionException(new Error('Transaction failed to be broadcasted'), { contextModule: 'Leap' });
                }
                return Buffer.from(result).toString('hex');
            }
            catch (e) {
                if (e instanceof exceptions_1.TransactionException) {
                    throw e;
                }
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'broadcast-tx',
                    contextModule: 'Leap',
                });
            }
        });
    }
    /**
     * This method is used to broadcast a transaction to the network.
     * Since it uses the `Block` mode, and it will wait for the transaction to be included in a block,
     *
     * @param txRaw - raw transaction to broadcast
     * @returns tx hash
     */
    broadcastTxBlock(txRaw) {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const leap = yield this.getLeapWallet();
            try {
                const result = yield leap.sendTx(chainId, sdk_ts_2.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), launchpad_1.BroadcastMode.Block);
                if (!result || result.length === 0) {
                    throw new exceptions_1.TransactionException(new Error('Transaction failed to be broadcasted'), { contextModule: 'Leap' });
                }
                return Buffer.from(result).toString('hex');
            }
            catch (e) {
                if (e instanceof exceptions_1.TransactionException) {
                    throw e;
                }
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'broadcast-tx',
                    contextModule: 'Leap',
                });
            }
        });
    }
    waitTxBroadcasted(txHash, endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return new sdk_ts_1.TxRestApi(endpoint || this.endpoints.rest).fetchTxPoll(txHash);
        });
    }
    getLeap() {
        if (!$window) {
            throw new exceptions_1.CosmosWalletException(new Error('Please install Leap extension'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletNotInstalledError,
                contextModule: 'Leap',
            });
        }
        if (!$window.leap) {
            throw new exceptions_1.CosmosWalletException(new Error('Please install Leap extension'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletNotInstalledError,
                contextModule: 'Leap',
            });
        }
        return $window.leap;
    }
}
exports.LeapWallet = LeapWallet;
//# sourceMappingURL=LeapWallet.js.map