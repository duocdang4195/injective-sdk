import type { Token } from '@injectivelabs/token-metadata';
import { TokenMetadataResponse } from 'alchemy-sdk';
export declare const getKeyFromRpcUrl: (rpcUrl: string) => string;
export declare const getTokenFromAlchemyTokenMetaResponse: (denom: string, response: TokenMetadataResponse) => Token;
//# sourceMappingURL=alchemy.d.ts.map