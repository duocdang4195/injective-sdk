import { Wallet } from '../../types/enums';
export const isEthWallet = (wallet) => [
    Wallet.Trezor,
    Wallet.Torus,
    Wallet.Ledger,
    Wallet.Metamask,
    Wallet.TrustWallet,
    Wallet.CosmostationEth,
].includes(wallet);
//# sourceMappingURL=utils.js.map