import { Network } from '@injectivelabs/networks';
/**
 * Preparing and broadcasting
 * Ethereum transactions
 */
export declare class Web3Client {
    private network;
    private rpc;
    private alchemy;
    constructor({ rpc, network }: {
        rpc: string;
        network: Network;
    });
    fetchTokenBalanceAndAllowance({ address, contractAddress, }: {
        address: string;
        contractAddress: string;
    }): Promise<{
        balance: string;
        allowance: string;
    }>;
    fetchTokenMetaData(address: string): Promise<import("alchemy-sdk").TokenMetadataResponse>;
    private getAlchemy;
}
//# sourceMappingURL=Web3Client.d.ts.map