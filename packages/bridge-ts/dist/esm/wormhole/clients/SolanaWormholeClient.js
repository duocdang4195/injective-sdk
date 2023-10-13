import { getNetworkEndpoints } from '@injectivelabs/networks';
import { getGrpcTransport, ChainGrpcWasmApi } from '@injectivelabs/sdk-ts';
import { GeneralException } from '@injectivelabs/exceptions';
import { cosmos, getSignedVAA, redeemOnSolana, hexToUint8Array, uint8ArrayToHex, transferNativeSol, transferFromSolana, tryNativeToHexString, parseSequenceFromLogSolana, getEmitterAddressSolana, getSignedVAAWithRetry, postVaaSolanaWithRetry, redeemAndUnwrapOnSolana, getIsTransferCompletedSolana, tryNativeToUint8Array, getForeignAssetSolana, } from '@injectivelabs/wormhole-sdk';
import { getAssociatedTokenAddress, createAssociatedTokenAccountInstruction, } from '@solana/spl-token';
import { getForeignAssetInjective, getOriginalAssetInjective, } from '../injective';
import { PublicKey, Connection, Transaction, } from '@solana/web3.js';
import { zeroPad } from 'ethers/lib/utils';
import { sleep } from '@injectivelabs/utils';
import { WORMHOLE_CHAINS } from '../constants';
import { WormholeSource } from '../types';
import { getContractAddresses, getSolanaTransactionInfo } from '../utils';
import { BaseWormholeClient } from '../WormholeClient';
const TIMEOUT_BETWEEN_RETRIES = 5000;
export class SolanaWormholeClient extends BaseWormholeClient {
    solanaHostUrl;
    provider;
    constructor({ network, provider, solanaHostUrl, wormholeRpcUrl, }) {
        super({ network, wormholeRpcUrl });
        this.solanaHostUrl = solanaHostUrl;
        this.provider = provider;
    }
    async getAddress() {
        try {
            const provider = await this.getProvider();
            return provider.publicKey?.toString() || '';
        }
        catch (e) {
            return '';
        }
    }
    async getBalance(address, tokenAddress) {
        if (tokenAddress) {
            throw new GeneralException(new Error(`SPL tokens not supported yet`));
        }
        try {
            const { solanaHostUrl } = this;
            const connection = new Connection(solanaHostUrl || '');
            const balance = (await connection.getBalance(new PublicKey(address))).toString();
            return balance;
        }
        catch (e) {
            return '0';
        }
    }
    async transfer(args) {
        return args.tokenAddress
            ? this.transferToken(args)
            : this.transferNative(args);
    }
    async getTxResponse(txHash) {
        const { solanaHostUrl } = this;
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        try {
            const connection = new Connection(solanaHostUrl, 'confirmed');
            const txResponse = await connection.getTransaction(txHash);
            if (!txResponse) {
                throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
            if (txResponse.meta?.err) {
                throw new GeneralException(new Error(txResponse.meta?.err.toString()));
            }
            return txResponse;
        }
        catch (e) {
            throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
        }
    }
    async getSignedVAA(txResponse) {
        const { network, wormholeRpcUrl } = this;
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        const { associatedChainContractAddresses } = getContractAddresses(network);
        const sequence = parseSequenceFromLogSolana(txResponse);
        const emitterAddress = await getEmitterAddressSolana(associatedChainContractAddresses.token_bridge);
        try {
            const { vaaBytes: signedVAA } = await getSignedVAAWithRetry([wormholeRpcUrl], WORMHOLE_CHAINS.solana, emitterAddress, sequence, {
                transport: getGrpcTransport(),
            }, TIMEOUT_BETWEEN_RETRIES);
            return Buffer.from(signedVAA).toString('base64');
        }
        catch (e) {
            throw new GeneralException(new Error(`Could not get the signed VAA. Is the transaction confirmed?`));
        }
    }
    async getSignedVAANoRetry(txResponse) {
        const { network, wormholeRpcUrl } = this;
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        const { associatedChainContractAddresses } = getContractAddresses(network);
        const sequence = parseSequenceFromLogSolana(txResponse);
        const emitterAddress = await getEmitterAddressSolana(associatedChainContractAddresses.token_bridge);
        try {
            const { vaaBytes: signedVAA } = await getSignedVAA(wormholeRpcUrl, WORMHOLE_CHAINS.solana, emitterAddress, sequence, {
                transport: getGrpcTransport(),
            });
            return Buffer.from(signedVAA).toString('base64');
        }
        catch (e) {
            throw new GeneralException(new Error(`Could not get the signed VAA. Is the transaction confirmed?`));
        }
    }
    async getIsTransferCompleted(signedVAA /* in base 64 */) {
        const { solanaHostUrl, network } = this;
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        const connection = new Connection(solanaHostUrl, 'confirmed');
        const { associatedChainContractAddresses } = getContractAddresses(network, WormholeSource.Solana);
        return getIsTransferCompletedSolana(associatedChainContractAddresses.token_bridge, Buffer.from(signedVAA, 'base64'), connection);
    }
    async getIsTransferCompletedRetry(signedVAA /* in base 64 */) {
        const RETRIES = 2;
        const TIMEOUT_BETWEEN_RETRIES = 2000;
        for (let i = 0; i < RETRIES; i += 1) {
            if (await this.getIsTransferCompleted(signedVAA)) {
                return true;
            }
            await sleep(TIMEOUT_BETWEEN_RETRIES);
        }
        return false;
    }
    async redeem({ signedVAA, recipient, }) {
        const { network, solanaHostUrl } = this;
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        const { associatedChainContractAddresses } = getContractAddresses(network);
        const connection = new Connection(solanaHostUrl, 'confirmed');
        return redeemOnSolana(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, new PublicKey(recipient), Buffer.from(signedVAA, 'base64'));
    }
    async redeemNative({ signedVAA, recipient, }) {
        const { network, solanaHostUrl } = this;
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        const { associatedChainContractAddresses } = getContractAddresses(network);
        const connection = new Connection(solanaHostUrl, 'confirmed');
        return redeemAndUnwrapOnSolana(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, new PublicKey(recipient), Buffer.from(signedVAA, 'base64'));
    }
    async getForeignAsset(originChain, originAddress) {
        const { network, solanaHostUrl } = this;
        const { associatedChainContractAddresses } = getContractAddresses(network);
        const connection = new Connection(solanaHostUrl, 'confirmed');
        const originAssetBinary = tryNativeToUint8Array(originAddress, originChain);
        const targetAsset = await getForeignAssetSolana(connection, associatedChainContractAddresses.token_bridge, originChain, originAssetBinary);
        return targetAsset || '';
    }
    async postVAAWithRetry({ solanaPubKey, signedVAA, }) {
        const { network, solanaHostUrl } = this;
        const MAX_VAA_UPLOAD_RETRIES_SOLANA = 5;
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        const provider = await this.getProvider();
        const { associatedChainContractAddresses } = getContractAddresses(network);
        const connection = new Connection(solanaHostUrl, 'confirmed');
        return postVaaSolanaWithRetry(connection, provider.signTransaction.bind(provider), associatedChainContractAddresses.core, new PublicKey(solanaPubKey), Buffer.from(signedVAA, 'base64'), MAX_VAA_UPLOAD_RETRIES_SOLANA);
    }
    async createAssociatedTokenAddress(tokenAddress) {
        const { solanaHostUrl, network } = this;
        const endpoints = getNetworkEndpoints(network);
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        const provider = await this.getProvider();
        const chainGrpcWasmApi = new ChainGrpcWasmApi(endpoints.grpc);
        const connection = new Connection(solanaHostUrl, 'confirmed');
        const solanaPublicKey = new PublicKey(provider.publicKey || '');
        const originalAsset = await getOriginalAssetInjective(tokenAddress, chainGrpcWasmApi);
        const solanaMintKey = new PublicKey(originalAsset.assetAddress);
        const recipient = await getAssociatedTokenAddress(solanaMintKey, solanaPublicKey);
        // create the associated token account if it doesn't exist
        const associatedAddressInfo = await connection.getAccountInfo(recipient);
        if (!associatedAddressInfo) {
            const transaction = new Transaction().add(await createAssociatedTokenAccountInstruction(solanaPublicKey, recipient, solanaPublicKey, solanaMintKey));
            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = solanaPublicKey;
            const signed = await provider.signTransaction(transaction);
            const transactionId = await connection.sendRawTransaction(signed.serialize());
            const txResponse = await getSolanaTransactionInfo(transactionId, connection);
            if (!txResponse) {
                throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
            }
        }
        return recipient.toString();
    }
    async signSendAndConfirmTransaction(transaction) {
        const { solanaHostUrl } = this;
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        const provider = await this.getProvider();
        const connection = new Connection(solanaHostUrl, 'confirmed');
        const signed = await provider.signTransaction(transaction);
        const transactionId = await connection.sendRawTransaction(signed.serialize());
        const txResponse = await getSolanaTransactionInfo(transactionId, connection);
        if (!txResponse) {
            throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
        }
        return { txHash: transactionId, ...txResponse };
    }
    async transferToken(args) {
        const { network, solanaHostUrl, wormholeRpcUrl } = this;
        const { amount, recipient, signer } = args;
        const endpoints = getNetworkEndpoints(network);
        const provider = await this.getProvider();
        const pubKey = provider.publicKey || new PublicKey(signer || '');
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        if (!args.tokenAddress) {
            throw new GeneralException(new Error(`Please provide tokenAddress`));
        }
        if (pubKey.toBuffer().length === 0) {
            throw new GeneralException(new Error(`Please provide signerPubKey`));
        }
        const { injectiveContractAddresses, associatedChainContractAddresses } = getContractAddresses(network);
        const chainGrpcWasmApi = new ChainGrpcWasmApi(endpoints.grpc);
        const originAssetHex = tryNativeToHexString(args.tokenAddress, WORMHOLE_CHAINS.solana);
        const foreignAsset = await getForeignAssetInjective(injectiveContractAddresses.token_bridge, 
        // @ts-ignore
        chainGrpcWasmApi, WORMHOLE_CHAINS.solana, hexToUint8Array(originAssetHex));
        if (!foreignAsset) {
            throw new GeneralException(new Error(`Foreign Injective asset not found`));
        }
        const connection = new Connection(solanaHostUrl, 'confirmed');
        const fromAddress = (await getAssociatedTokenAddress(new PublicKey(args.tokenAddress), pubKey)).toString();
        const transaction = await transferFromSolana(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, pubKey, fromAddress, args.tokenAddress, BigInt(amount), hexToUint8Array(uint8ArrayToHex(zeroPad(cosmos.canonicalAddress(recipient), 32))), WORMHOLE_CHAINS.injective);
        const signed = await provider.signTransaction(transaction);
        const transactionId = await connection.sendRawTransaction(signed.serialize());
        const txResponse = await getSolanaTransactionInfo(transactionId, connection);
        if (!txResponse) {
            throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
        }
        return { txHash: transactionId, ...txResponse };
    }
    async transferNative(args) {
        const { network, solanaHostUrl, wormholeRpcUrl } = this;
        const { amount, recipient, signer } = args;
        const provider = await this.getProvider();
        const pubKey = provider.publicKey || new PublicKey(signer || '');
        if (!solanaHostUrl) {
            throw new GeneralException(new Error(`Please provide solanaHostUrl`));
        }
        if (pubKey.toBuffer().length === 0) {
            throw new GeneralException(new Error(`Please provide signerPubKey`));
        }
        if (!wormholeRpcUrl) {
            throw new GeneralException(new Error(`Please provide wormholeRpcUrl`));
        }
        const { associatedChainContractAddresses } = getContractAddresses(network);
        const connection = new Connection(solanaHostUrl, 'confirmed');
        const transaction = await transferNativeSol(connection, associatedChainContractAddresses.core, associatedChainContractAddresses.token_bridge, pubKey, BigInt(amount), hexToUint8Array(uint8ArrayToHex(zeroPad(cosmos.canonicalAddress(recipient), 32))), WORMHOLE_CHAINS.injective);
        const signed = await provider.signTransaction(transaction);
        const transactionId = await connection.sendRawTransaction(signed.serialize());
        const txResponse = await getSolanaTransactionInfo(transactionId, connection);
        if (!txResponse) {
            throw new GeneralException(new Error('An error occurred while fetching the transaction info'));
        }
        return { txHash: transactionId, ...txResponse };
    }
    async getProvider() {
        try {
            return await new Promise((resolve, reject) => {
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
            throw new GeneralException(new Error(e));
        }
    }
}
//# sourceMappingURL=SolanaWormholeClient.js.map