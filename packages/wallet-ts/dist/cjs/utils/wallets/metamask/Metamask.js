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
exports.updateMetamaskNetwork = exports.getEthersProviderFromMetamask = void 0;
const ethers_1 = require("ethers");
const exceptions_1 = require("@injectivelabs/exceptions");
const utils_1 = require("../../../strategies/wallet-strategy/strategies/Metamask/utils");
const getEthersProviderFromMetamask = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = (yield (0, utils_1.getMetamaskProvider)());
        if (!provider) {
            throw new exceptions_1.WalletException(new Error('Please install Metamask Extension'));
        }
        return new ethers_1.ethers.providers.Web3Provider(provider, 'any');
    }
    catch (e) {
        throw new exceptions_1.WalletException(new Error('Please install Metamask Extension'));
    }
});
exports.getEthersProviderFromMetamask = getEthersProviderFromMetamask;
const updateMetamaskNetwork = (chainId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = (yield (0, utils_1.getMetamaskProvider)());
        if (!provider) {
            throw new exceptions_1.WalletException(new Error('Please install Metamask Extension'));
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
        throw new exceptions_1.WalletException(new Error('Please update your Metamask network'));
    }
});
exports.updateMetamaskNetwork = updateMetamaskNetwork;
//# sourceMappingURL=Metamask.js.map