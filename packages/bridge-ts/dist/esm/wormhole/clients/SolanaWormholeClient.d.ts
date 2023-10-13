import { Network } from '@injectivelabs/networks';
import { ChainId } from '@injectivelabs/wormhole-sdk';
import { PublicKey, Transaction, TransactionResponse } from '@solana/web3.js';
import { TransactionSignatureAndResponse } from '@injectivelabs/wormhole-sdk/lib/cjs/solana';
import { TransferMsgArgs, WormholeClient } from '../types';
import { BaseWormholeClient } from '../WormholeClient';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
export declare class SolanaWormholeClient extends BaseWormholeClient implements WormholeClient<TransactionResponse, Transaction> {
    solanaHostUrl: string;
    provider: PhantomWalletAdapter;
    constructor({ network, provider, solanaHostUrl, wormholeRpcUrl, }: {
        network: Network;
        provider: PhantomWalletAdapter;
        solanaHostUrl: string;
        wormholeRpcUrl?: string;
    });
    getAddress(): Promise<string>;
    getBalance(address: string | PublicKey, tokenAddress?: string): Promise<string>;
    transfer(args: TransferMsgArgs): Promise<TransactionResponse & {
        txHash: string;
    }>;
    getTxResponse(txHash: string): Promise<TransactionResponse>;
    getSignedVAA(txResponse: TransactionResponse): Promise<string>;
    getSignedVAANoRetry(txResponse: TransactionResponse): Promise<string>;
    getIsTransferCompleted(signedVAA: string): Promise<boolean>;
    getIsTransferCompletedRetry(signedVAA: string): Promise<boolean>;
    redeem({ signedVAA, recipient, }: {
        recipient: string;
        signedVAA: string;
    }): Promise<Transaction>;
    redeemNative({ signedVAA, recipient, }: {
        recipient: string;
        signedVAA: string;
    }): Promise<Transaction>;
    getForeignAsset(originChain: ChainId, originAddress: string): Promise<string>;
    postVAAWithRetry({ solanaPubKey, signedVAA, }: {
        solanaPubKey: string;
        signedVAA: string;
    }): Promise<TransactionSignatureAndResponse[]>;
    createAssociatedTokenAddress(tokenAddress: string): Promise<string>;
    signSendAndConfirmTransaction(transaction: Transaction): Promise<TransactionResponse & {
        txHash: string;
    }>;
    private transferToken;
    private transferNative;
    private getProvider;
}
//# sourceMappingURL=SolanaWormholeClient.d.ts.map