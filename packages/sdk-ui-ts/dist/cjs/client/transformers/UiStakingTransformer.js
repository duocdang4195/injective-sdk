"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiStakingTransformer = void 0;
class UiStakingTransformer {
    static validatorsToUiValidators(validators) {
        return validators.map((validator) => {
            return {
                jailed: validator.jailed,
                status: validator.status,
                unbondingTime: Math.floor(validator.unbondingTime.getTime() / 1000),
                delegatorShares: validator.delegatorShares,
                tokens: validator.tokens,
                unbondingHeight: validator.unbondingHeight,
                commissionRate: validator.commission.commissionRates.rate,
                commission: validator.commission,
                description: validator.description,
                name: validator.description.moniker,
                address: validator.operatorAddress,
            };
        });
    }
}
exports.UiStakingTransformer = UiStakingTransformer;
//# sourceMappingURL=UiStakingTransformer.js.map