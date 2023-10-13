import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateDerivativeVaultConfig extends ExecArgBase {
    static fromJSON(params) {
        return new ExecArgUpdateDerivativeVaultConfig(params);
    }
    toData() {
        const { params } = this;
        return {
            market_id: params.marketId,
            leverage: params.leverage,
            order_density: params.orderDensity,
            signed_min_head_to_fair_price_deviation_ratio: params.signedMinHeadToFairPriceDeviationRatio,
            signed_min_head_to_tob_deviation_ratio: params.signedMinHeadToTobDeviationRatio,
            reservation_price_sensitivity_ratio: params.reservationPriceSensitivityRatio,
            reservation_spread_sensitivity_ratio: params.reservationSpreadSensitivityRatio,
            max_active_capital_utilization_ratio: params.maxActiveCapitalUtilizationRatio,
            head_change_tolerance_ratio: params.headChangeToleranceRatio,
            head_to_tail_deviation_ratio: params.headToTailDeviationRatio,
            min_proximity_to_liquidation: params.minProximityToLiquidation,
            min_oracle_volatility_sample_size: params.minOracleVolatilitySampleSize,
            emergency_oracle_volatility_sample_size: params.emergencyOracleVolatilitySampleSize,
            default_mid_price_volatility_ratio: params.defaultMidPriceVolatilityRatio,
            min_volatility_ratio: params.minVolatilityRatio,
            last_valid_mark_price: params.lastValidMarkPrice,
            allowed_redemption_types: params.allowedRedemptionTypes,
            notional_value_cap: params.notionalValueCap,
            oracle_stale_time: params.oracleStaleTime,
            oracle_volatility_max_age: params.oracleVolatilityMaxAge,
        };
    }
    toExecData() {
        return dataToExecData('update_vault_config', this.toData());
    }
}
//# sourceMappingURL=ExecArgUpdateDerivativeVaultConfig.js.map