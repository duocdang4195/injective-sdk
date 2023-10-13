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
exports.PeggyContract = void 0;
const exceptions_1 = require("@injectivelabs/exceptions");
const peggy_1 = __importDefault(require("./abi/peggy"));
const types_1 = require("../types");
const BaseContract_1 = __importDefault(require("../BaseContract"));
const utils_1 = require("./../utils");
class PeggyContract extends BaseContract_1.default {
    constructor({ ethereumChainId, address, provider, }) {
        super({
            abi: JSON.stringify(peggy_1.default),
            ethereumChainId,
            provider,
            address,
        });
    }
    sendToInjective({ data = '', amount, address, contractAddress, transactionOptions, }) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                throw new exceptions_1.Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    contextModule: types_1.Contract.Peggy,
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
            sendTransactionAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    throw new exceptions_1.GeneralException(new Error('Not implemented'));
                });
            },
            estimateGasAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const response = yield contract.estimateGas.sendToInjective(contractAddress, address, amount, data, {
                            value: 0,
                            from: transactionOptions.from,
                        });
                        return parseInt(response.toString(), 10);
                    }
                    catch (e) {
                        return utils_1.PEGGY_TRANSFER_DEFAULT_GAS_LIMIT;
                    }
                });
            },
        };
    }
    deployERC20({ name, denom, symbol, decimals = 18, }) {
        const { contract, ethersInterface } = this;
        return {
            callAsync() {
                throw new exceptions_1.Web3Exception(new Error('You cannot call this contract method as a call'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    contextModule: types_1.Contract.Peggy,
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
            sendTransactionAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    throw new exceptions_1.GeneralException(new Error('Not implemented'));
                });
            },
            estimateGasAsync() {
                return __awaiter(this, void 0, void 0, function* () {
                    const response = yield contract.estimateGas.deployERC20(denom, name, symbol, decimals);
                    return parseInt(response.toString(), 10);
                });
            },
        };
    }
}
exports.PeggyContract = PeggyContract;
PeggyContract.contractName = 'Peggy';
//# sourceMappingURL=Peggy.js.map