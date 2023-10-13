"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Erc20Contract = void 0;
const exceptions_1 = require("@injectivelabs/exceptions");
const injective_1 = __importDefault(require("./abi/injective"));
const types_1 = require("../types");
const BaseContract_1 = __importDefault(require("../BaseContract"));
const utils_1 = require("../utils");
class Erc20Contract extends BaseContract_1.default {
    constructor({ ethereumChainId, address, provider, }) {
        super({
            abi: JSON.stringify(injective_1.default),
            ethereumChainId,
            address,
            provider,
        });
    }
    getBalanceOf(address) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    return contract.methods.balanceOf(address);
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('balanceOf', [address]);
            },
        };
    }
    getAllowanceOf(address, contractAddress) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    return contract.methods.allowance(address, contractAddress);
                });
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
                throw new exceptions_1.Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    contextModule: types_1.Contract.Erc20Contract,
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('approve', [
                    contractAddress,
                    amount,
                ]);
            },
            sendTransactionAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    throw new exceptions_1.GeneralException(new Error('Not implemented'));
                });
            },
            estimateGasAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const response = yield contract.estimateGas.approve(contractAddress, amount, {
                            value: 0,
                            from: transactionOptions.from,
                        });
                        return parseInt(response.toString(), 10);
                    }
                    catch (e) {
                        return utils_1.ALLOWANCE_DEFAULT_GAS_LIMIT;
                    }
                });
            },
        };
    }
    transfer({ amount, recipient, }) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                throw new exceptions_1.Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    contextModule: types_1.Contract.Erc20Contract,
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('transfer', [
                    recipient,
                    amount,
                ]);
            },
            sendTransactionAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    throw new exceptions_1.GeneralException(new Error('Not implemented'));
                });
            },
            estimateGasAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    const response = yield contract.estimateGas.transfer(recipient, amount);
                    return parseInt(response.toString(), 10);
                });
            },
        };
    }
    getName() {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    return contract.name();
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('name', []);
            },
        };
    }
    getDecimals() {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    return contract.decimals();
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('decimals', []);
            },
        };
    }
    getSymbol() {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    return contract.symbol();
                });
            },
            getABIEncodedTransactionData() {
                return ethersInterface.encodeFunctionData('symbol', []);
            },
        };
    }
}
exports.Erc20Contract = Erc20Contract;
Erc20Contract.contractName = 'Erc20';
//# sourceMappingURL=Erc20Contract.js.map