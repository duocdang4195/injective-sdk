"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMessageSignerWalletAdapter = exports.WormholeSource = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
Object.defineProperty(exports, "BaseMessageSignerWalletAdapter", { enumerable: true, get: function () { return wallet_adapter_base_1.BaseMessageSignerWalletAdapter; } });
var WormholeSource;
(function (WormholeSource) {
    WormholeSource["Ethereum"] = "ethereum";
    WormholeSource["Arbitrum"] = "arbitrum";
    WormholeSource["Solana"] = "solana";
    WormholeSource["Polygon"] = "polygon";
    WormholeSource["Sui"] = "sui";
    WormholeSource["Klaytn"] = "klaytn";
    WormholeSource["Aptos"] = "aptos";
})(WormholeSource = exports.WormholeSource || (exports.WormholeSource = {}));
//# sourceMappingURL=types.js.map