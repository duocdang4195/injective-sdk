"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinGeckoMetrics = exports.ExplorerMetrics = exports.ExchangeMetrics = exports.SpotMetrics = exports.DerivativesMetrics = exports.ChainMetrics = exports.AccountMetrics = void 0;
var AccountMetrics;
(function (AccountMetrics) {
    AccountMetrics["FetchPortfolioValue"] = "PortfolioValueRequest";
    AccountMetrics["FetchSubaccount"] = "SubaccountsListRequest";
    AccountMetrics["FetchSubaccountBalances"] = "SubaccountBalancesListRequest";
    AccountMetrics["FetchSubaccountHistory"] = "SubaccountHistoryRequest";
    AccountMetrics["FetchUserBridgeDepositsGraph"] = "UserBridgeDepositsGraph";
    AccountMetrics["Deposit"] = "MsgDeposit";
    AccountMetrics["Withdraw"] = "MsgWithdraw";
    AccountMetrics["IbcTransfer"] = "MsgIbcTransfer";
    AccountMetrics["SendToEth"] = "MsgSendToEth";
    AccountMetrics["Send"] = "MsgSend";
})(AccountMetrics = exports.AccountMetrics || (exports.AccountMetrics = {}));
var ChainMetrics;
(function (ChainMetrics) {
    ChainMetrics["FetchSupply"] = "QueryBankSupply";
    ChainMetrics["FetchDenomTrace"] = "QueryDenomTrace";
    ChainMetrics["FetchDenomsTrace"] = "QueryDenomsTrace";
    ChainMetrics["FetchValidators"] = "QueryValidatorsRequest";
    ChainMetrics["FetchValidator"] = "QueryValidatorRequest";
    ChainMetrics["FetchValidatorDelegations"] = "QueryValidatorDelegationsRequest";
    ChainMetrics["FetchDelegation"] = "QueryDelegationRequest";
    ChainMetrics["FetchDelegations"] = "QueryDelegationsRequest";
    ChainMetrics["FetchReDelegations"] = "QueryRedelegationsRequest";
    ChainMetrics["FetchValidatorRewards"] = "QueryDelegationRewardsRequest";
    ChainMetrics["FetchRewards"] = "QueryDelegationTotalRewardsRequest";
    ChainMetrics["FetchUnbondingDelegations"] = "QueryDelegatorUnbondingDelegationsRequest";
    ChainMetrics["FetchProposals"] = "QueryProposalsRequest";
    ChainMetrics["FetchProposalDeposits"] = "QueryDepositsRequest";
    ChainMetrics["FetchProposalVotes"] = "QueryVotesRequest";
    ChainMetrics["FetchProposalTally"] = "QueryTallyResultRequest";
    ChainMetrics["FetchProposal"] = "QueryProposalRequest";
    ChainMetrics["FetchAllProposals"] = "QueryProposalsRequestWithLimit1000";
    ChainMetrics["FetchBalances"] = "QueryAllBalancesRequest";
    ChainMetrics["FetchBalance"] = "QueryBalanceRequest";
    ChainMetrics["FetchMintParams"] = "QueryMintParamsRequest";
    ChainMetrics["FetchInflation"] = "QueryInflation";
    ChainMetrics["FetchAuctionModuleState"] = "QueryAuctionModuleStateRequest";
    ChainMetrics["FetchAnnualProvisions"] = "QueryAnnualProvisions";
    ChainMetrics["FetchStakingParams"] = "QueryStakingParamsRequest";
    ChainMetrics["FetchAuctionParams"] = "QueryAuctionParamsRequest";
    ChainMetrics["FetchInsuranceParams"] = "QueryInsuranceParamsRequest";
    ChainMetrics["FetchOracleParams"] = "QueryOracleParamsRequest";
    ChainMetrics["FetchExchangeParams"] = "QueryExchangeParamsRequest";
    ChainMetrics["FetchBankParams"] = "QueryBankParamsRequest";
    ChainMetrics["FetchPeggyParams"] = "QueryPeggyParamsRequest";
    ChainMetrics["FetchDistributionParams"] = "QueryDistributionParamsRequest";
    ChainMetrics["FetchGovernanceDepositParams"] = "QueryGovernanceDepositParamsRequest";
    ChainMetrics["FetchGovernanceTallyingParams"] = "QueryGovernanceTallyingParamsRequest";
    ChainMetrics["FetchGovernanceVotingParams"] = "QueryGovernanceVotingParamsRequest";
    ChainMetrics["Delegate"] = "MsgDelegate";
    ChainMetrics["ReDelegate"] = "MsgBeginRedelegate";
    ChainMetrics["Unbond"] = "MsgUndelegate";
    ChainMetrics["Vote"] = "MsgGovVote";
    ChainMetrics["Deposit"] = "MsgGovDeposit";
    ChainMetrics["ClaimRewards"] = "MsgWithdrawDelegatorReward";
    ChainMetrics["InstantSpotMarketLaunch"] = "InstantSpotMarketLaunch";
    ChainMetrics["ProposeSpotMarket"] = "SpotMarketLaunchProposal";
    ChainMetrics["ProposePerpetualMarket"] = "PerpetualMarketLaunchProposal";
    ChainMetrics["Bid"] = "MsgBid";
})(ChainMetrics = exports.ChainMetrics || (exports.ChainMetrics = {}));
var DerivativesMetrics;
(function (DerivativesMetrics) {
    DerivativesMetrics["FetchMarkets"] = "DerivativeMarketsRequest";
    DerivativesMetrics["FetchMarket"] = "DerivativeMarketRequest";
    DerivativesMetrics["FetchOrderbook"] = "DerivativeOrderbookRequest";
    DerivativesMetrics["FetchTrades"] = "DerivativeTradesRequest";
    DerivativesMetrics["FetchOrders"] = "DerivativeOrdersRequest";
    DerivativesMetrics["FetchPositions"] = "DerivativePositionsRequest";
    DerivativesMetrics["FetchMarketSummary"] = "DerivativeChronosMarketSummary";
    DerivativesMetrics["FetchMarketsSummary"] = "DerivativeChronosMarketsSummary";
    DerivativesMetrics["CreateLimitOrder"] = "MsgCreateDerivativeLimitOrder";
    DerivativesMetrics["CreateMarketOrder"] = "MsgCreateDerivativeMarketOrder";
    DerivativesMetrics["CancelLimitOrder"] = "MsgCancelDerivativeOrder";
    DerivativesMetrics["BatchCancelLimitOrders"] = "MsgBatchCancelDerivativeOrders";
    DerivativesMetrics["BatchUpdateOrders"] = "MsgBatchUpdateOrders";
})(DerivativesMetrics = exports.DerivativesMetrics || (exports.DerivativesMetrics = {}));
var SpotMetrics;
(function (SpotMetrics) {
    SpotMetrics["FetchMarkets"] = "SpotMarketsRequest";
    SpotMetrics["FetchMarket"] = "SpotMarketRequest";
    SpotMetrics["FetchOrderbook"] = "SpotOrderbookRequest";
    SpotMetrics["FetchTrades"] = "SpotTradesRequest";
    SpotMetrics["FetchOrders"] = "SpotOrdersRequest";
    SpotMetrics["FetchPositions"] = "SpotPositionsRequest";
    SpotMetrics["FetchMarketSummary"] = "SpotChronosMarketSummary";
    SpotMetrics["FetchMarketsSummary"] = "SpotChronosMarketsSummary";
    SpotMetrics["CreateLimitOrder"] = "MsgCreateSpotLimitOrder";
    SpotMetrics["CreateMarketOrder"] = "MsgCreateSpotMarketOrder";
    SpotMetrics["CancelLimitOrder"] = "MsgCancelSpotOrder";
    SpotMetrics["BatchUpdateOrders"] = "MsgBatchUpdateOrders";
    SpotMetrics["BatchCancelLimitOrders"] = "MsgBatchCancelSpotOrders";
})(SpotMetrics = exports.SpotMetrics || (exports.SpotMetrics = {}));
var ExchangeMetrics;
(function (ExchangeMetrics) {
    ExchangeMetrics["FetchOracles"] = "OracleListRequest";
    ExchangeMetrics["FetchInsuranceFunds"] = "FundsRequest";
    ExchangeMetrics["FetchRedemptions"] = "RedemptionsRequest";
    ExchangeMetrics["CreateInsuranceFund"] = "CreateInsuranceFund";
    ExchangeMetrics["Underwrite"] = "MsgUnderwrite";
    ExchangeMetrics["RequestRedemption"] = "MsgRequestRedemption";
    ExchangeMetrics["FetchAuctions"] = "FetchAuctions";
    ExchangeMetrics["FetchAuction"] = "FetchAuction";
    ExchangeMetrics["FetchIBCTransferTxs"] = "FetchIBCTransferTxs";
    ExchangeMetrics["FetchPeggyDepositTxs"] = "FetchPeggyDepositTxs";
    ExchangeMetrics["FetchPeggyWithdrawalTxs"] = "FetchPeggyWithdrawalTxs";
})(ExchangeMetrics = exports.ExchangeMetrics || (exports.ExchangeMetrics = {}));
var ExplorerMetrics;
(function (ExplorerMetrics) {
    ExplorerMetrics["FetchBlocks"] = "FetchBlocks";
    ExplorerMetrics["FetchTransactions"] = "FetchTransactions";
})(ExplorerMetrics = exports.ExplorerMetrics || (exports.ExplorerMetrics = {}));
var CoinGeckoMetrics;
(function (CoinGeckoMetrics) {
    CoinGeckoMetrics["FetchCoin"] = "FetchCoin";
    CoinGeckoMetrics["FetchCoins"] = "FetchCoins";
    CoinGeckoMetrics["FetchChart"] = "FetchChart";
})(CoinGeckoMetrics = exports.CoinGeckoMetrics || (exports.CoinGeckoMetrics = {}));
//# sourceMappingURL=metrics.js.map