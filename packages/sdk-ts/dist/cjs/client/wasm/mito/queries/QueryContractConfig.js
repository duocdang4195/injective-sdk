"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryContractConfig = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryContractConfig extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({ config: {} });
    }
}
exports.QueryContractConfig = QueryContractConfig;
//# sourceMappingURL=QueryContractConfig.js.map