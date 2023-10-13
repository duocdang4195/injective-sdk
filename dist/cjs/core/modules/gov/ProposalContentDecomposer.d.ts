import { CosmosGovV1Tx, CosmosGovV1Beta1Gov, CosmosParamsV1Beta1Params, CosmosUpgradeV1Beta1Upgrade, InjectiveExchangeV1Beta1Tx, InjectiveOracleV1Beta1Proposal } from '@injectivelabs/core-proto-ts';
export declare class ProposalDecomposer {
    static getMsgExecLegacyContent(content: Uint8Array): CosmosGovV1Tx.MsgExecLegacyContent;
    static grantBandOraclePrivilegeProposal(content: Uint8Array): InjectiveOracleV1Beta1Proposal.GrantBandOraclePrivilegeProposal;
    static removeBandOraclePrivilegeProposal(content: Uint8Array): InjectiveOracleV1Beta1Proposal.RevokeBandOraclePrivilegeProposal;
    static grantPriceFeederPrivilegeProposal(content: Uint8Array): InjectiveOracleV1Beta1Proposal.GrantPriceFeederPrivilegeProposal;
    static removePriceFeederPrivilegeProposal(content: Uint8Array): InjectiveOracleV1Beta1Proposal.RevokePriceFeederPrivilegeProposal;
    static textProposal(content: Uint8Array): CosmosGovV1Beta1Gov.TextProposal;
    static SoftwareUpgrade(content: Uint8Array): CosmosUpgradeV1Beta1Upgrade.SoftwareUpgradeProposal;
    static spotMarketLaunch(content: Uint8Array): InjectiveExchangeV1Beta1Tx.SpotMarketLaunchProposal;
    static exchangeEnableProposal(content: Uint8Array): InjectiveExchangeV1Beta1Tx.ExchangeEnableProposal;
    static spotMarketUpdate(content: Uint8Array): InjectiveExchangeV1Beta1Tx.SpotMarketParamUpdateProposal;
    static perpetualMarketLaunch(content: Uint8Array): InjectiveExchangeV1Beta1Tx.PerpetualMarketLaunchProposal;
    static expiryFuturesMarketLaunch(content: Uint8Array): InjectiveExchangeV1Beta1Tx.ExpiryFuturesMarketLaunchProposal;
    static derivativeMarketUpdate(content: Uint8Array): InjectiveExchangeV1Beta1Tx.DerivativeMarketParamUpdateProposal;
    static FeeDiscount(content: Uint8Array): InjectiveExchangeV1Beta1Tx.FeeDiscountProposal;
    static TradingRewardCampaignLaunch(content: Uint8Array): InjectiveExchangeV1Beta1Tx.TradingRewardCampaignLaunchProposal;
    static TradingRewardCampaignUpdate(content: Uint8Array): InjectiveExchangeV1Beta1Tx.TradingRewardCampaignUpdateProposal;
    static parametersChange(content: Uint8Array): CosmosParamsV1Beta1Params.ParameterChangeProposal;
    static EnableBandIBC(content: Uint8Array): InjectiveOracleV1Beta1Proposal.EnableBandIBCProposal;
    static AuthorizeBandOracleRequest(content: Uint8Array): InjectiveOracleV1Beta1Proposal.AuthorizeBandOracleRequestProposal;
}
//# sourceMappingURL=ProposalContentDecomposer.d.ts.map