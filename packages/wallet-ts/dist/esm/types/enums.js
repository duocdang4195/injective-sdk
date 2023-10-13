import { WalletErrorActionModule } from '@injectivelabs/exceptions';
export var Wallet;
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
})(Wallet || (Wallet = {}));
export var WalletDeviceType;
(function (WalletDeviceType) {
    WalletDeviceType["Mobile"] = "mobile";
    WalletDeviceType["Browser"] = "browser";
    WalletDeviceType["Hardware"] = "hardware";
})(WalletDeviceType || (WalletDeviceType = {}));
export const WalletAction = { ...WalletErrorActionModule };
//# sourceMappingURL=enums.js.map