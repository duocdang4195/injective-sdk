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
exports.updateTrustWalletNetwork = void 0;
const exceptions_1 = require("@injectivelabs/exceptions");
const utils_1 = require("../../../strategies/wallet-strategy/strategies/TrustWallet/utils");
const updateTrustWalletNetwork = (chainId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = (yield (0, utils_1.getTrustWalletProvider)());
        if (!provider) {
            throw new exceptions_1.WalletException(new Error('Please install Trust Wallet Extension'));
        }
        const chainIdToHex = chainId.toString(16);
        return yield Promise.race([
            provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${chainIdToHex}` }],
            }),
            new Promise((resolve) => provider.on('change', ({ chain }) => {
                if ((chain === null || chain === void 0 ? void 0 : chain.id) === chainIdToHex) {
                    resolve();
                }
            })),
        ]);
    }
    catch (e) {
        throw new exceptions_1.WalletException(new Error('Please update your Trust Wallet network'));
    }
});
exports.updateTrustWalletNetwork = updateTrustWalletNetwork;
//# sourceMappingURL=TrustWallet.js.map