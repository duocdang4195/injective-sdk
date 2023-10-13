import { ExecArgBase, ExecDataRepresentation } from '../ExecArgBase';
export declare namespace ExecArgCreateSpotGridStrategy {
    interface Params {
        subaccountId: string;
        lowerBound: string;
        upperBound: string;
        levels: number;
        slippage?: string;
        stopLoss?: string;
        takeProfit?: string;
        shouldExitWithQuoteOnly?: boolean;
    }
    interface Data {
        subaccount_id: string;
        bounds: [string, string];
        levels: number;
        slippage?: string;
        stop_loss?: string;
        take_profit?: string;
        should_exit_with_quote_only: boolean;
    }
}
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgCreateSpotGridStrategy extends ExecArgBase<ExecArgCreateSpotGridStrategy.Params, ExecArgCreateSpotGridStrategy.Data> {
    static fromJSON(params: ExecArgCreateSpotGridStrategy.Params): ExecArgCreateSpotGridStrategy;
    toData(): ExecArgCreateSpotGridStrategy.Data;
    toExecData(): ExecDataRepresentation<ExecArgCreateSpotGridStrategy.Data>;
}
//# sourceMappingURL=ExecArgCreateSpotGridStrategy.d.ts.map