"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalDecomposer = void 0;
const core_proto_ts_1 = require("@injectivelabs/core-proto-ts");
class ProposalDecomposer {
    static getMsgExecLegacyContent(content) {
        return core_proto_ts_1.CosmosGovV1Tx.MsgExecLegacyContent.decode(content);
    }
    static grantBandOraclePrivilegeProposal(content) {
        return core_proto_ts_1.InjectiveOracleV1Beta1Proposal.GrantBandOraclePrivilegeProposal.decode(content);
    }
    static removeBandOraclePrivilegeProposal(content) {
        return core_proto_ts_1.InjectiveOracleV1Beta1Proposal.RevokeBandOraclePrivilegeProposal.decode(content);
    }
    static grantPriceFeederPrivilegeProposal(content) {
        return core_proto_ts_1.InjectiveOracleV1Beta1Proposal.GrantPriceFeederPrivilegeProposal.decode(content);
    }
    static removePriceFeederPrivilegeProposal(content) {
        return core_proto_ts_1.InjectiveOracleV1Beta1Proposal.RevokePriceFeederPrivilegeProposal.decode(content);
    }
    static textProposal(content) {
        return core_proto_ts_1.CosmosGovV1Beta1Gov.TextProposal.decode(content);
    }
    static SoftwareUpgrade(content) {
        return core_proto_ts_1.CosmosUpgradeV1Beta1Upgrade.SoftwareUpgradeProposal.decode(content);
    }
    static spotMarketLaunch(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.SpotMarketLaunchProposal.decode(content);
    }
    static exchangeEnableProposal(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.ExchangeEnableProposal.decode(content);
    }
    static spotMarketUpdate(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.SpotMarketParamUpdateProposal.decode(content);
    }
    static perpetualMarketLaunch(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.PerpetualMarketLaunchProposal.decode(content);
    }
    static expiryFuturesMarketLaunch(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.ExpiryFuturesMarketLaunchProposal.decode(content);
    }
    static derivativeMarketUpdate(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.DerivativeMarketParamUpdateProposal.decode(content);
    }
    static FeeDiscount(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.FeeDiscountProposal.decode(content);
    }
    static TradingRewardCampaignLaunch(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.TradingRewardCampaignLaunchProposal.decode(content);
    }
    static TradingRewardCampaignUpdate(content) {
        return core_proto_ts_1.InjectiveExchangeV1Beta1Tx.TradingRewardCampaignUpdateProposal.decode(content);
    }
    static parametersChange(content) {
        return core_proto_ts_1.CosmosParamsV1Beta1Params.ParameterChangeProposal.decode(content);
    }
    static EnableBandIBC(content) {
        return core_proto_ts_1.InjectiveOracleV1Beta1Proposal.EnableBandIBCProposal.decode(content);
    }
    static AuthorizeBandOracleRequest(content) {
        return core_proto_ts_1.InjectiveOracleV1Beta1Proposal.AuthorizeBandOracleRequestProposal.decode(content);
    }
}
exports.ProposalDecomposer = ProposalDecomposer;
//# sourceMappingURL=ProposalContentDecomposer.js.map