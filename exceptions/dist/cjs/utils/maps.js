"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMetamaskMessage = exports.mapFailedTransactionMessage = exports.mapFailedTransactionMessageFromString = exports.parseErrorMessage = void 0;
const messages_1 = require("../messages");
const types_1 = require("../types");
const parseErrorMessage = (message) => {
    const firstParse = message.split('message index: 0:');
    if (firstParse.length === 1) {
        const [firstParseString] = firstParse;
        const secondParse = firstParseString.split(': invalid request');
        const [secondParseString] = secondParse;
        return secondParseString.trim().trimEnd();
    }
    const [, firstParseString] = firstParse;
    const [actualMessage] = firstParseString.split(': invalid request');
    return actualMessage.trim().trimEnd();
};
exports.parseErrorMessage = parseErrorMessage;
const mapFailedTransactionMessageFromString = (message) => {
    const parsedMessage = (0, exports.parseErrorMessage)(message);
    const messageInMapKey = Object.keys(messages_1.chainErrorMessagesMap).find((key) => parsedMessage.toLowerCase().includes(key.toLowerCase()));
    if (!messageInMapKey) {
        return {
            message: parsedMessage,
            code: types_1.UnspecifiedErrorCode,
            module: undefined,
        };
    }
    return messages_1.chainErrorMessagesMap[messageInMapKey];
};
exports.mapFailedTransactionMessageFromString = mapFailedTransactionMessageFromString;
const mapFailedTransactionMessage = (message, context) => {
    const getABCICode = (message) => {
        const ABCICodePattern = /{key:"ABCICode"[ \t]+value:"(.*?)"}/g;
        const ABCICode = ABCICodePattern.exec(message);
        if (!ABCICode || ABCICode.length < 2) {
            return;
        }
        return Number(ABCICode[1]);
    };
    const getContextModule = (message) => {
        const codespacePattern = /{key:"Codespace"[ \t]+value:"(.*?)"}/g;
        const codespace = codespacePattern.exec(message);
        if (!codespace || codespace.length < 2) {
            return;
        }
        return codespace[1];
    };
    const getReason = (message) => {
        const reason = /\[reason:"(.*?)"/g;
        const codespace = reason.exec(message);
        if (!codespace || codespace.length < 2) {
            return;
        }
        return codespace[1];
    };
    const ABCICode = context && context.code ? context.code : getABCICode(message);
    const contextModule = (context === null || context === void 0 ? void 0 : context.contextModule) || getContextModule(message);
    const reason = getReason(message);
    if (!ABCICode || !contextModule) {
        const failedTxMap = (0, exports.mapFailedTransactionMessageFromString)(message);
        return Object.assign(Object.assign({}, failedTxMap), { message: reason || failedTxMap.message });
    }
    const codespaceErrorMessages = messages_1.chainModuleCodeErrorMessagesMap[contextModule];
    if (!codespaceErrorMessages) {
        return {
            message: reason || message,
            code: ABCICode,
            contextModule,
        };
    }
    return {
        message: codespaceErrorMessages[ABCICode] || reason || message,
        code: ABCICode,
        contextModule,
    };
};
exports.mapFailedTransactionMessage = mapFailedTransactionMessage;
const mapMetamaskMessage = (message) => {
    const parsedMessage = message.trim().toLowerCase();
    if (parsedMessage.includes('User denied message signature'.toLowerCase())) {
        return 'The request has been rejected';
    }
    return parsedMessage;
};
exports.mapMetamaskMessage = mapMetamaskMessage;
//# sourceMappingURL=maps.js.map