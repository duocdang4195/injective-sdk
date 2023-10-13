import { ConcreteException } from '../exception';
import { ErrorType } from '../types';
import { mapMetamaskMessage } from '../utils/maps';
const removeTrustWalletFromErrorString = (message) => message
    .replaceAll('TrustWallet', '')
    .replaceAll('Trust Wallet', '')
    .replaceAll('Trustwallet', '')
    .replaceAll('TrustWallet:', '')
    .replaceAll('Trust Wallet:', '');
export class TrustWalletException extends ConcreteException {
    errorClass = 'TrustWalletException';
    constructor(error, context) {
        super(error, context);
        this.type = ErrorType.WalletError;
    }
    parseMessage() {
        const { message } = this;
        this.setMessage(mapMetamaskMessage(removeTrustWalletFromErrorString(message)));
    }
}
//# sourceMappingURL=TrustWalletException.js.map