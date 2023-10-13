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
const exceptions_1 = require("@injectivelabs/exceptions");
const Metamask_1 = __importDefault(require("./strategies/Metamask"));
const TrustWallet_1 = __importDefault(require("./strategies/TrustWallet"));
const Keplr_1 = __importDefault(require("./strategies/Keplr"));
const Leap_1 = __importDefault(require("./strategies/Leap"));
const Trezor_1 = __importDefault(require("./strategies/Trezor"));
const LedgerLive_1 = __importDefault(require("./strategies/Ledger/LedgerLive"));
const LedgerLegacy_1 = __importDefault(require("./strategies/Ledger/LedgerLegacy"));
const Torus_1 = __importDefault(require("./strategies/Torus"));
const Cosmostation_1 = __importDefault(require("./strategies/Cosmostation"));
const enums_1 = require("../../types/enums");
const utils_1 = require("./utils");
const cosmos_1 = require("../../utils/wallets/cosmos");
const getInitialWallet = (args) => {
    if (args.wallet) {
        return args.wallet;
    }
    return args.ethereumOptions ? enums_1.Wallet.Metamask : enums_1.Wallet.Keplr;
};
const ethereumWalletsDisabled = (args) => {
    const { ethereumOptions } = args;
    if (!ethereumOptions) {
        return true;
    }
    const { rpcUrl, ethereumChainId } = ethereumOptions;
    if (!ethereumChainId) {
        return true;
    }
    if (!rpcUrl) {
        return true;
    }
    return false;
};
const createStrategy = ({ args, wallet, }) => {
    const disabledWallets = args.disabledWallets || [];
    if (disabledWallets.includes(wallet)) {
        return undefined;
    }
    /**
     * If we only want to use Cosmos Native Wallets
     * We are not creating strategies for Ethereum Native Wallets
     */
    if ((0, utils_1.isEthWallet)(wallet) && ethereumWalletsDisabled(args)) {
        return undefined;
    }
    const ethWalletArgs = {
        chainId: args.chainId,
        ethereumOptions: args.ethereumOptions,
    };
    switch (wallet) {
        case enums_1.Wallet.Metamask:
            return new Metamask_1.default(ethWalletArgs);
        case enums_1.Wallet.TrustWallet:
            return new TrustWallet_1.default(ethWalletArgs);
        case enums_1.Wallet.Ledger:
            return new LedgerLive_1.default(ethWalletArgs);
        case enums_1.Wallet.LedgerLegacy:
            return new LedgerLegacy_1.default(ethWalletArgs);
        case enums_1.Wallet.Trezor:
            return new Trezor_1.default(ethWalletArgs);
        case enums_1.Wallet.Torus:
            return new Torus_1.default(ethWalletArgs);
        case enums_1.Wallet.Keplr:
            return new Keplr_1.default(Object.assign({}, args));
        case enums_1.Wallet.Cosmostation:
            return new Cosmostation_1.default(Object.assign({}, args));
        case enums_1.Wallet.Leap:
            return new Leap_1.default(Object.assign({}, args));
        default:
            return undefined;
    }
};
const createStrategies = (args) => {
    return Object.values(enums_1.Wallet).reduce((strategies, wallet) => (Object.assign(Object.assign({}, strategies), { [wallet]: createStrategy({ wallet, args }) })), {});
};
class WalletStrategy {
    constructor(args) {
        this.strategies = createStrategies(args);
        this.wallet = getInitialWallet(args);
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
    getStrategy() {
        if (!this.strategies[this.wallet]) {
            throw new exceptions_1.GeneralException(new Error(`Wallet ${this.wallet} is not enabled/available!`));
        }
        return this.strategies[this.wallet];
    }
    getAddresses() {
        return this.getStrategy().getAddresses();
    }
    getWalletDeviceType() {
        return this.getStrategy().getWalletDeviceType();
    }
    getPubKey() {
        return this.getStrategy().getPubKey();
    }
    getEthereumChainId() {
        return this.getStrategy().getEthereumChainId();
    }
    getEthereumTransactionReceipt(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().getEthereumTransactionReceipt(txHash);
        });
    }
    confirm(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().confirm(address);
        });
    }
    disconnectWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            const strategy = this.getStrategy();
            if (strategy.disconnect !== undefined) {
                yield strategy.disconnect();
            }
            this.wallet = enums_1.Wallet.Metamask;
        });
    }
    sendTransaction(tx, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().sendTransaction(tx, options);
        });
    }
    sendEthereumTransaction(tx /* TODO */, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().sendEthereumTransaction(tx, options);
        });
    }
    /** @deprecated * */
    signTransaction(data, address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().signTransaction(data, address);
        });
    }
    signEip712TypedData(eip712TypedData, address) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, cosmos_1.isCosmosWallet)(this.wallet)) {
                throw new exceptions_1.WalletException(new Error(`You can't sign Ethereum Transaction using ${this.wallet}`));
            }
            return this.getStrategy().signEip712TypedData(eip712TypedData, address);
        });
    }
    signCosmosTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, utils_1.isEthWallet)(this.wallet)) {
                throw new exceptions_1.WalletException(new Error(`You can't sign Cosmos Transaction using ${this.wallet}`));
            }
            return this.getStrategy().signCosmosTransaction(transaction);
        });
    }
    signArbitrary(signer, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getStrategy().signArbitrary) {
                return this.getStrategy().signArbitrary(signer, data);
            }
        });
    }
    onAccountChange(callback) {
        if (this.getStrategy().onAccountChange) {
            return this.getStrategy().onAccountChange(callback);
        }
    }
    onChainIdChange(callback) {
        if (this.getStrategy().onChainIdChange) {
            return this.getStrategy().onChainIdChange(callback);
        }
    }
    cancelOnChainIdChange() {
        if (this.getStrategy().cancelOnChainIdChange) {
            return this.getStrategy().cancelOnChainIdChange();
        }
    }
    cancelAllEvents() {
        if (this.getStrategy().cancelAllEvents) {
            return this.getStrategy().cancelAllEvents();
        }
    }
    cancelOnAccountChange() {
        if (this.getStrategy().cancelOnAccountChange) {
            return this.getStrategy().cancelOnAccountChange();
        }
    }
}
exports.default = WalletStrategy;
//# sourceMappingURL=WalletStrategy.js.map