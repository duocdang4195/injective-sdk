import { AccountAddress } from '@injectivelabs/ts-types';
import type EthereumApp from '@ledgerhq/hw-app-eth';
import { LedgerDerivationPathType, LedgerWalletInfo } from '../../../types';
export default class AccountManager {
    private wallets;
    private ledger;
    constructor(ledger: EthereumApp);
    getWallets(baseDerivationPath: string, derivationPathType: LedgerDerivationPathType): Promise<LedgerWalletInfo[]>;
    getLedgerDerivationPathBasedOnType: ({ fullBaseDerivationPath, derivationPathType, index, }: {
        fullBaseDerivationPath: string;
        derivationPathType: LedgerDerivationPathType;
        index: number;
    }) => string;
    private getWalletsBasedOnIndex;
    private hasWallets;
    private hasWalletsInOffset;
    private getOffset;
    hasWalletForAddress(address: AccountAddress): boolean;
    getWalletForAddress(address: AccountAddress): Promise<LedgerWalletInfo | undefined>;
}
//# sourceMappingURL=AccountManager.d.ts.map