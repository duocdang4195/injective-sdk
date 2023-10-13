import { AccountAddress, EthereumChainId, TransactionOptions } from '@injectivelabs/ts-types';
import { ContractTxFunctionObj } from '../types';
import BaseContract from '../BaseContract';
export declare class PeggyContract extends BaseContract<any> {
    static contractName: string;
    constructor({ ethereumChainId, address, provider, }: {
        ethereumChainId: EthereumChainId;
        provider: any;
        address: string;
    });
    sendToInjective({ data, amount, address, contractAddress, transactionOptions, }: {
        data?: any;
        amount: string;
        address: AccountAddress;
        contractAddress: string;
        transactionOptions: TransactionOptions;
    }): ContractTxFunctionObj<string>;
    deployERC20({ name, denom, symbol, decimals, }: {
        denom: string;
        name: string;
        symbol: string;
        decimals?: number;
        transactionOptions: TransactionOptions;
    }): ContractTxFunctionObj<string>;
}
//# sourceMappingURL=Peggy.d.ts.map