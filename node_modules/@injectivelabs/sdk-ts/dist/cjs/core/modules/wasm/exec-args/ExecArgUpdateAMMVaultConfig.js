"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgUpdateAMMVaultConfig extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgUpdateAMMVaultConfig(params);
    }
    toData() {
        const { params } = this;
        return {
            market_id: params.marketId,
            order_density: params.orderDensity,
            max_invariant_sensitivity: params.maxInvariantSensitivity,
            price_tick_size: params.priceTickSize,
            notional_value_cap: params.notionalValueCap,
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('update_vault_config', this.toData());
    }
}
exports.default = ExecArgUpdateAMMVaultConfig;
//# sourceMappingURL=ExecArgUpdateAMMVaultConfig.js.map