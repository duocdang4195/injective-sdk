import { Network } from '@injectivelabs/networks';
export declare class BaseWormholeClient {
    network: Network;
    wormholeRpcUrl?: string;
    constructor({ network, wormholeRpcUrl, }: {
        network: Network;
        solanaHostUrl?: string;
        wormholeRpcUrl?: string;
    });
    parseSignedVAA(signedVAA: string): import("@injectivelabs/wormhole-sdk").ParsedVaa;
    getTransferDetailsFromSignedVAA(signedVAA: string): {
        originAddress: string;
        amount: string;
        originChain: number;
        targetAddress: string;
        targetChain: number;
        fee: bigint | undefined;
        fromAddress: string | undefined;
    };
}
//# sourceMappingURL=WormholeClient.d.ts.map