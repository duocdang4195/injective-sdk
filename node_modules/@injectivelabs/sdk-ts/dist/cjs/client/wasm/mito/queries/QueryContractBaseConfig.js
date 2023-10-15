"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryContractBaseConfig = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryContractBaseConfig extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({ base: { config: {} } });
    }
}
exports.QueryContractBaseConfig = QueryContractBaseConfig;
//# sourceMappingURL=QueryContractBaseConfig.js.map