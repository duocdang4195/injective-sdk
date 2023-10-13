"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryContractAllowance = void 0;
const BaseWasmQuery_1 = require("../../BaseWasmQuery");
const utils_1 = require("../../../../utils");
class QueryContractAllowance extends BaseWasmQuery_1.BaseWasmQuery {
    toPayload() {
        return (0, utils_1.toBase64)({
            allowance: {
                owner: this.params.owner,
                spender: this.params.spender,
            },
        });
    }
}
exports.QueryContractAllowance = QueryContractAllowance;
//# sourceMappingURL=QueryContractAllowance.js.map