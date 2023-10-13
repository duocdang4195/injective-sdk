import { GeneralException, WalletException } from '@injectivelabs/exceptions';
import Metamask from './strategies/Metamask';
import TrustWallet from './strategies/TrustWallet';
import Keplr from './strategies/Keplr';
import Leap from './strategies/Leap';
import Trezor from './strategies/Trezor';
import LedgerLive from './strategies/Ledger/LedgerLive';
import LedgerLegacy from './strategies/Ledger/LedgerLegacy';
import Torus from './strategies/Torus';
import Cosmostation from './strategies/Cosmostation';
import { Wallet } from '../../types/enums';
import { isEthWallet } from './utils';
import { isCosmosWallet } from '../../utils/wallets/cosmos';
const getInitialWallet = (args) => {
    if (args.wallet) {
        return args.wallet;
    }
    return args.ethereumOptions ? Wallet.Metamask : Wallet.Keplr;
};
const ethereumWalletsDisabled = (args) => {
    const { ethereumOptions } = args;
    if (!ethereumOptions) {
        return true;
    }
    const { rpcUrl, ethereumChainId } = ethereumOptions;
    if (!ethereumChainId) {
        return true;
    }
    if (!rpcUrl) {
        return true;
    }
    return false;
};
const createStrategy = ({ args, wallet, }) => {
    const disabledWallets = args.disabledWallets || [];
    if (disabledWallets.includes(wallet)) {
        return undefined;
    }
    /**
     * If we only want to use Cosmos Native Wallets
     * We are not creating strategies for Ethereum Native Wallets
     */
    if (isEthWallet(wallet) && ethereumWalletsDisabled(args)) {
        return undefined;
    }
    const ethWalletArgs = {
        chainId: args.chainId,
        ethereumOptions: args.ethereumOptions,
    };
    switch (wallet) {
        case Wallet.Metamask:
            return new Metamask(ethWalletArgs);
        case Wallet.TrustWallet:
            return new TrustWallet(ethWalletArgs);
        case Wallet.Ledger:
            return new LedgerLive(ethWalletArgs);
        case Wallet.LedgerLegacy:
            return new LedgerLegacy(ethWalletArgs);
        case Wallet.Trezor:
            return new Trezor(ethWalletArgs);
        case Wallet.Torus:
            return new Torus(ethWalletArgs);
        case Wallet.Keplr:
            return new Keplr({ ...args });
        case Wallet.Cosmostation:
            return new Cosmostation({ ...args });
        case Wallet.Leap:
            return new Leap({ ...args });
        default:
            return undefined;
    }
};
const createStrategies = (args) => {
    return Object.values(Wallet).reduce((strategies, wallet) => ({
        ...strategies,
        [wallet]: createStrategy({ wallet, args }),
    }), {});
};
export default class WalletStrategy {
    strategies;
    wallet;
    constructor(args) {
        this.strategies = createStrategies(args);
        this.wallet = getInitialWallet(args);
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
    getStrategy() {
        if (!this.strategies[this.wallet]) {
            throw new GeneralException(new Error(`Wallet ${this.wallet} is not enabled/available!`));
        }
        return this.strategies[this.wallet];
    }
    getAddresses() {
        return this.getStrategy().getAddresses();
    }
    getWalletDeviceType() {
        return this.getStrategy().getWalletDeviceType();
    }
    getPubKey() {
        return this.getStrategy().getPubKey();
    }
    getEthereumChainId() {
        return this.getStrategy().getEthereumChainId();
    }
    async getEthereumTransactionReceipt(txHash) {
        return this.getStrategy().getEthereumTransactionReceipt(txHash);
    }
    async confirm(address) {
        return this.getStrategy().confirm(address);
    }
    async disconnectWallet() {
        const strategy = this.getStrategy();
        if (strategy.disconnect !== undefined) {
            await strategy.disconnect();
        }
        this.wallet = Wallet.Metamask;
    }
    async sendTransaction(tx, options) {
        return this.getStrategy().sendTransaction(tx, options);
    }
    async sendEthereumTransaction(tx /* TODO */, options) {
        return this.getStrategy().sendEthereumTransaction(tx, options);
    }
    /** @deprecated * */
    async signTransaction(data, address) {
        return this.getStrategy().signTransaction(data, address);
    }
    async signEip712TypedData(eip712TypedData, address) {
        if (isCosmosWallet(this.wallet)) {
            throw new WalletException(new Error(`You can't sign Ethereum Transaction using ${this.wallet}`));
        }
        return this.getStrategy().signEip712TypedData(eip712TypedData, address);
    }
    async signCosmosTransaction(transaction) {
        if (isEthWallet(this.wallet)) {
            throw new WalletException(new Error(`You can't sign Cosmos Transaction using ${this.wallet}`));
        }
        return this.getStrategy().signCosmosTransaction(transaction);
    }
    async signArbitrary(signer, data) {
        if (this.getStrategy().signArbitrary) {
            return this.getStrategy().signArbitrary(signer, data);
        }
    }
    onAccountChange(callback) {
        if (this.getStrategy().onAccountChange) {
            return this.getStrategy().onAccountChange(callback);
        }
    }
    onChainIdChange(callback) {
        if (this.getStrategy().onChainIdChange) {
            return this.getStrategy().onChainIdChange(callback);
        }
    }
    cancelOnChainIdChange() {
        if (this.getStrategy().cancelOnChainIdChange) {
            return this.getStrategy().cancelOnChainIdChange();
        }
    }
    cancelAllEvents() {
        if (this.getStrategy().cancelAllEvents) {
            return this.getStrategy().cancelAllEvents();
        }
    }
    cancelOnAccountChange() {
        if (this.getStrategy().cancelOnAccountChange) {
            return this.getStrategy().cancelOnAccountChange();
        }
    }
}
//# sourceMappingURL=WalletStrategy.js.map