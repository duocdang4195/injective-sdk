import { Web3Exception, GeneralException, UnspecifiedErrorCode, } from '@injectivelabs/exceptions';
import abi from './abi/peggy';
import { Contract } from '../types';
import BaseContract from '../BaseContract';
import { PEGGY_TRANSFER_DEFAULT_GAS_LIMIT } from './../utils';
export class PeggyContract extends BaseContract {
    static contractName = 'Peggy';
    constructor({ ethereumChainId, address, provider, }) {
        super({
            abi: JSON.stringify(abi),
            ethereumChainId,
            provider,
            address,
        });
    }
    sendToInjective({ data = '', amount, address, contractAddress, transactionOptions, }) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                throw new Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: UnspecifiedErrorCode,
                    contextModule: Contract.Peggy,
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('sendToInjective', [
                    contractAddress,
                    address,
                    amount,
                    data,
                ]);
            },
            async sendTransactionAsync() {
                throw new GeneralException(new Error('Not implemented'));
            },
            async estimateGasAsync() {
                try {
                    const response = await contract.estimateGas.sendToInjective(contractAddress, address, amount, data, {
                        value: 0,
                        from: transactionOptions.from,
                    });
                    return parseInt(response.toString(), 10);
                }
                catch (e) {
                    return PEGGY_TRANSFER_DEFAULT_GAS_LIMIT;
                }
            },
        };
    }
    deployERC20({ name, denom, symbol, decimals = 18, }) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                throw new Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: UnspecifiedErrorCode,
                    contextModule: Contract.Peggy,
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('deployERC20', [
                    denom,
                    name,
                    symbol,
                    decimals,
                ]);
            },
            async sendTransactionAsync() {
                throw new GeneralException(new Error('Not implemented'));
            },
            async estimateGasAsync() {
                const response = await contract.estimateGas.deployERC20(denom, name, symbol, decimals);
                return parseInt(response.toString(), 10);
            },
        };
    }
}
//# sourceMappingURL=Peggy.js.map