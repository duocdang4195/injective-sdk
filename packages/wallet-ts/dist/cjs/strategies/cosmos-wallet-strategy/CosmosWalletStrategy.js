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
exports.cosmosWallets = void 0;
const exceptions_1 = require("@injectivelabs/exceptions");
const enums_1 = require("../../types/enums");
const Keplr_1 = __importDefault(require("./strategies/Keplr"));
const Leap_1 = __importDefault(require("./strategies/Leap"));
const Cosmostation_1 = __importDefault(require("./strategies/Cosmostation"));
const utils_1 = require("../../utils/wallets/cosmos/utils");
exports.cosmosWallets = [enums_1.Wallet.Keplr, enums_1.Wallet.Leap, enums_1.Wallet.Cosmostation];
const createWallet = ({ wallet, args, }) => {
    switch (wallet) {
        case enums_1.Wallet.Keplr:
            return new Keplr_1.default(Object.assign({}, args));
        case enums_1.Wallet.Leap:
            return new Leap_1.default(Object.assign({}, args));
        case enums_1.Wallet.Cosmostation:
            return new Cosmostation_1.default(Object.assign({}, args));
        default:
            throw new exceptions_1.GeneralException(new Error(`The ${wallet} concrete wallet strategy is not supported`));
    }
};
const createWallets = (args) => exports.cosmosWallets.reduce((strategies, wallet) => (Object.assign(Object.assign({}, strategies), { [wallet]: createWallet({ wallet, args }) })), {});
class CosmosWalletStrategy {
    constructor(args) {
        this.strategies = createWallets(args);
        this.wallet = args.wallet || enums_1.Wallet.Keplr;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = (0, utils_1.isCosmosWallet)(wallet) ? wallet : enums_1.Wallet.Keplr;
    }
    getStrategy() {
        if (!this.strategies[this.wallet]) {
            throw new exceptions_1.GeneralException(new Error(`Wallet ${this.wallet} is not enabled/available!`));
        }
        return this.strategies[this.wallet];
    }
    getWalletDeviceType() {
        return this.getStrategy().getWalletDeviceType();
    }
    getPubKey() {
        return this.getStrategy().getPubKey();
    }
    getAddresses() {
        return this.getStrategy().getAddresses();
    }
    isChainIdSupported(chainId) {
        return this.getStrategy().isChainIdSupported(chainId);
    }
    sendTransaction(tx) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().sendTransaction(tx);
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().signTransaction(transaction);
        });
    }
    signAminoTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStrategy().signAminoTransaction(transaction);
        });
    }
}
exports.default = CosmosWalletStrategy;
//# sourceMappingURL=CosmosWalletStrategy.js.map