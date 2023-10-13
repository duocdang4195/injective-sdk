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
exports.SolanaWormholeClient = void 0;
const networks_1 = require("@injectivelabs/networks");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const exceptions_1 = require("@injectivelabs/exceptions");
const wormhole_sdk_1 = require("@injectivelabs/wormhole-sdk");
const spl_token_1 = require("@solana/spl-token");
const injective_1 = require("../injective");
const web3_js_1 = require("@solana/web3.js");
const utils_1 = require("ethers/lib/utils");
const utils_2 = require("@injectivelabs/utils");
const constants_1 = require("../constants");
const types_1 = require("../types");
const utils_3 = require("../utils");
const WormholeClient_1 = require("../WormholeClient");
const TIMEOUT_BETWEEN_RETRIES = 5000;
class SolanaWormholeClient extends WormholeClient_1.BaseWormholeClient {
    constructor({ network, provider, solanaHostUrl, wormholeRpcUrl, }) {
        super({ network, wormholeRpcUrl });
        this.solanaHostUrl = solanaHostUrl;
        this.provider = provider;
    }
    getAddress() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const provider = yield this.getProvider();
                return ((_a = provider.publicKey) === null || _a === void 0 ? void 0 : _a.toString()) || '';
            }
            catch (e) {
                return '';
            }
        });
    }
    getBalance(address, tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tokenAddress) {
                throw new exceptions_1.GeneralException(new Error(`SPL tokens not supported yet`));
            }
            try {
                const { solanaHostUrl } = this;
                const connection = new web3_js_1.Connection(solanaHostUrl || '');
                const balance = (yield connection.getBalance(new web3_js_1.PublicKey(address))).toString();
                return balance;
            }
            catch (e) {
                return '0';
            }
        });
    }
    transfer(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return args.tokenAddress
                ? this.transferToken(args)
                : this.transferNative(args);
        });
    }
    getTxResponse(txHash) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { solanaHostUrl } = this;
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            try {
                const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
                const txResponse = yield connection.getTransaction(txHash);
                if (!txResponse) {
                    throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
                }
                if ((_a = txResponse.meta) === null || _a === void 0 ? void 0 : _a.err) {
                    throw new exceptions_1.GeneralException(new Error((_b = txResponse.meta) === null || _b === void 0 ? void 0 : _b.err.toString()));
                }
                return txResponse;
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
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const sequence = (0, wormhole_sdk_1.parseSequenceFromLogSolana)(txResponse);
            const emitterAddress = yield (0, wormhole_sdk_1.getEmitterAddressSolana)(associatedChainContractAddresses.token_bridge);
            try {
                const { vaaBytes: signedVAA } = yield (0, wormhole_sdk_1.getSignedVAAWithRetry)([wormholeRpcUrl], constants_1.WORMHOLE_CHAINS.solana, emitterAddress, sequence, {
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
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const sequence = (0, wormhole_sdk_1.parseSequenceFromLogSolana)(txResponse);
            const emitterAddress = yield (0, wormhole_sdk_1.getEmitterAddressSolana)(associatedChainContractAddresses.token_bridge);
            try {
                const { vaaBytes: signedVAA } = yield (0, wormhole_sdk_1.getSignedVAA)(wormholeRpcUrl, constants_1.WORMHOLE_CHAINS.solana, emitterAddress, sequence, {
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
            const { solanaHostUrl, network } = this;
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network, types_1.WormholeSource.Solana);
            return (0, wormhole_sdk_1.getIsTransferCompletedSolana)(associatedChainContractAddresses.token_bridge, Buffer.from(signedVAA, 'base64'), connection);
        });
    }
    getIsTransferCompletedRetry(signedVAA /* in base 64 */) {
        return __awaiter(this, void 0, void 0, function* () {
            const RETRIES = 2;
            const TIMEOUT_BETWEEN_RETRIES = 2000;
            for (let i = 0; i < RETRIES; i += 1) {
                if (yield this.getIsTransferCompleted(signedVAA)) {
                    return true;
                }
                yield (0, utils_2.sleep)(TIMEOUT_BETWEEN_RETRIES);
            }
            return false;
        });
    }
    redeem({ signedVAA, recipient, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, solanaHostUrl } = this;
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            return (0, wormhole_sdk_1.redeemOnSolana)(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, new web3_js_1.PublicKey(recipient), Buffer.from(signedVAA, 'base64'));
        });
    }
    redeemNative({ signedVAA, recipient, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, solanaHostUrl } = this;
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            return (0, wormhole_sdk_1.redeemAndUnwrapOnSolana)(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, new web3_js_1.PublicKey(recipient), Buffer.from(signedVAA, 'base64'));
        });
    }
    getForeignAsset(originChain, originAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, solanaHostUrl } = this;
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            const originAssetBinary = (0, wormhole_sdk_1.tryNativeToUint8Array)(originAddress, originChain);
            const targetAsset = yield (0, wormhole_sdk_1.getForeignAssetSolana)(connection, associatedChainContractAddresses.token_bridge, originChain, originAssetBinary);
            return targetAsset || '';
        });
    }
    postVAAWithRetry({ solanaPubKey, signedVAA, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, solanaHostUrl } = this;
            const MAX_VAA_UPLOAD_RETRIES_SOLANA = 5;
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            const provider = yield this.getProvider();
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            return (0, wormhole_sdk_1.postVaaSolanaWithRetry)(connection, provider.signTransaction.bind(provider), associatedChainContractAddresses.core, new web3_js_1.PublicKey(solanaPubKey), Buffer.from(signedVAA, 'base64'), MAX_VAA_UPLOAD_RETRIES_SOLANA);
        });
    }
    createAssociatedTokenAddress(tokenAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { solanaHostUrl, network } = this;
            const endpoints = (0, networks_1.getNetworkEndpoints)(network);
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            const provider = yield this.getProvider();
            const chainGrpcWasmApi = new sdk_ts_1.ChainGrpcWasmApi(endpoints.grpc);
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            const solanaPublicKey = new web3_js_1.PublicKey(provider.publicKey || '');
            const originalAsset = yield (0, injective_1.getOriginalAssetInjective)(tokenAddress, chainGrpcWasmApi);
            const solanaMintKey = new web3_js_1.PublicKey(originalAsset.assetAddress);
            const recipient = yield (0, spl_token_1.getAssociatedTokenAddress)(solanaMintKey, solanaPublicKey);
            // create the associated token account if it doesn't exist
            const associatedAddressInfo = yield connection.getAccountInfo(recipient);
            if (!associatedAddressInfo) {
                const transaction = new web3_js_1.Transaction().add(yield (0, spl_token_1.createAssociatedTokenAccountInstruction)(solanaPublicKey, recipient, solanaPublicKey, solanaMintKey));
                const { blockhash } = yield connection.getLatestBlockhash();
                transaction.recentBlockhash = blockhash;
                transaction.feePayer = solanaPublicKey;
                const signed = yield provider.signTransaction(transaction);
                const transactionId = yield connection.sendRawTransaction(signed.serialize());
                const txResponse = yield (0, utils_3.getSolanaTransactionInfo)(transactionId, connection);
                if (!txResponse) {
                    throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
                }
            }
            return recipient.toString();
        });
    }
    signSendAndConfirmTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const { solanaHostUrl } = this;
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            const provider = yield this.getProvider();
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            const signed = yield provider.signTransaction(transaction);
            const transactionId = yield connection.sendRawTransaction(signed.serialize());
            const txResponse = yield (0, utils_3.getSolanaTransactionInfo)(transactionId, connection);
            if (!txResponse) {
                throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
            return Object.assign({ txHash: transactionId }, txResponse);
        });
    }
    transferToken(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, solanaHostUrl, wormholeRpcUrl } = this;
            const { amount, recipient, signer } = args;
            const endpoints = (0, networks_1.getNetworkEndpoints)(network);
            const provider = yield this.getProvider();
            const pubKey = provider.publicKey || new web3_js_1.PublicKey(signer || '');
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            if (!args.tokenAddress) {
                throw new exceptions_1.GeneralException(new Error(`Please provide tokenAddress`));
            }
            if (pubKey.toBuffer().length === 0) {
                throw new exceptions_1.GeneralException(new Error(`Please provide signerPubKey`));
            }
            const { injectiveContractAddresses, associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const chainGrpcWasmApi = new sdk_ts_1.ChainGrpcWasmApi(endpoints.grpc);
            const originAssetHex = (0, wormhole_sdk_1.tryNativeToHexString)(args.tokenAddress, constants_1.WORMHOLE_CHAINS.solana);
            const foreignAsset = yield (0, injective_1.getForeignAssetInjective)(injectiveContractAddresses.token_bridge, 
            // @ts-ignore
            chainGrpcWasmApi, constants_1.WORMHOLE_CHAINS.solana, (0, wormhole_sdk_1.hexToUint8Array)(originAssetHex));
            if (!foreignAsset) {
                throw new exceptions_1.GeneralException(new Error(`Foreign Injective asset not found`));
            }
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            const fromAddress = (yield (0, spl_token_1.getAssociatedTokenAddress)(new web3_js_1.PublicKey(args.tokenAddress), pubKey)).toString();
            const transaction = yield (0, wormhole_sdk_1.transferFromSolana)(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, pubKey, fromAddress, args.tokenAddress, BigInt(amount), (0, wormhole_sdk_1.hexToUint8Array)((0, wormhole_sdk_1.uint8ArrayToHex)((0, utils_1.zeroPad)(wormhole_sdk_1.cosmos.canonicalAddress(recipient), 32))), constants_1.WORMHOLE_CHAINS.injective);
            const signed = yield provider.signTransaction(transaction);
            const transactionId = yield connection.sendRawTransaction(signed.serialize());
            const txResponse = yield (0, utils_3.getSolanaTransactionInfo)(transactionId, connection);
            if (!txResponse) {
                throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
            return Object.assign({ txHash: transactionId }, txResponse);
        });
    }
    transferNative(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { network, solanaHostUrl, wormholeRpcUrl } = this;
            const { amount, recipient, signer } = args;
            const provider = yield this.getProvider();
            const pubKey = provider.publicKey || new web3_js_1.PublicKey(signer || '');
            if (!solanaHostUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide solanaHostUrl`));
            }
            if (pubKey.toBuffer().length === 0) {
                throw new exceptions_1.GeneralException(new Error(`Please provide signerPubKey`));
            }
            if (!wormholeRpcUrl) {
                throw new exceptions_1.GeneralException(new Error(`Please provide wormholeRpcUrl`));
            }
            const { associatedChainContractAddresses } = (0, utils_3.getContractAddresses)(network);
            const connection = new web3_js_1.Connection(solanaHostUrl, 'confirmed');
            const transaction = yield (0, wormhole_sdk_1.transferNativeSol)(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, pubKey, BigInt(amount), (0, wormhole_sdk_1.hexToUint8Array)((0, wormhole_sdk_1.uint8ArrayToHex)((0, utils_1.zeroPad)(wormhole_sdk_1.cosmos.canonicalAddress(recipient), 32))), constants_1.WORMHOLE_CHAINS.injective);
            const signed = yield provider.signTransaction(transaction);
            const transactionId = yield connection.sendRawTransaction(signed.serialize());
            const txResponse = yield (0, utils_3.getSolanaTransactionInfo)(transactionId, connection);
            if (!txResponse) {
                throw new exceptions_1.GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
            return Object.assign({ txHash: transactionId }, txResponse);
        });
    }
    getProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new Promise((resolve, reject) => {
                    this.provider
                        .connect()
                        .then(() => {
                        resolve(this
                            .provider);
                    })
                        .catch(reject);
                });
            }
            catch (e) {
                throw new exceptions_1.GeneralException(new Error(e));
            }
        });
    }
}
exports.SolanaWormholeClient = SolanaWormholeClient;
//# sourceMappingURL=SolanaWormholeClient.js.map