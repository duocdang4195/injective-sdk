import { MsgExecuteContractCompat } from '@injectivelabs/sdk-ts';
/**
 * Creates attestation message
 * @param tokenBridgeAddress Address of Inj token bridge contract
 * @param walletAddress Address of wallet in inj format
 * @param asset Name or address of the asset to be attested
 * For native assets the asset string is the denomination.
 * For foreign assets the asset string is the inj address of the foreign asset
 * @returns Message to be broadcast
 */
export declare function attestFromInjective(tokenBridgeAddress: string, walletAddress: string, asset: string): Promise<MsgExecuteContractCompat>;
//# sourceMappingURL=attest.d.ts.map