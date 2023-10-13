import { Network } from '@injectivelabs/networks';
import { ChainId } from '@injectivelabs/wormhole-sdk';
import { ethers } from 'ethers';
import { WormholeSource, WormholeClient, TransferMsgArgs } from '../types';
import { BaseWormholeClient } from '../WormholeClient';
export type Provider = () => Promise<ethers.providers.Web3Provider> | ethers.providers.Web3Provider;
export declare class EvmWormholeClient extends BaseWormholeClient implements WormholeClient<ethers.ContractReceipt & {
    txHash: string;
}, ethers.providers.TransactionReceipt> {
    wormholeSource: WormholeSource;
    provider: Provider;
    private singletonProvider;
    constructor({ network, wormholeRpcUrl, wormholeSource, provider, }: {
        network: Network;
        wormholeSource: WormholeSource;
        wormholeRpcUrl?: string;
        provider: Provider;
    });
    get wormholeChainId(): ChainId;
    get evmChainId(): number;
    getAddress(): Promise<string>;
    getBalance(address: string, tokenAddress?: string): Promise<string>;
    transfer(args: TransferMsgArgs): Promise<ethers.ContractReceipt & {
        txHash: string;
    }>;
    getTxResponse(txHash: string): Promise<ethers.ContractReceipt & {
        txHash: string;
    }>;
    getSignedVAA(txResponse: ethers.ContractReceipt): Promise<string>;
    getSignedVAANoRetry(txResponse: ethers.ContractReceipt): Promise<string>;
    getIsTransferCompleted(signedVAA: string): Promise<boolean>;
    getIsTransferCompletedRetry(signedVAA: string): Promise<boolean>;
    redeem({ signedVAA, }: {
        signedVAA: string;
        recipient?: string;
    }): Promise<ethers.ContractReceipt>;
    redeemNative({ signedVAA, }: {
        signedVAA: string;
        recipient?: string;
    }): Promise<ethers.ContractReceipt>;
    getForeignAsset(originChain: ChainId, originAddress: string): Promise<string>;
    getTokenAllowance({ address, tokenAddress, }: {
        address: string;
        tokenAddress: string;
    }): Promise<string>;
    private transferToken;
    private transferNative;
    private getProvider;
    private getProviderAndChainIdCheck;
}
export declare const isNativeTokenAddress: (tokenAddress?: string) => boolean | "" | undefined;
/** in seconds */
export declare const EVM_NETWORK_BLOCK_TIME: {
    ethereum: number;
    polygon: number;
    arbitrum: number;
};
//# sourceMappingURL=EvmWormholeClient.d.ts.map