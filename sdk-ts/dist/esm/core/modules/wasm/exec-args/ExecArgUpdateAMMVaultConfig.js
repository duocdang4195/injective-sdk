import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateAMMVaultConfig extends ExecArgBase {
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
        return dataToExecData('update_vault_config', this.toData());
    }
}
//# sourceMappingURL=ExecArgUpdateAMMVaultConfig.js.map