import { Web3Exception } from '@injectivelabs/exceptions';
/**
 * Preparing and broadcasting
 * Ethereum transactions
 */
export class Web3Broadcaster {
    walletStrategy;
    ethereumChainId;
    constructor({ walletStrategy, ethereumChainId, }) {
        this.walletStrategy = walletStrategy;
        this.ethereumChainId = ethereumChainId;
    }
    async sendTransaction(args) {
        const { walletStrategy, ethereumChainId } = this;
        try {
            const txHash = await walletStrategy.sendEthereumTransaction(args.tx, {
                ethereumChainId,
                address: args.address,
            });
            await walletStrategy.getEthereumTransactionReceipt(txHash);
            return txHash;
        }
        catch (e) {
            throw new Web3Exception(new Error(e.message));
        }
    }
}
//# sourceMappingURL=Web3Broadcaster.js.map