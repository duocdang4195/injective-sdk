import { ConcreteException } from '../exception';
import { ErrorType } from '../types';
import { mapFailedTransactionMessage, parseErrorMessage } from '../utils/maps';
export class TransactionException extends ConcreteException {
    errorClass = 'TransactionException';
    constructor(error, context) {
        super(error, context);
        this.type = ErrorType.ChainError;
    }
    parse() {
        const { message, contextModule, contextCode } = this;
        const { code, contextModule: parsedContextModule, message: parsedMessage, } = mapFailedTransactionMessage(message, { contextCode, contextModule });
        this.setMessage(parsedMessage);
        this.setContextCode(code);
        this.setOriginalMessage(parseErrorMessage(message));
        if (parsedContextModule) {
            this.setContextModule(parsedContextModule);
        }
    }
}
//# sourceMappingURL=TransactionException.js.map