import { AccountAddress, ChainId, EthereumChainId } from '@injectivelabs/ts-types';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { TxRaw, TxResponse } from '@injectivelabs/sdk-ts';
import { ConcreteWalletStrategy, EthereumWalletStrategyArgs } from '../../types';
import BaseConcreteStrategy from './Base';
import { WalletDeviceType } from '../../../types/enums';
export declare const getNetworkFromChainId: (chainId: EthereumChainId) => {
    host: string;
    networkName: string;
};
export default class Torus extends BaseConcreteStrategy implements ConcreteWalletStrategy {
    private torus;
    private connected;
    constructor(args: EthereumWalletStrategyArgs);
    getWalletDeviceType(): Promise<WalletDeviceType>;
    connect(): Promise<void>;
    getAddresses(): Promise<string[]>;
    confirm(address: AccountAddress): Promise<string>;
    sendEthereumTransaction(transaction: unknown, _options: {
        address: AccountAddress;
        ethereumChainId: EthereumChainId;
    }): Promise<string>;
    sendTransaction(transaction: TxRaw, options: {
        address: AccountAddress;
        chainId: ChainId;
        endpoints?: {
            rest: string;
            grpc: string;
            tm?: string;
        };
    }): Promise<TxResponse>;
    /** @deprecated */
    signTransaction(eip712json: string, address: AccountAddress): Promise<string>;
    signEip712TypedData(eip712json: string, address: AccountAddress): Promise<string>;
    signArbitrary(signer: AccountAddress, data: string | Uint8Array): Promise<string>;
    signCosmosTransaction(_transaction: {
        txRaw: TxRaw;
        accountNumber: number;
        chainId: string;
        address: string;
    }): Promise<DirectSignResponse>;
    getEthereumChainId(): Promise<string>;
    getEthereumTransactionReceipt(txHash: string): Promise<string>;
    getPubKey(): Promise<string>;
    onChainIdChanged(_callback: () => void): void;
    onAccountChange(_callback: (account: AccountAddress) => void): void;
    cancelOnChainIdChange(): void;
    cancelOnAccountChange(): void;
    cancelAllEvents(): void;
}
//# sourceMappingURL=Torus.d.ts.map