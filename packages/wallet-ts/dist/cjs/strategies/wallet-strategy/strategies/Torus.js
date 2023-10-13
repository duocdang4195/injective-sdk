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
exports.getNetworkFromChainId = void 0;
/* eslint-disable class-methods-use-this */
const utils_1 = require("@injectivelabs/utils");
const ts_types_1 = require("@injectivelabs/ts-types");
const exceptions_1 = require("@injectivelabs/exceptions");
const torus_embed_1 = __importDefault(require("@toruslabs/torus-embed"));
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const Base_1 = __importDefault(require("./Base"));
const enums_1 = require("../../../types/enums");
const getNetworkFromChainId = (chainId) => {
    if (chainId === ts_types_1.EthereumChainId.Goerli) {
        return {
            host: 'goerli',
            networkName: 'Goerli Test Network',
        };
    }
    if (chainId === ts_types_1.EthereumChainId.Kovan) {
        return {
            host: 'kovan',
            networkName: 'Kovan Test Network',
        };
    }
    return {
        host: 'mainnet',
        networkName: 'Main Ethereum Network',
    };
};
exports.getNetworkFromChainId = getNetworkFromChainId;
class Torus extends Base_1.default {
    constructor(args) {
        super(args);
        this.connected = false;
        this.torus = new torus_embed_1.default();
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(enums_1.WalletDeviceType.Browser);
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const { connected, torus, ethereumChainId } = this;
            if (connected) {
                return;
            }
            if (!ethereumChainId) {
                throw new exceptions_1.WalletException(new Error('Please provide Ethereum chainId'));
            }
            yield torus.init({
                buildEnv: 'production',
                network: Object.assign({ chainId: ethereumChainId }, (0, exports.getNetworkFromChainId)(ethereumChainId)),
                showTorusButton: false,
            });
            yield this.torus.login();
            this.connected = true;
        });
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            try {
                const accounts = yield this.torus.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                return accounts && accounts.length > 0 ? accounts : [];
            }
            catch (e) {
                throw new exceptions_1.MetamaskException(new Error(e.message), {
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
            yield this.connect();
            return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
        });
    }
    sendEthereumTransaction(transaction, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            try {
                const response = yield this.torus.ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transaction],
                });
                return response || '';
            }
            catch (e) {
                throw new exceptions_1.MetamaskException(new Error(e.message), {
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
                throw new exceptions_1.WalletException(new Error('You have to pass endpoints.grpc within the options for using Ethereum native wallets'));
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
            yield this.connect();
            try {
                const response = yield this.torus.ethereum.request({
                    method: 'eth_signTypedData_v4',
                    params: [address, eip712json],
                });
                return response || '';
            }
            catch (e) {
                throw new exceptions_1.MetamaskException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.SignTransaction,
                });
            }
        });
    }
    signArbitrary(signer, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            try {
                const signature = yield this.torus.ethereum.request({
                    method: 'personal_sign',
                    params: [(0, sdk_ts_1.toUtf8)(data), signer],
                });
                if (!signature) {
                    throw new exceptions_1.WalletException(new Error('No signature returned'));
                }
                return signature;
            }
            catch (e) {
                throw new exceptions_1.WalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.SignArbitrary,
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
    getEthereumChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            try {
                const response = yield this.torus.ethereum.request({
                    method: 'eth_chainId',
                });
                return response || '';
            }
            catch (e) {
                throw new exceptions_1.MetamaskException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.GetChainId,
                });
            }
        });
    }
    getEthereumTransactionReceipt(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const interval = 1000;
            const transactionReceiptRetry = () => __awaiter(this, void 0, void 0, function* () {
                const receipt = yield this.torus.ethereum.request({
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
                throw new exceptions_1.MetamaskException(new Error(e.message), {
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
}
exports.default = Torus;
//# sourceMappingURL=Torus.js.map