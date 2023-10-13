import type { Keplr as Leap } from '@keplr-wallet/types';
import type { OfflineDirectSigner } from '@cosmjs/proto-signing';
import { ChainId, CosmosChainId, TestnetCosmosChainId } from '@injectivelabs/ts-types';
import { TxResponse } from '@injectivelabs/sdk-ts';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
export declare class LeapWallet {
    private chainId;
    private endpoints;
    constructor(chainId: CosmosChainId | TestnetCosmosChainId | ChainId, endpoints?: {
        rest: string;
        rpc?: string;
    });
    getLeapWallet(): Promise<Leap>;
    getAccounts(): Promise<readonly import("@keplr-wallet/types").AccountData[]>;
    getKey(): Promise<{
        name: string;
        algo: string;
        pubKey: Uint8Array;
        address: Uint8Array;
        bech32Address: string;
    }>;
    getOfflineSigner(): Promise<OfflineDirectSigner>;
    /**
     * This method is used to broadcast a transaction to the network.
     * Since it uses the `Sync` mode, it will not wait for the transaction to be included in a block,
     * so we have to make sure the transaction is included in a block after its broadcasted
     *
     * @param txRaw - raw transaction to broadcast
     * @returns tx hash
     */
    broadcastTx(txRaw: CosmosTxV1Beta1Tx.TxRaw): Promise<string>;
    /**
     * This method is used to broadcast a transaction to the network.
     * Since it uses the `Block` mode, and it will wait for the transaction to be included in a block,
     *
     * @param txRaw - raw transaction to broadcast
     * @returns tx hash
     */
    broadcastTxBlock(txRaw: CosmosTxV1Beta1Tx.TxRaw): Promise<string>;
    waitTxBroadcasted(txHash: string, endpoint?: string): Promise<TxResponse>;
    checkChainIdSupport: () => Promise<boolean>;
    private getLeap;
}
//# sourceMappingURL=LeapWallet.d.ts.map