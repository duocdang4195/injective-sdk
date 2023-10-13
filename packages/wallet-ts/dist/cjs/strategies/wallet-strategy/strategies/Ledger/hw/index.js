"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hw_transport_webhid_1 = __importDefault(require("@ledgerhq/hw-transport-webhid"));
const hw_transport_webusb_1 = __importDefault(require("@ledgerhq/hw-transport-webusb"));
const exceptions_1 = require("@injectivelabs/exceptions");
const AccountManager_1 = __importDefault(require("./AccountManager"));
class LedgerTransport {
    constructor() {
        this.ledger = null;
        this.accountManager = null;
    }
    static getTransport() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (yield hw_transport_webhid_1.default.isSupported()) {
                    const list = yield hw_transport_webhid_1.default.list();
                    if (list.length > 0 && list[0].opened) {
                        return new hw_transport_webhid_1.default(list[0]);
                    }
                    const existing = yield hw_transport_webhid_1.default.openConnected().catch(() => null);
                    if (existing) {
                        return existing;
                    }
                    return yield hw_transport_webhid_1.default.request();
                }
                if (yield hw_transport_webusb_1.default.isSupported()) {
                    const existing = yield hw_transport_webusb_1.default.openConnected().catch(() => null);
                    if (existing) {
                        return existing;
                    }
                    return yield hw_transport_webusb_1.default.request();
                }
            }
            catch (e) {
                throw new exceptions_1.LedgerException(new Error(e.message));
            }
            return hw_transport_webusb_1.default.request();
        });
    }
    getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.ledger) {
                const transport = yield LedgerTransport.getTransport();
                const EthereumApp = yield Promise.resolve().then(() => __importStar(require('@ledgerhq/hw-app-eth')));
                this.ledger = new EthereumApp.default(transport);
                transport.on('disconnect', () => {
                    this.ledger = null;
                    this.accountManager = null;
                });
            }
            return this.ledger;
        });
    }
    getAccountManager() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accountManager) {
                this.accountManager = new AccountManager_1.default(yield this.getInstance());
            }
            return this.accountManager;
        });
    }
}
exports.default = LedgerTransport;
//# sourceMappingURL=index.js.map