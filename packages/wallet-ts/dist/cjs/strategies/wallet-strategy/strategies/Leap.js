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
const ts_types_1 = require("@injectivelabs/ts-types");
const exceptions_1 = require("@injectivelabs/exceptions");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const leap_1 = require("../../../utils/wallets/leap");
const Base_1 = __importDefault(require("./Base"));
const enums_1 = require("../../../types/enums");
class Leap extends Base_1.default {
    constructor(args) {
        super(args);
        this.chainId = args.chainId || ts_types_1.CosmosChainId.Injective;
        this.leapWallet = new leap_1.LeapWallet(args.chainId, args.endpoints);
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(enums_1.WalletDeviceType.Browser);
        });
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const leapWallet = this.getLeapWallet();
            try {
                if (!(yield leapWallet.checkChainIdSupport())) {
                    throw new exceptions_1.CosmosWalletException(new Error(`The ${chainId} is not supported on Leap.`), { type: exceptions_1.ErrorType.WalletError });
                }
                const accounts = yield leapWallet.getAccounts();
                return accounts.map((account) => account.address);
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.GetAccounts,
                });
            }
        });
    }
    confirm(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
        });
    }
    // eslint-disable-next-line class-methods-use-this
    sendEthereumTransaction(_transaction, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('sendEthereumTransaction is not supported. Leap only supports sending cosmos transactions'), {
                code: exceptions_1.UnspecifiedErrorCode,
                context: enums_1.WalletAction.SendEthereumTransaction,
            });
        });
    }
    sendTransaction(transaction, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { leapWallet } = this;
            const txRaw = (0, sdk_ts_1.createTxRawFromSigResponse)(transaction);
            try {
                return yield leapWallet.waitTxBroadcasted(yield leapWallet.broadcastTx(txRaw), (_a = options.endpoints) === null || _a === void 0 ? void 0 : _a.rest);
            }
            catch (e) {
                if (e instanceof exceptions_1.TransactionException) {
                    throw e;
                }
                throw new exceptions_1.TransactionException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SendTransaction,
                });
            }
        });
    }
    /** @deprecated */
    signTransaction(transaction, injectiveAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.signCosmosTransaction(Object.assign(Object.assign({}, transaction), { address: injectiveAddress }));
        });
    }
    signCosmosTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const leapWallet = this.getLeapWallet();
            const signer = yield leapWallet.getOfflineSigner();
            const signDoc = (0, sdk_ts_1.createSignDocFromTransaction)(transaction);
            try {
                return yield signer.signDirect(transaction.address, (0, sdk_ts_1.createCosmosSignDocFromSignDoc)(signDoc));
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SendTransaction,
                });
            }
        });
    }
    signArbitrary(signer, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const leapWallet = this.getLeapWallet();
            const leap = yield leapWallet.getLeapWallet();
            try {
                const signature = yield leap.signArbitrary(this.chainId, signer, data);
                return signature.signature;
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SignArbitrary,
                });
            }
        });
    }
    signEip712TypedData(_eip712TypedData, _address) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('This wallet does not support signing Ethereum transactions'), {
                code: exceptions_1.UnspecifiedErrorCode,
                context: enums_1.WalletAction.SendTransaction,
            });
        });
    }
    getEthereumChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('getEthereumChainId is not supported on Leap'), {
                code: exceptions_1.UnspecifiedErrorCode,
                context: enums_1.WalletAction.GetChainId,
            });
        });
    }
    getEthereumTransactionReceipt(_txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('getEthereumTransactionReceipt is not supported on Leap'), {
                code: exceptions_1.UnspecifiedErrorCode,
                context: enums_1.WalletAction.GetEthereumTransactionReceipt,
            });
        });
    }
    getPubKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const keplrWallet = this.getLeapWallet();
            const key = yield keplrWallet.getKey();
            return Buffer.from(key.pubKey).toString('base64');
        });
    }
    getLeapWallet() {
        const { leapWallet } = this;
        if (!leapWallet) {
            throw new exceptions_1.CosmosWalletException(new Error('Please install the Leap wallet extension'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletNotInstalledError,
                context: enums_1.WalletAction.SignTransaction,
            });
        }
        return leapWallet;
    }
}
exports.default = Leap;
//# sourceMappingURL=Leap.js.map