import { AccountAddress, CosmosChainId } from '@injectivelabs/ts-types';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { TxResponse, TxRaw } from '@injectivelabs/sdk-ts';
import { AminoSignResponse, StdSignDoc } from '@keplr-wallet/types';
import { Wallet, WalletDeviceType } from '../../types/enums';
import { ConcreteCosmosWalletStrategy, CosmosWalletStrategyArguments } from '../types/strategy';
export declare const cosmosWallets: Wallet[];
export default class CosmosWalletStrategy {
    strategies: Record<Wallet, ConcreteCosmosWalletStrategy | undefined>;
    wallet: Wallet;
    constructor(args: CosmosWalletStrategyArguments);
    getWallet(): Wallet;
    setWallet(wallet: Wallet): void;
    getStrategy(): ConcreteCosmosWalletStrategy;
    getWalletDeviceType(): Promise<WalletDeviceType>;
    getPubKey(): Promise<string>;
    getAddresses(): Promise<AccountAddress[]>;
    isChainIdSupported(chainId?: CosmosChainId): Promise<boolean>;
    sendTransaction(tx: TxRaw | DirectSignResponse): Promise<TxResponse>;
    signTransaction(transaction: {
        txRaw: TxRaw;
        accountNumber: number;
        chainId: string;
        address: string;
    }): Promise<DirectSignResponse>;
    signAminoTransaction(transaction: {
        address: string;
        stdSignDoc: StdSignDoc;
    }): Promise<AminoSignResponse>;
}
//# sourceMappingURL=CosmosWalletStrategy.d.ts.map