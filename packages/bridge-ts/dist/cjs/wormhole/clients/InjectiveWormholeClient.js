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
exports.InjectiveWormholeClient = void 0;
const networks_1 = require("@injectivelabs/networks");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exceptions_1 = require("@injectivelabs/exceptions");
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
const injective_1 = require("../injective");
const utils_1 = require("@injectivelabs/utils");
const constants_1 = require("../constants");
const types_1 = require("../types");
const utils_2 = require("../utils");
const WormholeClient_1 = require("../WormholeClient");
const TIMEOUT_BETWEEN_RETRIES = 5000;
class InjectiveWormholeClient extends WormholeClient_1.BaseWormholeClient {
    constructor({ network, wormholeRpcUrl, provider, }) {
        super({ network, wormholeRpcUrl });
        this.provider = provider;
    }
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const { provider } = this;
            const [address] = yield provider.walletStrategy.getAddresses();
            return address.startsWith('0x') ? (0, sdk_ts_1.getInjectiveAddress)(address) : address;
        });
    }
    getBalance(address, tokenAddress /* CW20 address on Injective */) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            const endpoints = (0, networks_1.getNetworkEndpoints)(network);
            const chainGrpcBankApi = new sdk_ts_1.ChainGrpcBankApi(endpoints.grpc);
            const { balances } = yield chainGrpcBankApi.fetchBalances(address);
            const balance = balances.find((balance) => tokenAddress
                ? balance.denom.includes(tokenAddress)
                : balance.denom === utils_1.INJ_DENOM);
            return (balance === null || balance === void 0 ? void 0 : balance.amount) || '0';
        });
    }
    transfer(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeRpcUrl, provider } = this;
            const { amount, signer, additionalMsgs = [], recipient: recipientArg, destination = types_1.WormholeSource.Solana, } = args;
            const associatedChain = (0, utils_2.getAssociatedChain)(destination);
            const recipient = (0, utils_2.getAssociatedChainRecipient)(recipientArg, destination);
            if (!args.tokenAddress) {
                throw new exceptions_1.GeneralException(new Error(`Please provide tokenAddress`));
            }
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            if (!recipient) {
                throw new exceptions_1.GeneralException(new Error(`Please provide the associatedChain provider`));
            }
            if (!provider) {
                throw new exceptions_1.GeneralException(new Error(`Please provide Injective wallet provider`));
            }
            if (!signer) {
                throw new exceptions_1.GeneralException(new Error(`Please provide signer`));
            }
            const { injectiveContractAddresses } = (0, utils_2.getContractAddresses)(network, destination);
            const messages = yield (0, injective_1.transferFromInjective)(signer, injectiveContractAddresses.token_bridge, args.tokenAddress, amount, associatedChain, (0, wormhole_sdk_1.tryNativeToUint8Array)(recipient, associatedChain));
            const txResponse = (yield provider.msgBroadcaster.broadcastOld({
                msgs: [...additionalMsgs, ...messages],
                injectiveAddress: signer,
            }));
            if (!txResponse) {
                throw new exceptions_1.GeneralException(new Error('Transaction can not be found!'));
            }
            return txResponse;
        });
    }
    getTxResponse(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            const endpoints = (0, networks_1.getNetworkEndpoints)(network);
            const indexerRestExplorerApi = new sdk_ts_1.IndexerRestExplorerApi(endpoints.indexer);
            try {
                const txResponse = yield indexerRestExplorerApi.fetchTransaction(txHash);
                if (!txResponse) {
                    throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
                }
                return Object.assign(Object.assign({}, txResponse), { txHash: txResponse.hash, height: txResponse.blockNumber, rawLog: JSON.stringify(txResponse.logs || []), timestamp: txResponse.blockTimestamp });
            }
            catch (e) {
                throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
        });
    }
    getSignedVAA(txResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeRpcUrl } = this;
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            const { injectiveContractAddresses } = (0, utils_2.getContractAddresses)(network);
            const sequence = (0, injective_1.parseSequenceFromLogInjective)(txResponse);
            const emitterAddress = yield (0, injective_1.getEmitterAddressInjective)(injectiveContractAddresses.token_bridge);
            try {
                const { vaaBytes: signedVAA } = yield (0, wormhole_sdk_1.getSignedVAAWithRetry)([wormholeRpcUrl], constants_1.WORMHOLE_CHAINS.injective, emitterAddress, sequence, {
                    transport: (0, sdk_ts_1.getGrpcTransport)(),
                }, TIMEOUT_BETWEEN_RETRIES);
                return Buffer.from(signedVAA).toString('base64');
            }
            catch (e) {
                throw new exceptions_1.GeneralException(new Error(`Could not get the signed VAA. Is the transaction confirmed?`));
            }
        });
    }
    getSignedVAANoRetry(txResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeRpcUrl } = this;
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            const { injectiveContractAddresses } = (0, utils_2.getContractAddresses)(network);
            const sequence = (0, injective_1.parseSequenceFromLogInjective)(txResponse);
            const emitterAddress = yield (0, injective_1.getEmitterAddressInjective)(injectiveContractAddresses.token_bridge);
            try {
                const { vaaBytes: signedVAA } = yield (0, wormhole_sdk_1.getSignedVAA)(wormholeRpcUrl, constants_1.WORMHOLE_CHAINS.injective, emitterAddress, sequence, {
                    transport: (0, sdk_ts_1.getGrpcTransport)(),
                });
                return Buffer.from(signedVAA).toString('base64');
            }
            catch (e) {
                throw new exceptions_1.GeneralException(new Error(`Could not get the signed VAA. Is the transaction confirmed?`));
            }
        });
    }
    getIsTransferCompleted(signedVAA /* in base 64 */) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            const endpoints = (0, networks_1.getNetworkEndpoints)(network);
            const { injectiveContractAddresses } = (0, utils_2.getContractAddresses)(network);
            return (0, injective_1.getIsTransferCompletedInjective)(injectiveContractAddresses.token_bridge, Buffer.from(signedVAA, 'base64'), new sdk_ts_1.ChainGrpcWasmApi(endpoints.grpc));
        });
    }
    getIsTransferCompletedRetry(signedVAA /* in base 64 */) {
        return __awaiter(this, void 0, void 0, function* () {
            const RETRIES = 2;
            for (let i = 0; i < RETRIES; i += 1) {
                if (yield this.getIsTransferCompleted(signedVAA)) {
                    return true;
                }
                yield (0, utils_1.sleep)(TIMEOUT_BETWEEN_RETRIES);
            }
            return false;
        });
    }
    getForeignAsset(originChain, originAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            const endpoints = (0, networks_1.getNetworkEndpoints)(network);
            const { injectiveContractAddresses } = (0, utils_2.getContractAddresses)(network);
            const chainGrpcWasmApi = new sdk_ts_1.ChainGrpcWasmApi(endpoints.grpc);
            const originAssetBinary = (0, wormhole_sdk_1.tryNativeToUint8Array)(originAddress, originChain);
            const targetAsset = yield (0, injective_1.getForeignAssetInjective)(injectiveContractAddresses.token_bridge, chainGrpcWasmApi, originChain, originAssetBinary);
            return targetAsset || '';
        });
    }
    redeem({ signedVAA, recipient, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            const { injectiveContractAddresses } = (0, utils_2.getContractAddresses)(network);
            return sdk_ts_1.MsgExecuteContractCompat.fromJSON({
                contractAddress: injectiveContractAddresses.token_bridge,
                sender: recipient,
                msg: {
                    submit_vaa: {
                        data: signedVAA,
                    },
                },
            });
        });
    }
    redeemNative(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.redeem(args);
        });
    }
    createWrapped(injectiveAddress, signedVAA /* in base 64 */) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            const { injectiveContractAddresses } = (0, utils_2.getContractAddresses)(network);
            return sdk_ts_1.MsgExecuteContractCompat.fromJSON({
                contractAddress: injectiveContractAddresses.token_bridge,
                sender: injectiveAddress,
                msg: {
                    submit_vaa: {
                        data: signedVAA,
                    },
                },
            });
        });
    }
    getBridgedAssetBalance(injectiveAddress, tokenAddress /* CW20 address on Injective */) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network } = this;
            const endpoints = (0, networks_1.getNetworkEndpoints)(network);
            const chainGrpcWasmApi = new sdk_ts_1.ChainGrpcWasmApi(endpoints.grpc);
            const response = yield chainGrpcWasmApi.fetchSmartContractState(tokenAddress, Buffer.from(JSON.stringify({
                balance: {
                    address: injectiveAddress,
                },
            })).toString('base64'));
            if (response.data) {
                const state = JSON.parse(Buffer.from(response.data).toString());
                return { address: tokenAddress, balance: state.balance };
            }
            throw new exceptions_1.GeneralException(new Error(`Could not get the balance from the token bridge contract`));
        });
    }
}
exports.InjectiveWormholeClient = InjectiveWormholeClient;
//# sourceMappingURL=InjectiveWormholeClient.js.map