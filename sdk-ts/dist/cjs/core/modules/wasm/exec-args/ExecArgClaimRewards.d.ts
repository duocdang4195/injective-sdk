import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgClaimRewards {
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
export default class ExecArgClaimRewards extends ExecArgBase<ExecArgClaimRewards.Params, ExecArgClaimRewards.Data> {
    static fromJSON(params: ExecArgClaimRewards.Params): ExecArgClaimRewards;
    toData(): ExecArgClaimRewards.Data;
    toExecData(): ExecDataRepresentation<ExecArgClaimRewards.Data>;
}
//# sourceMappingURL=ExecArgClaimRewards.d.ts.map