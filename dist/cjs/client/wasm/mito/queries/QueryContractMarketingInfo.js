"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryContractMarketingInfo = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryContractMarketingInfo extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({ marketing_info: {} });
    }
}
exports.QueryContractMarketingInfo = QueryContractMarketingInfo;
//# sourceMappingURL=QueryContractMarketingInfo.js.map