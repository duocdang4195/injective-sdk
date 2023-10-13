import { CosmosChainId } from '@injectivelabs/ts-types';
import { TxRaw, TxResponse } from '@injectivelabs/sdk-ts';
import type { DirectSignResponse } from '@cosmjs/proto-signing';
import { AminoSignResponse, StdSignDoc } from '@cosmjs/launchpad';
import { ConcreteCosmosWalletStrategy } from '../../types/strategy';
import { WalletDeviceType } from '../../../types/enums';
export default class Keplr implements ConcreteCosmosWalletStrategy {
    chainId: CosmosChainId;
    private keplrWallet;
    constructor(args: {
        chainId: CosmosChainId;
    });
    getWalletDeviceType(): Promise<WalletDeviceType>;
    isChainIdSupported(chainId?: CosmosChainId): Promise<boolean>;
    getAddresses(): Promise<string[]>;
    sendTransaction(transaction: DirectSignResponse | TxRaw): Promise<TxResponse>;
    signTransaction(transaction: {
        txRaw: TxRaw;
        chainId: string;
        accountNumber: number;
        address: string;
    }): Promise<DirectSignResponse>;
    signAminoTransaction(transaction: {
        address: string;
        stdSignDoc: StdSignDoc;
    }): Promise<AminoSignResponse>;
    getPubKey(): Promise<string>;
    private getKeplrWallet;
}
//# sourceMappingURL=Keplr.d.ts.map