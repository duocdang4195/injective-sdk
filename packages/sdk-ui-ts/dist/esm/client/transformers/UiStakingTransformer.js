export class UiStakingTransformer {
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
//# sourceMappingURL=UiStakingTransformer.js.map