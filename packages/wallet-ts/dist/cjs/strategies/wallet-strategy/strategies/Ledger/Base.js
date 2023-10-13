"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const ethereumjs_util_1 = require("ethereumjs-util");
const common_1 = require("@ethereumjs/common");
const tx_1 = require("@ethereumjs/tx");
const exceptions_1 = require("@injectivelabs/exceptions");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const constants_1 = require("../../../../utils/constants");
const Base_1 = __importDefault(require("../Base"));
const constants_2 = require("../../constants");
const hw_1 = __importDefault(require("./hw"));
const utils_1 = require("./utils");
const enums_1 = require("../../../../types/enums");
const alchemy_1 = require("../../../../utils/alchemy");
const alchemy_sdk_1 = require("alchemy-sdk");
const getNetworkFromChainId = (chainId) => {
    if (chainId === ts_types_1.EthereumChainId.Goerli) {
        return common_1.Chain.Goerli;
    }
    if (chainId === ts_types_1.EthereumChainId.Kovan) {
        return common_1.Chain.Goerli;
    }
    return common_1.Chain.Mainnet;
};
class LedgerBase extends Base_1.default {
    constructor(args) {
        super(args);
        this.baseDerivationPath = constants_2.DEFAULT_BASE_DERIVATION_PATH;
        this.derivationPathType = args.derivationPathType;
        this.ledger = new hw_1.default();
        this.ethereumOptions = args.ethereumOptions;
    }
    getWalletDeviceType() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(enums_1.WalletDeviceType.Hardware);
        });
    }
    getAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            const { baseDerivationPath, derivationPathType } = this;
            try {
                const accountManager = yield this.ledger.getAccountManager();
                const wallets = yield accountManager.getWallets(baseDerivationPath, derivationPathType);
                return wallets.map((k) => k.address);
            }
            catch (e) {
                throw new exceptions_1.LedgerException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.GetAccounts,
                });
            }
        });
    }
    confirm(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(`0x${Buffer.from(`Confirmation for ${address} at time: ${Date.now()}`).toString('hex')}`);
        });
    }
    sendEthereumTransaction(txData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const signedTransaction = yield this.signEthereumTransaction(txData, options);
            try {
                const alchemy = yield this.getAlchemy();
                const txReceipt = yield alchemy.core.sendTransaction((0, ethereumjs_util_1.addHexPrefix)(signedTransaction.serialize().toString('hex')));
                return txReceipt.hash;
            }
            catch (e) {
                throw new exceptions_1.LedgerException(new Error(e.message), {
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
            const { derivationPath } = yield this.getWalletForAddress(address);
            const object = JSON.parse(eip712json);
            try {
                const ledger = yield this.ledger.getInstance();
                const result = yield ledger.signEIP712HashedMessage(derivationPath, (0, ethereumjs_util_1.bufferToHex)((0, utils_1.domainHash)(object)), (0, ethereumjs_util_1.bufferToHex)((0, utils_1.messageHash)(object)));
                const combined = `${result.r}${result.s}${result.v.toString(16)}`;
                return combined.startsWith('0x') ? combined : `0x${combined}`;
            }
            catch (e) {
                throw new exceptions_1.LedgerException(new Error(e.message), {
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
            try {
                const { derivationPath } = yield this.getWalletForAddress(signer);
                const ledger = yield this.ledger.getInstance();
                const result = yield ledger.signPersonalMessage(derivationPath, Buffer.from((0, sdk_ts_1.toUtf8)(data), 'utf8').toString('hex'));
                const combined = `${result.r}${result.s}${result.v.toString(16)}`;
                return combined.startsWith('0x') ? combined : `0x${combined}`;
            }
            catch (e) {
                throw new exceptions_1.LedgerException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.SignTransaction,
                });
            }
        });
    }
    getEthereumChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            const alchemy = yield this.getAlchemy();
            const alchemyProvider = yield alchemy.config.getProvider();
            return alchemyProvider.network.chainId.toString();
        });
    }
    getEthereumTransactionReceipt(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(txHash);
        });
    }
    // eslint-disable-next-line class-methods-use-this
    getPubKey() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new exceptions_1.WalletException(new Error('You can only fetch PubKey from Cosmos native wallets'));
        });
    }
    signEthereumTransaction(txData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const alchemy = yield this.getAlchemy();
            const chainId = parseInt(options.ethereumChainId.toString(), 10);
            const nonce = yield alchemy.core.getTransactionCount(options.address);
            const common = new common_1.Common({
                chain: getNetworkFromChainId(chainId),
                hardfork: common_1.Hardfork.London,
            });
            const eip1559TxData = {
                from: txData.from,
                data: txData.data,
                to: txData.to,
                nonce: (0, ethereumjs_util_1.addHexPrefix)(nonce.toString(16)),
                gas: (0, ethereumjs_util_1.addHexPrefix)(txData.gas),
                gasLimit: (0, ethereumjs_util_1.addHexPrefix)(txData.gas),
                maxFeePerGas: (0, ethereumjs_util_1.addHexPrefix)(txData.gasPrice || txData.maxFeePerGas),
                maxPriorityFeePerGas: (0, ethereumjs_util_1.addHexPrefix)(txData.maxPriorityFeePerGas || constants_1.TIP_IN_GWEI.toString(16)),
            };
            const tx = tx_1.FeeMarketEIP1559Transaction.fromTxData(eip1559TxData, { common });
            const msg = tx.getMessageToSign(false);
            // const encodedMessage = msg
            const encodedMessageHex = msg.toString('hex');
            try {
                const ledger = yield this.ledger.getInstance();
                const { derivationPath } = yield this.getWalletForAddress(options.address);
                const ledgerService = yield Promise.resolve().then(() => __importStar(require('@ledgerhq/hw-app-eth/lib/services/ledger')));
                const resolution = yield ledgerService.default.resolveTransaction(encodedMessageHex, {}, {});
                const txSig = yield ledger.signTransaction(derivationPath, encodedMessageHex, resolution);
                const signedTxData = Object.assign(Object.assign({}, eip1559TxData), { v: `0x${txSig.v}`, r: `0x${txSig.r}`, s: `0x${txSig.s}` });
                return tx_1.FeeMarketEIP1559Transaction.fromTxData(signedTxData, {
                    common,
                });
            }
            catch (e) {
                throw new exceptions_1.LedgerException(new Error(e.message), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                    contextModule: enums_1.WalletAction.SignEthereumTransaction,
                });
            }
        });
    }
    getWalletForAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const { baseDerivationPath, derivationPathType } = this;
            const accountManager = yield this.ledger.getAccountManager();
            if (!accountManager.hasWalletForAddress(address)) {
                for (let i = 0; i < constants_2.DEFAULT_ADDRESS_SEARCH_LIMIT / constants_2.DEFAULT_NUM_ADDRESSES_TO_FETCH; i += 1) {
                    yield accountManager.getWallets(baseDerivationPath, derivationPathType);
                    if (accountManager.hasWalletForAddress(address)) {
                        return (yield accountManager.getWalletForAddress(address));
                    }
                }
            }
            return (yield accountManager.getWalletForAddress(address));
        });
    }
    getAlchemy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.alchemy) {
                return this.alchemy;
            }
            const { rpcUrl, ethereumChainId } = this.ethereumOptions;
            if (!rpcUrl) {
                throw new exceptions_1.GeneralException(new Error('Please pass rpcUrl within the ethereumOptions'));
            }
            this.alchemy = new alchemy_sdk_1.Alchemy({
                apiKey: (0, alchemy_1.getKeyFromRpcUrl)(rpcUrl),
                network: ethereumChainId === ts_types_1.EthereumChainId.Mainnet
                    ? alchemy_sdk_1.Network.ETH_MAINNET
                    : alchemy_sdk_1.Network.ETH_GOERLI,
            });
            return this.alchemy;
        });
    }
}
exports.default = LedgerBase;
//# sourceMappingURL=Base.js.map