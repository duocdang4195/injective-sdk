import { Network } from '@injectivelabs/networks';
import { TxResponse, MsgExecuteContractCompat } from '@injectivelabs/sdk-ts';
import { ChainId } from '@injectivelabs/wormhole-sdk';
import { TransferMsgArgs, WormholeClient, WormholeSource } from '../types';
import { BaseWormholeClient } from '../WormholeClient';
interface WalletStrategy {
    getAddresses: () => Promise<string[]>;
}
interface MsgBroadcaster {
    broadcast: (params: any) => Promise<TxResponse>;
    broadcastOld: (params: any) => Promise<TxResponse>;
}
interface Provider {
    msgBroadcaster: MsgBroadcaster;
    walletStrategy: WalletStrategy;
}
export declare class InjectiveWormholeClient extends BaseWormholeClient implements WormholeClient<TxResponse, MsgExecuteContractCompat> {
    provider: Provider;
    constructor({ network, wormholeRpcUrl, provider, }: {
        network: Network;
        provider: Provider;
        wormholeRpcUrl?: string;
    });
    getAddress(): Promise<string>;
    getBalance(address: string, tokenAddress?: string): Promise<string>;
    transfer(args: TransferMsgArgs & {
        /**
         * Additional messages that we run before the bridge, an example
         * could be redeeming from the token factory to CW20
         */
        additionalMsgs?: MsgExecuteContractCompat[];
        /**
         * The destination chain where we transfer to
         */
        destination?: WormholeSource;
    }): Promise<TxResponse>;
    getTxResponse(txHash: string): Promise<TxResponse>;
    getSignedVAA(txResponse: TxResponse): Promise<string>;
    getSignedVAANoRetry(txResponse: TxResponse): Promise<string>;
    getIsTransferCompleted(signedVAA: string): Promise<boolean>;
    getIsTransferCompletedRetry(signedVAA: string): Promise<boolean>;
    getForeignAsset(originChain: ChainId, originAddress: string): Promise<string>;
    redeem({ signedVAA, recipient, }: {
        signedVAA: string;
        recipient: string;
    }): Promise<MsgExecuteContractCompat>;
    redeemNative(args: {
        signedVAA: string;
        recipient: string;
    }): Promise<MsgExecuteContractCompat>;
    createWrapped(injectiveAddress: string, signedVAA: string): Promise<MsgExecuteContractCompat>;
    getBridgedAssetBalance(injectiveAddress: string, tokenAddress: string): Promise<{
        address: string;
        balance: string;
    }>;
}
export {};
//# sourceMappingURL=InjectiveWormholeClient.d.ts.map