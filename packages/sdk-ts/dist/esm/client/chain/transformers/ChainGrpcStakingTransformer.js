import { BigNumberInWei } from '@injectivelabs/utils';
import { BondStatus, } from '../types/staking';
import { cosmosSdkDecToBigNumber } from '../../../utils';
import { grpcPaginationToPagination } from '../../../utils/pagination';
/**
 * @category Chain Grpc Transformer
 */
export class ChainGrpcStakingTransformer {
    static moduleParamsResponseToModuleParams(response) {
        const params = response.params;
        return {
            unbondingTime: parseInt(params.unbondingTime.seconds, 10),
            minCommissionRate: params.minCommissionRate,
            maxValidators: params.maxValidators,
            maxEntries: params.maxEntries,
            historicalEntries: params.historicalEntries,
            bondDenom: params.bondDenom,
        };
    }
    static validatorResponseToValidator(response) {
        return ChainGrpcStakingTransformer.grpcValidatorToValidator(response.validator);
    }
    static validatorsResponseToValidators(response) {
        const validators = response.validators.map((validator) => ChainGrpcStakingTransformer.grpcValidatorToValidator(validator));
        return {
            validators,
            pagination: grpcPaginationToPagination(response.pagination),
        };
    }
    static delegationResponseToDelegation(response) {
        const grpcDelegation = response.delegationResponse;
        const delegation = grpcDelegation.delegation;
        const balance = grpcDelegation.balance;
        return {
            delegation: {
                delegatorAddress: delegation ? delegation.delegatorAddress : '',
                validatorAddress: delegation ? delegation.validatorAddress : '',
                shares: cosmosSdkDecToBigNumber(delegation ? delegation.shares : 0).toFixed(),
            },
            balance: {
                denom: balance ? balance.denom : '',
                amount: new BigNumberInWei(balance ? balance.amount : 0).toFixed(),
            },
        };
    }
    static delegationsResponseToDelegations(response) {
        const grpcDelegations = response.delegationResponses;
        const delegations = grpcDelegations.map((grpcDelegator) => {
            const delegation = grpcDelegator.delegation;
            const balance = grpcDelegator.balance;
            return {
                delegation: {
                    delegatorAddress: delegation ? delegation.delegatorAddress : '',
                    validatorAddress: delegation ? delegation.validatorAddress : '',
                    shares: cosmosSdkDecToBigNumber(delegation ? delegation.shares : 0).toFixed(),
                },
                balance: {
                    denom: balance ? balance.denom : '',
                    amount: new BigNumberInWei(balance ? balance.amount : 0).toFixed(),
                },
            };
        });
        return {
            delegations,
            pagination: grpcPaginationToPagination(response.pagination),
        };
    }
    static unBondingDelegationsResponseToUnBondingDelegations(response) {
        const grpcUnbondingDelegations = response.unbondingResponses;
        const unbondingDelegations = grpcUnbondingDelegations.reduce((unbondingDelegations, grpcUnBondingDelegation) => {
            const entries = grpcUnBondingDelegation.entries;
            const mappedEntries = entries.map((entry) => ({
                delegatorAddress: grpcUnBondingDelegation
                    ? grpcUnBondingDelegation.delegatorAddress
                    : '',
                validatorAddress: grpcUnBondingDelegation
                    ? grpcUnBondingDelegation.validatorAddress
                    : '',
                creationHeight: parseInt(entry.creationHeight, 10),
                completionTime: Math.floor(entry.completionTime.getTime() / 1000),
                initialBalance: new BigNumberInWei(entry.initialBalance).toFixed(),
                balance: new BigNumberInWei(entry.balance).toFixed(),
            }));
            return [...unbondingDelegations, ...mappedEntries];
        }, []);
        return {
            unbondingDelegations,
            pagination: grpcPaginationToPagination(response.pagination),
        };
    }
    static reDelegationsResponseToReDelegations(response) {
        const grpcReDelegations = response.redelegationResponses;
        const redelegations = grpcReDelegations.reduce((uiReDelegator, grpcReDelegationCurrent) => {
            const grpcRedelegation = grpcReDelegationCurrent.redelegation;
            if (!grpcRedelegation) {
                return uiReDelegator;
            }
            const uiRedelegations = grpcReDelegationCurrent.entries.reduce((acc, entry) => {
                return [
                    ...acc,
                    {
                        delegation: {
                            completionTime: entry.redelegationEntry
                                ? Math.floor(entry.redelegationEntry.completionTime.getTime() /
                                    1000)
                                : 0,
                            delegatorAddress: grpcRedelegation.delegatorAddress || '',
                            sourceValidatorAddress: grpcRedelegation.validatorSrcAddress || '',
                            destinationValidatorAddress: grpcRedelegation?.validatorDstAddress || '',
                        },
                        balance: new BigNumberInWei(entry.balance).toFixed(),
                    },
                ];
            }, []);
            return [...uiReDelegator, ...uiRedelegations];
        }, []);
        return {
            redelegations,
            pagination: grpcPaginationToPagination(response.pagination),
        };
    }
    static grpcValidatorToValidator(validator) {
        return {
            operatorAddress: validator.operatorAddress,
            jailed: validator.jailed,
            status: ChainGrpcStakingTransformer.grpcValidatorStatusToStatus(validator.status),
            tokens: cosmosSdkDecToBigNumber(validator.tokens).toFixed(),
            delegatorShares: cosmosSdkDecToBigNumber(validator.delegatorShares).toFixed(),
            description: ChainGrpcStakingTransformer.grpcValidatorDescriptionToDescription(validator.description),
            unbondingHeight: parseInt(validator.unbondingHeight, 10),
            unbondingTime: validator.unbondingTime,
            commission: ChainGrpcStakingTransformer.grpcValidatorCommissionToCommission(validator.commission),
            minSelfDelegation: validator.minSelfDelegation,
        };
    }
    static poolResponseToPool(response) {
        const pool = response.pool;
        if (!pool) {
            return {
                notBondedTokens: '0',
                bondedTokens: '0',
            };
        }
        return {
            notBondedTokens: cosmosSdkDecToBigNumber(pool.notBondedTokens).toFixed(),
            bondedTokens: cosmosSdkDecToBigNumber(pool.bondedTokens).toFixed(),
        };
    }
    static grpcValidatorDescriptionToDescription(description) {
        return {
            moniker: description ? description.moniker : '',
            identity: description ? description.identity : '',
            website: description ? description.website : '',
            securityContact: description ? description.securityContact : '',
            details: description ? description.details : '',
        };
    }
    static grpcValidatorCommissionToCommission(commission) {
        const commissionRates = commission ? commission.commissionRates : null;
        return {
            commissionRates: {
                rate: cosmosSdkDecToBigNumber(commissionRates ? commissionRates.rate : '0').toFixed(),
                maxRate: cosmosSdkDecToBigNumber(commissionRates ? commissionRates.maxRate : '0').toFixed(),
                maxChangeRate: cosmosSdkDecToBigNumber(commissionRates ? commissionRates.maxChangeRate : '0').toFixed(),
            },
            updateTime: commission ? commission.updateTime : new Date(),
        };
    }
    static grpcValidatorStatusToStatus(status) {
        switch (status) {
            case 1:
                return BondStatus.UnBonded;
            case 2:
                return BondStatus.UnBonding;
            case 3:
                return BondStatus.Bonded;
            default:
                return BondStatus.UnBonded;
        }
    }
}
//# sourceMappingURL=ChainGrpcStakingTransformer.js.map