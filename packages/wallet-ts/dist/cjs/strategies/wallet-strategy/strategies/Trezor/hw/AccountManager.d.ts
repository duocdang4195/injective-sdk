import { AccountAddress } from '@injectivelabs/ts-types';
import HDNode from 'hdkey';
import { TrezorWalletInfo } from '../../../types';
export default class AccountManager {
    private wallets;
    private hdKey;
    constructor(hdKey: HDNode);
    getWallets(): Promise<TrezorWalletInfo[]>;
    private getWalletsBasedOnIndex;
    private hasWallets;
    private hasWalletsInOffset;
    private getOffset;
    hasWalletForAddress(address: AccountAddress): boolean;
    getWalletForAddress(address: AccountAddress): Promise<TrezorWalletInfo | undefined>;
}
//# sourceMappingURL=AccountManager.d.ts.map