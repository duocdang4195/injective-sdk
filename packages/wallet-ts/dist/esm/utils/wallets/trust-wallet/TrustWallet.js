import { WalletException } from '@injectivelabs/exceptions';
import { getTrustWalletProvider } from '../../../strategies/wallet-strategy/strategies/TrustWallet/utils';
export const updateTrustWalletNetwork = async (chainId) => {
    try {
        const provider = (await getTrustWalletProvider());
        if (!provider) {
            throw new WalletException(new Error('Please install Trust Wallet Extension'));
        }
        const chainIdToHex = chainId.toString(16);
        return await Promise.race([
            provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${chainIdToHex}` }],
            }),
            new Promise((resolve) => provider.on('change', ({ chain }) => {
                if (chain?.id === chainIdToHex) {
                    resolve();
                }
            })),
        ]);
    }
    catch (e) {
        throw new WalletException(new Error('Please update your Trust Wallet network'));
    }
};
//# sourceMappingURL=TrustWallet.js.map