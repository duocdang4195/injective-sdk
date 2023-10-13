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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const utils_1 = require("@injectivelabs/utils");
const exceptions_1 = require("@injectivelabs/exceptions");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const Base_1 = __importDefault(require("./../Base"));
const enums_1 = require("../../../../types/enums");
const utils_2 = require("./utils");
class TrustWallet extends Base_1.default {
    constructor(args) {
        super(args);
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(enums_1.WalletDeviceType.Browser);
        });
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            const ethereum = yield this.getEthereum();
            try {
                return yield ethereum.request({
                    method: 'eth_requestAccounts',
                });
            }
            catch (e) {
                throw new exceptions_1.TrustWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.GetAccounts,
                });
            }
        });
    }
    // eslint-disable-next-line class-methods-use-this
    confirm(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
        });
    }
    sendEthereumTransaction(transaction, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const ethereum = yield this.getEthereum();
            try {
                return yield ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transaction],
                });
            }
            catch (e) {
                throw new exceptions_1.TrustWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.SendEthereumTransaction,
                });
            }
        });
    }
    sendTransaction(transaction, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { endpoints } = options;
            if (!endpoints) {
                throw new exceptions_1.WalletException(new Error('You have to pass endpoints within the options for using Ethereum native wallets'));
            }
            const txApi = new sdk_ts_1.TxGrpcApi(endpoints.grpc);
            const response = yield txApi.broadcast(transaction);
            if (response.code !== 0) {
                throw new exceptions_1.TransactionException(new Error(response.rawLog), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    contextCode: response.code,
                    contextModule: response.codespace,
                });
            }
            return response;
        });
    }
    /** @deprecated */
    signTransaction(eip712json, address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.signEip712TypedData(eip712json, address);
        });
    }
    signEip712TypedData(eip712json, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const ethereum = yield this.getEthereum();
            try {
                return yield ethereum.request({
                    method: 'eth_signTypedData_v4',
                    params: [address, eip712json],
                });
            }
            catch (e) {
                throw new exceptions_1.TrustWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.SignTransaction,
                });
            }
        });
    }
    // eslint-disable-next-line class-methods-use-this
    signCosmosTransaction(_transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.WalletException(new Error('This wallet does not support signing Cosmos transactions'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletError,
                contextModule: enums_1.WalletAction.SendTransaction,
            });
        });
    }
    signArbitrary(signer, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const ethereum = yield this.getEthereum();
            try {
                const signature = yield ethereum.request({
                    method: 'personal_sign',
                    params: [(0, sdk_ts_1.toUtf8)(data), signer],
                });
                return signature;
            }
            catch (e) {
                throw new exceptions_1.TrustWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.SignArbitrary,
                });
            }
        });
    }
    getEthereumChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            const ethereum = yield this.getEthereum();
            try {
                return ethereum.request({ method: 'eth_chainId' });
            }
            catch (e) {
                throw new exceptions_1.TrustWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.GetChainId,
                });
            }
        });
    }
    getEthereumTransactionReceipt(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            const ethereum = yield this.getEthereum();
            const interval = 1000;
            const transactionReceiptRetry = () => __awaiter(this, void 0, void 0, function* () {
                const receipt = yield ethereum.request({
                    method: 'eth_getTransactionReceipt',
                    params: [txHash],
                });
                if (!receipt) {
                    yield (0, utils_1.sleep)(interval);
                    yield transactionReceiptRetry();
                }
                return receipt;
            });
            try {
                return yield transactionReceiptRetry();
            }
            catch (e) {
                throw new exceptions_1.TrustWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.GetEthereumTransactionReceipt,
                });
            }
        });
    }
    // eslint-disable-next-line class-methods-use-this
    getPubKey() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.WalletException(new Error('You can only fetch PubKey from Cosmos native wallets'));
        });
    }
    onChainIdChanged(_callback) {
        //
    }
    onAccountChange(_callback) {
        //
    }
    cancelOnChainIdChange() {
        //
    }
    cancelOnAccountChange() {
        //
    }
    cancelAllEvents() {
        //
    }
    getEthereum() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield (0, utils_2.getTrustWalletProvider)();
            if (!provider) {
                throw new exceptions_1.TrustWalletException(new Error('Please install the TrustWallet wallet extension.'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletNotInstalledError,
                    contextModule: enums_1.WalletAction.GetAccounts,
                });
            }
            return provider;
        });
    }
}
exports.default = TrustWallet;
//# sourceMappingURL=index.js.map