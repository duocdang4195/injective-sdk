import { AccountAddress, EthereumChainId, TransactionOptions } from '@injectivelabs/ts-types';
import { ContractFunctionObj, ContractTxFunctionObj } from '../types';
import BaseContract from '../BaseContract';
export declare class Erc20Contract extends BaseContract<any> {
    static contractName: string;
    constructor({ ethereumChainId, address, provider, }: {
        ethereumChainId: EthereumChainId;
        address: string;
        provider: any;
    });
    getBalanceOf(address: AccountAddress): ContractFunctionObj<string>;
    getAllowanceOf(address: AccountAddress, contractAddress: string): ContractFunctionObj<string>;
    setAllowanceOf({ amount, contractAddress, transactionOptions, }: {
        amount: string;
        contractAddress: string;
        transactionOptions: TransactionOptions;
    }): ContractTxFunctionObj<string>;
    transfer({ amount, recipient, }: {
        recipient: string;
        amount: string;
        transactionOptions: TransactionOptions;
    }): ContractTxFunctionObj<string>;
    getName(): ContractFunctionObj<string>;
    getDecimals(): ContractFunctionObj<string>;
    getSymbol(): ContractFunctionObj<string>;
}
//# sourceMappingURL=Erc20Contract.d.ts.map