import { GeneralException } from '@injectivelabs/exceptions';
import { Wallet } from '../../types/enums';
import Keplr from './strategies/Keplr';
import Leap from './strategies/Leap';
import Cosmostation from './strategies/Cosmostation';
import { isCosmosWallet } from '../../utils/wallets/cosmos/utils';
export const cosmosWallets = [Wallet.Keplr, Wallet.Leap, Wallet.Cosmostation];
const createWallet = ({ wallet, args, }) => {
    switch (wallet) {
        case Wallet.Keplr:
            return new Keplr({ ...args });
        case Wallet.Leap:
            return new Leap({ ...args });
        case Wallet.Cosmostation:
            return new Cosmostation({ ...args });
        default:
            throw new GeneralException(new Error(`The ${wallet} concrete wallet strategy is not supported`));
    }
};
const createWallets = (args) => cosmosWallets.reduce((strategies, wallet) => ({
    ...strategies,
    [wallet]: createWallet({ wallet, args }),
}), {});
export default class CosmosWalletStrategy {
    strategies;
    wallet;
    constructor(args) {
        this.strategies = createWallets(args);
        this.wallet = args.wallet || Wallet.Keplr;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = isCosmosWallet(wallet) ? wallet : Wallet.Keplr;
    }
    getStrategy() {
        if (!this.strategies[this.wallet]) {
            throw new GeneralException(new Error(`Wallet ${this.wallet} is not enabled/available!`));
        }
        return this.strategies[this.wallet];
    }
    getWalletDeviceType() {
        return this.getStrategy().getWalletDeviceType();
    }
    getPubKey() {
        return this.getStrategy().getPubKey();
    }
    getAddresses() {
        return this.getStrategy().getAddresses();
    }
    isChainIdSupported(chainId) {
        return this.getStrategy().isChainIdSupported(chainId);
    }
    async sendTransaction(tx) {
        return this.getStrategy().sendTransaction(tx);
    }
    async signTransaction(transaction) {
        return this.getStrategy().signTransaction(transaction);
    }
    async signAminoTransaction(transaction) {
        return this.getStrategy().signAminoTransaction(transaction);
    }
}
//# sourceMappingURL=CosmosWalletStrategy.js.map