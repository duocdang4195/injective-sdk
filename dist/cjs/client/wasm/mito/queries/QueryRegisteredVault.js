"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryRegisteredVaults = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryRegisteredVaults extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({ get_registered_vaults: {} });
    }
}
exports.QueryRegisteredVaults = QueryRegisteredVaults;
//# sourceMappingURL=QueryRegisteredVault.js.map