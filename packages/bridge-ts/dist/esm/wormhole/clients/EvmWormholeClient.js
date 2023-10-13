import { Network } from '@injectivelabs/networks';
import { getGrpcTransport } from '@injectivelabs/sdk-ts';
import { GeneralException } from '@injectivelabs/exceptions';
import { cosmos, approveEth, redeemOnEth, getSignedVAA, transferFromEth, hexToUint8Array, uint8ArrayToHex, redeemOnEthNative, getEmitterAddressEth, getSignedVAAWithRetry, transferFromEthNative, parseSequenceFromLogEth, getIsTransferCompletedEth, ethers_contracts as EthersContracts, CHAIN_ID_POLYGON, getForeignAssetEth, tryNativeToUint8Array, } from '@injectivelabs/wormhole-sdk';
import { BigNumber, sleep } from '@injectivelabs/utils';
import { zeroPad } from 'ethers/lib/utils';
import { WORMHOLE_CHAINS, WORMHOLE_NATIVE_WRAPPED_ADDRESS } from '../constants';
import { WormholeSource } from '../types';
import { getEvmChainName, getContractAddresses } from '../utils';
import { BaseWormholeClient } from '../WormholeClient';
const TIMEOUT_BETWEEN_RETRIES = 5000;
export class EvmWormholeClient extends BaseWormholeClient {
    wormholeSource = WormholeSource.Ethereum;
    provider;
    singletonProvider;
    constructor({ network, wormholeRpcUrl, wormholeSource, provider, }) {
        super({ network, wormholeRpcUrl });
        this.wormholeSource = wormholeSource;
        this.provider = provider;
    }
    get wormholeChainId() {
        const { wormholeSource } = this;
        switch (wormholeSource) {
            case WormholeSource.Ethereum:
                return WORMHOLE_CHAINS.ethereum;
            case WormholeSource.Arbitrum:
                return WORMHOLE_CHAINS.arbitrum;
            case WormholeSource.Polygon:
                return WORMHOLE_CHAINS.polygon;
            default:
                return WORMHOLE_CHAINS.ethereum;
        }
    }
    get evmChainId() {
        const { wormholeSource } = this;
        switch (wormholeSource) {
            case WormholeSource.Ethereum:
                return 1;
            case WormholeSource.Arbitrum:
                return 42161;
            case WormholeSource.Polygon:
                return 137;
            default:
                return 1;
        }
    }
    async getAddress() {
        const signer = await this.getProviderAndChainIdCheck();
        return signer.getAddress();
    }
    async getBalance(address, tokenAddress) {
        const signer = await this.getProviderAndChainIdCheck();
        try {
            if (!tokenAddress) {
                return (await signer.provider.getBalance(address)).toString();
            }
            if (isNativeTokenAddress(tokenAddress)) {
                return (await signer.provider.getBalance(address)).toString();
            }
            const tokenContract = EthersContracts.ERC20__factory.connect(tokenAddress, signer);
            return (await tokenContract.balanceOf(address)).toString();
        }
        catch (e) {
            return '0';
        }
    }
    async transfer(args) {
        return args.tokenAddress && !isNativeTokenAddress(args.tokenAddress)
            ? this.transferToken(args)
            : this.transferNative(args);
    }
    async getTxResponse(txHash) {
        const signer = await this.getProviderAndChainIdCheck();
        try {
            const txResponse = await signer.provider.getTransactionReceipt(txHash);
            if (!txResponse) {
                throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
            return {
                ...txResponse,
                txHash: txResponse.transactionHash,
            };
        }
        catch (e) {
            throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
        }
    }
    async getSignedVAA(txResponse) {
        const { network, wormholeSource, wormholeRpcUrl, wormholeChainId } = this;
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        const sequence = parseSequenceFromLogEth(txResponse, associatedChainContractAddresses.core);
        const emitterAddress = await getEmitterAddressEth(associatedChainContractAddresses.token_bridge);
        try {
            const { vaaBytes: signedVAA } = await getSignedVAAWithRetry([wormholeRpcUrl], wormholeChainId, emitterAddress, sequence, {
                transport: getGrpcTransport(),
            }, TIMEOUT_BETWEEN_RETRIES);
            return Buffer.from(signedVAA).toString('base64');
        }
        catch (e) {
            throw new GeneralException(new Error(`Could not get the signed VAA. Is the transaction confirmed?`));
        }
    }
    async getSignedVAANoRetry(txResponse) {
        const { network, wormholeSource, wormholeRpcUrl, wormholeChainId } = this;
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        const sequence = parseSequenceFromLogEth(txResponse, associatedChainContractAddresses.core);
        const emitterAddress = await getEmitterAddressEth(associatedChainContractAddresses.token_bridge);
        try {
            const { vaaBytes: signedVAA } = await getSignedVAA(wormholeRpcUrl, wormholeChainId, emitterAddress, sequence, {
                transport: getGrpcTransport(),
            });
            return Buffer.from(signedVAA).toString('base64');
        }
        catch (e) {
            throw new GeneralException(new Error(`Could not get the signed VAA. Is the transaction confirmed?`));
        }
    }
    async getIsTransferCompleted(signedVAA /* in base 64 */) {
        const { network, wormholeSource } = this;
        const signer = await this.getProviderAndChainIdCheck();
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        return getIsTransferCompletedEth(associatedChainContractAddresses.token_bridge, signer, Buffer.from(signedVAA, 'base64'));
    }
    async getIsTransferCompletedRetry(signedVAA /* in base 64 */) {
        const RETRIES = 2;
        for (let i = 0; i < RETRIES; i += 1) {
            if (await this.getIsTransferCompleted(signedVAA)) {
                return true;
            }
            await sleep(TIMEOUT_BETWEEN_RETRIES);
        }
        return false;
    }
    async redeem({ signedVAA, }) {
        const { network, wormholeSource, wormholeChainId } = this;
        const signer = await this.getProviderAndChainIdCheck();
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        return redeemOnEth(associatedChainContractAddresses.token_bridge, signer, Buffer.from(signedVAA, 'base64'), {
            ...(wormholeChainId === CHAIN_ID_POLYGON && {
                gasLimit: '300000',
                type: 0,
            }),
        });
    }
    async redeemNative({ signedVAA, }) {
        const { network, wormholeSource, wormholeChainId } = this;
        const signer = await this.getProviderAndChainIdCheck();
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        return redeemOnEthNative(associatedChainContractAddresses.token_bridge, signer, Buffer.from(signedVAA, 'base64'), {
            ...(wormholeChainId === CHAIN_ID_POLYGON && {
                gasLimit: '300000',
                type: 0,
            }),
        });
    }
    async getForeignAsset(originChain, originAddress) {
        const { network, wormholeSource } = this;
        const signer = await this.getProviderAndChainIdCheck();
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        const originAssetBinary = tryNativeToUint8Array(originAddress, originChain);
        const targetAsset = await getForeignAssetEth(associatedChainContractAddresses.token_bridge, signer, originChain, originAssetBinary);
        return targetAsset || '';
    }
    async getTokenAllowance({ address, tokenAddress, }) {
        const { network, wormholeSource } = this;
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        const signer = await this.getProviderAndChainIdCheck();
        const tokenContract = EthersContracts.ERC20__factory.connect(tokenAddress, signer);
        return (await tokenContract.allowance(address, associatedChainContractAddresses.token_bridge)).toString();
    }
    async transferToken(args) {
        const { network, wormholeRpcUrl, wormholeSource } = this;
        const { amount, recipient, tokenAddress } = args;
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        if (!tokenAddress) {
            throw new GeneralException(new Error(`Please provide tokenAddress`));
        }
        if (!recipient) {
            throw new GeneralException(new Error(`Please provide recipient`));
        }
        const signer = await this.getProviderAndChainIdCheck();
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        const allowance = await this.getTokenAllowance({
            address: await signer.getAddress(),
            tokenAddress,
        });
        if (new BigNumber(allowance).lt(amount)) {
            await approveEth(associatedChainContractAddresses.token_bridge, tokenAddress, signer, new BigNumber(2).pow(256).minus(1).toFixed());
        }
        const transferReceipt = await transferFromEth(associatedChainContractAddresses.token_bridge, signer, tokenAddress, amount, WORMHOLE_CHAINS.injective, hexToUint8Array(uint8ArrayToHex(zeroPad(cosmos.canonicalAddress(recipient), 32))));
        if (!transferReceipt) {
            throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
        }
        return {
            txHash: transferReceipt.transactionHash,
            ...transferReceipt,
        };
    }
    async transferNative(args) {
        const { network, wormholeRpcUrl, wormholeSource } = this;
        const { amount, recipient } = args;
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        if (!recipient) {
            throw new GeneralException(new Error(`Please provide recipient`));
        }
        const signer = await this.getProviderAndChainIdCheck();
        const { associatedChainContractAddresses } = getContractAddresses(network, wormholeSource);
        const transferReceipt = await transferFromEthNative(associatedChainContractAddresses.token_bridge, signer, amount, WORMHOLE_CHAINS.injective, hexToUint8Array(uint8ArrayToHex(zeroPad(cosmos.canonicalAddress(recipient), 32))));
        if (!transferReceipt) {
            throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
        }
        return {
            txHash: transferReceipt.transactionHash,
            ...transferReceipt,
        };
    }
    async getProvider() {
        const { provider } = this;
        if (this.singletonProvider) {
            return this.singletonProvider;
        }
        this.singletonProvider =
            provider instanceof Function ? await provider() : provider;
        return this.singletonProvider;
    }
    async getProviderAndChainIdCheck() {
        const provider = await this.getProvider();
        const signer = provider.getSigner();
        const chainId = await signer.getChainId();
        /**
         * Trigger network change on Metamask and re-fetch the
         * provider again so it has the updated chainId
         */
        if (chainId !== this.evmChainId) {
            const chainIdToHex = this.evmChainId.toString(16);
            try {
                const metamaskProvider = window.ethereum;
                // Set up a race between `wallet_switchEthereumChain` & the `chainChanged` event
                // to ensure the chain has been switched. This is because there could be a case
                // where a wallet may not resolve the `wallet_switchEthereumChain` method, or
                // resolves slower than `chainChanged`.
                await Promise.race([
                    metamaskProvider.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: `0x${chainIdToHex}` }],
                    }),
                    new Promise((resolve) => metamaskProvider.on('change', ({ chain }) => {
                        if (chain?.id === chainIdToHex) {
                            resolve();
                        }
                    })),
                ]);
                return signer;
            }
            catch (e) {
                throw new GeneralException(new Error(`Please switch to the ${getEvmChainName(this.evmChainId)} Network on Metamask`));
            }
        }
        return signer;
    }
}
export const isNativeTokenAddress = (tokenAddress) => {
    const wrappedNativeWrappedTokensMap = {
        ...WORMHOLE_NATIVE_WRAPPED_ADDRESS(Network.Mainnet),
        ...WORMHOLE_NATIVE_WRAPPED_ADDRESS(Network.Testnet),
        ...WORMHOLE_NATIVE_WRAPPED_ADDRESS(Network.Devnet),
    };
    const wrappedTokenAddresses = Object.values(wrappedNativeWrappedTokensMap);
    return tokenAddress && wrappedTokenAddresses.includes(tokenAddress);
};
/** in seconds */
export const EVM_NETWORK_BLOCK_TIME = {
    [WormholeSource.Ethereum]: 12,
    [WormholeSource.Polygon]: 2,
    [WormholeSource.Arbitrum]: 15,
};
//# sourceMappingURL=EvmWormholeClient.js.map