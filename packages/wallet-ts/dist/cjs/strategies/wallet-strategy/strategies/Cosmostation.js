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
const proto_signing_1 = require("@cosmjs/proto-signing");
const extension_client_1 = require("@cosmostation/extension-client");
const cosmos_1 = require("@cosmostation/extension-client/cosmos");
const Base_1 = __importDefault(require("./Base"));
const enums_1 = require("../../../types/enums");
const sdk_ts_2 = require("@injectivelabs/sdk-ts");
const INJECTIVE_CHAIN_NAME = 'injective';
class Cosmostation extends Base_1.default {
    constructor(args) {
        super(args);
        this.chainId = args.chainId || ts_types_1.CosmosChainId.Injective;
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(enums_1.WalletDeviceType.Browser);
        });
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            try {
                const accounts = yield provider.requestAccount(INJECTIVE_CHAIN_NAME);
                return [accounts.address];
            }
            catch (e) {
                if (e.code === 4001) {
                    throw new exceptions_1.CosmosWalletException(new Error('The user rejected the request'), {
                        code: exceptions_1.UnspecifiedErrorCode,
                        context: enums_1.WalletAction.GetAccounts,
                    });
                }
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
            throw new exceptions_1.CosmosWalletException(new Error('sendEthereumTransaction is not supported. Cosmostation only supports sending cosmos transactions'), {
                code: exceptions_1.UnspecifiedErrorCode,
                context: enums_1.WalletAction.SendEthereumTransaction,
            });
        });
    }
    sendTransaction(transaction, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            const txRaw = (0, sdk_ts_1.createTxRawFromSigResponse)(transaction);
            try {
                const response = yield provider.sendTransaction(INJECTIVE_CHAIN_NAME, sdk_ts_2.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), cosmos_1.SEND_TRANSACTION_MODE.SYNC);
                return Object.assign(Object.assign({}, response.tx_response), { gasUsed: parseInt((response.tx_response.gas_used || '0'), 10), gasWanted: parseInt((response.tx_response.gas_wanted || '0'), 10), height: parseInt((response.tx_response.height || '0'), 10), txHash: response.tx_response.txhash, rawLog: response.tx_response.raw_log });
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
    /** @deprecated * */
    signTransaction(transaction, address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.signCosmosTransaction(Object.assign(Object.assign({}, transaction), { address }));
        });
    }
    signCosmosTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = this;
            const provider = yield this.getProvider();
            const signDoc = (0, sdk_ts_1.createSignDocFromTransaction)(transaction);
            try {
                /* Sign the transaction */
                const signDirectResponse = yield provider.signDirect(INJECTIVE_CHAIN_NAME, {
                    chain_id: chainId,
                    body_bytes: signDoc.bodyBytes,
                    auth_info_bytes: signDoc.authInfoBytes,
                    account_number: signDoc.accountNumber.toString(),
                }, { fee: true, memo: true });
                return {
                    signed: (0, proto_signing_1.makeSignDoc)(signDirectResponse.signed_doc.body_bytes, signDirectResponse.signed_doc.auth_info_bytes, signDirectResponse.signed_doc.chain_id, parseInt(signDirectResponse.signed_doc.account_number, 10)),
                    signature: {
                        signature: signDirectResponse.signature,
                    },
                };
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SendTransaction,
                });
            }
        });
    }
    getPubKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            try {
                const account = yield provider.requestAccount(INJECTIVE_CHAIN_NAME);
                return Buffer.from(account.publicKey).toString('base64');
            }
            catch (e) {
                if (e.code === 4001) {
                    throw new exceptions_1.CosmosWalletException(new Error('The user rejected the request'), {
                        code: exceptions_1.UnspecifiedErrorCode,
                        context: enums_1.WalletAction.GetAccounts,
                    });
                }
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.GetAccounts,
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
    signArbitrary(signer, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const provider = yield this.getProvider();
                const signature = yield provider.signMessage(INJECTIVE_CHAIN_NAME, signer, (0, sdk_ts_1.toUtf8)(data));
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
    getEthereumChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('getEthereumChainId is not supported on Cosmostation'), {
                code: exceptions_1.UnspecifiedErrorCode,
                context: enums_1.WalletAction.GetChainId,
            });
        });
    }
    getEthereumTransactionReceipt(_txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('getEthereumTransactionReceipt is not supported on Cosmostation'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletError,
                context: enums_1.WalletAction.GetEthereumTransactionReceipt,
            });
        });
    }
    getProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.provider) {
                return this.provider;
            }
            try {
                const provider = yield (0, extension_client_1.cosmos)();
                this.provider = provider;
                return provider;
            }
            catch (e) {
                if (e instanceof extension_client_1.InstallError) {
                    throw new exceptions_1.CosmosWalletException(new Error('Please install the Cosmostation extension'), {
                        code: exceptions_1.UnspecifiedErrorCode,
                        type: exceptions_1.ErrorType.WalletNotInstalledError,
                    });
                }
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                });
            }
        });
    }
}
exports.default = Cosmostation;
//# sourceMappingURL=Cosmostation.js.map