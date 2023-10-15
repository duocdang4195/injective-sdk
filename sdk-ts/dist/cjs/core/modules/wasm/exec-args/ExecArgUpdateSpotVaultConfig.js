"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgUpdateSpotVaultConfig extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgUpdateSpotVaultConfig(params);
    }
    toData() {
        const { params } = this;
        return {
            market_id: params.marketId,
            order_density: params.orderDensity,
            reservation_price_sensitivity_ratio: params.reservationPriceSensitivityRatio,
            reservation_spread_sensitivity_ratio: params.reservationSpreadSensitivityRatio,
            max_active_capital_utilization_ratio: params.maxActiveCapitalUtilizationRatio,
            head_change_tolerance_ratio: params.headChangeToleranceRatio,
            head_to_tail_deviation_ratio: params.headToTailDeviationRatio,
            signed_min_head_to_fair_price_deviation_ratio: params.signedMinHeadToFairPriceDeviationRatio,
            signed_min_head_to_tob_deviation_ratio: params.signedMinHeadToTobDeviationRatio,
            target_base_weight: params.targetBaseWeight,
            oracle_type: params.oracleType,
            default_mid_price_volatility_ratio: params.defaultMidPriceVolatilityRatio,
            allowed_redemption_types: params.allowedRedemptionTypes,
            notional_value_cap: params.notionalValueCap,
            oracle_stale_time: params.oracleStaleTime,
            last_valid_mark_price: params.lastValidMarkPrice,
            min_oracle_volatility_sample_size: params.minOracleVolatilitySampleSize,
            emergency_oracle_volatility_sample_size: params.emergencyOracleVolatilitySampleSize,
            min_volatility_ratio: params.minVolatilityRatio,
            oracle_volatility_max_age: params.oracleVolatilityMaxAge,
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('update_vault_config', this.toData());
    }
}
exports.default = ExecArgUpdateSpotVaultConfig;
//# sourceMappingURL=ExecArgUpdateSpotVaultConfig.js.map