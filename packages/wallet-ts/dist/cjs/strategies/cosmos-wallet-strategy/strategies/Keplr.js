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
/* eslint-disable class-methods-use-this */
const ts_types_1 = require("@injectivelabs/ts-types");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exceptions_1 = require("@injectivelabs/exceptions");
const keplr_1 = require("../../../utils/wallets/keplr");
const enums_1 = require("../../../types/enums");
class Keplr {
    constructor(args) {
        this.chainId = args.chainId || ts_types_1.CosmosChainId.Injective;
        this.keplrWallet = new keplr_1.KeplrWallet(args.chainId);
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            const keplrWallet = this.getKeplrWallet();
            const key = yield keplrWallet.getKey();
            return key.isNanoLedger
                ? Promise.resolve(enums_1.WalletDeviceType.Hardware)
                : Promise.resolve(enums_1.WalletDeviceType.Browser);
        });
    }
    isChainIdSupported(chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const keplrWallet = chainId
                ? new keplr_1.KeplrWallet(chainId)
                : this.getKeplrWallet();
            return keplrWallet.checkChainIdSupport();
        });
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            const keplrWallet = this.getKeplrWallet();
            try {
                if (!(yield keplrWallet.checkChainIdSupport())) {
                    yield keplrWallet.experimentalSuggestChain();
                }
                const accounts = yield keplrWallet.getAccounts();
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
    sendTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { keplrWallet } = this;
            const txRaw = (0, sdk_ts_1.createTxRawFromSigResponse)(transaction);
            try {
                return yield keplrWallet.waitTxBroadcasted(yield keplrWallet.broadcastTx(txRaw));
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
            const keplrWallet = this.getKeplrWallet();
            const signer = yield keplrWallet.getOfflineSigner();
            const signDoc = (0, sdk_ts_1.createSignDocFromTransaction)(transaction);
            try {
                return signer.signDirect(transaction.address, (0, sdk_ts_1.createCosmosSignDocFromSignDoc)(signDoc));
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SendTransaction,
                });
            }
        });
    }
    signAminoTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const keplrWallet = this.getKeplrWallet();
            const signer = yield keplrWallet.getOfflineAminoSigner();
            const walletDeviceType = yield this.getWalletDeviceType();
            if (walletDeviceType !== enums_1.WalletDeviceType.Hardware) {
                throw new exceptions_1.CosmosWalletException(new Error('signAminoTransaction is only supported when using Keplr + Ledger'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SignTransaction,
                });
            }
            try {
                return signer.signAmino(transaction.address, transaction.stdSignDoc);
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
            const keplrWallet = this.getKeplrWallet();
            try {
                const key = yield keplrWallet.getKey();
                return Buffer.from(key.pubKey).toString('base64');
            }
            catch (e) {
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.GetAccounts,
                });
            }
        });
    }
    getKeplrWallet() {
        const { keplrWallet } = this;
        if (!keplrWallet) {
            throw new exceptions_1.CosmosWalletException(new Error('Please install the Keplr wallet extension'), {
                code: exceptions_1.UnspecifiedErrorCode,
                type: exceptions_1.ErrorType.WalletNotInstalledError,
                context: enums_1.WalletAction.SignTransaction,
            });
        }
        return keplrWallet;
    }
}
exports.default = Keplr;
//# sourceMappingURL=Keplr.js.map