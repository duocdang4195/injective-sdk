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
const exceptions_1 = require("@injectivelabs/exceptions");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const leap_1 = require("../../../utils/wallets/leap");
const enums_1 = require("../../../types/enums");
class Leap {
    constructor(args) {
        this.chainId = args.chainId || ts_types_1.CosmosChainId.Injective;
        this.leapWallet = new leap_1.LeapWallet(args.chainId);
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(enums_1.WalletDeviceType.Browser);
        });
    }
    isChainIdSupported(chainId) {
        return __awaiter(this, void 0, void 0, function* () {
            const leapWallet = chainId ? new leap_1.LeapWallet(chainId) : this.getLeapWallet();
            return leapWallet.checkChainIdSupport();
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
    sendTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { leapWallet } = this;
            const txRaw = (0, sdk_ts_1.createTxRawFromSigResponse)(transaction);
            try {
                return yield leapWallet.waitTxBroadcasted(yield leapWallet.broadcastTx(txRaw));
            }
            catch (e) {
                throw new exceptions_1.TransactionException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SendTransaction,
                });
            }
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const leapWallet = this.getLeapWallet();
            const signer = yield leapWallet.getOfflineSigner();
            const signDoc = (0, sdk_ts_1.createSignDocFromTransaction)(transaction);
            try {
                return signer.signDirect(transaction.address, (0, sdk_ts_1.createCosmosSignDocFromSignDoc)(signDoc));
            }
            catch (e) {
                if (e instanceof exceptions_1.TransactionException) {
                    throw e;
                }
                throw new exceptions_1.CosmosWalletException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    context: enums_1.WalletAction.SendTransaction,
                });
            }
        });
    }
    signAminoTransaction(_transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.CosmosWalletException(new Error('signAminoTransaction not supported on Leap'));
        });
    }
    getPubKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const leapWallet = this.getLeapWallet();
            try {
                const key = yield leapWallet.getKey();
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