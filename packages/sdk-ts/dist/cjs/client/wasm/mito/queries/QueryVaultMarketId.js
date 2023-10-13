"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryVaultMarketId = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryVaultMarketId extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({
            get_market_id: {
                subaccount_id: this.params.subaccountId,
            },
        });
    }
}
exports.QueryVaultMarketId = QueryVaultMarketId;
//# sourceMappingURL=QueryVaultMarketId.js.map