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
exports.AxelarClient = void 0;
const axelarjs_sdk_1 = require("@axelar-network/axelarjs-sdk");
const ethers_1 = require("ethers");
const utils_1 = require("@injectivelabs/utils");
const exceptions_1 = require("@injectivelabs/exceptions");
const constants_1 = require("./constants");
const erc20Abi_1 = require("./erc20Abi");
class AxelarClient {
    constructor({ environment, gatewayAddress, }) {
        this.axelarJsSDK = new axelarjs_sdk_1.AxelarAssetTransfer({
            environment,
            auth: 'metamask',
        });
        this.axelarGatewayAddress = gatewayAddress;
    }
    getDepositAddress({ sourceChain, destinationChain, address, asset, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.axelarJsSDK.getDepositAddress(sourceChain, destinationChain, address, asset);
        });
    }
    sendTokens(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { axelarGateway, signer } = yield this.getAxelarGateway();
            const transaction = yield axelarGateway.createSendTokenTx(args);
            const response = yield transaction.send(signer);
            return response;
        });
    }
    approveAllowance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const { axelarGateway, signer } = yield this.getAxelarGateway();
            const transaction = yield axelarGateway.createApproveTx({
                tokenAddress: address,
            });
            return transaction.send(signer);
        });
    }
    transferTokens({ receiver, amount, contractAddress, }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateNetwork();
            const { signer } = yield this.getAxelarGateway();
            const contract = new ethers_1.Contract(contractAddress, erc20Abi_1.erc20Abi, signer);
            const feeData = yield signer.getFeeData();
            const tx = yield contract.transfer(receiver, amount, {
                maxFeePerGas: feeData.gasPrice || feeData.maxFeePerGas,
                maxPriorityFeePerGas: feeData.maxPriorityFeePerGas || '0x77359400' /* 2 Gwei in HEX */,
            });
            return tx.wait();
        });
    }
    getBalance(address, contractAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { provider } = yield this.getAxelarGateway();
            const contract = new ethers_1.Contract(contractAddress, erc20Abi_1.erc20Abi, provider);
            const balance = (yield contract.balanceOf(address));
            return new utils_1.BigNumberInWei(balance.toNumber()).toString();
        });
    }
    getTokenAddress(symbol) {
        return __awaiter(this, void 0, void 0, function* () {
            const { axelarGateway } = yield this.getAxelarGateway();
            return axelarGateway.getTokenAddress(symbol);
        });
    }
    getAxelarGateway() {
        return __awaiter(this, void 0, void 0, function* () {
            const { axelarGatewayAddress } = this;
            const provider = window.ethereum;
            if (!provider) {
                throw new exceptions_1.MetamaskException(new Error('Please install Metamask extension'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletNotInstalledError,
                });
            }
            yield this.validateNetwork();
            const web3Provider = new ethers_1.providers.Web3Provider(provider, 'any');
            const signer = web3Provider.getSigner();
            return {
                axelarGateway: new axelarjs_sdk_1.AxelarGateway(axelarGatewayAddress, web3Provider),
                provider: web3Provider,
                signer,
            };
        });
    }
    // eslint-disable-next-line class-methods-use-this
    validateNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = window.ethereum;
            if (!provider) {
                throw new exceptions_1.MetamaskException(new Error('Please install Metamask extension'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletNotInstalledError,
                });
            }
            const web3Provider = new ethers_1.providers.Web3Provider(provider, 'any');
            const network = yield web3Provider.getNetwork();
            if (network.chainId !== constants_1.MOONBEAM_MAINNET_CHAIN_ID) {
                throw new exceptions_1.MetamaskException(new Error('Please switch to the Moonbeam network in Metamask'), {
                    code: exceptions_1.UnspecifiedErrorCode,
                    type: exceptions_1.ErrorType.WalletError,
                });
            }
        });
    }
}
exports.AxelarClient = AxelarClient;
//# sourceMappingURL=AxelarApi.js.map