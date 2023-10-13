import { AccountAddress, ChainId, EthereumChainId } from '@injectivelabs/ts-types';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { TxRaw, TxResponse } from '@injectivelabs/sdk-ts';
import { ConcreteWalletStrategy, EthereumWalletStrategyArgs } from '../../../types';
import { LedgerDerivationPathType } from '../../types';
import BaseConcreteStrategy from '../Base';
import { WalletDeviceType } from '../../../../types/enums';
export default class LedgerBase extends BaseConcreteStrategy implements ConcreteWalletStrategy {
    private baseDerivationPath;
    private derivationPathType;
    private ledger;
    private ethereumOptions;
    private alchemy;
    constructor(args: EthereumWalletStrategyArgs & {
        derivationPathType: LedgerDerivationPathType;
    });
    getWalletDeviceType(): Promise<WalletDeviceType>;
    getAddresses(): Promise<string[]>;
    confirm(address: AccountAddress): Promise<string>;
    sendEthereumTransaction(txData: any, options: {
        address: string;
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
    signCosmosTransaction(_transaction: {
        txRaw: TxRaw;
        accountNumber: number;
        chainId: string;
        address: string;
    }): Promise<DirectSignResponse>;
    signArbitrary(signer: AccountAddress, data: string | Uint8Array): Promise<string>;
    getEthereumChainId(): Promise<string>;
    getEthereumTransactionReceipt(txHash: string): Promise<string>;
    getPubKey(): Promise<string>;
    private signEthereumTransaction;
    private getWalletForAddress;
    private getAlchemy;
}
//# sourceMappingURL=Base.d.ts.map