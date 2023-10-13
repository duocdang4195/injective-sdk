import { EthereumChainId } from '@injectivelabs/ts-types';
import { Network } from '@injectivelabs/networks';
import { WalletStrategy } from '../strategies/wallet-strategy';
interface SendTransactionOptions {
    tx: {
        from: string;
        to: string;
        gas: string;
        maxFeePerGas: string;
        maxPriorityFeePerGas: string | null;
        data: any;
    };
    address: string;
}
/**
 * Preparing and broadcasting
 * Ethereum transactions
 */
export declare class Web3Broadcaster {
    private walletStrategy;
    private ethereumChainId;
    constructor({ walletStrategy, ethereumChainId, }: {
        walletStrategy: WalletStrategy;
        ethereumChainId: EthereumChainId;
        network: Network;
    });
    sendTransaction(args: SendTransactionOptions): Promise<string>;
}
export {};
//# sourceMappingURL=Web3Broadcaster.d.ts.map