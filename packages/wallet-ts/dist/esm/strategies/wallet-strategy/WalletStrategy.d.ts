import { AccountAddress, ChainId, EthereumChainId } from '@injectivelabs/ts-types';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { TxRaw, TxResponse } from '@injectivelabs/sdk-ts';
import { ConcreteWalletStrategy, onAccountChangeCallback, onChainIdChangeCallback, WalletStrategyArguments } from '../types';
import { Wallet, WalletDeviceType } from '../../types/enums';
export default class WalletStrategy {
    strategies: Record<Wallet, ConcreteWalletStrategy | undefined>;
    wallet: Wallet;
    constructor(args: WalletStrategyArguments);
    getWallet(): Wallet;
    setWallet(wallet: Wallet): void;
    getStrategy(): ConcreteWalletStrategy;
    getAddresses(): Promise<AccountAddress[]>;
    getWalletDeviceType(): Promise<WalletDeviceType>;
    getPubKey(): Promise<string>;
    getEthereumChainId(): Promise<string>;
    getEthereumTransactionReceipt(txHash: string): Promise<void>;
    confirm(address: AccountAddress): Promise<string>;
    disconnectWallet(): Promise<void>;
    sendTransaction(tx: DirectSignResponse | TxRaw, options: {
        address: AccountAddress;
        chainId: ChainId;
        endpoints?: {
            rest: string;
            grpc: string;
            tm?: string;
        };
    }): Promise<TxResponse>;
    sendEthereumTransaction(tx: any, options: {
        address: AccountAddress;
        ethereumChainId: EthereumChainId;
    }): Promise<string>;
    /** @deprecated * */
    signTransaction(data: string | {
        txRaw: TxRaw;
        accountNumber: number;
        chainId: string;
    }, address: AccountAddress): Promise<string | DirectSignResponse>;
    signEip712TypedData(eip712TypedData: string, address: AccountAddress): Promise<string>;
    signCosmosTransaction(transaction: {
        txRaw: TxRaw;
        accountNumber: number;
        chainId: string;
        address: string;
    }): Promise<DirectSignResponse>;
    signArbitrary(signer: string, data: string | Uint8Array): Promise<string | void>;
    onAccountChange(callback: onAccountChangeCallback): void;
    onChainIdChange(callback: onChainIdChangeCallback): void;
    cancelOnChainIdChange(): void;
    cancelAllEvents(): void;
    cancelOnAccountChange(): void;
}
//# sourceMappingURL=WalletStrategy.d.ts.map