import { WalletErrorActionModule } from '@injectivelabs/exceptions';
export declare enum Wallet {
    Leap = "leap",
    Keplr = "keplr",
    Torus = "torus",
    Ledger = "ledger",
    Trezor = "trezor",
    Metamask = "metamask",
    TrustWallet = "trust-wallet",
    Cosmostation = "cosmostation",
    LedgerLegacy = "ledger-legacy",
    WalletConnect = "wallet-connect",
    CosmostationEth = "cosmostation-eth"
}
export declare enum WalletDeviceType {
    Mobile = "mobile",
    Browser = "browser",
    Hardware = "hardware"
}
export declare const WalletAction: {
    SignTransaction: WalletErrorActionModule.SignTransaction;
    SignEthereumTransaction: WalletErrorActionModule.SignEthereumTransaction;
    SendTransaction: WalletErrorActionModule.SendTransaction;
    SendEthereumTransaction: WalletErrorActionModule.SendEthereumTransaction;
    SignArbitrary: WalletErrorActionModule.SignArbitrary;
    GetAccounts: WalletErrorActionModule.GetAccounts;
    GetNetworkId: WalletErrorActionModule.GetNetworkId;
    GetChainId: WalletErrorActionModule.GetChainId;
    GetEthereumTransactionReceipt: WalletErrorActionModule.GetEthereumTransactionReceipt;
};
//# sourceMappingURL=enums.d.ts.map