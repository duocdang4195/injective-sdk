import { CosmosGovV1Tx, CosmosGovV1Beta1Gov, CosmosParamsV1Beta1Params, CosmosUpgradeV1Beta1Upgrade, InjectiveExchangeV1Beta1Tx, InjectiveOracleV1Beta1Proposal, } from '@injectivelabs/core-proto-ts';
export class ProposalDecomposer {
    static getMsgExecLegacyContent(content) {
        return CosmosGovV1Tx.MsgExecLegacyContent.decode(content);
    }
    static grantBandOraclePrivilegeProposal(content) {
        return InjectiveOracleV1Beta1Proposal.GrantBandOraclePrivilegeProposal.decode(content);
    }
    static removeBandOraclePrivilegeProposal(content) {
        return InjectiveOracleV1Beta1Proposal.RevokeBandOraclePrivilegeProposal.decode(content);
    }
    static grantPriceFeederPrivilegeProposal(content) {
        return InjectiveOracleV1Beta1Proposal.GrantPriceFeederPrivilegeProposal.decode(content);
    }
    static removePriceFeederPrivilegeProposal(content) {
        return InjectiveOracleV1Beta1Proposal.RevokePriceFeederPrivilegeProposal.decode(content);
    }
    static textProposal(content) {
        return CosmosGovV1Beta1Gov.TextProposal.decode(content);
    }
    static SoftwareUpgrade(content) {
        return CosmosUpgradeV1Beta1Upgrade.SoftwareUpgradeProposal.decode(content);
    }
    static spotMarketLaunch(content) {
        return InjectiveExchangeV1Beta1Tx.SpotMarketLaunchProposal.decode(content);
    }
    static exchangeEnableProposal(content) {
        return InjectiveExchangeV1Beta1Tx.ExchangeEnableProposal.decode(content);
    }
    static spotMarketUpdate(content) {
        return InjectiveExchangeV1Beta1Tx.SpotMarketParamUpdateProposal.decode(content);
    }
    static perpetualMarketLaunch(content) {
        return InjectiveExchangeV1Beta1Tx.PerpetualMarketLaunchProposal.decode(content);
    }
    static expiryFuturesMarketLaunch(content) {
        return InjectiveExchangeV1Beta1Tx.ExpiryFuturesMarketLaunchProposal.decode(content);
    }
    static derivativeMarketUpdate(content) {
        return InjectiveExchangeV1Beta1Tx.DerivativeMarketParamUpdateProposal.decode(content);
    }
    static FeeDiscount(content) {
        return InjectiveExchangeV1Beta1Tx.FeeDiscountProposal.decode(content);
    }
    static TradingRewardCampaignLaunch(content) {
        return InjectiveExchangeV1Beta1Tx.TradingRewardCampaignLaunchProposal.decode(content);
    }
    static TradingRewardCampaignUpdate(content) {
        return InjectiveExchangeV1Beta1Tx.TradingRewardCampaignUpdateProposal.decode(content);
    }
    static parametersChange(content) {
        return CosmosParamsV1Beta1Params.ParameterChangeProposal.decode(content);
    }
    static EnableBandIBC(content) {
        return InjectiveOracleV1Beta1Proposal.EnableBandIBCProposal.decode(content);
    }
    static AuthorizeBandOracleRequest(content) {
        return InjectiveOracleV1Beta1Proposal.AuthorizeBandOracleRequestProposal.decode(content);
    }
}
//# sourceMappingURL=ProposalContentDecomposer.js.map