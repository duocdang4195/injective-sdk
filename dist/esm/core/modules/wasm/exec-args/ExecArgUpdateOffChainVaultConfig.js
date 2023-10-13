import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateOffChainVaultConfig extends ExecArgBase {
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
        return dataToExecData('update_vault_config', this.toData());
    }
}
//# sourceMappingURL=ExecArgUpdateOffChainVaultConfig.js.map