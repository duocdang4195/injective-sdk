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
exports.KeplrWallet = void 0;
const launchpad_1 = require("@cosmjs/launchpad");
const stargate_1 = require("@cosmjs/stargate");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exceptions_1 = require("@injectivelabs/exceptions");
const utils_1 = require("./utils");
const endpoints_1 = require("../cosmos/endpoints");
const sdk_ts_2 = require("@injectivelabs/sdk-ts");
const $window = (typeof window !== 'undefined' ? window : {});
class KeplrWallet {
    constructor(chainId, endpoints) {
        this.chainId = chainId;
        this.endpoints = endpoints || (0, endpoints_1.getEndpointsFromChainId)(chainId);
    }
    static experimentalSuggestChainWithChainData(chainData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!$window || ($window && !$window.keplr)) {
                throw new exceptions_1.CosmosWalletException(new Error('Please install Keplr extension'), { code: exceptions_1.UnspecifiedErrorCode, type: exceptions_1.ErrorType.WalletNotInstalledError });
            }
            try {
                yield $window.keplr.experimentalSuggestChain(chainData);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message));
            }
        });
    }
    getKeplrWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const keplr = this.getKeplr();
            try {
                yield keplr.enable(chainId);
                return keplr;
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message));
            }
        });
    }
    experimentalSuggestChain() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const keplr = this.getKeplr();
            const chainData = (0, utils_1.getExperimentalChainConfigBasedOnChainId)(chainId);
            if (!chainData) {
                throw new exceptions_1.CosmosWalletException(new Error(`Keplr doesn't support ${chainId} chainId. Please use another wallet`));
            }
            try {
                yield keplr.experimentalSuggestChain(chainData);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message));
            }
        });
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const keplr = this.getKeplr();
            try {
                return keplr.getOfflineSigner(chainId).getAccounts();
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: exceptions_1.WalletErrorActionModule.GetAccounts,
                });
            }
        });
    }
    getKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const keplr = yield this.getKeplrWallet();
            try {
                return keplr.getKey(this.chainId);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'Keplr',
                });
            }
        });
    }
    getOfflineSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const keplr = yield this.getKeplrWallet();
            try {
                return keplr.getOfflineSigner(chainId);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'Keplr',
                });
            }
        });
    }
    getOfflineAminoSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const keplr = yield this.getKeplrWallet();
            try {
                return keplr.getOfflineSignerOnlyAmino(chainId);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'Keplr',
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
            const keplr = yield this.getKeplrWallet();
            try {
                const result = yield keplr.sendTx(chainId, sdk_ts_2.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), launchpad_1.BroadcastMode.Sync);
                if (!result || result.length === 0) {
                    throw new exceptions_1.TransactionException(new Error('Transaction failed to be broadcasted'), { context: 'Keplr' });
                }
                return Buffer.from(result).toString('hex');
            }
            catch (e) {
                if (e instanceof exceptions_1.TransactionException) {
                    throw e;
                }
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'Keplr',
                    contextModule: 'broadcast-tx',
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
            const keplr = yield this.getKeplrWallet();
            try {
                const result = yield keplr.sendTx(chainId, sdk_ts_2.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), launchpad_1.BroadcastMode.Block);
                if (!result || result.length === 0) {
                    throw new exceptions_1.TransactionException(new Error('Transaction failed to be broadcasted'), { context: 'Keplr' });
                }
                return Buffer.from(result).toString('hex');
            }
            catch (e) {
                if (e instanceof exceptions_1.TransactionException) {
                    throw e;
                }
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'Keplr',
                    contextModule: 'broadcast-tx-block',
                });
            }
        });
    }
    waitTxBroadcasted(txHash, endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return new sdk_ts_1.TxRestApi(endpoint || this.endpoints.rest).fetchTxPoll(txHash);
        });
    }
    signAndBroadcastAminoUsingCosmjs(messages, stdFee) {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId, endpoints } = this;
            const keplr = yield this.getKeplrWallet();
            if (!endpoints.rpc) {
                throw new exceptions_1.GeneralException(new Error(`Please provide rpc endpoint`));
            }
            const offlineSigner = keplr.getOfflineSignerOnlyAmino(chainId);
            const [account] = yield offlineSigner.getAccounts();
            const client = yield stargate_1.SigningStargateClient.connectWithSigner(endpoints.rpc, offlineSigner);
            const txResponse = yield client.signAndBroadcast(account.address, messages, stdFee);
            return txResponse;
        });
    }
    signEIP712CosmosTx({ eip712, signDoc, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const keplr = yield this.getKeplrWallet();
            const key = yield this.getKey();
            try {
                return keplr.experimentalSignEIP712CosmosTx_v0(chainId, key.bech32Address, eip712, signDoc);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    context: 'Keplr',
                    contextModule: 'sign-eip712-cosmos-tx',
                });
            }
        });
    }
    checkChainIdSupport() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const keplr = this.getKeplr();
            try {
                yield keplr.getKey(chainId);
                // Chain exists already on Keplr
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    getKeplr() {
        if (!$window) {
            throw new exceptions_1.CosmosWalletException(new Error('Please install Keplr extension'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletNotInstalledError,
                context: 'Keplr',
            });
        }
        if (!$window.keplr) {
            throw new exceptions_1.CosmosWalletException(new Error('Please install Keplr extension'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletNotInstalledError,
                context: 'Keplr',
            });
        }
        return $window.keplr;
    }
    disableGasCheck() {
        const keplr = this.getKeplr();
        // Temporary disable tx gas check for fee delegation purposes
        keplr.defaultOptions = Object.assign(Object.assign({}, keplr.defaultOptions), { sign: Object.assign(Object.assign({}, keplr.defaultOptions.sign), { disableBalanceCheck: true }) });
    }
    enableGasCheck() {
        const keplr = this.getKeplr();
        // Temporary disable tx gas check for fee delegation purposes
        keplr.defaultOptions = Object.assign(Object.assign({}, keplr.defaultOptions), { sign: Object.assign(Object.assign({}, keplr.defaultOptions.sign), { disableBalanceCheck: false }) });
    }
}
exports.KeplrWallet = KeplrWallet;
//# sourceMappingURL=KeplrWallet.js.map