import { Network, getNetworkEndpoints, } from '@injectivelabs/networks';
import { sha256, fromUtf8, DenomClient, ChainGrpcBankApi, ChainGrpcWasmApi, ChainGrpcInsuranceFundApi, ChainGrpcIbcApi, } from '@injectivelabs/sdk-ts';
import { Web3Client } from '../services/web3/Web3Client';
import { getUnknownTokenWithSymbol, getIbcTokenMetaFromDenomTrace, } from '@injectivelabs/token-metadata';
import { getTokenFromAlchemyTokenMetaResponse } from '../utils/alchemy';
import { getTokenFromContractStateResponse } from '../utils/cw20';
import { getTokenFromDenomsMetadata } from '../utils/factory';
import { getTokenFromInsuranceFund } from '../utils';
import { ErrorType, GeneralException } from '@injectivelabs/exceptions';
import { awaitForAll } from '@injectivelabs/utils';
const IGNORED_DENOMS = ['peggy0xB855dBC314C39BFa2583567E02a40CBB246CF82B'];
export class DenomClientAsync {
    denomClient;
    web3Client;
    endpoints;
    chainWasmApi;
    chainBankApi;
    chainInsuranceApi;
    metadatas = [];
    insuranceFunds = [];
    chainIbcApi;
    cachedDenomTraces = {};
    constructor(network = Network.Mainnet, options) {
        this.endpoints = options.endpoints || getNetworkEndpoints(network);
        this.denomClient = new DenomClient(network);
        this.chainIbcApi = new ChainGrpcIbcApi(this.endpoints.grpc);
        this.chainWasmApi = new ChainGrpcWasmApi(this.endpoints.grpc);
        this.chainBankApi = new ChainGrpcBankApi(this.endpoints.grpc);
        this.chainInsuranceApi = new ChainGrpcInsuranceFundApi(this.endpoints.grpc);
        this.web3Client = options.alchemyRpcUrl
            ? new Web3Client({ network, rpc: options.alchemyRpcUrl })
            : undefined;
    }
    /**
     * Used to get tracked tokens only
     * (those in the token-metadata package)
     */
    getDenomTokenStatic(denom) {
        return this.denomClient.getDenomToken(denom);
    }
    /**
     * Used to get tracked tokens only
     * (those in the token-metadata package)
     */
    getDenomTokenStaticOrUnknown(denom) {
        const token = this.denomClient.getDenomToken(denom);
        return token || getUnknownTokenWithSymbol(denom);
    }
    /**
     * Used to get all tokens even if they are not tracked on the token-metadata package
     * ERC20, CW20, IBC, etc
     */
    async getDenomToken(denom) {
        const token = await this.denomClient.getDenomToken(denom);
        if (token) {
            return token;
        }
        if (IGNORED_DENOMS.includes(denom)) {
            return getUnknownTokenWithSymbol(denom);
        }
        const isErc20 = denom.startsWith('peggy') || denom.startsWith('0x');
        if (isErc20 && this.web3Client) {
            const contractAddress = denom.startsWith('peggy')
                ? denom.replace('peggy', '')
                : denom;
            const response = await this.web3Client.fetchTokenMetaData(contractAddress);
            return getTokenFromAlchemyTokenMetaResponse(denom, response);
        }
        const isCW20 = denom.startsWith('inj');
        if (isCW20) {
            const contractAddress = denom;
            const response = await this.chainWasmApi.fetchContractState({
                contractAddress,
                pagination: {
                    reverse: true,
                },
            });
            return getTokenFromContractStateResponse(denom, response);
        }
        const isTokenFactory = denom.startsWith('factory');
        if (isTokenFactory) {
            const tokenFactoryAddress = denom.split('/')[2];
            // CW20 contract (ex: from Wormhole)
            if (tokenFactoryAddress.startsWith('inj')) {
                const response = await this.chainWasmApi.fetchContractState({
                    contractAddress: tokenFactoryAddress,
                    pagination: {
                        reverse: true,
                    },
                });
                return getTokenFromContractStateResponse(denom, response);
            }
            // Custom Token Factory Denom
            const metadata = await this.getFactoryDenomMetadata(denom);
            if (metadata) {
                return getTokenFromDenomsMetadata(denom, metadata);
            }
        }
        const isInsuranceFund = denom.startsWith('share');
        if (isInsuranceFund) {
            const insuranceFund = await this.getInsuranceFund(denom);
            if (insuranceFund) {
                return getTokenFromInsuranceFund(denom, insuranceFund);
            }
        }
        const isIbcDenom = denom.startsWith('ibc');
        if (isIbcDenom) {
            return await this.getIbcDenomToken(denom);
        }
        return undefined;
    }
    async getDenomTokenThrow(denom) {
        const token = await this.getDenomToken(denom);
        if (!token) {
            throw new GeneralException(new Error(`Token not found for ${denom}`), {
                type: ErrorType.NotFoundError,
            });
        }
        return token;
    }
    async getDenomsToken(denoms) {
        return awaitForAll(denoms, (denom) => this.getDenomToken(denom));
    }
    getDenomTokenInfo(denom) {
        return this.denomClient.getDenomTokenInfo(denom);
    }
    getTokenMetaDataBySymbol(symbol) {
        return this.denomClient.getTokenMetaDataBySymbol(symbol);
    }
    getTokenMetaDataByAddress(address) {
        return this.denomClient.getTokenMetaDataByAddress(address);
    }
    getTokenMetaDataByName(name) {
        return this.denomClient.getTokenMetaDataByName(name);
    }
    getCoinGeckoId(denom) {
        return this.denomClient.getCoinGeckoId(denom);
    }
    async getFactoryDenomMetadata(denom) {
        if (this.metadatas.length > 0) {
            return this.metadatas.find((metadata) => metadata.base === denom);
        }
        const { metadatas } = await this.chainBankApi.fetchDenomsMetadata({ limit: 1000 });
        this.metadatas = metadatas;
        return metadatas.find((metadata) => metadata.base === denom);
    }
    async getInsuranceFund(denom) {
        if (this.insuranceFunds.length > 0) {
            return this.insuranceFunds.find((fund) => fund.insurancePoolTokenDenom === denom);
        }
        const insuranceFunds = await this.chainInsuranceApi.fetchInsuranceFunds();
        this.insuranceFunds = insuranceFunds;
        return insuranceFunds.find((fund) => fund.insurancePoolTokenDenom === denom);
    }
    /**
     * Find token based on the hash and the base denom
     * from the denom trace of the particular hash
     */
    async getIbcDenomToken(denom) {
        const hash = denom.replace('ibc/', '');
        if (Object.keys(this.cachedDenomTraces).length === 0) {
            await this.fetchAndCacheDenomTraces();
        }
        const cachedDenomTrace = this.cachedDenomTraces[hash];
        if (cachedDenomTrace) {
            const token = this.denomClient.getDenomToken(cachedDenomTrace.baseDenom);
            if (!token) {
                return undefined;
            }
            return {
                ...token,
                ibc: getIbcTokenMetaFromDenomTrace({
                    ...cachedDenomTrace,
                    decimals: token.decimals,
                    hash,
                }),
                denom,
            };
        }
        try {
            const denomTrace = await this.chainIbcApi.fetchDenomTrace(hash);
            const token = this.denomClient.getDenomToken(denomTrace.baseDenom);
            if (!token) {
                return undefined;
            }
            return {
                ...token,
                ibc: getIbcTokenMetaFromDenomTrace({
                    ...denomTrace,
                    decimals: token.decimals,
                    hash,
                }),
                denom,
            };
        }
        catch (e) {
            throw new GeneralException(new Error(`Denom trace not found for ${denom}`), {
                type: ErrorType.NotFoundError,
            });
        }
    }
    async fetchAndCacheDenomTraces() {
        const denomTraces = await this.chainIbcApi.fetchDenomsTrace();
        const denomHashes = denomTraces.map((trace) => {
            return {
                trace: trace,
                hash: Buffer.from(sha256(fromUtf8(`${trace.path}/${trace.baseDenom}`))).toString('hex'),
            };
        });
        this.cachedDenomTraces = denomHashes.reduce((denomTraces, denomTrace) => ({
            ...denomTraces,
            [denomTrace.hash.toUpperCase()]: denomTrace.trace,
        }), {});
    }
    async preloadMetadata() {
        await this.getFactoryDenomMetadata('');
        await this.getInsuranceFund('');
        await this.fetchAndCacheDenomTraces();
    }
}
//# sourceMappingURL=DenomClientAsync.js.map