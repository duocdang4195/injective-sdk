export var Auction;
(function (Auction) {
    Auction["MsgBid"] = "MsgBid";
})(Auction || (Auction = {}));
export var Exchange;
(function (Exchange) {
    Exchange["MsgDeposit"] = "MsgDeposit";
    Exchange["MsgWithdraw"] = "MsgWithdraw";
    Exchange["MsgCreateSpotLimitOrder"] = "MsgCreateSpotLimitOrder";
    Exchange["MsgBatchCreateSpotLimitOrders"] = "MsgBatchCreateSpotLimitOrders";
    Exchange["MsgCreateSpotMarketOrder"] = "MsgCreateSpotMarketOrder";
    Exchange["MsgCancelSpotOrder"] = "MsgCancelSpotOrder";
    Exchange["MsgBatchCancelSpotOrders"] = "MsgBatchCancelSpotOrders";
    Exchange["MsgCreateDerivativeLimitOrder"] = "MsgCreateDerivativeLimitOrder";
    Exchange["MsgBatchCreateDerivativeLimitOrders"] = "MsgBatchCreateDerivativeLimitOrders";
    Exchange["MsgCreateDerivativeMarketOrder"] = "MsgCreateDerivativeMarketOrder";
    Exchange["MsgCancelDerivativeOrder"] = "MsgCancelDerivativeOrder";
    Exchange["MsgBatchCancelDerivativeOrders"] = "MsgBatchCancelDerivativeOrders";
    Exchange["MsgSubaccountTransfer"] = "MsgSubaccountTransfer";
    Exchange["MsgExternalTransfer"] = "MsgExternalTransfer";
    Exchange["MsgIncreasePositionMargin"] = "MsgIncreasePositionMargin";
    Exchange["MsgLiquidatePosition"] = "MsgLiquidatePosition";
    Exchange["MsgInstantSpotMarketLaunch"] = "MsgInstantSpotMarketLaunch";
    Exchange["MsgInstantPerpetualMarketLaunch"] = "MsgInstantPerpetualMarketLaunch";
    Exchange["MsgInstantExpiryFuturesMarketLaunch"] = "MsgInstantExpiryFuturesMarketLaunch";
})(Exchange || (Exchange = {}));
export var Insurance;
(function (Insurance) {
    Insurance["MsgCreateInsuranceFund"] = "MsgCreateInsuranceFund";
    Insurance["MsgUnderwrite"] = "MsgUnderwrite";
    Insurance["MsgRequestRedemption"] = "MsgRequestRedemption";
})(Insurance || (Insurance = {}));
export var Oracle;
(function (Oracle) {
    Oracle["MsgRelayPriceFeedPrice"] = "MsgRelayPriceFeedPrice";
    Oracle["MsgRelayBandRates"] = "MsgRelayBandRates";
    Oracle["MsgRelayCoinbaseMessages"] = "MsgRelayCoinbaseMessages";
})(Oracle || (Oracle = {}));
export var Peggy;
(function (Peggy) {
    Peggy["MsgValsetConfirm"] = "MsgValsetConfirm";
    Peggy["MsgSendToEth"] = "MsgSendToEth";
    Peggy["MsgRequestBatch"] = "MsgRequestBatch";
    Peggy["MsgConfirmBatch"] = "MsgConfirmBatch";
    Peggy["MsgSetOrchestratorAddresses"] = "MsgSetOrchestratorAddresses";
    Peggy["MsgERC20DeployedClaim"] = "MsgERC20DeployedClaim";
    Peggy["MsgDepositClaim"] = "MsgDepositClaim";
    Peggy["MsgWithdrawClaim"] = "MsgWithdrawClaim";
    Peggy["MsgCancelSendToEth"] = "MsgCancelSendToEth";
    Peggy["MsgValsetUpdatedClaim"] = "MsgValsetUpdatedClaim";
    Peggy["MsgSubmitBadSignatureEvidence"] = "MsgSubmitBadSignatureEvidence";
})(Peggy || (Peggy = {}));
export const MessageTypeList = Object.values({
    ...Auction,
    ...Exchange,
    ...Insurance,
    ...Oracle,
    ...Peggy,
});
export var EventTypes;
(function (EventTypes) {
    EventTypes["Transfer"] = "transfer";
})(EventTypes || (EventTypes = {}));
export var Module;
(function (Module) {
    Module["Auction"] = "Auction";
    Module["Exchange"] = "Exchange";
    Module["Insurance"] = "Insurance";
    Module["Oracle"] = "Oracle";
    Module["Peggy"] = "Peggy";
})(Module || (Module = {}));
export var TransactionFilterType;
(function (TransactionFilterType) {
    TransactionFilterType["Module"] = "module";
    TransactionFilterType["MessageType"] = "message type";
})(TransactionFilterType || (TransactionFilterType = {}));
//# sourceMappingURL=explorer-rest.js.map