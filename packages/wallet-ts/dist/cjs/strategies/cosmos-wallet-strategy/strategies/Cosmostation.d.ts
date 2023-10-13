import { CosmosChainId } from '@injectivelabs/ts-types';
import { TxResponse } from '@injectivelabs/sdk-ts';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { Cosmos } from '@cosmostation/extension-client';
import { AminoSignResponse, StdSignDoc } from '@keplr-wallet/types';
import { ConcreteCosmosWalletStrategy } from '../../types/strategy';
import { WalletDeviceType } from '../../../types/enums';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
export default class Cosmostation implements ConcreteCosmosWalletStrategy {
    chainName: string;
    provider?: Cosmos;
    chainId: CosmosChainId;
    constructor(args: {
        chainId: CosmosChainId;
    });
    getWalletDeviceType(): Promise<WalletDeviceType>;
    isChainIdSupported(chainId?: CosmosChainId): Promise<boolean>;
    getAddresses(): Promise<string[]>;
    sendTransaction(transaction: DirectSignResponse | CosmosTxV1Beta1Tx.TxRaw): Promise<TxResponse>;
    signTransaction(transaction: {
        txRaw: CosmosTxV1Beta1Tx.TxRaw;
        accountNumber: number;
        chainId: string;
    }): Promise<DirectSignResponse>;
    signAminoTransaction(_transaction: {
        address: string;
        stdSignDoc: StdSignDoc;
    }): Promise<AminoSignResponse>;
    getPubKey(): Promise<string>;
    private getProvider;
}
//# sourceMappingURL=Cosmostation.d.ts.map