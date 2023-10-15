import { ConcreteException } from '../exception';
import { ErrorType } from '../types';
import { mapMetamaskMessage } from '../utils/maps';
const removeMetamaskFromErrorString = (message) => message
    .replaceAll('Metamask', '')
    .replaceAll('MetaMask', '')
    .replaceAll('Metamask:', '');
export class MetamaskException extends ConcreteException {
    errorClass = 'MetamaskException';
    constructor(error, context) {
        super(error, context);
        this.type = ErrorType.WalletError;
    }
    parseMessage() {
        const { message } = this;
        this.setMessage(mapMetamaskMessage(removeMetamaskFromErrorString(message)));
    }
}
//# sourceMappingURL=MetamaskException.js.map