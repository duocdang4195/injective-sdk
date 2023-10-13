import { isServerSide } from '@injectivelabs/sdk-ts';
const $window = (isServerSide()
    ? {}
    : window);
export async function getTrustWalletProvider({ timeout } = { timeout: 3000 }) {
    const provider = getTrustWalletFromWindow();
    if (provider) {
        return provider;
    }
    return listenForTrustWalletInitialized({
        timeout,
    });
}
async function listenForTrustWalletInitialized({ timeout } = { timeout: 3000 }) {
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