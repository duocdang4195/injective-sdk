export declare enum AccountMetrics {
    FetchPortfolioValue = "PortfolioValueRequest",
    FetchSubaccount = "SubaccountsListRequest",
    FetchSubaccountBalances = "SubaccountBalancesListRequest",
    FetchSubaccountHistory = "SubaccountHistoryRequest",
    FetchUserBridgeDepositsGraph = "UserBridgeDepositsGraph",
    Deposit = "MsgDeposit",
    Withdraw = "MsgWithdraw",
    IbcTransfer = "MsgIbcTransfer",
    SendToEth = "MsgSendToEth",
    Send = "MsgSend"
}
export declare enum ChainMetrics {
    FetchSupply = "QueryBankSupply",
    FetchDenomTrace = "QueryDenomTrace",
    FetchDenomsTrace = "QueryDenomsTrace",
    FetchValidators = "QueryValidatorsRequest",
    FetchValidator = "QueryValidatorRequest",
    FetchValidatorDelegations = "QueryValidatorDelegationsRequest",
    FetchDelegation = "QueryDelegationRequest",
    FetchDelegations = "QueryDelegationsRequest",
    FetchReDelegations = "QueryRedelegationsRequest",
    FetchValidatorRewards = "QueryDelegationRewardsRequest",
    FetchRewards = "QueryDelegationTotalRewardsRequest",
    FetchUnbondingDelegations = "QueryDelegatorUnbondingDelegationsRequest",
    FetchProposals = "QueryProposalsRequest",
    FetchProposalDeposits = "QueryDepositsRequest",
    FetchProposalVotes = "QueryVotesRequest",
    FetchProposalTally = "QueryTallyResultRequest",
    FetchProposal = "QueryProposalRequest",
    FetchAllProposals = "QueryProposalsRequestWithLimit1000",
    FetchBalances = "QueryAllBalancesRequest",
    FetchBalance = "QueryBalanceRequest",
    FetchMintParams = "QueryMintParamsRequest",
    FetchInflation = "QueryInflation",
    FetchAuctionModuleState = "QueryAuctionModuleStateRequest",
    FetchAnnualProvisions = "QueryAnnualProvisions",
    FetchStakingParams = "QueryStakingParamsRequest",
    FetchAuctionParams = "QueryAuctionParamsRequest",
    FetchInsuranceParams = "QueryInsuranceParamsRequest",
    FetchOracleParams = "QueryOracleParamsRequest",
    FetchExchangeParams = "QueryExchangeParamsRequest",
    FetchBankParams = "QueryBankParamsRequest",
    FetchPeggyParams = "QueryPeggyParamsRequest",
    FetchDistributionParams = "QueryDistributionParamsRequest",
    FetchGovernanceDepositParams = "QueryGovernanceDepositParamsRequest",
    FetchGovernanceTallyingParams = "QueryGovernanceTallyingParamsRequest",
    FetchGovernanceVotingParams = "QueryGovernanceVotingParamsRequest",
    Delegate = "MsgDelegate",
    ReDelegate = "MsgBeginRedelegate",
    Unbond = "MsgUndelegate",
    Vote = "MsgGovVote",
    Deposit = "MsgGovDeposit",
    ClaimRewards = "MsgWithdrawDelegatorReward",
    InstantSpotMarketLaunch = "InstantSpotMarketLaunch",
    ProposeSpotMarket = "SpotMarketLaunchProposal",
    ProposePerpetualMarket = "PerpetualMarketLaunchProposal",
    Bid = "MsgBid"
}
export declare enum DerivativesMetrics {
    FetchMarkets = "DerivativeMarketsRequest",
    FetchMarket = "DerivativeMarketRequest",
    FetchOrderbook = "DerivativeOrderbookRequest",
    FetchTrades = "DerivativeTradesRequest",
    FetchOrders = "DerivativeOrdersRequest",
    FetchPositions = "DerivativePositionsRequest",
    FetchMarketSummary = "DerivativeChronosMarketSummary",
    FetchMarketsSummary = "DerivativeChronosMarketsSummary",
    CreateLimitOrder = "MsgCreateDerivativeLimitOrder",
    CreateMarketOrder = "MsgCreateDerivativeMarketOrder",
    CancelLimitOrder = "MsgCancelDerivativeOrder",
    BatchCancelLimitOrders = "MsgBatchCancelDerivativeOrders",
    BatchUpdateOrders = "MsgBatchUpdateOrders"
}
export declare enum SpotMetrics {
    FetchMarkets = "SpotMarketsRequest",
    FetchMarket = "SpotMarketRequest",
    FetchOrderbook = "SpotOrderbookRequest",
    FetchTrades = "SpotTradesRequest",
    FetchOrders = "SpotOrdersRequest",
    FetchPositions = "SpotPositionsRequest",
    FetchMarketSummary = "SpotChronosMarketSummary",
    FetchMarketsSummary = "SpotChronosMarketsSummary",
    CreateLimitOrder = "MsgCreateSpotLimitOrder",
    CreateMarketOrder = "MsgCreateSpotMarketOrder",
    CancelLimitOrder = "MsgCancelSpotOrder",
    BatchUpdateOrders = "MsgBatchUpdateOrders",
    BatchCancelLimitOrders = "MsgBatchCancelSpotOrders"
}
export declare enum ExchangeMetrics {
    FetchOracles = "OracleListRequest",
    FetchInsuranceFunds = "FundsRequest",
    FetchRedemptions = "RedemptionsRequest",
    CreateInsuranceFund = "CreateInsuranceFund",
    Underwrite = "MsgUnderwrite",
    RequestRedemption = "MsgRequestRedemption",
    FetchAuctions = "FetchAuctions",
    FetchAuction = "FetchAuction",
    FetchIBCTransferTxs = "FetchIBCTransferTxs",
    FetchPeggyDepositTxs = "FetchPeggyDepositTxs",
    FetchPeggyWithdrawalTxs = "FetchPeggyWithdrawalTxs"
}
export declare enum ExplorerMetrics {
    FetchBlocks = "FetchBlocks",
    FetchTransactions = "FetchTransactions"
}
export declare enum CoinGeckoMetrics {
    FetchCoin = "FetchCoin",
    FetchCoins = "FetchCoins",
    FetchChart = "FetchChart"
}
//# sourceMappingURL=metrics.d.ts.map