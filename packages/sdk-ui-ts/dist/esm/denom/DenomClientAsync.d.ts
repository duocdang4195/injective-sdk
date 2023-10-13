import { Network, NetworkEndpoints } from '@injectivelabs/networks';
import type { Token } from '@injectivelabs/token-metadata';
import { TokenInfo, TokenMeta } from '@injectivelabs/token-metadata';
export declare class DenomClientAsync {
    private denomClient;
    private web3Client;
    private endpoints;
    private chainWasmApi;
    private chainBankApi;
    private chainInsuranceApi;
    private metadatas;
    private insuranceFunds;
    private chainIbcApi;
    private cachedDenomTraces;
    constructor(network: Network | undefined, options: {
        endpoints?: NetworkEndpoints;
        alchemyRpcUrl?: string;
    });
    /**
     * Used to get tracked tokens only
     * (those in the token-metadata package)
     */
    getDenomTokenStatic(denom: string): Token | undefined;
    /**
     * Used to get tracked tokens only
     * (those in the token-metadata package)
     */
    getDenomTokenStaticOrUnknown(denom: string): Token;
    /**
     * Used to get all tokens even if they are not tracked on the token-metadata package
     * ERC20, CW20, IBC, etc
     */
    getDenomToken(denom: string): Promise<Token | undefined>;
    getDenomTokenThrow(denom: string): Promise<Token>;
    getDenomsToken(denoms: string[]): Promise<Array<Token | undefined>>;
    getDenomTokenInfo(denom: string): TokenInfo | undefined;
    getTokenMetaDataBySymbol(symbol: string): TokenMeta | undefined;
    getTokenMetaDataByAddress(address: string): TokenMeta | undefined;
    getTokenMetaDataByName(name: string): TokenMeta | undefined;
    getCoinGeckoId(denom: string): string;
    private getFactoryDenomMetadata;
    private getInsuranceFund;
    /**
     * Find token based on the hash and the base denom
     * from the denom trace of the particular hash
     */
    private getIbcDenomToken;
    private fetchAndCacheDenomTraces;
    preloadMetadata(): Promise<void>;
}
//# sourceMappingURL=DenomClientAsync.d.ts.map