"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgUpdateOffChainVaultConfig extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgUpdateOffChainVaultConfig(params);
    }
    toData() {
        const { params } = this;
        return {
            oracle_stale_time: params.oracleStaleTime,
            notional_value_cap: params.notionalValueCap,
            vault_type: params.vaultType,
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('update_vault_config', this.toData());
    }
}
exports.default = ExecArgUpdateOffChainVaultConfig;
//# sourceMappingURL=ExecArgUpdateOffChainVaultConfig.js.map