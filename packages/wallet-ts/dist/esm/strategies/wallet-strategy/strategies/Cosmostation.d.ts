import { ChainId, AccountAddress, EthereumChainId } from '@injectivelabs/ts-types';
import { TxResponse } from '@injectivelabs/sdk-ts';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { ConcreteWalletStrategy } from '../../types';
import BaseConcreteStrategy from './Base';
import { WalletDeviceType } from '../../../types/enums';
import { CosmosTxV1Beta1Tx } from '@injectivelabs/sdk-ts';
export default class Cosmostation extends BaseConcreteStrategy implements ConcreteWalletStrategy {
    private provider?;
    constructor(args: {
        chainId: ChainId;
    });
    getWalletDeviceType(): Promise<WalletDeviceType>;
    getAddresses(): Promise<string[]>;
    confirm(address: AccountAddress): Promise<string>;
    sendEthereumTransaction(_transaction: unknown, _options: {
        address: AccountAddress;
        ethereumChainId: EthereumChainId;
    }): Promise<string>;
    sendTransaction(transaction: DirectSignResponse | CosmosTxV1Beta1Tx.TxRaw, _options: {
        address: AccountAddress;
        chainId: ChainId;
    }): Promise<TxResponse>;
    /** @deprecated * */
    signTransaction(transaction: {
        txRaw: CosmosTxV1Beta1Tx.TxRaw;
        chainId: string;
        accountNumber: number;
    }, address: AccountAddress): Promise<DirectSignResponse>;
    signCosmosTransaction(transaction: {
        txRaw: CosmosTxV1Beta1Tx.TxRaw;
        chainId: string;
        address: string;
        accountNumber: number;
    }): Promise<DirectSignResponse>;
    getPubKey(): Promise<string>;
    signEip712TypedData(_eip712TypedData: string, _address: AccountAddress): Promise<string>;
    signArbitrary(signer: string, data: string | Uint8Array): Promise<string>;
    getEthereumChainId(): Promise<string>;
    getEthereumTransactionReceipt(_txHash: string): Promise<string>;
    private getProvider;
}
//# sourceMappingURL=Cosmostation.d.ts.map