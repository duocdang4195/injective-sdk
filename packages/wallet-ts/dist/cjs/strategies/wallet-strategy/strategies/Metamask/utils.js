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
exports.getMetamaskProvider = void 0;
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const $window = ((0, sdk_ts_1.isServerSide)()
    ? {}
    : window);
function getMetamaskProvider({ timeout } = { timeout: 3000 }) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = getMetamaskFromWindow();
        if (provider) {
            return provider;
        }
        return listenForMetamaskInitialized({
            timeout,
        });
    });
}
exports.getMetamaskProvider = getMetamaskProvider;
function listenForMetamaskInitialized({ timeout } = { timeout: 3000 }) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const handleInitialization = () => {
                resolve(getMetamaskFromWindow());
            };
            $window.addEventListener('ethereum#initialized', handleInitialization, {
                once: true,
            });
            setTimeout(() => {
                $window.removeEventListener('ethereum#initialized', handleInitialization);
                resolve(null);
            }, timeout);
        });
    });
}
function getMetamaskFromWindow() {
    const injectedProviderExist = typeof window !== 'undefined' && typeof $window.ethereum !== 'undefined';
    // No injected providers exist.
    if (!injectedProviderExist) {
        return;
    }
    if ($window.ethereum.isMetaMask) {
        return $window.ethereum;
    }
    if ($window.providers) {
        return $window.providers.find((p) => p.isMetaMask);
    }
    return;
}
//# sourceMappingURL=utils.js.map