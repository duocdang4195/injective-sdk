import TransportWebHID from '@ledgerhq/hw-transport-webhid';
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
import { LedgerException } from '@injectivelabs/exceptions';
import AccountManager from './AccountManager';
export default class LedgerTransport {
    ledger = null;
    accountManager = null;
    static async getTransport() {
        try {
            if (await TransportWebHID.isSupported()) {
                const list = await TransportWebHID.list();
                if (list.length > 0 && list[0].opened) {
                    return new TransportWebHID(list[0]);
                }
                const existing = await TransportWebHID.openConnected().catch(() => null);
                if (existing) {
                    return existing;
                }
                return await TransportWebHID.request();
            }
            if (await TransportWebUSB.isSupported()) {
                const existing = await TransportWebUSB.openConnected().catch(() => null);
                if (existing) {
                    return existing;
                }
                return await TransportWebUSB.request();
            }
        }
        catch (e) {
            throw new LedgerException(new Error(e.message));
        }
        return TransportWebUSB.request();
    }
    async getInstance() {
        if (!this.ledger) {
            const transport = await LedgerTransport.getTransport();
            const EthereumApp = await import('@ledgerhq/hw-app-eth');
            this.ledger = new EthereumApp.default(transport);
            transport.on('disconnect', () => {
                this.ledger = null;
                this.accountManager = null;
            });
        }
        return this.ledger;
    }
    async getAccountManager() {
        if (!this.accountManager) {
            this.accountManager = new AccountManager(await this.getInstance());
        }
        return this.accountManager;
    }
}
//# sourceMappingURL=index.js.map