"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEthWallet = void 0;
const enums_1 = require("../../types/enums");
const isEthWallet = (wallet) => [
    enums_1.Wallet.Trezor,
    enums_1.Wallet.Torus,
    enums_1.Wallet.Ledger,
    enums_1.Wallet.Metamask,
    enums_1.Wallet.TrustWallet,
    enums_1.Wallet.CosmostationEth,
].includes(wallet);
exports.isEthWallet = isEthWallet;
//# sourceMappingURL=utils.js.map