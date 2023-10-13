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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3Composer = void 0;
const ts_types_1 = require("@injectivelabs/ts-types");
const utils_1 = require("@injectivelabs/utils");
const contracts_1 = require("@injectivelabs/contracts");
const constants_1 = require("../../constants");
const utils_2 = require("./utils");
const alchemy_1 = require("../../utils/alchemy");
const alchemy_sdk_1 = require("alchemy-sdk");
/**
 * Preparing and broadcasting
 * Ethereum transactions
 */
class Web3Composer {
    constructor({ ethereumChainId, network, rpc, }) {
        this.rpc = rpc;
        this.ethereumChainId = ethereumChainId;
        this.network = network;
    }
    getSetTokenAllowanceTx({ address, amount, gasPrice, tokenAddress, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ethereumChainId, network } = this;
            const alchemy = yield this.getAlchemy();
            const ethersProvider = yield alchemy.config.getProvider();
            const erc20Contract = new contracts_1.Erc20Contract({
                ethereumChainId,
                provider: ethersProvider,
                address: tokenAddress,
            });
            const contractAddresses = (0, contracts_1.getContractAddressesForNetworkOrThrow)(network);
            const setAllowanceOfContractFunction = erc20Contract.setAllowanceOf({
                amount,
                contractAddress: contractAddresses.peggy,
                transactionOptions: (0, utils_2.getTransactionOptions)({
                    gasPrice: '0',
                    from: address,
                }),
            });
            const data = setAllowanceOfContractFunction.getABIEncodedTransactionData();
            const gas = new utils_1.BigNumberInWei(yield setAllowanceOfContractFunction.estimateGasAsync());
            return {
                from: address,
                to: tokenAddress,
                gas: new utils_1.BigNumberInWei(gas.times(constants_1.GAS_LIMIT_MULTIPLIER).toFixed(0))
                    .decimalPlaces(0)
                    .toNumber()
                    .toString(16),
                maxFeePerGas: new utils_1.BigNumberInWei(gasPrice)
                    .decimalPlaces(0)
                    .toNumber()
                    .toString(16),
                maxPriorityFeePerGas: constants_1.TIP_IN_GWEI.toString(16),
                data,
            };
        });
    }
    getPeggyTransferTx({ address, amount, denom, destinationAddress, gasPrice, data = '', }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, ethereumChainId } = this;
            const alchemy = yield this.getAlchemy();
            const ethersProvider = yield alchemy.config.getProvider();
            const contractAddresses = (0, contracts_1.getContractAddressesForNetworkOrThrow)(network);
            const contractAddress = denom === constants_1.INJ_DENOM
                ? contractAddresses.injective
                : (0, utils_2.peggyDenomToContractAddress)(denom);
            const peggyContractAddress = contractAddresses.peggy;
            const contract = new contracts_1.PeggyContract({
                ethereumChainId,
                provider: ethersProvider,
                address: peggyContractAddress,
            });
            const depositForContractFunction = contract.sendToInjective({
                contractAddress,
                data,
                amount: new utils_1.BigNumberInWei(amount).toFixed(),
                address: `0x${'0'.repeat(24)}${destinationAddress.slice(2)}`,
                transactionOptions: (0, utils_2.getTransactionOptions)({
                    gasPrice: '0',
                    from: address,
                }),
            });
            const abiEncodedData = depositForContractFunction.getABIEncodedTransactionData();
            const gas = new utils_1.BigNumberInWei(yield depositForContractFunction.estimateGasAsync());
            return {
                from: address,
                to: peggyContractAddress,
                gas: new utils_1.BigNumberInWei(gas.times(constants_1.GAS_LIMIT_MULTIPLIER).toFixed(0))
                    .decimalPlaces(0)
                    .toNumber()
                    .toString(16),
                maxFeePerGas: new utils_1.BigNumberInWei(gasPrice)
                    .decimalPlaces(0)
                    .toNumber()
                    .toString(16),
                maxPriorityFeePerGas: constants_1.TIP_IN_GWEI.toString(16),
                data: abiEncodedData,
            };
        });
    }
    getAlchemy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.alchemy) {
                return this.alchemy;
            }
            const { rpc, ethereumChainId } = this;
            this.alchemy = new alchemy_sdk_1.Alchemy({
                apiKey: (0, alchemy_1.getKeyFromRpcUrl)(rpc),
                network: ethereumChainId === ts_types_1.EthereumChainId.Mainnet
                    ? alchemy_sdk_1.Network.ETH_MAINNET
                    : alchemy_sdk_1.Network.ETH_GOERLI,
            });
            return this.alchemy;
        });
    }
}
exports.Web3Composer = Web3Composer;
//# sourceMappingURL=Web3Composer.js.map