import { EthereumChainId } from '@injectivelabs/ts-types';
import { Network } from '@injectivelabs/networks';
/**
 * Preparing and broadcasting
 * Ethereum transactions
 */
export declare class Web3Composer {
    private network;
    private ethereumChainId;
    private rpc;
    private alchemy;
    constructor({ ethereumChainId, network, rpc, }: {
        rpc: string;
        ethereumChainId: EthereumChainId;
        network: Network;
    });
    getSetTokenAllowanceTx({ address, amount, gasPrice, tokenAddress, }: {
        address: string;
        amount: string;
        gasPrice: string;
        tokenAddress: string;
    }): Promise<{
        from: string;
        to: string;
        gas: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
        data: string;
    }>;
    getPeggyTransferTx({ address, amount, denom, destinationAddress, gasPrice, data, }: {
        address: string;
        amount: string;
        denom: string;
        destinationAddress: string;
        gasPrice: string;
        data?: string;
    }): Promise<{
        from: string;
        to: string;
        gas: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string;
        data: string;
    }>;
    private getAlchemy;
}
//# sourceMappingURL=Web3Composer.d.ts.map