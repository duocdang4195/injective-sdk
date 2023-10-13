import { Network } from '@injectivelabs/networks';
import { EvmWormholeClient, Provider } from '../clients/EvmWormholeClient';
import { TransferMsgArgs, WormholeClient, WormholeSource } from '..';
import { ethers } from 'ethers';
import { BaseWormholeClient } from '../WormholeClient';
import { ChainId } from '@injectivelabs/wormhole-sdk';
export declare class EvmWormholeClientStrategy extends BaseWormholeClient implements WormholeClient<ethers.ContractReceipt & {
    txHash: string;
}, ethers.providers.TransactionReceipt> {
    wormholeSource: WormholeSource;
    strategies: {
        [key in WormholeSource]?: EvmWormholeClient;
    };
    constructor(args: {
        network: Network;
        wormholeRpcUrl?: string;
        provider: Provider;
        wormholeSource?: WormholeSource;
    });
    setWormholeSource(wormholeSource: WormholeSource): void;
    get strategy(): EvmWormholeClient;
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
    redeem(args: {
        signedVAA: string;
        recipient?: string;
    }): Promise<ethers.ContractReceipt>;
    redeemNative(args: {
        signedVAA: string;
        recipient?: string;
    }): Promise<ethers.ContractReceipt>;
    parseSignedVAA(signedVAA: string): import("@injectivelabs/wormhole-sdk").ParsedVaa;
    getForeignAsset(originChain: ChainId, originAddress: string): Promise<string>;
}
//# sourceMappingURL=EvmWormholeClientStrategy.d.ts.map