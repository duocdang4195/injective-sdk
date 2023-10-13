"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromInsuranceFund = exports.orderSideToOrderType = void 0;
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const ts_types_1 = require("@injectivelabs/ts-types");
const token_metadata_1 = require("@injectivelabs/token-metadata");
const orderSideToOrderType = (orderType) => {
    switch (orderType) {
        case ts_types_1.OrderSide.Unspecified:
            return sdk_ts_1.GrpcOrderTypeMap.UNSPECIFIED;
        case ts_types_1.OrderSide.Buy:
            return sdk_ts_1.GrpcOrderTypeMap.BUY;
        case ts_types_1.OrderSide.Sell:
            return sdk_ts_1.GrpcOrderTypeMap.SELL;
        case ts_types_1.OrderSide.StopBuy:
            return sdk_ts_1.GrpcOrderTypeMap.STOP_BUY;
        case ts_types_1.OrderSide.StopSell:
            return sdk_ts_1.GrpcOrderTypeMap.STOP_SELL;
        case ts_types_1.OrderSide.TakeBuy:
            return sdk_ts_1.GrpcOrderTypeMap.TAKE_BUY;
        case ts_types_1.OrderSide.TakeSell:
            return sdk_ts_1.GrpcOrderTypeMap.TAKE_SELL;
        case ts_types_1.OrderSide.BuyPO:
            return sdk_ts_1.GrpcOrderTypeMap.BUY_PO;
        case ts_types_1.OrderSide.SellPO:
            return sdk_ts_1.GrpcOrderTypeMap.SELL_PO;
        case ts_types_1.OrderSide.SellPO:
            return sdk_ts_1.GrpcOrderTypeMap.BUY_ATOMIC;
        case ts_types_1.OrderSide.SellPO:
            return sdk_ts_1.GrpcOrderTypeMap.SELL_ATOMIC;
        case ts_types_1.OrderSide.SellPO:
            return sdk_ts_1.GrpcOrderTypeMap.UNRECOGNIZED;
        default:
            return sdk_ts_1.GrpcOrderTypeMap.BUY;
    }
};
exports.orderSideToOrderType = orderSideToOrderType;
const getTokenFromInsuranceFund = (denom, response) => ({
    denom,
    name: (response.marketTicker || denom) + ' Insurance Fund',
    symbol: denom,
    decimals: 18,
    logo: 'injective-v3.svg',
    coinGeckoId: '',
    tokenType: token_metadata_1.TokenType.InsuranceFund,
    tokenVerification: token_metadata_1.TokenVerification.Verified,
});
exports.getTokenFromInsuranceFund = getTokenFromInsuranceFund;
//# sourceMappingURL=exchange.js.map