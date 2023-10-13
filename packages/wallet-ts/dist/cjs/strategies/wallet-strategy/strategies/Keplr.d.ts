import { ChainId, AccountAddress, EthereumChainId } from '@injectivelabs/ts-types';
import { TxRaw, TxResponse } from '@injectivelabs/sdk-ts';
import type { DirectSignResponse } from '@cosmjs/proto-signing';
import { ConcreteWalletStrategy } from '../../types';
import BaseConcreteStrategy from './Base';
import { WalletDeviceType } from '../../../types/enums';
export default class Keplr extends BaseConcreteStrategy implements ConcreteWalletStrategy {
    private keplrWallet;
    constructor(args: {
        chainId: ChainId;
        endpoints?: {
            rest: string;
            rpc: string;
        };
    });
    getWalletDeviceType(): Promise<WalletDeviceType>;
    getAddresses(): Promise<string[]>;
    confirm(address: AccountAddress): Promise<string>;
    sendEthereumTransaction(_transaction: unknown, _options: {
        address: AccountAddress;
        ethereumChainId: EthereumChainId;
    }): Promise<string>;
    sendTransaction(transaction: DirectSignResponse | TxRaw, options: {
        address: AccountAddress;
        chainId: ChainId;
        endpoints?: {
            rest: string;
        };
    }): Promise<TxResponse>;
    /** @deprecated */
    signTransaction(transaction: {
        txRaw: TxRaw;
        accountNumber: number;
        chainId: string;
    }, injectiveAddress: AccountAddress): Promise<DirectSignResponse>;
    signCosmosTransaction(transaction: {
        txRaw: TxRaw;
        accountNumber: number;
        chainId: string;
        address: string;
    }): Promise<DirectSignResponse>;
    signEip712TypedData(_transaction: string, _address: AccountAddress): Promise<string>;
    signArbitrary(signer: string, data: string | Uint8Array): Promise<string>;
    getEthereumChainId(): Promise<string>;
    getEthereumTransactionReceipt(_txHash: string): Promise<string>;
    getPubKey(): Promise<string>;
    private getKeplrWallet;
}
//# sourceMappingURL=Keplr.d.ts.map