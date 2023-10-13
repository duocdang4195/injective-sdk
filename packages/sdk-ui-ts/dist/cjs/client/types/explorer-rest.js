"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFilterType = exports.Module = exports.EventTypes = exports.MessageTypeList = exports.Peggy = exports.Oracle = exports.Insurance = exports.Exchange = exports.Auction = void 0;
var Auction;
(function (Auction) {
    Auction["MsgBid"] = "MsgBid";
})(Auction = exports.Auction || (exports.Auction = {}));
var Exchange;
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
})(Exchange = exports.Exchange || (exports.Exchange = {}));
var Insurance;
(function (Insurance) {
    Insurance["MsgCreateInsuranceFund"] = "MsgCreateInsuranceFund";
    Insurance["MsgUnderwrite"] = "MsgUnderwrite";
    Insurance["MsgRequestRedemption"] = "MsgRequestRedemption";
})(Insurance = exports.Insurance || (exports.Insurance = {}));
var Oracle;
(function (Oracle) {
    Oracle["MsgRelayPriceFeedPrice"] = "MsgRelayPriceFeedPrice";
    Oracle["MsgRelayBandRates"] = "MsgRelayBandRates";
    Oracle["MsgRelayCoinbaseMessages"] = "MsgRelayCoinbaseMessages";
})(Oracle = exports.Oracle || (exports.Oracle = {}));
var Peggy;
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
})(Peggy = exports.Peggy || (exports.Peggy = {}));
exports.MessageTypeList = Object.values(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Auction), Exchange), Insurance), Oracle), Peggy));
var EventTypes;
(function (EventTypes) {
    EventTypes["Transfer"] = "transfer";
})(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
var Module;
(function (Module) {
    Module["Auction"] = "Auction";
    Module["Exchange"] = "Exchange";
    Module["Insurance"] = "Insurance";
    Module["Oracle"] = "Oracle";
    Module["Peggy"] = "Peggy";
})(Module = exports.Module || (exports.Module = {}));
var TransactionFilterType;
(function (TransactionFilterType) {
    TransactionFilterType["Module"] = "module";
    TransactionFilterType["MessageType"] = "message type";
})(TransactionFilterType = exports.TransactionFilterType || (exports.TransactionFilterType = {}));
//# sourceMappingURL=explorer-rest.js.map