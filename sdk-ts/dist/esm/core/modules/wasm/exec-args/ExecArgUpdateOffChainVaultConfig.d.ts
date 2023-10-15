import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgUpdateOffChainVaultConfig {
    interface Params {
        oracleStaleTime: number;
        notionalValueCap: string;
        vaultType: Record<string, any>;
    }
    interface Data {
        oracle_stale_time: number;
        notional_value_cap: string;
        vault_type: Record<string, any>;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgUpdateOffChainVaultConfig extends ExecArgBase<ExecArgUpdateOffChainVaultConfig.Params, ExecArgUpdateOffChainVaultConfig.Data> {
    static fromJSON(params: ExecArgUpdateOffChainVaultConfig.Params): ExecArgUpdateOffChainVaultConfig;
    toData(): ExecArgUpdateOffChainVaultConfig.Data;
    toExecData(): ExecDataRepresentation<ExecArgUpdateOffChainVaultConfig.Data>;
}
//# sourceMappingURL=ExecArgUpdateOffChainVaultConfig.d.ts.map