"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletAction = exports.WalletDeviceType = exports.Wallet = void 0;
const exceptions_1 = require("@injectivelabs/exceptions");
var Wallet;
(function (Wallet) {
    Wallet["Leap"] = "leap";
    Wallet["Keplr"] = "keplr";
    Wallet["Torus"] = "torus";
    Wallet["Ledger"] = "ledger";
    Wallet["Trezor"] = "trezor";
    Wallet["Metamask"] = "metamask";
    Wallet["TrustWallet"] = "trust-wallet";
    Wallet["Cosmostation"] = "cosmostation";
    Wallet["LedgerLegacy"] = "ledger-legacy";
    Wallet["WalletConnect"] = "wallet-connect";
    Wallet["CosmostationEth"] = "cosmostation-eth";
})(Wallet = exports.Wallet || (exports.Wallet = {}));
var WalletDeviceType;
(function (WalletDeviceType) {
    WalletDeviceType["Mobile"] = "mobile";
    WalletDeviceType["Browser"] = "browser";
    WalletDeviceType["Hardware"] = "hardware";
})(WalletDeviceType = exports.WalletDeviceType || (exports.WalletDeviceType = {}));
exports.WalletAction = Object.assign({}, exceptions_1.WalletErrorActionModule);
//# sourceMappingURL=enums.js.map