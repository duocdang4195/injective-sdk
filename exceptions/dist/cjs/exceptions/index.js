"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletException = exports.TransactionException = exports.CosmosWalletException = exports.TrustWalletException = exports.TrezorException = exports.MetamaskException = exports.LedgerException = exports.GeneralException = exports.Web3Exception = exports.HttpRequestException = exports.GrpcUnaryRequestException = exports.isThrownException = void 0;
const GrpcUnaryRequestException_1 = require("./GrpcUnaryRequestException");
Object.defineProperty(exports, "GrpcUnaryRequestException", { enumerable: true, get: function () { return GrpcUnaryRequestException_1.GrpcUnaryRequestException; } });
const HttpRequestException_1 = require("./HttpRequestException");
Object.defineProperty(exports, "HttpRequestException", { enumerable: true, get: function () { return HttpRequestException_1.HttpRequestException; } });
const Web3Exception_1 = require("./Web3Exception");
Object.defineProperty(exports, "Web3Exception", { enumerable: true, get: function () { return Web3Exception_1.Web3Exception; } });
const GeneralException_1 = require("./GeneralException");
Object.defineProperty(exports, "GeneralException", { enumerable: true, get: function () { return GeneralException_1.GeneralException; } });
const LedgerException_1 = require("./LedgerException");
Object.defineProperty(exports, "LedgerException", { enumerable: true, get: function () { return LedgerException_1.LedgerException; } });
const MetamaskException_1 = require("./MetamaskException");
Object.defineProperty(exports, "MetamaskException", { enumerable: true, get: function () { return MetamaskException_1.MetamaskException; } });
const TrustWalletException_1 = require("./TrustWalletException");
Object.defineProperty(exports, "TrustWalletException", { enumerable: true, get: function () { return TrustWalletException_1.TrustWalletException; } });
const TrezorException_1 = require("./TrezorException");
Object.defineProperty(exports, "TrezorException", { enumerable: true, get: function () { return TrezorException_1.TrezorException; } });
const CosmosWalletException_1 = require("./CosmosWalletException");
Object.defineProperty(exports, "CosmosWalletException", { enumerable: true, get: function () { return CosmosWalletException_1.CosmosWalletException; } });
const TransactionException_1 = require("./TransactionException");
Object.defineProperty(exports, "TransactionException", { enumerable: true, get: function () { return TransactionException_1.TransactionException; } });
const WalletException_1 = require("./WalletException");
Object.defineProperty(exports, "WalletException", { enumerable: true, get: function () { return WalletException_1.WalletException; } });
const exception_1 = require("../exception");
const isThrownException = (exception) => {
    if (exception instanceof exception_1.ConcreteException) {
        return true;
    }
    if ([
        'GrpcUnaryRequestException',
        'HttpRequestException',
        'Web3Exception',
        'GeneralException',
        'LedgerException',
        'MetamaskException',
        'TrezorException',
        'CosmosWalletException',
        'TransactionException',
        'WalletException',
        'TrustWalletException',
    ].includes(exception.constructor.name)) {
        return true;
    }
    return false;
};
exports.isThrownException = isThrownException;
//# sourceMappingURL=index.js.map