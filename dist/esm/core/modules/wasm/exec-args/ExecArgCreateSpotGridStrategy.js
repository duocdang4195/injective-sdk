import { dataToExecData, ExecArgBase, } from '../ExecArgBase';
/**
 * @category Contract Exec Arguments
 */
export default class ExecArgCreateSpotGridStrategy extends ExecArgBase {
    static fromJSON(params) {
        return new ExecArgCreateSpotGridStrategy(params);
    }
    toData() {
        const { params } = this;
        return {
            subaccount_id: params.subaccountId,
            levels: params.levels,
            bounds: [params.lowerBound, params.upperBound],
            slippage: params.slippage,
            stop_loss: params.stopLoss,
            take_profit: params.takeProfit,
            should_exit_with_quote_only: !!params.shouldExitWithQuoteOnly,
        };
    }
    toExecData() {
        return dataToExecData('create_strategy', this.toData());
    }
}
//# sourceMappingURL=ExecArgCreateSpotGridStrategy.js.map