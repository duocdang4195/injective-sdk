/* eslint-disable class-methods-use-this */
import { ErrorType, UnspecifiedErrorCode, } from './types';
import { toPascalCase } from './utils';
export class ConcreteException extends Error {
    /**
     * The name of the error class as it the constructor.name might
     * give a minified class name when we bundle using webpack
     */
    static errorClass = '';
    /**
     * The type of the Error
     */
    type = ErrorType.Unspecified;
    /**
     * Error specific code (HttpStatus, GrpcStatus, etc)
     */
    code = UnspecifiedErrorCode;
    /**
     * The name of the error (the name of the instance of the Exception)
     */
    name;
    /**
     * The name of the error (the name of the instance of the Exception)
     * Needed for reporting reasons, ex: bugsnag
     */
    errorClass;
    /**
     * Providing more context
     * (ex: endpoint on http request)
     */
    context;
    /**
     * Providing more context as to where the exception was thrown
     * (ex: on-chain module, etc)
     */
    contextModule;
    /**
     * Providing more context as to why the exception was thrown
     * (ex: on-chain error code, etc)
     */
    contextCode;
    /**
     * Parsed message of the exception
     */
    message = '';
    /**
     * The original stack of the error
     */
    stack = '';
    /**
     * The original message of the error
     */
    originalMessage = '';
    constructor(error, context) {
        super(error.message);
        this.parseError(error);
        this.parseContext(context);
        this.parse();
    }
    parse() {
        //
    }
    parseError(error) {
        this.setName(this.errorClass || this.constructor.name);
        this.setStack(error.stack || '');
        this.setMessage(error.message);
        this.originalMessage = error.message;
    }
    parseContext(errorContext) {
        const { contextModule, type, code, context } = errorContext || {
            contextModule: '',
            context: '',
            code: UnspecifiedErrorCode,
            type: ErrorType.Unspecified,
        };
        this.context = context;
        this.contextModule = contextModule;
        this.type = type || ErrorType.Unspecified;
        this.code = code || UnspecifiedErrorCode;
    }
    setType(type) {
        this.type = type;
    }
    setCode(code) {
        this.code = code;
    }
    setContext(context) {
        this.context = context;
    }
    setOriginalMessage(message) {
        this.originalMessage = message;
    }
    setStack(stack) {
        super.stack = stack;
        this.stack = stack;
    }
    setName(name) {
        super.name = name;
        this.name = name;
        this.errorClass = name;
    }
    setMessage(message) {
        super.message = message;
        this.message = message;
    }
    setContextModule(contextModule) {
        this.contextModule = contextModule;
    }
    setContextCode(code) {
        this.contextCode = code;
    }
    toOriginalError() {
        const error = new Error(this.originalMessage);
        error.stack = this.stack;
        error.name = this.name || '';
        return error;
    }
    toError() {
        const error = new Error(this.message);
        error.stack = this.stack;
        error.name = this.name || '';
        return error;
    }
    toCompactError() {
        const name = this.name || toPascalCase(this.type);
        const error = new Error(`${this.message} | ${JSON.stringify({
            originalMessage: this.originalMessage,
            message: this.message,
            errorClass: name,
            code: this.code,
            type: this.type,
            context: this.context,
            contextModule: this.contextModule,
            contextCode: this.contextCode,
            stack: (this.stack || '').split('\n').map((line) => line.trim()),
        })}`);
        error.stack = this.stack;
        error.name = this.name || toPascalCase(this.type);
        return error;
    }
    toJson() {
        return JSON.stringify({ error: this.message, stack: this.stack });
    }
    toObject() {
        const name = this.name || toPascalCase(this.type);
        return {
            message: this.message,
            originalMessage: this.originalMessage,
            errorClass: name,
            code: this.code,
            type: this.type,
            context: this.context,
            contextModule: this.contextModule,
            contextCode: this.contextCode,
            stack: (this.stack || '').split('\n').map((line) => line.trim()),
        };
    }
    toString() {
        return this.message;
    }
}
//# sourceMappingURL=exception.js.map