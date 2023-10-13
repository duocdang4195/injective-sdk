import type { Keplr, StdSignDoc, AminoSignResponse, OfflineAminoSigner } from '@keplr-wallet/types';
import type { EncodeObject, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { StdFee } from '@cosmjs/stargate';
import { ChainId, CosmosChainId, TestnetCosmosChainId } from '@injectivelabs/ts-types';
import { TxResponse } from '@injectivelabs/sdk-ts';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
export declare class KeplrWallet {
    private chainId;
    private endpoints;
    constructor(chainId: CosmosChainId | TestnetCosmosChainId | ChainId, endpoints?: {
        rest: string;
        rpc?: string;
    });
    static experimentalSuggestChainWithChainData(chainData: any): Promise<void>;
    getKeplrWallet(): Promise<Keplr>;
    experimentalSuggestChain(): Promise<void>;
    getAccounts(): Promise<readonly import("@keplr-wallet/types").AccountData[]>;
    getKey(): Promise<{
        name: string;
        algo: string;
        isNanoLedger: boolean;
        pubKey: Uint8Array;
        address: Uint8Array;
        bech32Address: string;
    }>;
    getOfflineSigner(): Promise<OfflineDirectSigner>;
    getOfflineAminoSigner(): Promise<OfflineAminoSigner>;
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
    signAndBroadcastAminoUsingCosmjs(messages: EncodeObject[], stdFee: StdFee): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
    signEIP712CosmosTx({ eip712, signDoc, }: {
        eip712: any;
        signDoc: StdSignDoc;
    }): Promise<AminoSignResponse>;
    checkChainIdSupport(): Promise<boolean>;
    private getKeplr;
    disableGasCheck(): void;
    enableGasCheck(): void;
}
//# sourceMappingURL=KeplrWallet.d.ts.map