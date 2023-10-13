import { ChainGrpcWasmApi } from '@injectivelabs/sdk-ts';
import { ChainId, ChainName, WormholeWrappedInfo } from '@injectivelabs/wormhole-sdk';
/**
 * Returns the address of the foreign asset
 * @param tokenBridgeAddress Address of token bridge contact
 * @param client Holds the wallet and signing information
 * @param originChain The chainId of the origin of the asset
 * @param originAsset The address of the origin asset
 * @returns The foreign asset address or null
 */
export declare function getForeignAssetInjective(tokenBridgeAddress: string, client: ChainGrpcWasmApi, originChain: ChainId | ChainName, originAsset: Uint8Array): Promise<string | null>;
/**
 * Checks if the asset is a wrapped asset
 * @param tokenBridgeAddress The address of the Injective token bridge contract
 * @param client Connection/wallet information
 * @param assetAddress Address of the asset in Injective format
 * @returns true if asset is a wormhole wrapped asset
 */
export declare function getIsWrappedAssetInjective(tokenBridgeAddress: string, client: ChainGrpcWasmApi, assetAddress: string): Promise<boolean>;
/**
 * Returns information about the asset
 * @param wrappedAddress Address of the asset in wormhole wrapped format (hex string)
 * @param client WASM api client
 * @returns Information about the asset
 */
export declare function getOriginalAssetInjective(wrappedAddress: string, client: ChainGrpcWasmApi): Promise<WormholeWrappedInfo>;
export declare const queryExternalIdInjective: (client: ChainGrpcWasmApi, tokenBridgeAddress: string, externalTokenId: string) => Promise<string | null>;
//# sourceMappingURL=asset.d.ts.map