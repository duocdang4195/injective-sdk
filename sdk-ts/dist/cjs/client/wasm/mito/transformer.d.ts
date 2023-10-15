import { WasmContractQueryResponse } from '../types';
import { VaultAMMConfig, VaultBaseConfig, VaultSpotConfig, VaultDerivativeConfig, VaultMarketMakingConfig, OffChainVaultSpotConfig, OffChainVaultDerivativeConfig, QueryVaultContractBaseConfig, QueryVaultContractMarketMaking } from './types';
export declare class MitoQueryTransformer {
    static contractMarketingInfoResponseToContractMarketingInfo(response: WasmContractQueryResponse): {
        project: string;
        description: string;
        logo: string;
        marketing: string;
    };
    static contractTokenInfoResponseToContractTokenInfo(response: WasmContractQueryResponse): {
        name: string;
        symbol: string;
        decimals: number;
        totalSupply: string;
    };
    static masterContractConfigResponseToMasterContractConfig(response: WasmContractQueryResponse): {
        distributionContract: string;
        ninjaToken: string;
        owner: string;
    };
    static vaultContractBaseConfigResponseToBaseConfig(config: QueryVaultContractBaseConfig): VaultBaseConfig;
    static vaultContractMarketMakingResponseToMarketMaking(config: QueryVaultContractMarketMaking): VaultMarketMakingConfig;
    static vaultContractConfigResponseToAMMVaultConfig(response: WasmContractQueryResponse): VaultAMMConfig;
    static vaultContractConfigResponseToDerivativeVaultConfig(response: WasmContractQueryResponse): VaultDerivativeConfig;
    static vaultContractConfigResponseToSpotVaultContractConfig(response: WasmContractQueryResponse): VaultSpotConfig;
    static offChainVaultContractConfigResponseToOffChainVaultConfig(response: WasmContractQueryResponse): OffChainVaultSpotConfig | OffChainVaultDerivativeConfig;
    static vaultUserLpAllowanceResponseToVaultUserLpAllowance(response: WasmContractQueryResponse): {
        allowance: string;
    };
    static vaultMarketIdResponseToVaultMarketId(response: WasmContractQueryResponse): {
        marketId: string;
    };
    static vaultTotalLpSupplyResponseToVaultTotalLpSupply(response: WasmContractQueryResponse): {
        totalSupply: string;
    };
    static vaultUserLpBalanceResponseToVaultUserLpBalance(response: WasmContractQueryResponse): {
        balance: string;
    };
    static vaultUserLockedLpFundsResponseToVaultUserLockedLpFunds(response: WasmContractQueryResponse): {
        amount: string;
        lockTime: string;
    };
    static registeredVaultsResponseToRegisteredVaults(response: WasmContractQueryResponse): {
        isDerivative: boolean;
        masterSubaccountId: string;
        vaultAddress: string | undefined;
    }[];
    static allocatorConfigResponseToAllocatorConfig(response: WasmContractQueryResponse): {
        owner: string;
        stakingContractAddress: string;
        maxRewardDenomsPerGauge: number | undefined;
        minGaugeDurationInSeconds: number | undefined;
        maxActiveGaugesPerLpToken: number | undefined;
        gaugeAllocationFeeDenom: string;
        gaugeAllocationFeeAmount: string;
    };
    static stakingConfigResponseToAllocatorConfig(response: WasmContractQueryResponse): {
        owner: string;
        lockupPeriod: number;
        allocatorContractAddress: string;
    };
}
//# sourceMappingURL=transformer.d.ts.map