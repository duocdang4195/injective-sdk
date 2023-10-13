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
exports.getTrustWalletProvider = void 0;
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const $window = ((0, sdk_ts_1.isServerSide)()
    ? {}
    : window);
function getTrustWalletProvider({ timeout } = { timeout: 3000 }) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = getTrustWalletFromWindow();
        if (provider) {
            return provider;
        }
        return listenForTrustWalletInitialized({
            timeout,
        });
    });
}
exports.getTrustWalletProvider = getTrustWalletProvider;
function listenForTrustWalletInitialized({ timeout } = { timeout: 3000 }) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const handleInitialization = () => {
                resolve(getTrustWalletFromWindow());
            };
            $window.addEventListener('trustwallet#initialized', handleInitialization, {
                once: true,
            });
            setTimeout(() => {
                $window.removeEventListener('trustwallet#initialized', handleInitialization);
                resolve(null);
            }, timeout);
        });
    });
}
function getTrustWalletFromWindow() {
    const injectedProviderExist = typeof window !== 'undefined' &&
        (typeof $window.ethereum !== 'undefined' ||
            typeof $window.trustWallet !== 'undefined');
    // No injected providers exist.
    if (!injectedProviderExist) {
        return;
    }
    if ($window.trustWallet) {
        return $window.trustWallet;
    }
    if ($window.ethereum.isTrust) {
        return $window.ethereum;
    }
    if ($window.providers) {
        return $window.providers.find((p) => p.isTrust);
    }
    return;
}
//# sourceMappingURL=utils.js.map