import { CosmosChainId } from '@injectivelabs/ts-types';
import { TxRaw, TxResponse } from '@injectivelabs/sdk-ts';
import type { DirectSignResponse } from '@cosmjs/proto-signing';
import { StdSignDoc } from '@keplr-wallet/types';
import { AminoSignResponse } from '@cosmjs/launchpad';
import { WalletDeviceType } from '../../../types/enums';
import { ConcreteCosmosWalletStrategy } from '../../types/strategy';
export default class Leap implements ConcreteCosmosWalletStrategy {
    chainId: CosmosChainId;
    private leapWallet;
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
    signAminoTransaction(_transaction: {
        address: string;
        stdSignDoc: StdSignDoc;
    }): Promise<AminoSignResponse>;
    getPubKey(): Promise<string>;
    private getLeapWallet;
}
//# sourceMappingURL=Leap.d.ts.map