"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgCreateSpotGridStrategy extends ExecArgBase_1.ExecArgBase {
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
        return (0, ExecArgBase_1.dataToExecData)('create_strategy', this.toData());
    }
}
exports.default = ExecArgCreateSpotGridStrategy;
//# sourceMappingURL=ExecArgCreateSpotGridStrategy.js.map