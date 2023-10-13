import { GeneralException, UnspecifiedErrorCode, Web3Exception, } from '@injectivelabs/exceptions';
import abi from './abi/injective';
import { Contract } from '../types';
import BaseContract from '../BaseContract';
import { ALLOWANCE_DEFAULT_GAS_LIMIT } from '../utils';
export class Erc20Contract extends BaseContract {
    static contractName = 'Erc20';
    constructor({ ethereumChainId, address, provider, }) {
        super({
            abi: JSON.stringify(abi),
            ethereumChainId,
            address,
            provider,
        });
    }
    getBalanceOf(address) {
        const { contract, ethersInterface } = this;
        return {
            async callAsync() {
                return contract.methods.balanceOf(address);
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('balanceOf', [address]);
            },
        };
    }
    getAllowanceOf(address, contractAddress) {
        const { contract, ethersInterface } = this;
        return {
            async callAsync() {
                return contract.methods.allowance(address, contractAddress);
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('allowance', [
                    address,
                    contractAddress,
                ]);
            },
        };
    }
    setAllowanceOf({ amount, contractAddress, transactionOptions, }) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                throw new Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: UnspecifiedErrorCode,
                    contextModule: Contract.Erc20Contract,
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('approve', [
                    contractAddress,
                    amount,
                ]);
            },
            async sendTransactionAsync() {
                throw new GeneralException(new Error('Not implemented'));
            },
            async estimateGasAsync() {
                try {
                    const response = await contract.estimateGas.approve(contractAddress, amount, {
                        value: 0,
                        from: transactionOptions.from,
                    });
                    return parseInt(response.toString(), 10);
                }
                catch (e) {
                    return ALLOWANCE_DEFAULT_GAS_LIMIT;
                }
            },
        };
    }
    transfer({ amount, recipient, }) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                throw new Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: UnspecifiedErrorCode,
                    contextModule: Contract.Erc20Contract,
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('transfer', [
                    recipient,
                    amount,
                ]);
            },
            async sendTransactionAsync() {
                throw new GeneralException(new Error('Not implemented'));
            },
            async estimateGasAsync() {
                const response = await contract.estimateGas.transfer(recipient, amount);
                return parseInt(response.toString(), 10);
            },
        };
    }
    getName() {
        const { contract, ethersInterface } = this;
        return {
            async callAsync() {
                return contract.name();
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('name', []);
            },
        };
    }
    getDecimals() {
        const { contract, ethersInterface } = this;
        return {
            async callAsync() {
                return contract.decimals();
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('decimals', []);
            },
        };
    }
    getSymbol() {
        const { contract, ethersInterface } = this;
        return {
            async callAsync() {
                return contract.symbol();
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('symbol', []);
            },
        };
    }
}
//# sourceMappingURL=Erc20Contract.js.map