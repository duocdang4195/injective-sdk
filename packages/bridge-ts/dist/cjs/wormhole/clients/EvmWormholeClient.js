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
exports.EVM_NETWORK_BLOCK_TIME = exports.isNativeTokenAddress = exports.EvmWormholeClient = void 0;
const networks_1 = require("@injectivelabs/networks");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exceptions_1 = require("@injectivelabs/exceptions");
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
const utils_1 = require("@injectivelabs/utils");
const utils_2 = require("ethers/lib/utils");
const constants_1 = require("../constants");
const types_1 = require("../types");
const utils_3 = require("../utils");
const WormholeClient_1 = require("../WormholeClient");
const TIMEOUT_BETWEEN_RETRIES = 5000;
class EvmWormholeClient extends WormholeClient_1.BaseWormholeClient {
    constructor({ network, wormholeRpcUrl, wormholeSource, provider, }) {
        super({ network, wormholeRpcUrl });
        this.wormholeSource = types_1.WormholeSource.Ethereum;
        this.wormholeSource = wormholeSource;
        this.provider = provider;
    }
    get wormholeChainId() {
        const { wormholeSource } = this;
        switch (wormholeSource) {
            case types_1.WormholeSource.Ethereum:
                return constants_1.WORMHOLE_CHAINS.ethereum;
            case types_1.WormholeSource.Arbitrum:
                return constants_1.WORMHOLE_CHAINS.arbitrum;
            case types_1.WormholeSource.Polygon:
                return constants_1.WORMHOLE_CHAINS.polygon;
            default:
                return constants_1.WORMHOLE_CHAINS.ethereum;
        }
    }
    get evmChainId() {
        const { wormholeSource } = this;
        switch (wormholeSource) {
            case types_1.WormholeSource.Ethereum:
                return 1;
            case types_1.WormholeSource.Arbitrum:
                return 42161;
            case types_1.WormholeSource.Polygon:
                return 137;
            default:
                return 1;
        }
    }
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = yield this.getProviderAndChainIdCheck();
            return signer.getAddress();
        });
    }
    getBalance(address, tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = yield this.getProviderAndChainIdCheck();
            try {
                if (!tokenAddress) {
                    return (yield signer.provider.getBalance(address)).toString();
                }
                if ((0, exports.isNativeTokenAddress)(tokenAddress)) {
                    return (yield signer.provider.getBalance(address)).toString();
                }
                const tokenContract = wormhole_sdk_1.ethers_contracts.ERC20__factory.connect(tokenAddress, signer);
                return (yield tokenContract.balanceOf(address)).toString();
            }
            catch (e) {
                return '0';
            }
        });
    }
    transfer(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return args.tokenAddress && !(0, exports.isNativeTokenAddress)(args.tokenAddress)
                ? this.transferToken(args)
                : this.transferNative(args);
        });
    }
    getTxResponse(txHash) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = yield this.getProviderAndChainIdCheck();
            try {
                const txResponse = yield signer.provider.getTransactionReceipt(txHash);
                if (!txResponse) {
                    throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
                }
                return Object.assign(Object.assign({}, txResponse), { txHash: txResponse.transactionHash });
            }
            catch (e) {
                throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
        });
    }
    getSignedVAA(txResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeSource, wormholeRpcUrl, wormholeChainId } = this;
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            const sequence = (0, wormhole_sdk_1.parseSequenceFromLogEth)(txResponse, associatedChainContractAddresses.core);
            const emitterAddress = yield (0, wormhole_sdk_1.getEmitterAddressEth)(associatedChainContractAddresses.token_bridge);
            try {
                const { vaaBytes: signedVAA } = yield (0, wormhole_sdk_1.getSignedVAAWithRetry)([wormholeRpcUrl], wormholeChainId, emitterAddress, sequence, {
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
            const { network, wormholeSource, wormholeRpcUrl, wormholeChainId } = this;
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            const sequence = (0, wormhole_sdk_1.parseSequenceFromLogEth)(txResponse, associatedChainContractAddresses.core);
            const emitterAddress = yield (0, wormhole_sdk_1.getEmitterAddressEth)(associatedChainContractAddresses.token_bridge);
            try {
                const { vaaBytes: signedVAA } = yield (0, wormhole_sdk_1.getSignedVAA)(wormholeRpcUrl, wormholeChainId, emitterAddress, sequence, {
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
            const { network, wormholeSource } = this;
            const signer = yield this.getProviderAndChainIdCheck();
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            return (0, wormhole_sdk_1.getIsTransferCompletedEth)(associatedChainContractAddresses.token_bridge, signer, Buffer.from(signedVAA, 'base64'));
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
    redeem({ signedVAA, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeSource, wormholeChainId } = this;
            const signer = yield this.getProviderAndChainIdCheck();
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            return (0, wormhole_sdk_1.redeemOnEth)(associatedChainContractAddresses.token_bridge, signer, Buffer.from(signedVAA, 'base64'), Object.assign({}, (wormholeChainId === wormhole_sdk_1.CHAIN_ID_POLYGON && {
                gasLimit: '300000',
                type: 0,
            })));
        });
    }
    redeemNative({ signedVAA, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeSource, wormholeChainId } = this;
            const signer = yield this.getProviderAndChainIdCheck();
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            return (0, wormhole_sdk_1.redeemOnEthNative)(associatedChainContractAddresses.token_bridge, signer, Buffer.from(signedVAA, 'base64'), Object.assign({}, (wormholeChainId === wormhole_sdk_1.CHAIN_ID_POLYGON && {
                gasLimit: '300000',
                type: 0,
            })));
        });
    }
    getForeignAsset(originChain, originAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeSource } = this;
            const signer = yield this.getProviderAndChainIdCheck();
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            const originAssetBinary = (0, wormhole_sdk_1.tryNativeToUint8Array)(originAddress, originChain);
            const targetAsset = yield (0, wormhole_sdk_1.getForeignAssetEth)(associatedChainContractAddresses.token_bridge, signer, originChain, originAssetBinary);
            return targetAsset || '';
        });
    }
    getTokenAllowance({ address, tokenAddress, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeSource } = this;
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            const signer = yield this.getProviderAndChainIdCheck();
            const tokenContract = wormhole_sdk_1.ethers_contracts.ERC20__factory.connect(tokenAddress, signer);
            return (yield tokenContract.allowance(address, associatedChainContractAddresses.token_bridge)).toString();
        });
    }
    transferToken(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeRpcUrl, wormholeSource } = this;
            const { amount, recipient, tokenAddress } = args;
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            if (!tokenAddress) {
                throw new exceptions_1.GeneralException(new Error(`Please provide tokenAddress`));
            }
            if (!recipient) {
                throw new exceptions_1.GeneralException(new Error(`Please provide recipient`));
            }
            const signer = yield this.getProviderAndChainIdCheck();
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            const allowance = yield this.getTokenAllowance({
                address: yield signer.getAddress(),
                tokenAddress,
            });
            if (new utils_1.BigNumber(allowance).lt(amount)) {
                yield (0, wormhole_sdk_1.approveEth)(associatedChainContractAddresses.token_bridge, tokenAddress, signer, new utils_1.BigNumber(2).pow(256).minus(1).toFixed());
            }
            const transferReceipt = yield (0, wormhole_sdk_1.transferFromEth)(associatedChainContractAddresses.token_bridge, signer, tokenAddress, amount, constants_1.WORMHOLE_CHAINS.injective, (0, wormhole_sdk_1.hexToUint8Array)((0, wormhole_sdk_1.uint8ArrayToHex)((0, utils_2.zeroPad)(wormhole_sdk_1.cosmos.canonicalAddress(recipient), 32))));
            if (!transferReceipt) {
                throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
            return Object.assign({ txHash: transferReceipt.transactionHash }, transferReceipt);
        });
    }
    transferNative(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, wormholeRpcUrl, wormholeSource } = this;
            const { amount, recipient } = args;
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            if (!recipient) {
                throw new exceptions_1.GeneralException(new Error(`Please provide recipient`));
            }
            const signer = yield this.getProviderAndChainIdCheck();
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, wormholeSource);
            const transferReceipt = yield (0, wormhole_sdk_1.transferFromEthNative)(associatedChainContractAddresses.token_bridge, signer, amount, constants_1.WORMHOLE_CHAINS.injective, (0, wormhole_sdk_1.hexToUint8Array)((0, wormhole_sdk_1.uint8ArrayToHex)((0, utils_2.zeroPad)(wormhole_sdk_1.cosmos.canonicalAddress(recipient), 32))));
            if (!transferReceipt) {
                throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
            return Object.assign({ txHash: transferReceipt.transactionHash }, transferReceipt);
        });
    }
    getProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            const { provider } = this;
            if (this.singletonProvider) {
                return this.singletonProvider;
            }
            this.singletonProvider =
                provider instanceof Function ? yield provider() : provider;
            return this.singletonProvider;
        });
    }
    getProviderAndChainIdCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            const signer = provider.getSigner();
            const chainId = yield signer.getChainId();
            /**
             * Trigger network change on Metamask and re-fetch the
             * provider again so it has the updated chainId
             */
            if (chainId !== this.evmChainId) {
                const chainIdToHex = this.evmChainId.toString(16);
                try {
                    const metamaskProvider = window.ethereum;
                    // Set up a race between `wallet_switchEthereumChain` & the `chainChanged` event
                    // to ensure the chain has been switched. This is because there could be a case
                    // where a wallet may not resolve the `wallet_switchEthereumChain` method, or
                    // resolves slower than `chainChanged`.
                    yield Promise.race([
                        metamaskProvider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: `0x${chainIdToHex}` }],
                        }),
                        new Promise((resolve) => metamaskProvider.on('change', ({ chain }) => {
                            if ((chain === null || chain === void 0 ? void 0 : chain.id) === chainIdToHex) {
                                resolve();
                            }
                        })),
                    ]);
                    return signer;
                }
                catch (e) {
                    throw new exceptions_1.GeneralException(new Error(`Please switch to the ${(0, utils_3.getEvmChainName)(this.evmChainId)} Network on Metamask`));
                }
            }
            return signer;
        });
    }
}
exports.EvmWormholeClient = EvmWormholeClient;
const isNativeTokenAddress = (tokenAddress) => {
    const wrappedNativeWrappedTokensMap = Object.assign(Object.assign(Object.assign({}, (0, constants_1.WORMHOLE_NATIVE_WRAPPED_ADDRESS)(networks_1.Network.Mainnet)), (0, constants_1.WORMHOLE_NATIVE_WRAPPED_ADDRESS)(networks_1.Network.Testnet)), (0, constants_1.WORMHOLE_NATIVE_WRAPPED_ADDRESS)(networks_1.Network.Devnet));
    const wrappedTokenAddresses = Object.values(wrappedNativeWrappedTokensMap);
    return tokenAddress && wrappedTokenAddresses.includes(tokenAddress);
};
exports.isNativeTokenAddress = isNativeTokenAddress;
/** in seconds */
exports.EVM_NETWORK_BLOCK_TIME = {
    [types_1.WormholeSource.Ethereum]: 12,
    [types_1.WormholeSource.Polygon]: 2,
    [types_1.WormholeSource.Arbitrum]: 15,
};
//# sourceMappingURL=EvmWormholeClient.js.map