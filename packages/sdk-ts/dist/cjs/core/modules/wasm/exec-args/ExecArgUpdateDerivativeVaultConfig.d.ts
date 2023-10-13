import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgUpdateDerivativeVaultConfig {
    interface Params {
        marketId: string;
        leverage: string;
        orderDensity: number;
        signedMinHeadToFairPriceDeviationRatio: string;
        signedMinHeadToTobDeviationRatio: string;
        reservationPriceSensitivityRatio: string;
        reservationSpreadSensitivityRatio: string;
        maxActiveCapitalUtilizationRatio: string;
        headChangeToleranceRatio: string;
        headToTailDeviationRatio: string;
        minProximityToLiquidation: string;
        minOracleVolatilitySampleSize: number;
        emergencyOracleVolatilitySampleSize: number;
        defaultMidPriceVolatilityRatio: string;
        minVolatilityRatio: string;
        lastValidMarkPrice: string;
        allowedRedemptionTypes: number;
        notionalValueCap: string;
        oracleStaleTime: number;
        oracleVolatilityMaxAge: number;
    }
    interface Data {
        market_id: string;
        leverage: string;
        order_density: number;
        signed_min_head_to_fair_price_deviation_ratio: string;
        signed_min_head_to_tob_deviation_ratio: string;
        reservation_price_sensitivity_ratio: string;
        reservation_spread_sensitivity_ratio: string;
        max_active_capital_utilization_ratio: string;
        head_change_tolerance_ratio: string;
        head_to_tail_deviation_ratio: string;
        min_proximity_to_liquidation: string;
        min_oracle_volatility_sample_size: number;
        emergency_oracle_volatility_sample_size: number;
        default_mid_price_volatility_ratio: string;
        min_volatility_ratio: string;
        last_valid_mark_price: string;
        allowed_redemption_types: number;
        notional_value_cap: string;
        oracle_stale_time: number;
        oracle_volatility_max_age: number;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateDerivativeVaultConfig extends ExecArgBase<ExecArgUpdateDerivativeVaultConfig.Params, ExecArgUpdateDerivativeVaultConfig.Data> {
    static fromJSON(params: ExecArgUpdateDerivativeVaultConfig.Params): ExecArgUpdateDerivativeVaultConfig;
    toData(): ExecArgUpdateDerivativeVaultConfig.Data;
    toExecData(): ExecDataRepresentation<ExecArgUpdateDerivativeVaultConfig.Data>;
}
//# sourceMappingURL=ExecArgUpdateDerivativeVaultConfig.d.ts.map