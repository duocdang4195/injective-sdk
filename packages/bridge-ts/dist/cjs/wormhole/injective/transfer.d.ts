import { ChainGrpcWasmApi, MsgExecuteContractCompat } from '@injectivelabs/sdk-ts';
import { ChainId, ChainName } from '@injectivelabs/wormhole-sdk';
/**
 * Return if the VAA has been redeemed or not
 * @param tokenBridgeAddress The Injective token bridge contract address
 * @param signedVAA The signed VAA byte array
 * @param client Holds the wallet and signing information
 * @returns true if the VAA has been redeemed.
 */
export declare function getIsTransferCompletedInjective(tokenBridgeAddress: string, signedVAA: Uint8Array, client: ChainGrpcWasmApi): Promise<boolean>;
/**
 * Submits the supplied VAA to Injective
 * @param tokenBridgeAddress Address of Inj token bridge contract
 * @param walletAddress Address of wallet in inj format
 * @param signedVAA VAA with the attestation message
 * @returns Message to be broadcast
 */
export declare function submitVAAOnInjective(tokenBridgeAddress: string, walletAddress: string, signedVAA: Uint8Array): Promise<MsgExecuteContractCompat>;
export declare const redeemOnInjective: typeof submitVAAOnInjective;
export declare const createWrappedOnInjective: typeof submitVAAOnInjective;
export declare const updateWrappedOnInjective: typeof submitVAAOnInjective;
/**
 * Creates the necessary messages to transfer an asset
 * @param walletAddress Address of the Inj wallet
 * @param tokenBridgeAddress Address of the token bridge contract
 * @param tokenAddress Address of the token being transferred
 * @param amount Amount of token to be transferred
 * @param recipientChain Destination chain
 * @param recipientAddress Destination wallet address
 * @param relayerFee Relayer fee
 * @param payload Optional payload
 * @returns Transfer messages to be sent on chain
 */
export declare function transferFromInjective(walletAddress: string, tokenBridgeAddress: string, tokenAddress: string, amount: string, recipientChain: ChainId | ChainName, recipientAddress: Uint8Array, relayerFee?: string, payload?: Uint8Array | null): Promise<MsgExecuteContractCompat[]>;
//# sourceMappingURL=transfer.d.ts.map