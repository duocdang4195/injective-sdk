import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgUpdateAMMVaultConfig {
    interface Params {
        marketId: string;
        orderDensity: number;
        maxInvariantSensitivity: string;
        priceTickSize: string;
        notionalValueCap: string;
    }
    interface Data {
        market_id: string;
        order_density: number;
        max_invariant_sensitivity: string;
        price_tick_size: string;
        notional_value_cap: string;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateAMMVaultConfig extends ExecArgBase<ExecArgUpdateAMMVaultConfig.Params, ExecArgUpdateAMMVaultConfig.Data> {
    static fromJSON(params: ExecArgUpdateAMMVaultConfig.Params): ExecArgUpdateAMMVaultConfig;
    toData(): ExecArgUpdateAMMVaultConfig.Data;
    toExecData(): ExecDataRepresentation<ExecArgUpdateAMMVaultConfig.Data>;
}
//# sourceMappingURL=ExecArgUpdateAMMVaultConfig.d.ts.map