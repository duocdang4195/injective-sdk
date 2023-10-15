import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgClaimStake {
    interface Params {
        lpToken: string;
    }
    interface Data {
        lp_token: string;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgClaimStake extends ExecArgBase<ExecArgClaimStake.Params, ExecArgClaimStake.Data> {
    static fromJSON(params: ExecArgClaimStake.Params): ExecArgClaimStake;
    toData(): ExecArgClaimStake.Data;
    toExecData(): ExecDataRepresentation<ExecArgClaimStake.Data>;
}
//# sourceMappingURL=ExecArgClaimStake.d.ts.map