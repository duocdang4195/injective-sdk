import { toUtf8 } from '../../../utils';
/**
 * @hidden
 */
const formatToString = (value) => value ? value.toString() : '';
export class MitoQueryTransformer {
    static contractMarketingInfoResponseToContractMarketingInfo(response) {
        const data = JSON.parse(toUtf8(response.data));
        return {
            project: data.project,
            description: data.description,
            logo: data.logo,
            marketing: data.marketing,
        };
    }
    static contractTokenInfoResponseToContractTokenInfo(response) {
        const data = JSON.parse(toUtf8(response.data));
        return {
            name: data.name,
            symbol: data.symbol,
            decimals: data.decimals,
            totalSupply: data.total_supply,
        };
    }
    static masterContractConfigResponseToMasterContractConfig(response) {
        const data = JSON.parse(toUtf8(response.data));
        return {
            distributionContract: data.distribution_contract,
            ninjaToken: data.ninja_token,
            owner: data.owner,
        };
    }
    static vaultContractBaseConfigResponseToBaseConfig(config) {
        return {
            owner: formatToString(config.owner),
            marketId: formatToString(config.market_id),
            subaccountId: formatToString(config.subaccount_id),
            feeRecipient: formatToString(config.fee_recipient),
            masterAddress: formatToString(config.master_address),
            orderDensity: Number(config.order_density),
            notionalValueCap: formatToString(config.notional_value_cap),
        };
    }
    static vaultContractMarketMakingResponseToMarketMaking(config) {
        return {
            reservationPriceSensitivityRatio: formatToString(config.reservation_price_sensitivity_ratio),
            reservationSpreadSensitivityRatio: formatToString(config.reservation_spread_sensitivity_ratio),
            maxActiveCapitalUtilizationRatio: formatToString(config.max_active_capital_utilization_ratio),
            headChangeToleranceRatio: formatToString(config.head_change_tolerance_ratio),
            headToTailDeviationRatio: formatToString(config.head_to_tail_deviation_ratio),
            signedMinHeadToFairPriceDeviationRatio: formatToString(config.signed_min_head_to_fair_price_deviation_ratio),
            signedMinHeadToTobDeviationRatio: formatToString(config.signed_min_head_to_tob_deviation_ratio),
            defaultMidPriceVolatilityRatio: formatToString(config.default_mid_price_volatility_ratio),
            minOracleVolatilitySampleSize: Number(config.min_oracle_volatility_sample_size),
            oracleVolatilityMaxAge: Number(config.oracle_volatility_max_age),
            emergencyOracleVolatilitySampleSize: Number(config.emergency_oracle_volatility_sample_size),
            lastValidMarkPrice: formatToString(config.last_valid_mark_price),
            minVolatilityRatio: formatToString(config.min_volatility_ratio),
            oracleStaleTime: Number(config.oracle_stale_time),
        };
    }
    static vaultContractConfigResponseToAMMVaultConfig(response) {
        const { config } = JSON.parse(toUtf8(response.data));
        return {
            base: MitoQueryTransformer.vaultContractBaseConfigResponseToBaseConfig(config.base),
            priceTickSize: formatToString(config.price_tick_size),
            maxInvariantSensitivity: formatToString(config.max_invariant_sensitivity),
            baseDecimals: Number(config.base_decimals),
            quoteDecimals: Number(config.quote_decimals),
        };
    }
    static vaultContractConfigResponseToDerivativeVaultConfig(response) {
        const { config } = JSON.parse(toUtf8(response.data));
        return {
            base: MitoQueryTransformer.vaultContractBaseConfigResponseToBaseConfig(config.base),
            marketMaking: MitoQueryTransformer.vaultContractMarketMakingResponseToMarketMaking(config.market_making),
            leverage: formatToString(config.leverage),
            minProximityToLiquidation: formatToString(config.min_proximity_to_liquidation),
            allowedRedemptionTypes: Number(config.allowed_redemption_types),
            positionPnlPenalty: formatToString(config.position_pnl_penalty),
        };
    }
    static vaultContractConfigResponseToSpotVaultContractConfig(response) {
        const { config } = JSON.parse(toUtf8(response.data));
        return {
            base: MitoQueryTransformer.vaultContractBaseConfigResponseToBaseConfig(config.base),
            marketMaking: MitoQueryTransformer.vaultContractMarketMakingResponseToMarketMaking(config.market_making),
            oracleType: Number(config.oracle_type),
            targetBaseWeight: formatToString(config.target_base_weight),
            allowedRedemptionTypes: Number(config.allowed_redemption_types),
            baseDecimals: Number(config.base_decimals),
            quoteDecimals: Number(config.quote_decimals),
            baseOracleSymbol: formatToString(config.base_oracle_symbol),
            quoteOracleSymbol: formatToString(config.quote_oracle_symbol),
        };
    }
    static offChainVaultContractConfigResponseToOffChainVaultConfig(response) {
        const data = JSON.parse(toUtf8(response.data));
        const isDerivativeVault = data.vault_type.Derivative !==
            undefined;
        const derivativeConfig = data.vault_type.Derivative;
        const spotConfig = data.vault_type.Spot;
        return {
            base: {
                admin: formatToString(data.admin),
                marketId: formatToString(data.market_id),
                vaultSubaccountId: formatToString(data.vault_subaccount_id),
                oracleStaleTime: Number(data.oracle_stale_time),
                notionalValueCap: formatToString(data.notional_value_cap),
            },
            ...(isDerivativeVault
                ? {
                    positionPnlPenalty: formatToString(derivativeConfig.position_pnl_penalty),
                    allowedDerivativeRedemptionTypes: Number(derivativeConfig.allowed_derivative_redemption_types),
                }
                : {
                    oracleType: Number(spotConfig.oracle_type),
                    baseOracleSymbol: formatToString(spotConfig.base_oracle_symbol),
                    quoteOracleSymbol: formatToString(spotConfig.quote_oracle_symbol),
                    baseDecimals: Number(spotConfig.base_decimals),
                    quoteDecimals: Number(spotConfig.quote_decimals),
                }),
        };
    }
    static vaultUserLpAllowanceResponseToVaultUserLpAllowance(response) {
        const data = JSON.parse(toUtf8(response.data));
        return {
            allowance: data.allowance,
        };
    }
    static vaultMarketIdResponseToVaultMarketId(response) {
        const data = JSON.parse(toUtf8(response.data));
        return { marketId: data.market_id };
    }
    static vaultTotalLpSupplyResponseToVaultTotalLpSupply(response) {
        const data = JSON.parse(toUtf8(response.data));
        return { totalSupply: data.total_supply };
    }
    static vaultUserLpBalanceResponseToVaultUserLpBalance(response) {
        const data = JSON.parse(toUtf8(response.data));
        return { balance: data.balance };
    }
    static vaultUserLockedLpFundsResponseToVaultUserLockedLpFunds(response) {
        const data = JSON.parse(toUtf8(response.data));
        return { amount: data.amount, lockTime: data.lock_time };
    }
    static registeredVaultsResponseToRegisteredVaults(response) {
        const data = JSON.parse(toUtf8(response.data));
        return data.registered_vaults.map((payload) => ({
            isDerivative: payload.vault.derivative !== undefined,
            masterSubaccountId: payload.master_subaccount_id,
            vaultAddress: payload.vault.derivative?.address || payload.vault.spot?.address,
        }));
    }
    static allocatorConfigResponseToAllocatorConfig(response) {
        const data = JSON.parse(toUtf8(response.data));
        return {
            owner: formatToString(data.owner),
            stakingContractAddress: formatToString(data.staking_contract_address),
            maxRewardDenomsPerGauge: data.max_reward_denoms_per_gauge
                ? Number(data.max_reward_denoms_per_gauge)
                : undefined,
            minGaugeDurationInSeconds: data.min_gauge_duration_in_seconds
                ? Number(data.min_gauge_duration_in_seconds)
                : undefined,
            maxActiveGaugesPerLpToken: data.max_active_gauges_per_lp_token
                ? Number(data.max_active_gauges_per_lp_token)
                : undefined,
            gaugeAllocationFeeDenom: formatToString(data.gauge_allocation_fee?.denom),
            gaugeAllocationFeeAmount: formatToString(data.gauge_allocation_fee?.amount),
        };
    }
    static stakingConfigResponseToAllocatorConfig(response) {
        const data = JSON.parse(toUtf8(response.data));
        return {
            owner: formatToString(data.owner),
            lockupPeriod: Number(data.lockup_period || 0),
            allocatorContractAddress: formatToString(data.allocator_contract_address),
        };
    }
}
//# sourceMappingURL=transformer.js.map