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
const exceptions_1 = require("@injectivelabs/exceptions");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const proto_signing_1 = require("@cosmjs/proto-signing");
const extension_client_1 = require("@cosmostation/extension-client");
const cosmos_1 = require("@cosmostation/extension-client/cosmos");
const enums_1 = require("../../../types/enums");
const sdk_ts_2 = require("@injectivelabs/sdk-ts");
const getChainNameFromChainId = (chainId) => {
    const [chainName] = chainId.split('-');
    if (chainName.includes('cosmoshub')) {
        return 'cosmos';
    }
    if (chainName.includes('core')) {
        return 'persistence';
    }
    if (chainName.includes('evmos')) {
        return 'evmos';
    }
    return chainName;
};
class Cosmostation {
    constructor(args) {
        this.chainId = args.chainId;
        this.chainName = getChainNameFromChainId(args.chainId);
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(enums_1.WalletDeviceType.Browser);
        });
    }
    isChainIdSupported(chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualChainId = chainId || this.chainId;
            const provider = yield this.getProvider();
            const supportedChainIds = yield provider.getSupportedChainIds();
            return !!supportedChainIds.official.find((chainId) => chainId === actualChainId);
        });
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainName } = this;
            const provider = yield this.getProvider();
            try {
                const accounts = yield provider.requestAccount(chainName);
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
    sendTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainName } = this;
            const provider = yield this.getProvider();
            const txRaw = (0, sdk_ts_1.createTxRawFromSigResponse)(transaction);
            try {
                const response = yield provider.sendTransaction(chainName, sdk_ts_2.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), cosmos_1.SEND_TRANSACTION_MODE.ASYNC);
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
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainName, chainId } = this;
            const provider = yield this.getProvider();
            const signDoc = (0, sdk_ts_1.createSignDocFromTransaction)(transaction);
            try {
                /* Sign the transaction */
                const signDirectResponse = yield provider.signDirect(chainName, {
                    chain_id: chainId,
                    body_bytes: signDoc.bodyBytes,
                    auth_info_bytes: signDoc.authInfoBytes,
                    account_number: transaction.accountNumber.toString(),
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
    signAminoTransaction(_transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('signAminoTransaction not supported on Cosmostation'));
        });
    }
    getPubKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const { chainName } = this;
            const provider = yield this.getProvider();
            try {
                const account = yield provider.requestAccount(chainName);
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
                });
            }
        });
    }
}
exports.default = Cosmostation;
//# sourceMappingURL=Cosmostation.js.map