import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgUpdateSpotVaultConfig {
    interface Params {
        marketId: string;
        orderDensity: number;
        reservationPriceSensitivityRatio: string;
        reservationSpreadSensitivityRatio: string;
        maxActiveCapitalUtilizationRatio: string;
        headChangeToleranceRatio: string;
        headToTailDeviationRatio: string;
        signedMinHeadToFairPriceDeviationRatio: string;
        signedMinHeadToTobDeviationRatio: string;
        targetBaseWeight: string;
        oracleType: number;
        defaultMidPriceVolatilityRatio: string;
        allowedRedemptionTypes: number;
        notionalValueCap: string;
        oracleStaleTime: number;
        lastValidMarkPrice: string;
        minOracleVolatilitySampleSize: number;
        emergencyOracleVolatilitySampleSize: number;
        minVolatilityRatio: string;
        oracleVolatilityMaxAge: number;
    }
    interface Data {
        market_id: string;
        order_density: number;
        reservation_price_sensitivity_ratio: string;
        reservation_spread_sensitivity_ratio: string;
        max_active_capital_utilization_ratio: string;
        head_change_tolerance_ratio: string;
        head_to_tail_deviation_ratio: string;
        signed_min_head_to_fair_price_deviation_ratio: string;
        signed_min_head_to_tob_deviation_ratio: string;
        target_base_weight: string;
        oracle_type: number;
        default_mid_price_volatility_ratio: string;
        allowed_redemption_types: number;
        notional_value_cap: string;
        oracle_stale_time: number;
        last_valid_mark_price: string;
        min_oracle_volatility_sample_size: number;
        emergency_oracle_volatility_sample_size: number;
        min_volatility_ratio: string;
        oracle_volatility_max_age: number;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateSpotVaultConfig extends ExecArgBase<ExecArgUpdateSpotVaultConfig.Params, ExecArgUpdateSpotVaultConfig.Data> {
    static fromJSON(params: ExecArgUpdateSpotVaultConfig.Params): ExecArgUpdateSpotVaultConfig;
    toData(): ExecArgUpdateSpotVaultConfig.Data;
    toExecData(): ExecDataRepresentation<ExecArgUpdateSpotVaultConfig.Data>;
}
//# sourceMappingURL=ExecArgUpdateSpotVaultConfig.d.ts.map