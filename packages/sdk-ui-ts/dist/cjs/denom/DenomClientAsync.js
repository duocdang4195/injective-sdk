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
exports.DenomClientAsync = void 0;
const networks_1 = require("@injectivelabs/networks");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const Web3Client_1 = require("../services/web3/Web3Client");
const token_metadata_1 = require("@injectivelabs/token-metadata");
const alchemy_1 = require("../utils/alchemy");
const cw20_1 = require("../utils/cw20");
const factory_1 = require("../utils/factory");
const utils_1 = require("../utils");
const exceptions_1 = require("@injectivelabs/exceptions");
const utils_2 = require("@injectivelabs/utils");
const IGNORED_DENOMS = ['peggy0xB855dBC314C39BFa2583567E02a40CBB246CF82B'];
class DenomClientAsync {
    constructor(network = networks_1.Network.Mainnet, options) {
        this.metadatas = [];
        this.insuranceFunds = [];
        this.cachedDenomTraces = {};
        this.endpoints = options.endpoints || (0, networks_1.getNetworkEndpoints)(network);
        this.denomClient = new sdk_ts_1.DenomClient(network);
        this.chainIbcApi = new sdk_ts_1.ChainGrpcIbcApi(this.endpoints.grpc);
        this.chainWasmApi = new sdk_ts_1.ChainGrpcWasmApi(this.endpoints.grpc);
        this.chainBankApi = new sdk_ts_1.ChainGrpcBankApi(this.endpoints.grpc);
        this.chainInsuranceApi = new sdk_ts_1.ChainGrpcInsuranceFundApi(this.endpoints.grpc);
        this.web3Client = options.alchemyRpcUrl
            ? new Web3Client_1.Web3Client({ network, rpc: options.alchemyRpcUrl })
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
        return token || (0, token_metadata_1.getUnknownTokenWithSymbol)(denom);
    }
    /**
     * Used to get all tokens even if they are not tracked on the token-metadata package
     * ERC20, CW20, IBC, etc
     */
    getDenomToken(denom) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.denomClient.getDenomToken(denom);
            if (token) {
                return token;
            }
            if (IGNORED_DENOMS.includes(denom)) {
                return (0, token_metadata_1.getUnknownTokenWithSymbol)(denom);
            }
            const isErc20 = denom.startsWith('peggy') || denom.startsWith('0x');
            if (isErc20 && this.web3Client) {
                const contractAddress = denom.startsWith('peggy')
                    ? denom.replace('peggy', '')
                    : denom;
                const response = yield this.web3Client.fetchTokenMetaData(contractAddress);
                return (0, alchemy_1.getTokenFromAlchemyTokenMetaResponse)(denom, response);
            }
            const isCW20 = denom.startsWith('inj');
            if (isCW20) {
                const contractAddress = denom;
                const response = yield this.chainWasmApi.fetchContractState({
                    contractAddress,
                    pagination: {
                        reverse: true,
                    },
                });
                return (0, cw20_1.getTokenFromContractStateResponse)(denom, response);
            }
            const isTokenFactory = denom.startsWith('factory');
            if (isTokenFactory) {
                const tokenFactoryAddress = denom.split('/')[2];
                // CW20 contract (ex: from Wormhole)
                if (tokenFactoryAddress.startsWith('inj')) {
                    const response = yield this.chainWasmApi.fetchContractState({
                        contractAddress: tokenFactoryAddress,
                        pagination: {
                            reverse: true,
                        },
                    });
                    return (0, cw20_1.getTokenFromContractStateResponse)(denom, response);
                }
                // Custom Token Factory Denom
                const metadata = yield this.getFactoryDenomMetadata(denom);
                if (metadata) {
                    return (0, factory_1.getTokenFromDenomsMetadata)(denom, metadata);
                }
            }
            const isInsuranceFund = denom.startsWith('share');
            if (isInsuranceFund) {
                const insuranceFund = yield this.getInsuranceFund(denom);
                if (insuranceFund) {
                    return (0, utils_1.getTokenFromInsuranceFund)(denom, insuranceFund);
                }
            }
            const isIbcDenom = denom.startsWith('ibc');
            if (isIbcDenom) {
                return yield this.getIbcDenomToken(denom);
            }
            return undefined;
        });
    }
    getDenomTokenThrow(denom) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.getDenomToken(denom);
            if (!token) {
                throw new exceptions_1.GeneralException(new Error(`Token not found for ${denom}`), {
                    type: exceptions_1.ErrorType.NotFoundError,
                });
            }
            return token;
        });
    }
    getDenomsToken(denoms) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_2.awaitForAll)(denoms, (denom) => this.getDenomToken(denom));
        });
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
    getFactoryDenomMetadata(denom) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.metadatas.length > 0) {
                return this.metadatas.find((metadata) => metadata.base === denom);
            }
            const { metadatas } = yield this.chainBankApi.fetchDenomsMetadata({ limit: 1000 });
            this.metadatas = metadatas;
            return metadatas.find((metadata) => metadata.base === denom);
        });
    }
    getInsuranceFund(denom) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.insuranceFunds.length > 0) {
                return this.insuranceFunds.find((fund) => fund.insurancePoolTokenDenom === denom);
            }
            const insuranceFunds = yield this.chainInsuranceApi.fetchInsuranceFunds();
            this.insuranceFunds = insuranceFunds;
            return insuranceFunds.find((fund) => fund.insurancePoolTokenDenom === denom);
        });
    }
    /**
     * Find token based on the hash and the base denom
     * from the denom trace of the particular hash
     */
    getIbcDenomToken(denom) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = denom.replace('ibc/', '');
            if (Object.keys(this.cachedDenomTraces).length === 0) {
                yield this.fetchAndCacheDenomTraces();
            }
            const cachedDenomTrace = this.cachedDenomTraces[hash];
            if (cachedDenomTrace) {
                const token = this.denomClient.getDenomToken(cachedDenomTrace.baseDenom);
                if (!token) {
                    return undefined;
                }
                return Object.assign(Object.assign({}, token), { ibc: (0, token_metadata_1.getIbcTokenMetaFromDenomTrace)(Object.assign(Object.assign({}, cachedDenomTrace), { decimals: token.decimals, hash })), denom });
            }
            try {
                const denomTrace = yield this.chainIbcApi.fetchDenomTrace(hash);
                const token = this.denomClient.getDenomToken(denomTrace.baseDenom);
                if (!token) {
                    return undefined;
                }
                return Object.assign(Object.assign({}, token), { ibc: (0, token_metadata_1.getIbcTokenMetaFromDenomTrace)(Object.assign(Object.assign({}, denomTrace), { decimals: token.decimals, hash })), denom });
            }
            catch (e) {
                throw new exceptions_1.GeneralException(new Error(`Denom trace not found for ${denom}`), {
                    type: exceptions_1.ErrorType.NotFoundError,
                });
            }
        });
    }
    fetchAndCacheDenomTraces() {
        return __awaiter(this, void 0, void 0, function* () {
            const denomTraces = yield this.chainIbcApi.fetchDenomsTrace();
            const denomHashes = denomTraces.map((trace) => {
                return {
                    trace: trace,
                    hash: Buffer.from((0, sdk_ts_1.sha256)((0, sdk_ts_1.fromUtf8)(`${trace.path}/${trace.baseDenom}`))).toString('hex'),
                };
            });
            this.cachedDenomTraces = denomHashes.reduce((denomTraces, denomTrace) => (Object.assign(Object.assign({}, denomTraces), { [denomTrace.hash.toUpperCase()]: denomTrace.trace })), {});
        });
    }
    preloadMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getFactoryDenomMetadata('');
            yield this.getInsuranceFund('');
            yield this.fetchAndCacheDenomTraces();
        });
    }
}
exports.DenomClientAsync = DenomClientAsync;
//# sourceMappingURL=DenomClientAsync.js.map