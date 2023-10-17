/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AggregateSubaccountVolumeRecord, BinaryOptionsMarket, CampaignRewardPool, DenomDecimals, Deposit, DerivativeLimitOrder, DerivativeMarket, DerivativeMarketOrder, DerivativeMarketSettlementInfo, ExpiryFuturesMarketInfo, FeeDiscountSchedule, FeeDiscountTierTTL, MarketFeeMultiplier, MarketVolume, Params, PerpetualMarketFunding, PerpetualMarketInfo, Position, SpotLimitOrder, SpotMarket, SubaccountTradeNonce, TradeRecords, TradingRewardCampaignInfo, } from "./exchange";
function createBaseGenesisState() {
    return {
        params: undefined,
        spotMarkets: [],
        derivativeMarkets: [],
        spotOrderbook: [],
        derivativeOrderbook: [],
        balances: [],
        positions: [],
        subaccountTradeNonces: [],
        expiryFuturesMarketInfoState: [],
        perpetualMarketInfo: [],
        perpetualMarketFundingState: [],
        derivativeMarketSettlementScheduled: [],
        isSpotExchangeEnabled: false,
        isDerivativesExchangeEnabled: false,
        tradingRewardCampaignInfo: undefined,
        tradingRewardPoolCampaignSchedule: [],
        tradingRewardCampaignAccountPoints: [],
        feeDiscountSchedule: undefined,
        feeDiscountAccountTierTtl: [],
        feeDiscountBucketVolumeAccounts: [],
        isFirstFeeCycleFinished: false,
        pendingTradingRewardPoolCampaignSchedule: [],
        pendingTradingRewardCampaignAccountPoints: [],
        rewardsOptOutAddresses: [],
        historicalTradeRecords: [],
        binaryOptionsMarkets: [],
        binaryOptionsMarketIdsScheduledForSettlement: [],
        spotMarketIdsScheduledToForceClose: [],
        denomDecimals: [],
        conditionalDerivativeOrderbooks: [],
        marketFeeMultipliers: [],
        orderbookSequences: [],
        subaccountVolumes: [],
        marketVolumes: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.spotMarkets) {
            SpotMarket.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.derivativeMarkets) {
            DerivativeMarket.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.spotOrderbook) {
            SpotOrderBook.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.derivativeOrderbook) {
            DerivativeOrderBook.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.positions) {
            DerivativePosition.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.subaccountTradeNonces) {
            SubaccountNonce.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.expiryFuturesMarketInfoState) {
            ExpiryFuturesMarketInfoState.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.perpetualMarketInfo) {
            PerpetualMarketInfo.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.perpetualMarketFundingState) {
            PerpetualMarketFundingState.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.derivativeMarketSettlementScheduled) {
            DerivativeMarketSettlementInfo.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.isSpotExchangeEnabled === true) {
            writer.uint32(104).bool(message.isSpotExchangeEnabled);
        }
        if (message.isDerivativesExchangeEnabled === true) {
            writer.uint32(112).bool(message.isDerivativesExchangeEnabled);
        }
        if (message.tradingRewardCampaignInfo !== undefined) {
            TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(122).fork()).ldelim();
        }
        for (const v of message.tradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.tradingRewardCampaignAccountPoints) {
            TradingRewardCampaignAccountPoints.encode(v, writer.uint32(138).fork()).ldelim();
        }
        if (message.feeDiscountSchedule !== undefined) {
            FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(146).fork()).ldelim();
        }
        for (const v of message.feeDiscountAccountTierTtl) {
            FeeDiscountAccountTierTTL.encode(v, writer.uint32(154).fork()).ldelim();
        }
        for (const v of message.feeDiscountBucketVolumeAccounts) {
            FeeDiscountBucketVolumeAccounts.encode(v, writer.uint32(162).fork()).ldelim();
        }
        if (message.isFirstFeeCycleFinished === true) {
            writer.uint32(168).bool(message.isFirstFeeCycleFinished);
        }
        for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
            CampaignRewardPool.encode(v, writer.uint32(178).fork()).ldelim();
        }
        for (const v of message.pendingTradingRewardCampaignAccountPoints) {
            TradingRewardCampaignAccountPendingPoints.encode(v, writer.uint32(186).fork()).ldelim();
        }
        for (const v of message.rewardsOptOutAddresses) {
            writer.uint32(194).string(v);
        }
        for (const v of message.historicalTradeRecords) {
            TradeRecords.encode(v, writer.uint32(202).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarkets) {
            BinaryOptionsMarket.encode(v, writer.uint32(210).fork()).ldelim();
        }
        for (const v of message.binaryOptionsMarketIdsScheduledForSettlement) {
            writer.uint32(218).string(v);
        }
        for (const v of message.spotMarketIdsScheduledToForceClose) {
            writer.uint32(226).string(v);
        }
        for (const v of message.denomDecimals) {
            DenomDecimals.encode(v, writer.uint32(234).fork()).ldelim();
        }
        for (const v of message.conditionalDerivativeOrderbooks) {
            ConditionalDerivativeOrderBook.encode(v, writer.uint32(242).fork()).ldelim();
        }
        for (const v of message.marketFeeMultipliers) {
            MarketFeeMultiplier.encode(v, writer.uint32(250).fork()).ldelim();
        }
        for (const v of message.orderbookSequences) {
            OrderbookSequence.encode(v, writer.uint32(258).fork()).ldelim();
        }
        for (const v of message.subaccountVolumes) {
            AggregateSubaccountVolumeRecord.encode(v, writer.uint32(266).fork()).ldelim();
        }
        for (const v of message.marketVolumes) {
            MarketVolume.encode(v, writer.uint32(274).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.spotMarkets.push(SpotMarket.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.derivativeMarkets.push(DerivativeMarket.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.spotOrderbook.push(SpotOrderBook.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.derivativeOrderbook.push(DerivativeOrderBook.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.positions.push(DerivativePosition.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.subaccountTradeNonces.push(SubaccountNonce.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.expiryFuturesMarketInfoState.push(ExpiryFuturesMarketInfoState.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.perpetualMarketInfo.push(PerpetualMarketInfo.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.perpetualMarketFundingState.push(PerpetualMarketFundingState.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.derivativeMarketSettlementScheduled.push(DerivativeMarketSettlementInfo.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.isSpotExchangeEnabled = reader.bool();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.isDerivativesExchangeEnabled = reader.bool();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.tradingRewardCampaignInfo = TradingRewardCampaignInfo.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.tradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.tradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.feeDiscountSchedule = FeeDiscountSchedule.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.feeDiscountAccountTierTtl.push(FeeDiscountAccountTierTTL.decode(reader, reader.uint32()));
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.feeDiscountBucketVolumeAccounts.push(FeeDiscountBucketVolumeAccounts.decode(reader, reader.uint32()));
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }
                    message.isFirstFeeCycleFinished = reader.bool();
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.pendingTradingRewardPoolCampaignSchedule.push(CampaignRewardPool.decode(reader, reader.uint32()));
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.pendingTradingRewardCampaignAccountPoints.push(TradingRewardCampaignAccountPendingPoints.decode(reader, reader.uint32()));
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.rewardsOptOutAddresses.push(reader.string());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.historicalTradeRecords.push(TradeRecords.decode(reader, reader.uint32()));
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.binaryOptionsMarkets.push(BinaryOptionsMarket.decode(reader, reader.uint32()));
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.binaryOptionsMarketIdsScheduledForSettlement.push(reader.string());
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.spotMarketIdsScheduledToForceClose.push(reader.string());
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.denomDecimals.push(DenomDecimals.decode(reader, reader.uint32()));
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }
                    message.conditionalDerivativeOrderbooks.push(ConditionalDerivativeOrderBook.decode(reader, reader.uint32()));
                    continue;
                case 31:
                    if (tag !== 250) {
                        break;
                    }
                    message.marketFeeMultipliers.push(MarketFeeMultiplier.decode(reader, reader.uint32()));
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.orderbookSequences.push(OrderbookSequence.decode(reader, reader.uint32()));
                    continue;
                case 33:
                    if (tag !== 266) {
                        break;
                    }
                    message.subaccountVolumes.push(AggregateSubaccountVolumeRecord.decode(reader, reader.uint32()));
                    continue;
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.marketVolumes.push(MarketVolume.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            spotMarkets: Array.isArray(object === null || object === void 0 ? void 0 : object.spotMarkets) ? object.spotMarkets.map((e) => SpotMarket.fromJSON(e)) : [],
            derivativeMarkets: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeMarkets)
                ? object.derivativeMarkets.map((e) => DerivativeMarket.fromJSON(e))
                : [],
            spotOrderbook: Array.isArray(object === null || object === void 0 ? void 0 : object.spotOrderbook)
                ? object.spotOrderbook.map((e) => SpotOrderBook.fromJSON(e))
                : [],
            derivativeOrderbook: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeOrderbook)
                ? object.derivativeOrderbook.map((e) => DerivativeOrderBook.fromJSON(e))
                : [],
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => Balance.fromJSON(e)) : [],
            positions: Array.isArray(object === null || object === void 0 ? void 0 : object.positions)
                ? object.positions.map((e) => DerivativePosition.fromJSON(e))
                : [],
            subaccountTradeNonces: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccountTradeNonces)
                ? object.subaccountTradeNonces.map((e) => SubaccountNonce.fromJSON(e))
                : [],
            expiryFuturesMarketInfoState: Array.isArray(object === null || object === void 0 ? void 0 : object.expiryFuturesMarketInfoState)
                ? object.expiryFuturesMarketInfoState.map((e) => ExpiryFuturesMarketInfoState.fromJSON(e))
                : [],
            perpetualMarketInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.perpetualMarketInfo)
                ? object.perpetualMarketInfo.map((e) => PerpetualMarketInfo.fromJSON(e))
                : [],
            perpetualMarketFundingState: Array.isArray(object === null || object === void 0 ? void 0 : object.perpetualMarketFundingState)
                ? object.perpetualMarketFundingState.map((e) => PerpetualMarketFundingState.fromJSON(e))
                : [],
            derivativeMarketSettlementScheduled: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeMarketSettlementScheduled)
                ? object.derivativeMarketSettlementScheduled.map((e) => DerivativeMarketSettlementInfo.fromJSON(e))
                : [],
            isSpotExchangeEnabled: isSet(object.isSpotExchangeEnabled) ? Boolean(object.isSpotExchangeEnabled) : false,
            isDerivativesExchangeEnabled: isSet(object.isDerivativesExchangeEnabled)
                ? Boolean(object.isDerivativesExchangeEnabled)
                : false,
            tradingRewardCampaignInfo: isSet(object.tradingRewardCampaignInfo)
                ? TradingRewardCampaignInfo.fromJSON(object.tradingRewardCampaignInfo)
                : undefined,
            tradingRewardPoolCampaignSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.tradingRewardPoolCampaignSchedule)
                ? object.tradingRewardPoolCampaignSchedule.map((e) => CampaignRewardPool.fromJSON(e))
                : [],
            tradingRewardCampaignAccountPoints: Array.isArray(object === null || object === void 0 ? void 0 : object.tradingRewardCampaignAccountPoints)
                ? object.tradingRewardCampaignAccountPoints.map((e) => TradingRewardCampaignAccountPoints.fromJSON(e))
                : [],
            feeDiscountSchedule: isSet(object.feeDiscountSchedule)
                ? FeeDiscountSchedule.fromJSON(object.feeDiscountSchedule)
                : undefined,
            feeDiscountAccountTierTtl: Array.isArray(object === null || object === void 0 ? void 0 : object.feeDiscountAccountTierTtl)
                ? object.feeDiscountAccountTierTtl.map((e) => FeeDiscountAccountTierTTL.fromJSON(e))
                : [],
            feeDiscountBucketVolumeAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.feeDiscountBucketVolumeAccounts)
                ? object.feeDiscountBucketVolumeAccounts.map((e) => FeeDiscountBucketVolumeAccounts.fromJSON(e))
                : [],
            isFirstFeeCycleFinished: isSet(object.isFirstFeeCycleFinished) ? Boolean(object.isFirstFeeCycleFinished) : false,
            pendingTradingRewardPoolCampaignSchedule: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingTradingRewardPoolCampaignSchedule)
                ? object.pendingTradingRewardPoolCampaignSchedule.map((e) => CampaignRewardPool.fromJSON(e))
                : [],
            pendingTradingRewardCampaignAccountPoints: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingTradingRewardCampaignAccountPoints)
                ? object.pendingTradingRewardCampaignAccountPoints.map((e) => TradingRewardCampaignAccountPendingPoints.fromJSON(e))
                : [],
            rewardsOptOutAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardsOptOutAddresses)
                ? object.rewardsOptOutAddresses.map((e) => String(e))
                : [],
            historicalTradeRecords: Array.isArray(object === null || object === void 0 ? void 0 : object.historicalTradeRecords)
                ? object.historicalTradeRecords.map((e) => TradeRecords.fromJSON(e))
                : [],
            binaryOptionsMarkets: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsMarkets)
                ? object.binaryOptionsMarkets.map((e) => BinaryOptionsMarket.fromJSON(e))
                : [],
            binaryOptionsMarketIdsScheduledForSettlement: Array.isArray(object === null || object === void 0 ? void 0 : object.binaryOptionsMarketIdsScheduledForSettlement)
                ? object.binaryOptionsMarketIdsScheduledForSettlement.map((e) => String(e))
                : [],
            spotMarketIdsScheduledToForceClose: Array.isArray(object === null || object === void 0 ? void 0 : object.spotMarketIdsScheduledToForceClose)
                ? object.spotMarketIdsScheduledToForceClose.map((e) => String(e))
                : [],
            denomDecimals: Array.isArray(object === null || object === void 0 ? void 0 : object.denomDecimals)
                ? object.denomDecimals.map((e) => DenomDecimals.fromJSON(e))
                : [],
            conditionalDerivativeOrderbooks: Array.isArray(object === null || object === void 0 ? void 0 : object.conditionalDerivativeOrderbooks)
                ? object.conditionalDerivativeOrderbooks.map((e) => ConditionalDerivativeOrderBook.fromJSON(e))
                : [],
            marketFeeMultipliers: Array.isArray(object === null || object === void 0 ? void 0 : object.marketFeeMultipliers)
                ? object.marketFeeMultipliers.map((e) => MarketFeeMultiplier.fromJSON(e))
                : [],
            orderbookSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.orderbookSequences)
                ? object.orderbookSequences.map((e) => OrderbookSequence.fromJSON(e))
                : [],
            subaccountVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccountVolumes)
                ? object.subaccountVolumes.map((e) => AggregateSubaccountVolumeRecord.fromJSON(e))
                : [],
            marketVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.marketVolumes)
                ? object.marketVolumes.map((e) => MarketVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.spotMarkets) {
            obj.spotMarkets = message.spotMarkets.map((e) => e ? SpotMarket.toJSON(e) : undefined);
        }
        else {
            obj.spotMarkets = [];
        }
        if (message.derivativeMarkets) {
            obj.derivativeMarkets = message.derivativeMarkets.map((e) => e ? DerivativeMarket.toJSON(e) : undefined);
        }
        else {
            obj.derivativeMarkets = [];
        }
        if (message.spotOrderbook) {
            obj.spotOrderbook = message.spotOrderbook.map((e) => e ? SpotOrderBook.toJSON(e) : undefined);
        }
        else {
            obj.spotOrderbook = [];
        }
        if (message.derivativeOrderbook) {
            obj.derivativeOrderbook = message.derivativeOrderbook.map((e) => e ? DerivativeOrderBook.toJSON(e) : undefined);
        }
        else {
            obj.derivativeOrderbook = [];
        }
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.positions) {
            obj.positions = message.positions.map((e) => e ? DerivativePosition.toJSON(e) : undefined);
        }
        else {
            obj.positions = [];
        }
        if (message.subaccountTradeNonces) {
            obj.subaccountTradeNonces = message.subaccountTradeNonces.map((e) => e ? SubaccountNonce.toJSON(e) : undefined);
        }
        else {
            obj.subaccountTradeNonces = [];
        }
        if (message.expiryFuturesMarketInfoState) {
            obj.expiryFuturesMarketInfoState = message.expiryFuturesMarketInfoState.map((e) => e ? ExpiryFuturesMarketInfoState.toJSON(e) : undefined);
        }
        else {
            obj.expiryFuturesMarketInfoState = [];
        }
        if (message.perpetualMarketInfo) {
            obj.perpetualMarketInfo = message.perpetualMarketInfo.map((e) => e ? PerpetualMarketInfo.toJSON(e) : undefined);
        }
        else {
            obj.perpetualMarketInfo = [];
        }
        if (message.perpetualMarketFundingState) {
            obj.perpetualMarketFundingState = message.perpetualMarketFundingState.map((e) => e ? PerpetualMarketFundingState.toJSON(e) : undefined);
        }
        else {
            obj.perpetualMarketFundingState = [];
        }
        if (message.derivativeMarketSettlementScheduled) {
            obj.derivativeMarketSettlementScheduled = message.derivativeMarketSettlementScheduled.map((e) => e ? DerivativeMarketSettlementInfo.toJSON(e) : undefined);
        }
        else {
            obj.derivativeMarketSettlementScheduled = [];
        }
        message.isSpotExchangeEnabled !== undefined && (obj.isSpotExchangeEnabled = message.isSpotExchangeEnabled);
        message.isDerivativesExchangeEnabled !== undefined &&
            (obj.isDerivativesExchangeEnabled = message.isDerivativesExchangeEnabled);
        message.tradingRewardCampaignInfo !== undefined &&
            (obj.tradingRewardCampaignInfo = message.tradingRewardCampaignInfo
                ? TradingRewardCampaignInfo.toJSON(message.tradingRewardCampaignInfo)
                : undefined);
        if (message.tradingRewardPoolCampaignSchedule) {
            obj.tradingRewardPoolCampaignSchedule = message.tradingRewardPoolCampaignSchedule.map((e) => e ? CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.tradingRewardPoolCampaignSchedule = [];
        }
        if (message.tradingRewardCampaignAccountPoints) {
            obj.tradingRewardCampaignAccountPoints = message.tradingRewardCampaignAccountPoints.map((e) => e ? TradingRewardCampaignAccountPoints.toJSON(e) : undefined);
        }
        else {
            obj.tradingRewardCampaignAccountPoints = [];
        }
        message.feeDiscountSchedule !== undefined && (obj.feeDiscountSchedule = message.feeDiscountSchedule
            ? FeeDiscountSchedule.toJSON(message.feeDiscountSchedule)
            : undefined);
        if (message.feeDiscountAccountTierTtl) {
            obj.feeDiscountAccountTierTtl = message.feeDiscountAccountTierTtl.map((e) => e ? FeeDiscountAccountTierTTL.toJSON(e) : undefined);
        }
        else {
            obj.feeDiscountAccountTierTtl = [];
        }
        if (message.feeDiscountBucketVolumeAccounts) {
            obj.feeDiscountBucketVolumeAccounts = message.feeDiscountBucketVolumeAccounts.map((e) => e ? FeeDiscountBucketVolumeAccounts.toJSON(e) : undefined);
        }
        else {
            obj.feeDiscountBucketVolumeAccounts = [];
        }
        message.isFirstFeeCycleFinished !== undefined && (obj.isFirstFeeCycleFinished = message.isFirstFeeCycleFinished);
        if (message.pendingTradingRewardPoolCampaignSchedule) {
            obj.pendingTradingRewardPoolCampaignSchedule = message.pendingTradingRewardPoolCampaignSchedule.map((e) => e ? CampaignRewardPool.toJSON(e) : undefined);
        }
        else {
            obj.pendingTradingRewardPoolCampaignSchedule = [];
        }
        if (message.pendingTradingRewardCampaignAccountPoints) {
            obj.pendingTradingRewardCampaignAccountPoints = message.pendingTradingRewardCampaignAccountPoints.map((e) => e ? TradingRewardCampaignAccountPendingPoints.toJSON(e) : undefined);
        }
        else {
            obj.pendingTradingRewardCampaignAccountPoints = [];
        }
        if (message.rewardsOptOutAddresses) {
            obj.rewardsOptOutAddresses = message.rewardsOptOutAddresses.map((e) => e);
        }
        else {
            obj.rewardsOptOutAddresses = [];
        }
        if (message.historicalTradeRecords) {
            obj.historicalTradeRecords = message.historicalTradeRecords.map((e) => e ? TradeRecords.toJSON(e) : undefined);
        }
        else {
            obj.historicalTradeRecords = [];
        }
        if (message.binaryOptionsMarkets) {
            obj.binaryOptionsMarkets = message.binaryOptionsMarkets.map((e) => e ? BinaryOptionsMarket.toJSON(e) : undefined);
        }
        else {
            obj.binaryOptionsMarkets = [];
        }
        if (message.binaryOptionsMarketIdsScheduledForSettlement) {
            obj.binaryOptionsMarketIdsScheduledForSettlement = message.binaryOptionsMarketIdsScheduledForSettlement.map((e) => e);
        }
        else {
            obj.binaryOptionsMarketIdsScheduledForSettlement = [];
        }
        if (message.spotMarketIdsScheduledToForceClose) {
            obj.spotMarketIdsScheduledToForceClose = message.spotMarketIdsScheduledToForceClose.map((e) => e);
        }
        else {
            obj.spotMarketIdsScheduledToForceClose = [];
        }
        if (message.denomDecimals) {
            obj.denomDecimals = message.denomDecimals.map((e) => e ? DenomDecimals.toJSON(e) : undefined);
        }
        else {
            obj.denomDecimals = [];
        }
        if (message.conditionalDerivativeOrderbooks) {
            obj.conditionalDerivativeOrderbooks = message.conditionalDerivativeOrderbooks.map((e) => e ? ConditionalDerivativeOrderBook.toJSON(e) : undefined);
        }
        else {
            obj.conditionalDerivativeOrderbooks = [];
        }
        if (message.marketFeeMultipliers) {
            obj.marketFeeMultipliers = message.marketFeeMultipliers.map((e) => e ? MarketFeeMultiplier.toJSON(e) : undefined);
        }
        else {
            obj.marketFeeMultipliers = [];
        }
        if (message.orderbookSequences) {
            obj.orderbookSequences = message.orderbookSequences.map((e) => e ? OrderbookSequence.toJSON(e) : undefined);
        }
        else {
            obj.orderbookSequences = [];
        }
        if (message.subaccountVolumes) {
            obj.subaccountVolumes = message.subaccountVolumes.map((e) => e ? AggregateSubaccountVolumeRecord.toJSON(e) : undefined);
        }
        else {
            obj.subaccountVolumes = [];
        }
        if (message.marketVolumes) {
            obj.marketVolumes = message.marketVolumes.map((e) => e ? MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.marketVolumes = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.spotMarkets = ((_a = object.spotMarkets) === null || _a === void 0 ? void 0 : _a.map((e) => SpotMarket.fromPartial(e))) || [];
        message.derivativeMarkets = ((_b = object.derivativeMarkets) === null || _b === void 0 ? void 0 : _b.map((e) => DerivativeMarket.fromPartial(e))) || [];
        message.spotOrderbook = ((_c = object.spotOrderbook) === null || _c === void 0 ? void 0 : _c.map((e) => SpotOrderBook.fromPartial(e))) || [];
        message.derivativeOrderbook = ((_d = object.derivativeOrderbook) === null || _d === void 0 ? void 0 : _d.map((e) => DerivativeOrderBook.fromPartial(e))) || [];
        message.balances = ((_e = object.balances) === null || _e === void 0 ? void 0 : _e.map((e) => Balance.fromPartial(e))) || [];
        message.positions = ((_f = object.positions) === null || _f === void 0 ? void 0 : _f.map((e) => DerivativePosition.fromPartial(e))) || [];
        message.subaccountTradeNonces = ((_g = object.subaccountTradeNonces) === null || _g === void 0 ? void 0 : _g.map((e) => SubaccountNonce.fromPartial(e))) || [];
        message.expiryFuturesMarketInfoState =
            ((_h = object.expiryFuturesMarketInfoState) === null || _h === void 0 ? void 0 : _h.map((e) => ExpiryFuturesMarketInfoState.fromPartial(e))) || [];
        message.perpetualMarketInfo = ((_j = object.perpetualMarketInfo) === null || _j === void 0 ? void 0 : _j.map((e) => PerpetualMarketInfo.fromPartial(e))) || [];
        message.perpetualMarketFundingState =
            ((_k = object.perpetualMarketFundingState) === null || _k === void 0 ? void 0 : _k.map((e) => PerpetualMarketFundingState.fromPartial(e))) || [];
        message.derivativeMarketSettlementScheduled =
            ((_l = object.derivativeMarketSettlementScheduled) === null || _l === void 0 ? void 0 : _l.map((e) => DerivativeMarketSettlementInfo.fromPartial(e))) || [];
        message.isSpotExchangeEnabled = (_m = object.isSpotExchangeEnabled) !== null && _m !== void 0 ? _m : false;
        message.isDerivativesExchangeEnabled = (_o = object.isDerivativesExchangeEnabled) !== null && _o !== void 0 ? _o : false;
        message.tradingRewardCampaignInfo =
            (object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null)
                ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo)
                : undefined;
        message.tradingRewardPoolCampaignSchedule =
            ((_p = object.tradingRewardPoolCampaignSchedule) === null || _p === void 0 ? void 0 : _p.map((e) => CampaignRewardPool.fromPartial(e))) || [];
        message.tradingRewardCampaignAccountPoints =
            ((_q = object.tradingRewardCampaignAccountPoints) === null || _q === void 0 ? void 0 : _q.map((e) => TradingRewardCampaignAccountPoints.fromPartial(e))) || [];
        message.feeDiscountSchedule = (object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null)
            ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule)
            : undefined;
        message.feeDiscountAccountTierTtl =
            ((_r = object.feeDiscountAccountTierTtl) === null || _r === void 0 ? void 0 : _r.map((e) => FeeDiscountAccountTierTTL.fromPartial(e))) || [];
        message.feeDiscountBucketVolumeAccounts =
            ((_s = object.feeDiscountBucketVolumeAccounts) === null || _s === void 0 ? void 0 : _s.map((e) => FeeDiscountBucketVolumeAccounts.fromPartial(e))) || [];
        message.isFirstFeeCycleFinished = (_t = object.isFirstFeeCycleFinished) !== null && _t !== void 0 ? _t : false;
        message.pendingTradingRewardPoolCampaignSchedule =
            ((_u = object.pendingTradingRewardPoolCampaignSchedule) === null || _u === void 0 ? void 0 : _u.map((e) => CampaignRewardPool.fromPartial(e))) || [];
        message.pendingTradingRewardCampaignAccountPoints =
            ((_v = object.pendingTradingRewardCampaignAccountPoints) === null || _v === void 0 ? void 0 : _v.map((e) => TradingRewardCampaignAccountPendingPoints.fromPartial(e))) || [];
        message.rewardsOptOutAddresses = ((_w = object.rewardsOptOutAddresses) === null || _w === void 0 ? void 0 : _w.map((e) => e)) || [];
        message.historicalTradeRecords = ((_x = object.historicalTradeRecords) === null || _x === void 0 ? void 0 : _x.map((e) => TradeRecords.fromPartial(e))) || [];
        message.binaryOptionsMarkets = ((_y = object.binaryOptionsMarkets) === null || _y === void 0 ? void 0 : _y.map((e) => BinaryOptionsMarket.fromPartial(e))) || [];
        message.binaryOptionsMarketIdsScheduledForSettlement =
            ((_z = object.binaryOptionsMarketIdsScheduledForSettlement) === null || _z === void 0 ? void 0 : _z.map((e) => e)) || [];
        message.spotMarketIdsScheduledToForceClose = ((_0 = object.spotMarketIdsScheduledToForceClose) === null || _0 === void 0 ? void 0 : _0.map((e) => e)) || [];
        message.denomDecimals = ((_1 = object.denomDecimals) === null || _1 === void 0 ? void 0 : _1.map((e) => DenomDecimals.fromPartial(e))) || [];
        message.conditionalDerivativeOrderbooks =
            ((_2 = object.conditionalDerivativeOrderbooks) === null || _2 === void 0 ? void 0 : _2.map((e) => ConditionalDerivativeOrderBook.fromPartial(e))) || [];
        message.marketFeeMultipliers = ((_3 = object.marketFeeMultipliers) === null || _3 === void 0 ? void 0 : _3.map((e) => MarketFeeMultiplier.fromPartial(e))) || [];
        message.orderbookSequences = ((_4 = object.orderbookSequences) === null || _4 === void 0 ? void 0 : _4.map((e) => OrderbookSequence.fromPartial(e))) || [];
        message.subaccountVolumes = ((_5 = object.subaccountVolumes) === null || _5 === void 0 ? void 0 : _5.map((e) => AggregateSubaccountVolumeRecord.fromPartial(e))) ||
            [];
        message.marketVolumes = ((_6 = object.marketVolumes) === null || _6 === void 0 ? void 0 : _6.map((e) => MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderbookSequence() {
    return { sequence: "0", marketId: "" };
}
export const OrderbookSequence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderbookSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.sequence = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    create(base) {
        return OrderbookSequence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderbookSequence();
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFeeDiscountAccountTierTTL() {
    return { account: "", tierTtl: undefined };
}
export const FeeDiscountAccountTierTTL = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.tierTtl !== undefined) {
            FeeDiscountTierTTL.encode(message.tierTtl, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountAccountTierTTL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tierTtl = FeeDiscountTierTTL.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            account: isSet(object.account) ? String(object.account) : "",
            tierTtl: isSet(object.tierTtl) ? FeeDiscountTierTTL.fromJSON(object.tierTtl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.tierTtl !== undefined &&
            (obj.tierTtl = message.tierTtl ? FeeDiscountTierTTL.toJSON(message.tierTtl) : undefined);
        return obj;
    },
    create(base) {
        return FeeDiscountAccountTierTTL.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeeDiscountAccountTierTTL();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.tierTtl = (object.tierTtl !== undefined && object.tierTtl !== null)
            ? FeeDiscountTierTTL.fromPartial(object.tierTtl)
            : undefined;
        return message;
    },
};
function createBaseFeeDiscountBucketVolumeAccounts() {
    return { bucketStartTimestamp: "0", accountVolume: [] };
}
export const FeeDiscountBucketVolumeAccounts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bucketStartTimestamp !== "0") {
            writer.uint32(8).int64(message.bucketStartTimestamp);
        }
        for (const v of message.accountVolume) {
            AccountVolume.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountBucketVolumeAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.bucketStartTimestamp = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accountVolume.push(AccountVolume.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            bucketStartTimestamp: isSet(object.bucketStartTimestamp) ? String(object.bucketStartTimestamp) : "0",
            accountVolume: Array.isArray(object === null || object === void 0 ? void 0 : object.accountVolume)
                ? object.accountVolume.map((e) => AccountVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bucketStartTimestamp !== undefined && (obj.bucketStartTimestamp = message.bucketStartTimestamp);
        if (message.accountVolume) {
            obj.accountVolume = message.accountVolume.map((e) => e ? AccountVolume.toJSON(e) : undefined);
        }
        else {
            obj.accountVolume = [];
        }
        return obj;
    },
    create(base) {
        return FeeDiscountBucketVolumeAccounts.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeDiscountBucketVolumeAccounts();
        message.bucketStartTimestamp = (_a = object.bucketStartTimestamp) !== null && _a !== void 0 ? _a : "0";
        message.accountVolume = ((_b = object.accountVolume) === null || _b === void 0 ? void 0 : _b.map((e) => AccountVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAccountVolume() {
    return { account: "", volume: "" };
}
export const AccountVolume = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.volume !== "") {
            writer.uint32(18).string(message.volume);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.volume = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            account: isSet(object.account) ? String(object.account) : "",
            volume: isSet(object.volume) ? String(object.volume) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.volume !== undefined && (obj.volume = message.volume);
        return obj;
    },
    create(base) {
        return AccountVolume.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAccountVolume();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.volume = (_b = object.volume) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTradingRewardCampaignAccountPoints() {
    return { account: "", points: "" };
}
export const TradingRewardCampaignAccountPoints = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.points !== "") {
            writer.uint32(18).string(message.points);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignAccountPoints();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.points = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            account: isSet(object.account) ? String(object.account) : "",
            points: isSet(object.points) ? String(object.points) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.points !== undefined && (obj.points = message.points);
        return obj;
    },
    create(base) {
        return TradingRewardCampaignAccountPoints.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTradingRewardCampaignAccountPoints();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.points = (_b = object.points) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTradingRewardCampaignAccountPendingPoints() {
    return { rewardPoolStartTimestamp: "0", accountPoints: [] };
}
export const TradingRewardCampaignAccountPendingPoints = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rewardPoolStartTimestamp !== "0") {
            writer.uint32(8).int64(message.rewardPoolStartTimestamp);
        }
        for (const v of message.accountPoints) {
            TradingRewardCampaignAccountPoints.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignAccountPendingPoints();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.rewardPoolStartTimestamp = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accountPoints.push(TradingRewardCampaignAccountPoints.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            rewardPoolStartTimestamp: isSet(object.rewardPoolStartTimestamp) ? String(object.rewardPoolStartTimestamp) : "0",
            accountPoints: Array.isArray(object === null || object === void 0 ? void 0 : object.accountPoints)
                ? object.accountPoints.map((e) => TradingRewardCampaignAccountPoints.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.rewardPoolStartTimestamp !== undefined && (obj.rewardPoolStartTimestamp = message.rewardPoolStartTimestamp);
        if (message.accountPoints) {
            obj.accountPoints = message.accountPoints.map((e) => e ? TradingRewardCampaignAccountPoints.toJSON(e) : undefined);
        }
        else {
            obj.accountPoints = [];
        }
        return obj;
    },
    create(base) {
        return TradingRewardCampaignAccountPendingPoints.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTradingRewardCampaignAccountPendingPoints();
        message.rewardPoolStartTimestamp = (_a = object.rewardPoolStartTimestamp) !== null && _a !== void 0 ? _a : "0";
        message.accountPoints = ((_b = object.accountPoints) === null || _b === void 0 ? void 0 : _b.map((e) => TradingRewardCampaignAccountPoints.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSpotOrderBook() {
    return { marketId: "", isBuySide: false, orders: [] };
}
export const SpotOrderBook = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuySide === true) {
            writer.uint32(16).bool(message.isBuySide);
        }
        for (const v of message.orders) {
            SpotLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isBuySide = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orders.push(SpotLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            isBuySide: isSet(object.isBuySide) ? Boolean(object.isBuySide) : false,
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => SpotLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.isBuySide !== undefined && (obj.isBuySide = message.isBuySide);
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? SpotLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return SpotOrderBook.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSpotOrderBook();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.isBuySide = (_b = object.isBuySide) !== null && _b !== void 0 ? _b : false;
        message.orders = ((_c = object.orders) === null || _c === void 0 ? void 0 : _c.map((e) => SpotLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDerivativeOrderBook() {
    return { marketId: "", isBuySide: false, orders: [] };
}
export const DerivativeOrderBook = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuySide === true) {
            writer.uint32(16).bool(message.isBuySide);
        }
        for (const v of message.orders) {
            DerivativeLimitOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isBuySide = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            isBuySide: isSet(object.isBuySide) ? Boolean(object.isBuySide) : false,
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => DerivativeLimitOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.isBuySide !== undefined && (obj.isBuySide = message.isBuySide);
        if (message.orders) {
            obj.orders = message.orders.map((e) => e ? DerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    create(base) {
        return DerivativeOrderBook.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDerivativeOrderBook();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.isBuySide = (_b = object.isBuySide) !== null && _b !== void 0 ? _b : false;
        message.orders = ((_c = object.orders) === null || _c === void 0 ? void 0 : _c.map((e) => DerivativeLimitOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseConditionalDerivativeOrderBook() {
    return { marketId: "", limitBuyOrders: [], marketBuyOrders: [], limitSellOrders: [], marketSellOrders: [] };
}
export const ConditionalDerivativeOrderBook = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.limitBuyOrders) {
            DerivativeLimitOrder.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.marketBuyOrders) {
            DerivativeMarketOrder.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.limitSellOrders) {
            DerivativeLimitOrder.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.marketSellOrders) {
            DerivativeMarketOrder.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConditionalDerivativeOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.limitBuyOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.marketBuyOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.limitSellOrders.push(DerivativeLimitOrder.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.marketSellOrders.push(DerivativeMarketOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            limitBuyOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.limitBuyOrders)
                ? object.limitBuyOrders.map((e) => DerivativeLimitOrder.fromJSON(e))
                : [],
            marketBuyOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.marketBuyOrders)
                ? object.marketBuyOrders.map((e) => DerivativeMarketOrder.fromJSON(e))
                : [],
            limitSellOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.limitSellOrders)
                ? object.limitSellOrders.map((e) => DerivativeLimitOrder.fromJSON(e))
                : [],
            marketSellOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.marketSellOrders)
                ? object.marketSellOrders.map((e) => DerivativeMarketOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        if (message.limitBuyOrders) {
            obj.limitBuyOrders = message.limitBuyOrders.map((e) => e ? DerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.limitBuyOrders = [];
        }
        if (message.marketBuyOrders) {
            obj.marketBuyOrders = message.marketBuyOrders.map((e) => e ? DerivativeMarketOrder.toJSON(e) : undefined);
        }
        else {
            obj.marketBuyOrders = [];
        }
        if (message.limitSellOrders) {
            obj.limitSellOrders = message.limitSellOrders.map((e) => e ? DerivativeLimitOrder.toJSON(e) : undefined);
        }
        else {
            obj.limitSellOrders = [];
        }
        if (message.marketSellOrders) {
            obj.marketSellOrders = message.marketSellOrders.map((e) => e ? DerivativeMarketOrder.toJSON(e) : undefined);
        }
        else {
            obj.marketSellOrders = [];
        }
        return obj;
    },
    create(base) {
        return ConditionalDerivativeOrderBook.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseConditionalDerivativeOrderBook();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.limitBuyOrders = ((_b = object.limitBuyOrders) === null || _b === void 0 ? void 0 : _b.map((e) => DerivativeLimitOrder.fromPartial(e))) || [];
        message.marketBuyOrders = ((_c = object.marketBuyOrders) === null || _c === void 0 ? void 0 : _c.map((e) => DerivativeMarketOrder.fromPartial(e))) || [];
        message.limitSellOrders = ((_d = object.limitSellOrders) === null || _d === void 0 ? void 0 : _d.map((e) => DerivativeLimitOrder.fromPartial(e))) || [];
        message.marketSellOrders = ((_e = object.marketSellOrders) === null || _e === void 0 ? void 0 : _e.map((e) => DerivativeMarketOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBalance() {
    return { subaccountId: "", denom: "", deposits: undefined };
}
export const Balance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.deposits !== undefined) {
            Deposit.encode(message.deposits, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.deposits = Deposit.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            deposits: isSet(object.deposits) ? Deposit.fromJSON(object.deposits) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.denom !== undefined && (obj.denom = message.denom);
        message.deposits !== undefined && (obj.deposits = message.deposits ? Deposit.toJSON(message.deposits) : undefined);
        return obj;
    },
    create(base) {
        return Balance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBalance();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.deposits = (object.deposits !== undefined && object.deposits !== null)
            ? Deposit.fromPartial(object.deposits)
            : undefined;
        return message;
    },
};
function createBaseDerivativePosition() {
    return { subaccountId: "", marketId: "", position: undefined };
}
export const DerivativePosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.position !== undefined) {
            Position.encode(message.position, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.position = Position.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
        return obj;
    },
    create(base) {
        return DerivativePosition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDerivativePosition();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.position = (object.position !== undefined && object.position !== null)
            ? Position.fromPartial(object.position)
            : undefined;
        return message;
    },
};
function createBaseSubaccountNonce() {
    return { subaccountId: "", subaccountTradeNonce: undefined };
}
export const SubaccountNonce = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.subaccountTradeNonce !== undefined) {
            SubaccountTradeNonce.encode(message.subaccountTradeNonce, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountNonce();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountTradeNonce = SubaccountTradeNonce.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            subaccountTradeNonce: isSet(object.subaccountTradeNonce)
                ? SubaccountTradeNonce.fromJSON(object.subaccountTradeNonce)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.subaccountTradeNonce !== undefined && (obj.subaccountTradeNonce = message.subaccountTradeNonce
            ? SubaccountTradeNonce.toJSON(message.subaccountTradeNonce)
            : undefined);
        return obj;
    },
    create(base) {
        return SubaccountNonce.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountNonce();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.subaccountTradeNonce = (object.subaccountTradeNonce !== undefined && object.subaccountTradeNonce !== null)
            ? SubaccountTradeNonce.fromPartial(object.subaccountTradeNonce)
            : undefined;
        return message;
    },
};
function createBaseExpiryFuturesMarketInfoState() {
    return { marketId: "", marketInfo: undefined };
}
export const ExpiryFuturesMarketInfoState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.marketInfo !== undefined) {
            ExpiryFuturesMarketInfo.encode(message.marketInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketInfoState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.marketInfo = ExpiryFuturesMarketInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            marketInfo: isSet(object.marketInfo) ? ExpiryFuturesMarketInfo.fromJSON(object.marketInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.marketInfo !== undefined &&
            (obj.marketInfo = message.marketInfo ? ExpiryFuturesMarketInfo.toJSON(message.marketInfo) : undefined);
        return obj;
    },
    create(base) {
        return ExpiryFuturesMarketInfoState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExpiryFuturesMarketInfoState();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.marketInfo = (object.marketInfo !== undefined && object.marketInfo !== null)
            ? ExpiryFuturesMarketInfo.fromPartial(object.marketInfo)
            : undefined;
        return message;
    },
};
function createBasePerpetualMarketFundingState() {
    return { marketId: "", funding: undefined };
}
export const PerpetualMarketFundingState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.funding !== undefined) {
            PerpetualMarketFunding.encode(message.funding, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketFundingState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.funding = PerpetualMarketFunding.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            funding: isSet(object.funding) ? PerpetualMarketFunding.fromJSON(object.funding) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.funding !== undefined &&
            (obj.funding = message.funding ? PerpetualMarketFunding.toJSON(message.funding) : undefined);
        return obj;
    },
    create(base) {
        return PerpetualMarketFundingState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePerpetualMarketFundingState();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.funding = (object.funding !== undefined && object.funding !== null)
            ? PerpetualMarketFunding.fromPartial(object.funding)
            : undefined;
        return message;
    },
};
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
