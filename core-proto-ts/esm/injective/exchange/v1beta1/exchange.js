/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { oracleTypeFromJSON, oracleTypeToJSON } from "../../oracle/v1beta1/oracle";
export var AtomicMarketOrderAccessLevel;
(function (AtomicMarketOrderAccessLevel) {
    AtomicMarketOrderAccessLevel[AtomicMarketOrderAccessLevel["Nobody"] = 0] = "Nobody";
    /** BeginBlockerSmartContractsOnly - currently unsupported */
    AtomicMarketOrderAccessLevel[AtomicMarketOrderAccessLevel["BeginBlockerSmartContractsOnly"] = 1] = "BeginBlockerSmartContractsOnly";
    AtomicMarketOrderAccessLevel[AtomicMarketOrderAccessLevel["SmartContractsOnly"] = 2] = "SmartContractsOnly";
    AtomicMarketOrderAccessLevel[AtomicMarketOrderAccessLevel["Everyone"] = 3] = "Everyone";
    AtomicMarketOrderAccessLevel[AtomicMarketOrderAccessLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AtomicMarketOrderAccessLevel || (AtomicMarketOrderAccessLevel = {}));
export function atomicMarketOrderAccessLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "Nobody":
            return AtomicMarketOrderAccessLevel.Nobody;
        case 1:
        case "BeginBlockerSmartContractsOnly":
            return AtomicMarketOrderAccessLevel.BeginBlockerSmartContractsOnly;
        case 2:
        case "SmartContractsOnly":
            return AtomicMarketOrderAccessLevel.SmartContractsOnly;
        case 3:
        case "Everyone":
            return AtomicMarketOrderAccessLevel.Everyone;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AtomicMarketOrderAccessLevel.UNRECOGNIZED;
    }
}
export function atomicMarketOrderAccessLevelToJSON(object) {
    switch (object) {
        case AtomicMarketOrderAccessLevel.Nobody:
            return "Nobody";
        case AtomicMarketOrderAccessLevel.BeginBlockerSmartContractsOnly:
            return "BeginBlockerSmartContractsOnly";
        case AtomicMarketOrderAccessLevel.SmartContractsOnly:
            return "SmartContractsOnly";
        case AtomicMarketOrderAccessLevel.Everyone:
            return "Everyone";
        case AtomicMarketOrderAccessLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var MarketStatus;
(function (MarketStatus) {
    MarketStatus[MarketStatus["Unspecified"] = 0] = "Unspecified";
    MarketStatus[MarketStatus["Active"] = 1] = "Active";
    MarketStatus[MarketStatus["Paused"] = 2] = "Paused";
    MarketStatus[MarketStatus["Demolished"] = 3] = "Demolished";
    MarketStatus[MarketStatus["Expired"] = 4] = "Expired";
    MarketStatus[MarketStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MarketStatus || (MarketStatus = {}));
export function marketStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "Unspecified":
            return MarketStatus.Unspecified;
        case 1:
        case "Active":
            return MarketStatus.Active;
        case 2:
        case "Paused":
            return MarketStatus.Paused;
        case 3:
        case "Demolished":
            return MarketStatus.Demolished;
        case 4:
        case "Expired":
            return MarketStatus.Expired;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MarketStatus.UNRECOGNIZED;
    }
}
export function marketStatusToJSON(object) {
    switch (object) {
        case MarketStatus.Unspecified:
            return "Unspecified";
        case MarketStatus.Active:
            return "Active";
        case MarketStatus.Paused:
            return "Paused";
        case MarketStatus.Demolished:
            return "Demolished";
        case MarketStatus.Expired:
            return "Expired";
        case MarketStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var OrderType;
(function (OrderType) {
    OrderType[OrderType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    OrderType[OrderType["BUY"] = 1] = "BUY";
    OrderType[OrderType["SELL"] = 2] = "SELL";
    OrderType[OrderType["STOP_BUY"] = 3] = "STOP_BUY";
    OrderType[OrderType["STOP_SELL"] = 4] = "STOP_SELL";
    OrderType[OrderType["TAKE_BUY"] = 5] = "TAKE_BUY";
    OrderType[OrderType["TAKE_SELL"] = 6] = "TAKE_SELL";
    OrderType[OrderType["BUY_PO"] = 7] = "BUY_PO";
    OrderType[OrderType["SELL_PO"] = 8] = "SELL_PO";
    OrderType[OrderType["BUY_ATOMIC"] = 9] = "BUY_ATOMIC";
    OrderType[OrderType["SELL_ATOMIC"] = 10] = "SELL_ATOMIC";
    OrderType[OrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderType || (OrderType = {}));
export function orderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNSPECIFIED":
            return OrderType.UNSPECIFIED;
        case 1:
        case "BUY":
            return OrderType.BUY;
        case 2:
        case "SELL":
            return OrderType.SELL;
        case 3:
        case "STOP_BUY":
            return OrderType.STOP_BUY;
        case 4:
        case "STOP_SELL":
            return OrderType.STOP_SELL;
        case 5:
        case "TAKE_BUY":
            return OrderType.TAKE_BUY;
        case 6:
        case "TAKE_SELL":
            return OrderType.TAKE_SELL;
        case 7:
        case "BUY_PO":
            return OrderType.BUY_PO;
        case 8:
        case "SELL_PO":
            return OrderType.SELL_PO;
        case 9:
        case "BUY_ATOMIC":
            return OrderType.BUY_ATOMIC;
        case 10:
        case "SELL_ATOMIC":
            return OrderType.SELL_ATOMIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderType.UNRECOGNIZED;
    }
}
export function orderTypeToJSON(object) {
    switch (object) {
        case OrderType.UNSPECIFIED:
            return "UNSPECIFIED";
        case OrderType.BUY:
            return "BUY";
        case OrderType.SELL:
            return "SELL";
        case OrderType.STOP_BUY:
            return "STOP_BUY";
        case OrderType.STOP_SELL:
            return "STOP_SELL";
        case OrderType.TAKE_BUY:
            return "TAKE_BUY";
        case OrderType.TAKE_SELL:
            return "TAKE_SELL";
        case OrderType.BUY_PO:
            return "BUY_PO";
        case OrderType.SELL_PO:
            return "SELL_PO";
        case OrderType.BUY_ATOMIC:
            return "BUY_ATOMIC";
        case OrderType.SELL_ATOMIC:
            return "SELL_ATOMIC";
        case OrderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ExecutionType;
(function (ExecutionType) {
    ExecutionType[ExecutionType["UnspecifiedExecutionType"] = 0] = "UnspecifiedExecutionType";
    ExecutionType[ExecutionType["Market"] = 1] = "Market";
    ExecutionType[ExecutionType["LimitFill"] = 2] = "LimitFill";
    ExecutionType[ExecutionType["LimitMatchRestingOrder"] = 3] = "LimitMatchRestingOrder";
    ExecutionType[ExecutionType["LimitMatchNewOrder"] = 4] = "LimitMatchNewOrder";
    ExecutionType[ExecutionType["MarketLiquidation"] = 5] = "MarketLiquidation";
    ExecutionType[ExecutionType["ExpiryMarketSettlement"] = 6] = "ExpiryMarketSettlement";
    ExecutionType[ExecutionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecutionType || (ExecutionType = {}));
export function executionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UnspecifiedExecutionType":
            return ExecutionType.UnspecifiedExecutionType;
        case 1:
        case "Market":
            return ExecutionType.Market;
        case 2:
        case "LimitFill":
            return ExecutionType.LimitFill;
        case 3:
        case "LimitMatchRestingOrder":
            return ExecutionType.LimitMatchRestingOrder;
        case 4:
        case "LimitMatchNewOrder":
            return ExecutionType.LimitMatchNewOrder;
        case 5:
        case "MarketLiquidation":
            return ExecutionType.MarketLiquidation;
        case 6:
        case "ExpiryMarketSettlement":
            return ExecutionType.ExpiryMarketSettlement;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExecutionType.UNRECOGNIZED;
    }
}
export function executionTypeToJSON(object) {
    switch (object) {
        case ExecutionType.UnspecifiedExecutionType:
            return "UnspecifiedExecutionType";
        case ExecutionType.Market:
            return "Market";
        case ExecutionType.LimitFill:
            return "LimitFill";
        case ExecutionType.LimitMatchRestingOrder:
            return "LimitMatchRestingOrder";
        case ExecutionType.LimitMatchNewOrder:
            return "LimitMatchNewOrder";
        case ExecutionType.MarketLiquidation:
            return "MarketLiquidation";
        case ExecutionType.ExpiryMarketSettlement:
            return "ExpiryMarketSettlement";
        case ExecutionType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var OrderMask;
(function (OrderMask) {
    OrderMask[OrderMask["UNUSED"] = 0] = "UNUSED";
    OrderMask[OrderMask["ANY"] = 1] = "ANY";
    OrderMask[OrderMask["REGULAR"] = 2] = "REGULAR";
    OrderMask[OrderMask["CONDITIONAL"] = 4] = "CONDITIONAL";
    /** DIRECTION_BUY_OR_HIGHER - for conditional orders means HIGHER */
    OrderMask[OrderMask["DIRECTION_BUY_OR_HIGHER"] = 8] = "DIRECTION_BUY_OR_HIGHER";
    /** DIRECTION_SELL_OR_LOWER - for conditional orders means LOWER */
    OrderMask[OrderMask["DIRECTION_SELL_OR_LOWER"] = 16] = "DIRECTION_SELL_OR_LOWER";
    OrderMask[OrderMask["TYPE_MARKET"] = 32] = "TYPE_MARKET";
    OrderMask[OrderMask["TYPE_LIMIT"] = 64] = "TYPE_LIMIT";
    OrderMask[OrderMask["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderMask || (OrderMask = {}));
export function orderMaskFromJSON(object) {
    switch (object) {
        case 0:
        case "UNUSED":
            return OrderMask.UNUSED;
        case 1:
        case "ANY":
            return OrderMask.ANY;
        case 2:
        case "REGULAR":
            return OrderMask.REGULAR;
        case 4:
        case "CONDITIONAL":
            return OrderMask.CONDITIONAL;
        case 8:
        case "DIRECTION_BUY_OR_HIGHER":
            return OrderMask.DIRECTION_BUY_OR_HIGHER;
        case 16:
        case "DIRECTION_SELL_OR_LOWER":
            return OrderMask.DIRECTION_SELL_OR_LOWER;
        case 32:
        case "TYPE_MARKET":
            return OrderMask.TYPE_MARKET;
        case 64:
        case "TYPE_LIMIT":
            return OrderMask.TYPE_LIMIT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderMask.UNRECOGNIZED;
    }
}
export function orderMaskToJSON(object) {
    switch (object) {
        case OrderMask.UNUSED:
            return "UNUSED";
        case OrderMask.ANY:
            return "ANY";
        case OrderMask.REGULAR:
            return "REGULAR";
        case OrderMask.CONDITIONAL:
            return "CONDITIONAL";
        case OrderMask.DIRECTION_BUY_OR_HIGHER:
            return "DIRECTION_BUY_OR_HIGHER";
        case OrderMask.DIRECTION_SELL_OR_LOWER:
            return "DIRECTION_SELL_OR_LOWER";
        case OrderMask.TYPE_MARKET:
            return "TYPE_MARKET";
        case OrderMask.TYPE_LIMIT:
            return "TYPE_LIMIT";
        case OrderMask.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseParams() {
    return {
        spotMarketInstantListingFee: undefined,
        derivativeMarketInstantListingFee: undefined,
        defaultSpotMakerFeeRate: "",
        defaultSpotTakerFeeRate: "",
        defaultDerivativeMakerFeeRate: "",
        defaultDerivativeTakerFeeRate: "",
        defaultInitialMarginRatio: "",
        defaultMaintenanceMarginRatio: "",
        defaultFundingInterval: "0",
        fundingMultiple: "0",
        relayerFeeShareRate: "",
        defaultHourlyFundingRateCap: "",
        defaultHourlyInterestRate: "",
        maxDerivativeOrderSideCount: 0,
        injRewardStakedRequirementThreshold: "",
        tradingRewardsVestingDuration: "0",
        liquidatorRewardShareRate: "",
        binaryOptionsMarketInstantListingFee: undefined,
        atomicMarketOrderAccessLevel: 0,
        spotAtomicMarketOrderFeeMultiplier: "",
        derivativeAtomicMarketOrderFeeMultiplier: "",
        binaryOptionsAtomicMarketOrderFeeMultiplier: "",
        minimalProtocolFeeRate: "",
        isInstantDerivativeMarketLaunchEnabled: false,
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.spotMarketInstantListingFee !== undefined) {
            Coin.encode(message.spotMarketInstantListingFee, writer.uint32(10).fork()).ldelim();
        }
        if (message.derivativeMarketInstantListingFee !== undefined) {
            Coin.encode(message.derivativeMarketInstantListingFee, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultSpotMakerFeeRate !== "") {
            writer.uint32(26).string(message.defaultSpotMakerFeeRate);
        }
        if (message.defaultSpotTakerFeeRate !== "") {
            writer.uint32(34).string(message.defaultSpotTakerFeeRate);
        }
        if (message.defaultDerivativeMakerFeeRate !== "") {
            writer.uint32(42).string(message.defaultDerivativeMakerFeeRate);
        }
        if (message.defaultDerivativeTakerFeeRate !== "") {
            writer.uint32(50).string(message.defaultDerivativeTakerFeeRate);
        }
        if (message.defaultInitialMarginRatio !== "") {
            writer.uint32(58).string(message.defaultInitialMarginRatio);
        }
        if (message.defaultMaintenanceMarginRatio !== "") {
            writer.uint32(66).string(message.defaultMaintenanceMarginRatio);
        }
        if (message.defaultFundingInterval !== "0") {
            writer.uint32(72).int64(message.defaultFundingInterval);
        }
        if (message.fundingMultiple !== "0") {
            writer.uint32(80).int64(message.fundingMultiple);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(90).string(message.relayerFeeShareRate);
        }
        if (message.defaultHourlyFundingRateCap !== "") {
            writer.uint32(98).string(message.defaultHourlyFundingRateCap);
        }
        if (message.defaultHourlyInterestRate !== "") {
            writer.uint32(106).string(message.defaultHourlyInterestRate);
        }
        if (message.maxDerivativeOrderSideCount !== 0) {
            writer.uint32(112).uint32(message.maxDerivativeOrderSideCount);
        }
        if (message.injRewardStakedRequirementThreshold !== "") {
            writer.uint32(122).string(message.injRewardStakedRequirementThreshold);
        }
        if (message.tradingRewardsVestingDuration !== "0") {
            writer.uint32(128).int64(message.tradingRewardsVestingDuration);
        }
        if (message.liquidatorRewardShareRate !== "") {
            writer.uint32(138).string(message.liquidatorRewardShareRate);
        }
        if (message.binaryOptionsMarketInstantListingFee !== undefined) {
            Coin.encode(message.binaryOptionsMarketInstantListingFee, writer.uint32(146).fork()).ldelim();
        }
        if (message.atomicMarketOrderAccessLevel !== 0) {
            writer.uint32(152).int32(message.atomicMarketOrderAccessLevel);
        }
        if (message.spotAtomicMarketOrderFeeMultiplier !== "") {
            writer.uint32(162).string(message.spotAtomicMarketOrderFeeMultiplier);
        }
        if (message.derivativeAtomicMarketOrderFeeMultiplier !== "") {
            writer.uint32(170).string(message.derivativeAtomicMarketOrderFeeMultiplier);
        }
        if (message.binaryOptionsAtomicMarketOrderFeeMultiplier !== "") {
            writer.uint32(178).string(message.binaryOptionsAtomicMarketOrderFeeMultiplier);
        }
        if (message.minimalProtocolFeeRate !== "") {
            writer.uint32(186).string(message.minimalProtocolFeeRate);
        }
        if (message.isInstantDerivativeMarketLaunchEnabled === true) {
            writer.uint32(192).bool(message.isInstantDerivativeMarketLaunchEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.spotMarketInstantListingFee = Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.derivativeMarketInstantListingFee = Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.defaultSpotMakerFeeRate = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.defaultSpotTakerFeeRate = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.defaultDerivativeMakerFeeRate = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.defaultDerivativeTakerFeeRate = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.defaultInitialMarginRatio = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.defaultMaintenanceMarginRatio = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.defaultFundingInterval = longToString(reader.int64());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.fundingMultiple = longToString(reader.int64());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.relayerFeeShareRate = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.defaultHourlyFundingRateCap = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.defaultHourlyInterestRate = reader.string();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.maxDerivativeOrderSideCount = reader.uint32();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.injRewardStakedRequirementThreshold = reader.string();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.tradingRewardsVestingDuration = longToString(reader.int64());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.liquidatorRewardShareRate = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.binaryOptionsMarketInstantListingFee = Coin.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }
                    message.atomicMarketOrderAccessLevel = reader.int32();
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.spotAtomicMarketOrderFeeMultiplier = reader.string();
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.derivativeAtomicMarketOrderFeeMultiplier = reader.string();
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.binaryOptionsAtomicMarketOrderFeeMultiplier = reader.string();
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.minimalProtocolFeeRate = reader.string();
                    continue;
                case 24:
                    if (tag !== 192) {
                        break;
                    }
                    message.isInstantDerivativeMarketLaunchEnabled = reader.bool();
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
            spotMarketInstantListingFee: isSet(object.spotMarketInstantListingFee)
                ? Coin.fromJSON(object.spotMarketInstantListingFee)
                : undefined,
            derivativeMarketInstantListingFee: isSet(object.derivativeMarketInstantListingFee)
                ? Coin.fromJSON(object.derivativeMarketInstantListingFee)
                : undefined,
            defaultSpotMakerFeeRate: isSet(object.defaultSpotMakerFeeRate) ? String(object.defaultSpotMakerFeeRate) : "",
            defaultSpotTakerFeeRate: isSet(object.defaultSpotTakerFeeRate) ? String(object.defaultSpotTakerFeeRate) : "",
            defaultDerivativeMakerFeeRate: isSet(object.defaultDerivativeMakerFeeRate)
                ? String(object.defaultDerivativeMakerFeeRate)
                : "",
            defaultDerivativeTakerFeeRate: isSet(object.defaultDerivativeTakerFeeRate)
                ? String(object.defaultDerivativeTakerFeeRate)
                : "",
            defaultInitialMarginRatio: isSet(object.defaultInitialMarginRatio)
                ? String(object.defaultInitialMarginRatio)
                : "",
            defaultMaintenanceMarginRatio: isSet(object.defaultMaintenanceMarginRatio)
                ? String(object.defaultMaintenanceMarginRatio)
                : "",
            defaultFundingInterval: isSet(object.defaultFundingInterval) ? String(object.defaultFundingInterval) : "0",
            fundingMultiple: isSet(object.fundingMultiple) ? String(object.fundingMultiple) : "0",
            relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
            defaultHourlyFundingRateCap: isSet(object.defaultHourlyFundingRateCap)
                ? String(object.defaultHourlyFundingRateCap)
                : "",
            defaultHourlyInterestRate: isSet(object.defaultHourlyInterestRate)
                ? String(object.defaultHourlyInterestRate)
                : "",
            maxDerivativeOrderSideCount: isSet(object.maxDerivativeOrderSideCount)
                ? Number(object.maxDerivativeOrderSideCount)
                : 0,
            injRewardStakedRequirementThreshold: isSet(object.injRewardStakedRequirementThreshold)
                ? String(object.injRewardStakedRequirementThreshold)
                : "",
            tradingRewardsVestingDuration: isSet(object.tradingRewardsVestingDuration)
                ? String(object.tradingRewardsVestingDuration)
                : "0",
            liquidatorRewardShareRate: isSet(object.liquidatorRewardShareRate)
                ? String(object.liquidatorRewardShareRate)
                : "",
            binaryOptionsMarketInstantListingFee: isSet(object.binaryOptionsMarketInstantListingFee)
                ? Coin.fromJSON(object.binaryOptionsMarketInstantListingFee)
                : undefined,
            atomicMarketOrderAccessLevel: isSet(object.atomicMarketOrderAccessLevel)
                ? atomicMarketOrderAccessLevelFromJSON(object.atomicMarketOrderAccessLevel)
                : 0,
            spotAtomicMarketOrderFeeMultiplier: isSet(object.spotAtomicMarketOrderFeeMultiplier)
                ? String(object.spotAtomicMarketOrderFeeMultiplier)
                : "",
            derivativeAtomicMarketOrderFeeMultiplier: isSet(object.derivativeAtomicMarketOrderFeeMultiplier)
                ? String(object.derivativeAtomicMarketOrderFeeMultiplier)
                : "",
            binaryOptionsAtomicMarketOrderFeeMultiplier: isSet(object.binaryOptionsAtomicMarketOrderFeeMultiplier)
                ? String(object.binaryOptionsAtomicMarketOrderFeeMultiplier)
                : "",
            minimalProtocolFeeRate: isSet(object.minimalProtocolFeeRate) ? String(object.minimalProtocolFeeRate) : "",
            isInstantDerivativeMarketLaunchEnabled: isSet(object.isInstantDerivativeMarketLaunchEnabled)
                ? Boolean(object.isInstantDerivativeMarketLaunchEnabled)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.spotMarketInstantListingFee !== undefined &&
            (obj.spotMarketInstantListingFee = message.spotMarketInstantListingFee
                ? Coin.toJSON(message.spotMarketInstantListingFee)
                : undefined);
        message.derivativeMarketInstantListingFee !== undefined &&
            (obj.derivativeMarketInstantListingFee = message.derivativeMarketInstantListingFee
                ? Coin.toJSON(message.derivativeMarketInstantListingFee)
                : undefined);
        message.defaultSpotMakerFeeRate !== undefined && (obj.defaultSpotMakerFeeRate = message.defaultSpotMakerFeeRate);
        message.defaultSpotTakerFeeRate !== undefined && (obj.defaultSpotTakerFeeRate = message.defaultSpotTakerFeeRate);
        message.defaultDerivativeMakerFeeRate !== undefined &&
            (obj.defaultDerivativeMakerFeeRate = message.defaultDerivativeMakerFeeRate);
        message.defaultDerivativeTakerFeeRate !== undefined &&
            (obj.defaultDerivativeTakerFeeRate = message.defaultDerivativeTakerFeeRate);
        message.defaultInitialMarginRatio !== undefined &&
            (obj.defaultInitialMarginRatio = message.defaultInitialMarginRatio);
        message.defaultMaintenanceMarginRatio !== undefined &&
            (obj.defaultMaintenanceMarginRatio = message.defaultMaintenanceMarginRatio);
        message.defaultFundingInterval !== undefined && (obj.defaultFundingInterval = message.defaultFundingInterval);
        message.fundingMultiple !== undefined && (obj.fundingMultiple = message.fundingMultiple);
        message.relayerFeeShareRate !== undefined && (obj.relayerFeeShareRate = message.relayerFeeShareRate);
        message.defaultHourlyFundingRateCap !== undefined &&
            (obj.defaultHourlyFundingRateCap = message.defaultHourlyFundingRateCap);
        message.defaultHourlyInterestRate !== undefined &&
            (obj.defaultHourlyInterestRate = message.defaultHourlyInterestRate);
        message.maxDerivativeOrderSideCount !== undefined &&
            (obj.maxDerivativeOrderSideCount = Math.round(message.maxDerivativeOrderSideCount));
        message.injRewardStakedRequirementThreshold !== undefined &&
            (obj.injRewardStakedRequirementThreshold = message.injRewardStakedRequirementThreshold);
        message.tradingRewardsVestingDuration !== undefined &&
            (obj.tradingRewardsVestingDuration = message.tradingRewardsVestingDuration);
        message.liquidatorRewardShareRate !== undefined &&
            (obj.liquidatorRewardShareRate = message.liquidatorRewardShareRate);
        message.binaryOptionsMarketInstantListingFee !== undefined &&
            (obj.binaryOptionsMarketInstantListingFee = message.binaryOptionsMarketInstantListingFee
                ? Coin.toJSON(message.binaryOptionsMarketInstantListingFee)
                : undefined);
        message.atomicMarketOrderAccessLevel !== undefined &&
            (obj.atomicMarketOrderAccessLevel = atomicMarketOrderAccessLevelToJSON(message.atomicMarketOrderAccessLevel));
        message.spotAtomicMarketOrderFeeMultiplier !== undefined &&
            (obj.spotAtomicMarketOrderFeeMultiplier = message.spotAtomicMarketOrderFeeMultiplier);
        message.derivativeAtomicMarketOrderFeeMultiplier !== undefined &&
            (obj.derivativeAtomicMarketOrderFeeMultiplier = message.derivativeAtomicMarketOrderFeeMultiplier);
        message.binaryOptionsAtomicMarketOrderFeeMultiplier !== undefined &&
            (obj.binaryOptionsAtomicMarketOrderFeeMultiplier = message.binaryOptionsAtomicMarketOrderFeeMultiplier);
        message.minimalProtocolFeeRate !== undefined && (obj.minimalProtocolFeeRate = message.minimalProtocolFeeRate);
        message.isInstantDerivativeMarketLaunchEnabled !== undefined &&
            (obj.isInstantDerivativeMarketLaunchEnabled = message.isInstantDerivativeMarketLaunchEnabled);
        return obj;
    },
    create(base) {
        return Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseParams();
        message.spotMarketInstantListingFee =
            (object.spotMarketInstantListingFee !== undefined && object.spotMarketInstantListingFee !== null)
                ? Coin.fromPartial(object.spotMarketInstantListingFee)
                : undefined;
        message.derivativeMarketInstantListingFee =
            (object.derivativeMarketInstantListingFee !== undefined && object.derivativeMarketInstantListingFee !== null)
                ? Coin.fromPartial(object.derivativeMarketInstantListingFee)
                : undefined;
        message.defaultSpotMakerFeeRate = (_a = object.defaultSpotMakerFeeRate) !== null && _a !== void 0 ? _a : "";
        message.defaultSpotTakerFeeRate = (_b = object.defaultSpotTakerFeeRate) !== null && _b !== void 0 ? _b : "";
        message.defaultDerivativeMakerFeeRate = (_c = object.defaultDerivativeMakerFeeRate) !== null && _c !== void 0 ? _c : "";
        message.defaultDerivativeTakerFeeRate = (_d = object.defaultDerivativeTakerFeeRate) !== null && _d !== void 0 ? _d : "";
        message.defaultInitialMarginRatio = (_e = object.defaultInitialMarginRatio) !== null && _e !== void 0 ? _e : "";
        message.defaultMaintenanceMarginRatio = (_f = object.defaultMaintenanceMarginRatio) !== null && _f !== void 0 ? _f : "";
        message.defaultFundingInterval = (_g = object.defaultFundingInterval) !== null && _g !== void 0 ? _g : "0";
        message.fundingMultiple = (_h = object.fundingMultiple) !== null && _h !== void 0 ? _h : "0";
        message.relayerFeeShareRate = (_j = object.relayerFeeShareRate) !== null && _j !== void 0 ? _j : "";
        message.defaultHourlyFundingRateCap = (_k = object.defaultHourlyFundingRateCap) !== null && _k !== void 0 ? _k : "";
        message.defaultHourlyInterestRate = (_l = object.defaultHourlyInterestRate) !== null && _l !== void 0 ? _l : "";
        message.maxDerivativeOrderSideCount = (_m = object.maxDerivativeOrderSideCount) !== null && _m !== void 0 ? _m : 0;
        message.injRewardStakedRequirementThreshold = (_o = object.injRewardStakedRequirementThreshold) !== null && _o !== void 0 ? _o : "";
        message.tradingRewardsVestingDuration = (_p = object.tradingRewardsVestingDuration) !== null && _p !== void 0 ? _p : "0";
        message.liquidatorRewardShareRate = (_q = object.liquidatorRewardShareRate) !== null && _q !== void 0 ? _q : "";
        message.binaryOptionsMarketInstantListingFee =
            (object.binaryOptionsMarketInstantListingFee !== undefined &&
                object.binaryOptionsMarketInstantListingFee !== null)
                ? Coin.fromPartial(object.binaryOptionsMarketInstantListingFee)
                : undefined;
        message.atomicMarketOrderAccessLevel = (_r = object.atomicMarketOrderAccessLevel) !== null && _r !== void 0 ? _r : 0;
        message.spotAtomicMarketOrderFeeMultiplier = (_s = object.spotAtomicMarketOrderFeeMultiplier) !== null && _s !== void 0 ? _s : "";
        message.derivativeAtomicMarketOrderFeeMultiplier = (_t = object.derivativeAtomicMarketOrderFeeMultiplier) !== null && _t !== void 0 ? _t : "";
        message.binaryOptionsAtomicMarketOrderFeeMultiplier = (_u = object.binaryOptionsAtomicMarketOrderFeeMultiplier) !== null && _u !== void 0 ? _u : "";
        message.minimalProtocolFeeRate = (_v = object.minimalProtocolFeeRate) !== null && _v !== void 0 ? _v : "";
        message.isInstantDerivativeMarketLaunchEnabled = (_w = object.isInstantDerivativeMarketLaunchEnabled) !== null && _w !== void 0 ? _w : false;
        return message;
    },
};
function createBaseMarketFeeMultiplier() {
    return { marketId: "", feeMultiplier: "" };
}
export const MarketFeeMultiplier = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.feeMultiplier !== "") {
            writer.uint32(18).string(message.feeMultiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketFeeMultiplier();
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
                    message.feeMultiplier = reader.string();
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
            feeMultiplier: isSet(object.feeMultiplier) ? String(object.feeMultiplier) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.feeMultiplier !== undefined && (obj.feeMultiplier = message.feeMultiplier);
        return obj;
    },
    create(base) {
        return MarketFeeMultiplier.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMarketFeeMultiplier();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.feeMultiplier = (_b = object.feeMultiplier) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDerivativeMarket() {
    return {
        ticker: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        quoteDenom: "",
        marketId: "",
        initialMarginRatio: "",
        maintenanceMarginRatio: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        isPerpetual: false,
        status: 0,
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const DerivativeMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.oracleBase !== "") {
            writer.uint32(18).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(26).string(message.oracleQuote);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(40).uint32(message.oracleScaleFactor);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(50).string(message.quoteDenom);
        }
        if (message.marketId !== "") {
            writer.uint32(58).string(message.marketId);
        }
        if (message.initialMarginRatio !== "") {
            writer.uint32(66).string(message.initialMarginRatio);
        }
        if (message.maintenanceMarginRatio !== "") {
            writer.uint32(74).string(message.maintenanceMarginRatio);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(82).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(90).string(message.takerFeeRate);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(98).string(message.relayerFeeShareRate);
        }
        if (message.isPerpetual === true) {
            writer.uint32(104).bool(message.isPerpetual);
        }
        if (message.status !== 0) {
            writer.uint32(112).int32(message.status);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(122).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(130).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.oracleBase = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.oracleQuote = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.initialMarginRatio = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.maintenanceMarginRatio = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.relayerFeeShareRate = reader.string();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.isPerpetual = reader.bool();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
            oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            initialMarginRatio: isSet(object.initialMarginRatio) ? String(object.initialMarginRatio) : "",
            maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
            isPerpetual: isSet(object.isPerpetual) ? Boolean(object.isPerpetual) : false,
            status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.oracleBase !== undefined && (obj.oracleBase = message.oracleBase);
        message.oracleQuote !== undefined && (obj.oracleQuote = message.oracleQuote);
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.initialMarginRatio !== undefined && (obj.initialMarginRatio = message.initialMarginRatio);
        message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.relayerFeeShareRate !== undefined && (obj.relayerFeeShareRate = message.relayerFeeShareRate);
        message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
        message.status !== undefined && (obj.status = marketStatusToJSON(message.status));
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return DerivativeMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseDerivativeMarket();
        message.ticker = (_a = object.ticker) !== null && _a !== void 0 ? _a : "";
        message.oracleBase = (_b = object.oracleBase) !== null && _b !== void 0 ? _b : "";
        message.oracleQuote = (_c = object.oracleQuote) !== null && _c !== void 0 ? _c : "";
        message.oracleType = (_d = object.oracleType) !== null && _d !== void 0 ? _d : 0;
        message.oracleScaleFactor = (_e = object.oracleScaleFactor) !== null && _e !== void 0 ? _e : 0;
        message.quoteDenom = (_f = object.quoteDenom) !== null && _f !== void 0 ? _f : "";
        message.marketId = (_g = object.marketId) !== null && _g !== void 0 ? _g : "";
        message.initialMarginRatio = (_h = object.initialMarginRatio) !== null && _h !== void 0 ? _h : "";
        message.maintenanceMarginRatio = (_j = object.maintenanceMarginRatio) !== null && _j !== void 0 ? _j : "";
        message.makerFeeRate = (_k = object.makerFeeRate) !== null && _k !== void 0 ? _k : "";
        message.takerFeeRate = (_l = object.takerFeeRate) !== null && _l !== void 0 ? _l : "";
        message.relayerFeeShareRate = (_m = object.relayerFeeShareRate) !== null && _m !== void 0 ? _m : "";
        message.isPerpetual = (_o = object.isPerpetual) !== null && _o !== void 0 ? _o : false;
        message.status = (_p = object.status) !== null && _p !== void 0 ? _p : 0;
        message.minPriceTickSize = (_q = object.minPriceTickSize) !== null && _q !== void 0 ? _q : "";
        message.minQuantityTickSize = (_r = object.minQuantityTickSize) !== null && _r !== void 0 ? _r : "";
        return message;
    },
};
function createBaseBinaryOptionsMarket() {
    return {
        ticker: "",
        oracleSymbol: "",
        oracleProvider: "",
        oracleType: 0,
        oracleScaleFactor: 0,
        expirationTimestamp: "0",
        settlementTimestamp: "0",
        admin: "",
        quoteDenom: "",
        marketId: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        status: 0,
        minPriceTickSize: "",
        minQuantityTickSize: "",
        settlementPrice: "",
    };
}
export const BinaryOptionsMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.oracleSymbol !== "") {
            writer.uint32(18).string(message.oracleSymbol);
        }
        if (message.oracleProvider !== "") {
            writer.uint32(26).string(message.oracleProvider);
        }
        if (message.oracleType !== 0) {
            writer.uint32(32).int32(message.oracleType);
        }
        if (message.oracleScaleFactor !== 0) {
            writer.uint32(40).uint32(message.oracleScaleFactor);
        }
        if (message.expirationTimestamp !== "0") {
            writer.uint32(48).int64(message.expirationTimestamp);
        }
        if (message.settlementTimestamp !== "0") {
            writer.uint32(56).int64(message.settlementTimestamp);
        }
        if (message.admin !== "") {
            writer.uint32(66).string(message.admin);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(74).string(message.quoteDenom);
        }
        if (message.marketId !== "") {
            writer.uint32(82).string(message.marketId);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(90).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(98).string(message.takerFeeRate);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(106).string(message.relayerFeeShareRate);
        }
        if (message.status !== 0) {
            writer.uint32(112).int32(message.status);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(122).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(130).string(message.minQuantityTickSize);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(138).string(message.settlementPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBinaryOptionsMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.oracleSymbol = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.oracleProvider = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oracleType = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.oracleScaleFactor = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.expirationTimestamp = longToString(reader.int64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.settlementTimestamp = longToString(reader.int64());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.relayerFeeShareRate = reader.string();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.settlementPrice = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            oracleSymbol: isSet(object.oracleSymbol) ? String(object.oracleSymbol) : "",
            oracleProvider: isSet(object.oracleProvider) ? String(object.oracleProvider) : "",
            oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
            oracleScaleFactor: isSet(object.oracleScaleFactor) ? Number(object.oracleScaleFactor) : 0,
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            settlementTimestamp: isSet(object.settlementTimestamp) ? String(object.settlementTimestamp) : "0",
            admin: isSet(object.admin) ? String(object.admin) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
            status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.oracleSymbol !== undefined && (obj.oracleSymbol = message.oracleSymbol);
        message.oracleProvider !== undefined && (obj.oracleProvider = message.oracleProvider);
        message.oracleType !== undefined && (obj.oracleType = oracleTypeToJSON(message.oracleType));
        message.oracleScaleFactor !== undefined && (obj.oracleScaleFactor = Math.round(message.oracleScaleFactor));
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.settlementTimestamp !== undefined && (obj.settlementTimestamp = message.settlementTimestamp);
        message.admin !== undefined && (obj.admin = message.admin);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.relayerFeeShareRate !== undefined && (obj.relayerFeeShareRate = message.relayerFeeShareRate);
        message.status !== undefined && (obj.status = marketStatusToJSON(message.status));
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        return obj;
    },
    create(base) {
        return BinaryOptionsMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseBinaryOptionsMarket();
        message.ticker = (_a = object.ticker) !== null && _a !== void 0 ? _a : "";
        message.oracleSymbol = (_b = object.oracleSymbol) !== null && _b !== void 0 ? _b : "";
        message.oracleProvider = (_c = object.oracleProvider) !== null && _c !== void 0 ? _c : "";
        message.oracleType = (_d = object.oracleType) !== null && _d !== void 0 ? _d : 0;
        message.oracleScaleFactor = (_e = object.oracleScaleFactor) !== null && _e !== void 0 ? _e : 0;
        message.expirationTimestamp = (_f = object.expirationTimestamp) !== null && _f !== void 0 ? _f : "0";
        message.settlementTimestamp = (_g = object.settlementTimestamp) !== null && _g !== void 0 ? _g : "0";
        message.admin = (_h = object.admin) !== null && _h !== void 0 ? _h : "";
        message.quoteDenom = (_j = object.quoteDenom) !== null && _j !== void 0 ? _j : "";
        message.marketId = (_k = object.marketId) !== null && _k !== void 0 ? _k : "";
        message.makerFeeRate = (_l = object.makerFeeRate) !== null && _l !== void 0 ? _l : "";
        message.takerFeeRate = (_m = object.takerFeeRate) !== null && _m !== void 0 ? _m : "";
        message.relayerFeeShareRate = (_o = object.relayerFeeShareRate) !== null && _o !== void 0 ? _o : "";
        message.status = (_p = object.status) !== null && _p !== void 0 ? _p : 0;
        message.minPriceTickSize = (_q = object.minPriceTickSize) !== null && _q !== void 0 ? _q : "";
        message.minQuantityTickSize = (_r = object.minQuantityTickSize) !== null && _r !== void 0 ? _r : "";
        message.settlementPrice = (_s = object.settlementPrice) !== null && _s !== void 0 ? _s : "";
        return message;
    },
};
function createBaseExpiryFuturesMarketInfo() {
    return {
        marketId: "",
        expirationTimestamp: "0",
        twapStartTimestamp: "0",
        expirationTwapStartPriceCumulative: "",
        settlementPrice: "",
    };
}
export const ExpiryFuturesMarketInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.expirationTimestamp !== "0") {
            writer.uint32(16).int64(message.expirationTimestamp);
        }
        if (message.twapStartTimestamp !== "0") {
            writer.uint32(24).int64(message.twapStartTimestamp);
        }
        if (message.expirationTwapStartPriceCumulative !== "") {
            writer.uint32(34).string(message.expirationTwapStartPriceCumulative);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(42).string(message.settlementPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExpiryFuturesMarketInfo();
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
                    message.expirationTimestamp = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.twapStartTimestamp = longToString(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.expirationTwapStartPriceCumulative = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.settlementPrice = reader.string();
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
            expirationTimestamp: isSet(object.expirationTimestamp) ? String(object.expirationTimestamp) : "0",
            twapStartTimestamp: isSet(object.twapStartTimestamp) ? String(object.twapStartTimestamp) : "0",
            expirationTwapStartPriceCumulative: isSet(object.expirationTwapStartPriceCumulative)
                ? String(object.expirationTwapStartPriceCumulative)
                : "",
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.expirationTimestamp !== undefined && (obj.expirationTimestamp = message.expirationTimestamp);
        message.twapStartTimestamp !== undefined && (obj.twapStartTimestamp = message.twapStartTimestamp);
        message.expirationTwapStartPriceCumulative !== undefined &&
            (obj.expirationTwapStartPriceCumulative = message.expirationTwapStartPriceCumulative);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        return obj;
    },
    create(base) {
        return ExpiryFuturesMarketInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseExpiryFuturesMarketInfo();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.expirationTimestamp = (_b = object.expirationTimestamp) !== null && _b !== void 0 ? _b : "0";
        message.twapStartTimestamp = (_c = object.twapStartTimestamp) !== null && _c !== void 0 ? _c : "0";
        message.expirationTwapStartPriceCumulative = (_d = object.expirationTwapStartPriceCumulative) !== null && _d !== void 0 ? _d : "";
        message.settlementPrice = (_e = object.settlementPrice) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBasePerpetualMarketInfo() {
    return {
        marketId: "",
        hourlyFundingRateCap: "",
        hourlyInterestRate: "",
        nextFundingTimestamp: "0",
        fundingInterval: "0",
    };
}
export const PerpetualMarketInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.hourlyFundingRateCap !== "") {
            writer.uint32(18).string(message.hourlyFundingRateCap);
        }
        if (message.hourlyInterestRate !== "") {
            writer.uint32(26).string(message.hourlyInterestRate);
        }
        if (message.nextFundingTimestamp !== "0") {
            writer.uint32(32).int64(message.nextFundingTimestamp);
        }
        if (message.fundingInterval !== "0") {
            writer.uint32(40).int64(message.fundingInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketInfo();
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
                    message.hourlyFundingRateCap = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.hourlyInterestRate = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.nextFundingTimestamp = longToString(reader.int64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.fundingInterval = longToString(reader.int64());
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
            hourlyFundingRateCap: isSet(object.hourlyFundingRateCap) ? String(object.hourlyFundingRateCap) : "",
            hourlyInterestRate: isSet(object.hourlyInterestRate) ? String(object.hourlyInterestRate) : "",
            nextFundingTimestamp: isSet(object.nextFundingTimestamp) ? String(object.nextFundingTimestamp) : "0",
            fundingInterval: isSet(object.fundingInterval) ? String(object.fundingInterval) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.hourlyFundingRateCap !== undefined && (obj.hourlyFundingRateCap = message.hourlyFundingRateCap);
        message.hourlyInterestRate !== undefined && (obj.hourlyInterestRate = message.hourlyInterestRate);
        message.nextFundingTimestamp !== undefined && (obj.nextFundingTimestamp = message.nextFundingTimestamp);
        message.fundingInterval !== undefined && (obj.fundingInterval = message.fundingInterval);
        return obj;
    },
    create(base) {
        return PerpetualMarketInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePerpetualMarketInfo();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.hourlyFundingRateCap = (_b = object.hourlyFundingRateCap) !== null && _b !== void 0 ? _b : "";
        message.hourlyInterestRate = (_c = object.hourlyInterestRate) !== null && _c !== void 0 ? _c : "";
        message.nextFundingTimestamp = (_d = object.nextFundingTimestamp) !== null && _d !== void 0 ? _d : "0";
        message.fundingInterval = (_e = object.fundingInterval) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBasePerpetualMarketFunding() {
    return { cumulativeFunding: "", cumulativePrice: "", lastTimestamp: "0" };
}
export const PerpetualMarketFunding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cumulativeFunding !== "") {
            writer.uint32(10).string(message.cumulativeFunding);
        }
        if (message.cumulativePrice !== "") {
            writer.uint32(18).string(message.cumulativePrice);
        }
        if (message.lastTimestamp !== "0") {
            writer.uint32(24).int64(message.lastTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerpetualMarketFunding();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cumulativeFunding = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.cumulativePrice = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lastTimestamp = longToString(reader.int64());
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
            cumulativeFunding: isSet(object.cumulativeFunding) ? String(object.cumulativeFunding) : "",
            cumulativePrice: isSet(object.cumulativePrice) ? String(object.cumulativePrice) : "",
            lastTimestamp: isSet(object.lastTimestamp) ? String(object.lastTimestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.cumulativeFunding !== undefined && (obj.cumulativeFunding = message.cumulativeFunding);
        message.cumulativePrice !== undefined && (obj.cumulativePrice = message.cumulativePrice);
        message.lastTimestamp !== undefined && (obj.lastTimestamp = message.lastTimestamp);
        return obj;
    },
    create(base) {
        return PerpetualMarketFunding.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePerpetualMarketFunding();
        message.cumulativeFunding = (_a = object.cumulativeFunding) !== null && _a !== void 0 ? _a : "";
        message.cumulativePrice = (_b = object.cumulativePrice) !== null && _b !== void 0 ? _b : "";
        message.lastTimestamp = (_c = object.lastTimestamp) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseDerivativeMarketSettlementInfo() {
    return { marketId: "", settlementPrice: "" };
}
export const DerivativeMarketSettlementInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.settlementPrice !== "") {
            writer.uint32(18).string(message.settlementPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketSettlementInfo();
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
                    message.settlementPrice = reader.string();
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
            settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
        return obj;
    },
    create(base) {
        return DerivativeMarketSettlementInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDerivativeMarketSettlementInfo();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.settlementPrice = (_b = object.settlementPrice) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseNextFundingTimestamp() {
    return { nextTimestamp: "0" };
}
export const NextFundingTimestamp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextTimestamp !== "0") {
            writer.uint32(8).int64(message.nextTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextFundingTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nextTimestamp = longToString(reader.int64());
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
        return { nextTimestamp: isSet(object.nextTimestamp) ? String(object.nextTimestamp) : "0" };
    },
    toJSON(message) {
        const obj = {};
        message.nextTimestamp !== undefined && (obj.nextTimestamp = message.nextTimestamp);
        return obj;
    },
    create(base) {
        return NextFundingTimestamp.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNextFundingTimestamp();
        message.nextTimestamp = (_a = object.nextTimestamp) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseMidPriceAndTOB() {
    return { midPrice: "", bestBuyPrice: "", bestSellPrice: "" };
}
export const MidPriceAndTOB = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.midPrice !== "") {
            writer.uint32(10).string(message.midPrice);
        }
        if (message.bestBuyPrice !== "") {
            writer.uint32(18).string(message.bestBuyPrice);
        }
        if (message.bestSellPrice !== "") {
            writer.uint32(26).string(message.bestSellPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMidPriceAndTOB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.midPrice = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bestBuyPrice = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bestSellPrice = reader.string();
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
            midPrice: isSet(object.midPrice) ? String(object.midPrice) : "",
            bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : "",
            bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.midPrice !== undefined && (obj.midPrice = message.midPrice);
        message.bestBuyPrice !== undefined && (obj.bestBuyPrice = message.bestBuyPrice);
        message.bestSellPrice !== undefined && (obj.bestSellPrice = message.bestSellPrice);
        return obj;
    },
    create(base) {
        return MidPriceAndTOB.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMidPriceAndTOB();
        message.midPrice = (_a = object.midPrice) !== null && _a !== void 0 ? _a : "";
        message.bestBuyPrice = (_b = object.bestBuyPrice) !== null && _b !== void 0 ? _b : "";
        message.bestSellPrice = (_c = object.bestSellPrice) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseSpotMarket() {
    return {
        ticker: "",
        baseDenom: "",
        quoteDenom: "",
        makerFeeRate: "",
        takerFeeRate: "",
        relayerFeeShareRate: "",
        marketId: "",
        status: 0,
        minPriceTickSize: "",
        minQuantityTickSize: "",
    };
}
export const SpotMarket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ticker !== "") {
            writer.uint32(10).string(message.ticker);
        }
        if (message.baseDenom !== "") {
            writer.uint32(18).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        if (message.makerFeeRate !== "") {
            writer.uint32(34).string(message.makerFeeRate);
        }
        if (message.takerFeeRate !== "") {
            writer.uint32(42).string(message.takerFeeRate);
        }
        if (message.relayerFeeShareRate !== "") {
            writer.uint32(50).string(message.relayerFeeShareRate);
        }
        if (message.marketId !== "") {
            writer.uint32(58).string(message.marketId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.minPriceTickSize !== "") {
            writer.uint32(74).string(message.minPriceTickSize);
        }
        if (message.minQuantityTickSize !== "") {
            writer.uint32(82).string(message.minQuantityTickSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.baseDenom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.makerFeeRate = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.takerFeeRate = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.relayerFeeShareRate = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.minPriceTickSize = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.minQuantityTickSize = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            makerFeeRate: isSet(object.makerFeeRate) ? String(object.makerFeeRate) : "",
            takerFeeRate: isSet(object.takerFeeRate) ? String(object.takerFeeRate) : "",
            relayerFeeShareRate: isSet(object.relayerFeeShareRate) ? String(object.relayerFeeShareRate) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            status: isSet(object.status) ? marketStatusFromJSON(object.status) : 0,
            minPriceTickSize: isSet(object.minPriceTickSize) ? String(object.minPriceTickSize) : "",
            minQuantityTickSize: isSet(object.minQuantityTickSize) ? String(object.minQuantityTickSize) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.makerFeeRate !== undefined && (obj.makerFeeRate = message.makerFeeRate);
        message.takerFeeRate !== undefined && (obj.takerFeeRate = message.takerFeeRate);
        message.relayerFeeShareRate !== undefined && (obj.relayerFeeShareRate = message.relayerFeeShareRate);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.status !== undefined && (obj.status = marketStatusToJSON(message.status));
        message.minPriceTickSize !== undefined && (obj.minPriceTickSize = message.minPriceTickSize);
        message.minQuantityTickSize !== undefined && (obj.minQuantityTickSize = message.minQuantityTickSize);
        return obj;
    },
    create(base) {
        return SpotMarket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseSpotMarket();
        message.ticker = (_a = object.ticker) !== null && _a !== void 0 ? _a : "";
        message.baseDenom = (_b = object.baseDenom) !== null && _b !== void 0 ? _b : "";
        message.quoteDenom = (_c = object.quoteDenom) !== null && _c !== void 0 ? _c : "";
        message.makerFeeRate = (_d = object.makerFeeRate) !== null && _d !== void 0 ? _d : "";
        message.takerFeeRate = (_e = object.takerFeeRate) !== null && _e !== void 0 ? _e : "";
        message.relayerFeeShareRate = (_f = object.relayerFeeShareRate) !== null && _f !== void 0 ? _f : "";
        message.marketId = (_g = object.marketId) !== null && _g !== void 0 ? _g : "";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : 0;
        message.minPriceTickSize = (_j = object.minPriceTickSize) !== null && _j !== void 0 ? _j : "";
        message.minQuantityTickSize = (_k = object.minQuantityTickSize) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseDeposit() {
    return { availableBalance: "", totalBalance: "" };
}
export const Deposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.availableBalance !== "") {
            writer.uint32(10).string(message.availableBalance);
        }
        if (message.totalBalance !== "") {
            writer.uint32(18).string(message.totalBalance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.availableBalance = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.totalBalance = reader.string();
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
            availableBalance: isSet(object.availableBalance) ? String(object.availableBalance) : "",
            totalBalance: isSet(object.totalBalance) ? String(object.totalBalance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.availableBalance !== undefined && (obj.availableBalance = message.availableBalance);
        message.totalBalance !== undefined && (obj.totalBalance = message.totalBalance);
        return obj;
    },
    create(base) {
        return Deposit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeposit();
        message.availableBalance = (_a = object.availableBalance) !== null && _a !== void 0 ? _a : "";
        message.totalBalance = (_b = object.totalBalance) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseSubaccountTradeNonce() {
    return { nonce: 0 };
}
export const SubaccountTradeNonce = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint32(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountTradeNonce();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nonce = reader.uint32();
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
        return { nonce: isSet(object.nonce) ? Number(object.nonce) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
        return obj;
    },
    create(base) {
        return SubaccountTradeNonce.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountTradeNonce();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseOrderInfo() {
    return { subaccountId: "", feeRecipient: "", price: "", quantity: "" };
}
export const OrderInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        if (message.feeRecipient !== "") {
            writer.uint32(18).string(message.feeRecipient);
        }
        if (message.price !== "") {
            writer.uint32(26).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(34).string(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderInfo();
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
                    message.feeRecipient = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.quantity = reader.string();
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
            feeRecipient: isSet(object.feeRecipient) ? String(object.feeRecipient) : "",
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        message.feeRecipient !== undefined && (obj.feeRecipient = message.feeRecipient);
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        return obj;
    },
    create(base) {
        return OrderInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOrderInfo();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.feeRecipient = (_b = object.feeRecipient) !== null && _b !== void 0 ? _b : "";
        message.price = (_c = object.price) !== null && _c !== void 0 ? _c : "";
        message.quantity = (_d = object.quantity) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseSpotOrder() {
    return { marketId: "", orderInfo: undefined, orderType: 0, triggerPrice: "" };
}
export const SpotOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(24).int32(message.orderType);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(34).string(message.triggerPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotOrder();
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
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.triggerPrice = reader.string();
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
            orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderInfo !== undefined &&
            (obj.orderInfo = message.orderInfo ? OrderInfo.toJSON(message.orderInfo) : undefined);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        return obj;
    },
    create(base) {
        return SpotOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSpotOrder();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderInfo = (object.orderInfo !== undefined && object.orderInfo !== null)
            ? OrderInfo.fromPartial(object.orderInfo)
            : undefined;
        message.orderType = (_b = object.orderType) !== null && _b !== void 0 ? _b : 0;
        message.triggerPrice = (_c = object.triggerPrice) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseSpotLimitOrder() {
    return { orderInfo: undefined, orderType: 0, fillable: "", triggerPrice: "", orderHash: new Uint8Array() };
}
export const SpotLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(16).int32(message.orderType);
        }
        if (message.fillable !== "") {
            writer.uint32(26).string(message.fillable);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(34).string(message.triggerPrice);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(42).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fillable = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.triggerPrice = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.orderHash = reader.bytes();
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
            orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            fillable: isSet(object.fillable) ? String(object.fillable) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
            orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderInfo !== undefined &&
            (obj.orderInfo = message.orderInfo ? OrderInfo.toJSON(message.orderInfo) : undefined);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.fillable !== undefined && (obj.fillable = message.fillable);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        message.orderHash !== undefined &&
            (obj.orderHash = base64FromBytes(message.orderHash !== undefined ? message.orderHash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return SpotLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSpotLimitOrder();
        message.orderInfo = (object.orderInfo !== undefined && object.orderInfo !== null)
            ? OrderInfo.fromPartial(object.orderInfo)
            : undefined;
        message.orderType = (_a = object.orderType) !== null && _a !== void 0 ? _a : 0;
        message.fillable = (_b = object.fillable) !== null && _b !== void 0 ? _b : "";
        message.triggerPrice = (_c = object.triggerPrice) !== null && _c !== void 0 ? _c : "";
        message.orderHash = (_d = object.orderHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseSpotMarketOrder() {
    return { orderInfo: undefined, balanceHold: "", orderHash: new Uint8Array(), orderType: 0, triggerPrice: "" };
}
export const SpotMarketOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.balanceHold !== "") {
            writer.uint32(18).string(message.balanceHold);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(26).bytes(message.orderHash);
        }
        if (message.orderType !== 0) {
            writer.uint32(32).int32(message.orderType);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(42).string(message.triggerPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpotMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.balanceHold = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orderHash = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.triggerPrice = reader.string();
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
            orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
            balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : "",
            orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderInfo !== undefined &&
            (obj.orderInfo = message.orderInfo ? OrderInfo.toJSON(message.orderInfo) : undefined);
        message.balanceHold !== undefined && (obj.balanceHold = message.balanceHold);
        message.orderHash !== undefined &&
            (obj.orderHash = base64FromBytes(message.orderHash !== undefined ? message.orderHash : new Uint8Array()));
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        return obj;
    },
    create(base) {
        return SpotMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSpotMarketOrder();
        message.orderInfo = (object.orderInfo !== undefined && object.orderInfo !== null)
            ? OrderInfo.fromPartial(object.orderInfo)
            : undefined;
        message.balanceHold = (_a = object.balanceHold) !== null && _a !== void 0 ? _a : "";
        message.orderHash = (_b = object.orderHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.orderType = (_c = object.orderType) !== null && _c !== void 0 ? _c : 0;
        message.triggerPrice = (_d = object.triggerPrice) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseDerivativeOrder() {
    return { marketId: "", orderInfo: undefined, orderType: 0, margin: "", triggerPrice: "" };
}
export const DerivativeOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(24).int32(message.orderType);
        }
        if (message.margin !== "") {
            writer.uint32(34).string(message.margin);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(42).string(message.triggerPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeOrder();
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
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.margin = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.triggerPrice = reader.string();
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
            orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            margin: isSet(object.margin) ? String(object.margin) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.orderInfo !== undefined &&
            (obj.orderInfo = message.orderInfo ? OrderInfo.toJSON(message.orderInfo) : undefined);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.margin !== undefined && (obj.margin = message.margin);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        return obj;
    },
    create(base) {
        return DerivativeOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDerivativeOrder();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.orderInfo = (object.orderInfo !== undefined && object.orderInfo !== null)
            ? OrderInfo.fromPartial(object.orderInfo)
            : undefined;
        message.orderType = (_b = object.orderType) !== null && _b !== void 0 ? _b : 0;
        message.margin = (_c = object.margin) !== null && _c !== void 0 ? _c : "";
        message.triggerPrice = (_d = object.triggerPrice) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseSubaccountOrderbookMetadata() {
    return {
        vanillaLimitOrderCount: 0,
        reduceOnlyLimitOrderCount: 0,
        aggregateReduceOnlyQuantity: "",
        aggregateVanillaQuantity: "",
        vanillaConditionalOrderCount: 0,
        reduceOnlyConditionalOrderCount: 0,
    };
}
export const SubaccountOrderbookMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vanillaLimitOrderCount !== 0) {
            writer.uint32(8).uint32(message.vanillaLimitOrderCount);
        }
        if (message.reduceOnlyLimitOrderCount !== 0) {
            writer.uint32(16).uint32(message.reduceOnlyLimitOrderCount);
        }
        if (message.aggregateReduceOnlyQuantity !== "") {
            writer.uint32(26).string(message.aggregateReduceOnlyQuantity);
        }
        if (message.aggregateVanillaQuantity !== "") {
            writer.uint32(34).string(message.aggregateVanillaQuantity);
        }
        if (message.vanillaConditionalOrderCount !== 0) {
            writer.uint32(40).uint32(message.vanillaConditionalOrderCount);
        }
        if (message.reduceOnlyConditionalOrderCount !== 0) {
            writer.uint32(48).uint32(message.reduceOnlyConditionalOrderCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderbookMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.vanillaLimitOrderCount = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.reduceOnlyLimitOrderCount = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.aggregateReduceOnlyQuantity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.aggregateVanillaQuantity = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.vanillaConditionalOrderCount = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.reduceOnlyConditionalOrderCount = reader.uint32();
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
            vanillaLimitOrderCount: isSet(object.vanillaLimitOrderCount) ? Number(object.vanillaLimitOrderCount) : 0,
            reduceOnlyLimitOrderCount: isSet(object.reduceOnlyLimitOrderCount) ? Number(object.reduceOnlyLimitOrderCount) : 0,
            aggregateReduceOnlyQuantity: isSet(object.aggregateReduceOnlyQuantity)
                ? String(object.aggregateReduceOnlyQuantity)
                : "",
            aggregateVanillaQuantity: isSet(object.aggregateVanillaQuantity) ? String(object.aggregateVanillaQuantity) : "",
            vanillaConditionalOrderCount: isSet(object.vanillaConditionalOrderCount)
                ? Number(object.vanillaConditionalOrderCount)
                : 0,
            reduceOnlyConditionalOrderCount: isSet(object.reduceOnlyConditionalOrderCount)
                ? Number(object.reduceOnlyConditionalOrderCount)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vanillaLimitOrderCount !== undefined &&
            (obj.vanillaLimitOrderCount = Math.round(message.vanillaLimitOrderCount));
        message.reduceOnlyLimitOrderCount !== undefined &&
            (obj.reduceOnlyLimitOrderCount = Math.round(message.reduceOnlyLimitOrderCount));
        message.aggregateReduceOnlyQuantity !== undefined &&
            (obj.aggregateReduceOnlyQuantity = message.aggregateReduceOnlyQuantity);
        message.aggregateVanillaQuantity !== undefined && (obj.aggregateVanillaQuantity = message.aggregateVanillaQuantity);
        message.vanillaConditionalOrderCount !== undefined &&
            (obj.vanillaConditionalOrderCount = Math.round(message.vanillaConditionalOrderCount));
        message.reduceOnlyConditionalOrderCount !== undefined &&
            (obj.reduceOnlyConditionalOrderCount = Math.round(message.reduceOnlyConditionalOrderCount));
        return obj;
    },
    create(base) {
        return SubaccountOrderbookMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSubaccountOrderbookMetadata();
        message.vanillaLimitOrderCount = (_a = object.vanillaLimitOrderCount) !== null && _a !== void 0 ? _a : 0;
        message.reduceOnlyLimitOrderCount = (_b = object.reduceOnlyLimitOrderCount) !== null && _b !== void 0 ? _b : 0;
        message.aggregateReduceOnlyQuantity = (_c = object.aggregateReduceOnlyQuantity) !== null && _c !== void 0 ? _c : "";
        message.aggregateVanillaQuantity = (_d = object.aggregateVanillaQuantity) !== null && _d !== void 0 ? _d : "";
        message.vanillaConditionalOrderCount = (_e = object.vanillaConditionalOrderCount) !== null && _e !== void 0 ? _e : 0;
        message.reduceOnlyConditionalOrderCount = (_f = object.reduceOnlyConditionalOrderCount) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseSubaccountOrder() {
    return { price: "", quantity: "", isReduceOnly: false };
}
export const SubaccountOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.isReduceOnly === true) {
            writer.uint32(24).bool(message.isReduceOnly);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isReduceOnly = reader.bool();
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
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            isReduceOnly: isSet(object.isReduceOnly) ? Boolean(object.isReduceOnly) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.isReduceOnly !== undefined && (obj.isReduceOnly = message.isReduceOnly);
        return obj;
    },
    create(base) {
        return SubaccountOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSubaccountOrder();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.isReduceOnly = (_c = object.isReduceOnly) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseSubaccountOrderData() {
    return { order: undefined, orderHash: new Uint8Array() };
}
export const SubaccountOrderData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            SubaccountOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(18).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountOrderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.order = SubaccountOrder.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orderHash = reader.bytes();
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
            order: isSet(object.order) ? SubaccountOrder.fromJSON(object.order) : undefined,
            orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.order !== undefined && (obj.order = message.order ? SubaccountOrder.toJSON(message.order) : undefined);
        message.orderHash !== undefined &&
            (obj.orderHash = base64FromBytes(message.orderHash !== undefined ? message.orderHash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return SubaccountOrderData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountOrderData();
        message.order = (object.order !== undefined && object.order !== null)
            ? SubaccountOrder.fromPartial(object.order)
            : undefined;
        message.orderHash = (_a = object.orderHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseDerivativeLimitOrder() {
    return {
        orderInfo: undefined,
        orderType: 0,
        margin: "",
        fillable: "",
        triggerPrice: "",
        orderHash: new Uint8Array(),
    };
}
export const DerivativeLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(16).int32(message.orderType);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(message.margin);
        }
        if (message.fillable !== "") {
            writer.uint32(34).string(message.fillable);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(42).string(message.triggerPrice);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(50).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.margin = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.fillable = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.triggerPrice = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.orderHash = reader.bytes();
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
            orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            margin: isSet(object.margin) ? String(object.margin) : "",
            fillable: isSet(object.fillable) ? String(object.fillable) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
            orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderInfo !== undefined &&
            (obj.orderInfo = message.orderInfo ? OrderInfo.toJSON(message.orderInfo) : undefined);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.margin !== undefined && (obj.margin = message.margin);
        message.fillable !== undefined && (obj.fillable = message.fillable);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        message.orderHash !== undefined &&
            (obj.orderHash = base64FromBytes(message.orderHash !== undefined ? message.orderHash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return DerivativeLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDerivativeLimitOrder();
        message.orderInfo = (object.orderInfo !== undefined && object.orderInfo !== null)
            ? OrderInfo.fromPartial(object.orderInfo)
            : undefined;
        message.orderType = (_a = object.orderType) !== null && _a !== void 0 ? _a : 0;
        message.margin = (_b = object.margin) !== null && _b !== void 0 ? _b : "";
        message.fillable = (_c = object.fillable) !== null && _c !== void 0 ? _c : "";
        message.triggerPrice = (_d = object.triggerPrice) !== null && _d !== void 0 ? _d : "";
        message.orderHash = (_e = object.orderHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseDerivativeMarketOrder() {
    return {
        orderInfo: undefined,
        orderType: 0,
        margin: "",
        marginHold: "",
        triggerPrice: "",
        orderHash: new Uint8Array(),
    };
}
export const DerivativeMarketOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderInfo !== undefined) {
            OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(16).int32(message.orderType);
        }
        if (message.margin !== "") {
            writer.uint32(26).string(message.margin);
        }
        if (message.marginHold !== "") {
            writer.uint32(34).string(message.marginHold);
        }
        if (message.triggerPrice !== "") {
            writer.uint32(42).string(message.triggerPrice);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(50).bytes(message.orderHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orderInfo = OrderInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.orderType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.margin = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.marginHold = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.triggerPrice = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.orderHash = reader.bytes();
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
            orderInfo: isSet(object.orderInfo) ? OrderInfo.fromJSON(object.orderInfo) : undefined,
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            margin: isSet(object.margin) ? String(object.margin) : "",
            marginHold: isSet(object.marginHold) ? String(object.marginHold) : "",
            triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
            orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderInfo !== undefined &&
            (obj.orderInfo = message.orderInfo ? OrderInfo.toJSON(message.orderInfo) : undefined);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.margin !== undefined && (obj.margin = message.margin);
        message.marginHold !== undefined && (obj.marginHold = message.marginHold);
        message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
        message.orderHash !== undefined &&
            (obj.orderHash = base64FromBytes(message.orderHash !== undefined ? message.orderHash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return DerivativeMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDerivativeMarketOrder();
        message.orderInfo = (object.orderInfo !== undefined && object.orderInfo !== null)
            ? OrderInfo.fromPartial(object.orderInfo)
            : undefined;
        message.orderType = (_a = object.orderType) !== null && _a !== void 0 ? _a : 0;
        message.margin = (_b = object.margin) !== null && _b !== void 0 ? _b : "";
        message.marginHold = (_c = object.marginHold) !== null && _c !== void 0 ? _c : "";
        message.triggerPrice = (_d = object.triggerPrice) !== null && _d !== void 0 ? _d : "";
        message.orderHash = (_e = object.orderHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBasePosition() {
    return { isLong: false, quantity: "", entryPrice: "", margin: "", cumulativeFundingEntry: "" };
}
export const Position = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isLong === true) {
            writer.uint32(8).bool(message.isLong);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.entryPrice !== "") {
            writer.uint32(26).string(message.entryPrice);
        }
        if (message.margin !== "") {
            writer.uint32(34).string(message.margin);
        }
        if (message.cumulativeFundingEntry !== "") {
            writer.uint32(42).string(message.cumulativeFundingEntry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isLong = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.entryPrice = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.margin = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.cumulativeFundingEntry = reader.string();
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
            isLong: isSet(object.isLong) ? Boolean(object.isLong) : false,
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            entryPrice: isSet(object.entryPrice) ? String(object.entryPrice) : "",
            margin: isSet(object.margin) ? String(object.margin) : "",
            cumulativeFundingEntry: isSet(object.cumulativeFundingEntry) ? String(object.cumulativeFundingEntry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.isLong !== undefined && (obj.isLong = message.isLong);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.entryPrice !== undefined && (obj.entryPrice = message.entryPrice);
        message.margin !== undefined && (obj.margin = message.margin);
        message.cumulativeFundingEntry !== undefined && (obj.cumulativeFundingEntry = message.cumulativeFundingEntry);
        return obj;
    },
    create(base) {
        return Position.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePosition();
        message.isLong = (_a = object.isLong) !== null && _a !== void 0 ? _a : false;
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : "";
        message.entryPrice = (_c = object.entryPrice) !== null && _c !== void 0 ? _c : "";
        message.margin = (_d = object.margin) !== null && _d !== void 0 ? _d : "";
        message.cumulativeFundingEntry = (_e = object.cumulativeFundingEntry) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMarketOrderIndicator() {
    return { marketId: "", isBuy: false };
}
export const MarketOrderIndicator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.isBuy === true) {
            writer.uint32(16).bool(message.isBuy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketOrderIndicator();
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
                    message.isBuy = reader.bool();
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
            isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.isBuy !== undefined && (obj.isBuy = message.isBuy);
        return obj;
    },
    create(base) {
        return MarketOrderIndicator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMarketOrderIndicator();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.isBuy = (_b = object.isBuy) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseTradeLog() {
    return {
        quantity: "",
        price: "",
        subaccountId: new Uint8Array(),
        fee: "",
        orderHash: new Uint8Array(),
        feeRecipientAddress: new Uint8Array(),
    };
}
export const TradeLog = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.quantity !== "") {
            writer.uint32(10).string(message.quantity);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(26).bytes(message.subaccountId);
        }
        if (message.fee !== "") {
            writer.uint32(34).string(message.fee);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(42).bytes(message.orderHash);
        }
        if (message.feeRecipientAddress.length !== 0) {
            writer.uint32(50).bytes(message.feeRecipientAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.subaccountId = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.fee = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.orderHash = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.feeRecipientAddress = reader.bytes();
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
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
            price: isSet(object.price) ? String(object.price) : "",
            subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
            fee: isSet(object.fee) ? String(object.fee) : "",
            orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
            feeRecipientAddress: isSet(object.feeRecipientAddress)
                ? bytesFromBase64(object.feeRecipientAddress)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.price !== undefined && (obj.price = message.price);
        message.subaccountId !== undefined &&
            (obj.subaccountId = base64FromBytes(message.subaccountId !== undefined ? message.subaccountId : new Uint8Array()));
        message.fee !== undefined && (obj.fee = message.fee);
        message.orderHash !== undefined &&
            (obj.orderHash = base64FromBytes(message.orderHash !== undefined ? message.orderHash : new Uint8Array()));
        message.feeRecipientAddress !== undefined &&
            (obj.feeRecipientAddress = base64FromBytes(message.feeRecipientAddress !== undefined ? message.feeRecipientAddress : new Uint8Array()));
        return obj;
    },
    create(base) {
        return TradeLog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseTradeLog();
        message.quantity = (_a = object.quantity) !== null && _a !== void 0 ? _a : "";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        message.subaccountId = (_c = object.subaccountId) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.fee = (_d = object.fee) !== null && _d !== void 0 ? _d : "";
        message.orderHash = (_e = object.orderHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.feeRecipientAddress = (_f = object.feeRecipientAddress) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    },
};
function createBasePositionDelta() {
    return { isLong: false, executionQuantity: "", executionMargin: "", executionPrice: "" };
}
export const PositionDelta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isLong === true) {
            writer.uint32(8).bool(message.isLong);
        }
        if (message.executionQuantity !== "") {
            writer.uint32(18).string(message.executionQuantity);
        }
        if (message.executionMargin !== "") {
            writer.uint32(26).string(message.executionMargin);
        }
        if (message.executionPrice !== "") {
            writer.uint32(34).string(message.executionPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionDelta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isLong = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.executionQuantity = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.executionMargin = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.executionPrice = reader.string();
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
            isLong: isSet(object.isLong) ? Boolean(object.isLong) : false,
            executionQuantity: isSet(object.executionQuantity) ? String(object.executionQuantity) : "",
            executionMargin: isSet(object.executionMargin) ? String(object.executionMargin) : "",
            executionPrice: isSet(object.executionPrice) ? String(object.executionPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.isLong !== undefined && (obj.isLong = message.isLong);
        message.executionQuantity !== undefined && (obj.executionQuantity = message.executionQuantity);
        message.executionMargin !== undefined && (obj.executionMargin = message.executionMargin);
        message.executionPrice !== undefined && (obj.executionPrice = message.executionPrice);
        return obj;
    },
    create(base) {
        return PositionDelta.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePositionDelta();
        message.isLong = (_a = object.isLong) !== null && _a !== void 0 ? _a : false;
        message.executionQuantity = (_b = object.executionQuantity) !== null && _b !== void 0 ? _b : "";
        message.executionMargin = (_c = object.executionMargin) !== null && _c !== void 0 ? _c : "";
        message.executionPrice = (_d = object.executionPrice) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseDerivativeTradeLog() {
    return {
        subaccountId: new Uint8Array(),
        positionDelta: undefined,
        payout: "",
        fee: "",
        orderHash: new Uint8Array(),
        feeRecipientAddress: new Uint8Array(),
    };
}
export const DerivativeTradeLog = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId.length !== 0) {
            writer.uint32(10).bytes(message.subaccountId);
        }
        if (message.positionDelta !== undefined) {
            PositionDelta.encode(message.positionDelta, writer.uint32(18).fork()).ldelim();
        }
        if (message.payout !== "") {
            writer.uint32(26).string(message.payout);
        }
        if (message.fee !== "") {
            writer.uint32(34).string(message.fee);
        }
        if (message.orderHash.length !== 0) {
            writer.uint32(42).bytes(message.orderHash);
        }
        if (message.feeRecipientAddress.length !== 0) {
            writer.uint32(50).bytes(message.feeRecipientAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDerivativeTradeLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.positionDelta = PositionDelta.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.payout = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.fee = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.orderHash = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.feeRecipientAddress = reader.bytes();
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
            subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
            positionDelta: isSet(object.positionDelta) ? PositionDelta.fromJSON(object.positionDelta) : undefined,
            payout: isSet(object.payout) ? String(object.payout) : "",
            fee: isSet(object.fee) ? String(object.fee) : "",
            orderHash: isSet(object.orderHash) ? bytesFromBase64(object.orderHash) : new Uint8Array(),
            feeRecipientAddress: isSet(object.feeRecipientAddress)
                ? bytesFromBase64(object.feeRecipientAddress)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined &&
            (obj.subaccountId = base64FromBytes(message.subaccountId !== undefined ? message.subaccountId : new Uint8Array()));
        message.positionDelta !== undefined &&
            (obj.positionDelta = message.positionDelta ? PositionDelta.toJSON(message.positionDelta) : undefined);
        message.payout !== undefined && (obj.payout = message.payout);
        message.fee !== undefined && (obj.fee = message.fee);
        message.orderHash !== undefined &&
            (obj.orderHash = base64FromBytes(message.orderHash !== undefined ? message.orderHash : new Uint8Array()));
        message.feeRecipientAddress !== undefined &&
            (obj.feeRecipientAddress = base64FromBytes(message.feeRecipientAddress !== undefined ? message.feeRecipientAddress : new Uint8Array()));
        return obj;
    },
    create(base) {
        return DerivativeTradeLog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDerivativeTradeLog();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.positionDelta = (object.positionDelta !== undefined && object.positionDelta !== null)
            ? PositionDelta.fromPartial(object.positionDelta)
            : undefined;
        message.payout = (_b = object.payout) !== null && _b !== void 0 ? _b : "";
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : "";
        message.orderHash = (_d = object.orderHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.feeRecipientAddress = (_e = object.feeRecipientAddress) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseSubaccountPosition() {
    return { position: undefined, subaccountId: new Uint8Array() };
}
export const SubaccountPosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.position !== undefined) {
            Position.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.subaccountId.length !== 0) {
            writer.uint32(18).bytes(message.subaccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.position = Position.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subaccountId = reader.bytes();
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
            position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
            subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
        message.subaccountId !== undefined &&
            (obj.subaccountId = base64FromBytes(message.subaccountId !== undefined ? message.subaccountId : new Uint8Array()));
        return obj;
    },
    create(base) {
        return SubaccountPosition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountPosition();
        message.position = (object.position !== undefined && object.position !== null)
            ? Position.fromPartial(object.position)
            : undefined;
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseSubaccountDeposit() {
    return { subaccountId: new Uint8Array(), deposit: undefined };
}
export const SubaccountDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId.length !== 0) {
            writer.uint32(10).bytes(message.subaccountId);
        }
        if (message.deposit !== undefined) {
            Deposit.encode(message.deposit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountId = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.deposit = Deposit.decode(reader, reader.uint32());
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
            subaccountId: isSet(object.subaccountId) ? bytesFromBase64(object.subaccountId) : new Uint8Array(),
            deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined &&
            (obj.subaccountId = base64FromBytes(message.subaccountId !== undefined ? message.subaccountId : new Uint8Array()));
        message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
        return obj;
    },
    create(base) {
        return SubaccountDeposit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountDeposit();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.deposit = (object.deposit !== undefined && object.deposit !== null)
            ? Deposit.fromPartial(object.deposit)
            : undefined;
        return message;
    },
};
function createBaseDepositUpdate() {
    return { denom: "", deposits: [] };
}
export const DepositUpdate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        for (const v of message.deposits) {
            SubaccountDeposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.deposits.push(SubaccountDeposit.decode(reader, reader.uint32()));
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map((e) => SubaccountDeposit.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? SubaccountDeposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        return obj;
    },
    create(base) {
        return DepositUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDepositUpdate();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.deposits = ((_b = object.deposits) === null || _b === void 0 ? void 0 : _b.map((e) => SubaccountDeposit.fromPartial(e))) || [];
        return message;
    },
};
function createBasePointsMultiplier() {
    return { makerPointsMultiplier: "", takerPointsMultiplier: "" };
}
export const PointsMultiplier = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.makerPointsMultiplier !== "") {
            writer.uint32(10).string(message.makerPointsMultiplier);
        }
        if (message.takerPointsMultiplier !== "") {
            writer.uint32(18).string(message.takerPointsMultiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePointsMultiplier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.makerPointsMultiplier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.takerPointsMultiplier = reader.string();
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
            makerPointsMultiplier: isSet(object.makerPointsMultiplier) ? String(object.makerPointsMultiplier) : "",
            takerPointsMultiplier: isSet(object.takerPointsMultiplier) ? String(object.takerPointsMultiplier) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.makerPointsMultiplier !== undefined && (obj.makerPointsMultiplier = message.makerPointsMultiplier);
        message.takerPointsMultiplier !== undefined && (obj.takerPointsMultiplier = message.takerPointsMultiplier);
        return obj;
    },
    create(base) {
        return PointsMultiplier.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePointsMultiplier();
        message.makerPointsMultiplier = (_a = object.makerPointsMultiplier) !== null && _a !== void 0 ? _a : "";
        message.takerPointsMultiplier = (_b = object.takerPointsMultiplier) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseTradingRewardCampaignBoostInfo() {
    return {
        boostedSpotMarketIds: [],
        spotMarketMultipliers: [],
        boostedDerivativeMarketIds: [],
        derivativeMarketMultipliers: [],
    };
}
export const TradingRewardCampaignBoostInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.boostedSpotMarketIds) {
            writer.uint32(10).string(v);
        }
        for (const v of message.spotMarketMultipliers) {
            PointsMultiplier.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.boostedDerivativeMarketIds) {
            writer.uint32(26).string(v);
        }
        for (const v of message.derivativeMarketMultipliers) {
            PointsMultiplier.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignBoostInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.boostedSpotMarketIds.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.spotMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.boostedDerivativeMarketIds.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.derivativeMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
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
            boostedSpotMarketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.boostedSpotMarketIds)
                ? object.boostedSpotMarketIds.map((e) => String(e))
                : [],
            spotMarketMultipliers: Array.isArray(object === null || object === void 0 ? void 0 : object.spotMarketMultipliers)
                ? object.spotMarketMultipliers.map((e) => PointsMultiplier.fromJSON(e))
                : [],
            boostedDerivativeMarketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.boostedDerivativeMarketIds)
                ? object.boostedDerivativeMarketIds.map((e) => String(e))
                : [],
            derivativeMarketMultipliers: Array.isArray(object === null || object === void 0 ? void 0 : object.derivativeMarketMultipliers)
                ? object.derivativeMarketMultipliers.map((e) => PointsMultiplier.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.boostedSpotMarketIds) {
            obj.boostedSpotMarketIds = message.boostedSpotMarketIds.map((e) => e);
        }
        else {
            obj.boostedSpotMarketIds = [];
        }
        if (message.spotMarketMultipliers) {
            obj.spotMarketMultipliers = message.spotMarketMultipliers.map((e) => e ? PointsMultiplier.toJSON(e) : undefined);
        }
        else {
            obj.spotMarketMultipliers = [];
        }
        if (message.boostedDerivativeMarketIds) {
            obj.boostedDerivativeMarketIds = message.boostedDerivativeMarketIds.map((e) => e);
        }
        else {
            obj.boostedDerivativeMarketIds = [];
        }
        if (message.derivativeMarketMultipliers) {
            obj.derivativeMarketMultipliers = message.derivativeMarketMultipliers.map((e) => e ? PointsMultiplier.toJSON(e) : undefined);
        }
        else {
            obj.derivativeMarketMultipliers = [];
        }
        return obj;
    },
    create(base) {
        return TradingRewardCampaignBoostInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTradingRewardCampaignBoostInfo();
        message.boostedSpotMarketIds = ((_a = object.boostedSpotMarketIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.spotMarketMultipliers = ((_b = object.spotMarketMultipliers) === null || _b === void 0 ? void 0 : _b.map((e) => PointsMultiplier.fromPartial(e))) || [];
        message.boostedDerivativeMarketIds = ((_c = object.boostedDerivativeMarketIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.derivativeMarketMultipliers =
            ((_d = object.derivativeMarketMultipliers) === null || _d === void 0 ? void 0 : _d.map((e) => PointsMultiplier.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCampaignRewardPool() {
    return { startTimestamp: "0", maxCampaignRewards: [] };
}
export const CampaignRewardPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.startTimestamp !== "0") {
            writer.uint32(8).int64(message.startTimestamp);
        }
        for (const v of message.maxCampaignRewards) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCampaignRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.startTimestamp = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.maxCampaignRewards.push(Coin.decode(reader, reader.uint32()));
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
            startTimestamp: isSet(object.startTimestamp) ? String(object.startTimestamp) : "0",
            maxCampaignRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.maxCampaignRewards)
                ? object.maxCampaignRewards.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.startTimestamp !== undefined && (obj.startTimestamp = message.startTimestamp);
        if (message.maxCampaignRewards) {
            obj.maxCampaignRewards = message.maxCampaignRewards.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.maxCampaignRewards = [];
        }
        return obj;
    },
    create(base) {
        return CampaignRewardPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCampaignRewardPool();
        message.startTimestamp = (_a = object.startTimestamp) !== null && _a !== void 0 ? _a : "0";
        message.maxCampaignRewards = ((_b = object.maxCampaignRewards) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradingRewardCampaignInfo() {
    return {
        campaignDurationSeconds: "0",
        quoteDenoms: [],
        tradingRewardBoostInfo: undefined,
        disqualifiedMarketIds: [],
    };
}
export const TradingRewardCampaignInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.campaignDurationSeconds !== "0") {
            writer.uint32(8).int64(message.campaignDurationSeconds);
        }
        for (const v of message.quoteDenoms) {
            writer.uint32(18).string(v);
        }
        if (message.tradingRewardBoostInfo !== undefined) {
            TradingRewardCampaignBoostInfo.encode(message.tradingRewardBoostInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.disqualifiedMarketIds) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingRewardCampaignInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.campaignDurationSeconds = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.quoteDenoms.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tradingRewardBoostInfo = TradingRewardCampaignBoostInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.disqualifiedMarketIds.push(reader.string());
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
            campaignDurationSeconds: isSet(object.campaignDurationSeconds) ? String(object.campaignDurationSeconds) : "0",
            quoteDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.quoteDenoms) ? object.quoteDenoms.map((e) => String(e)) : [],
            tradingRewardBoostInfo: isSet(object.tradingRewardBoostInfo)
                ? TradingRewardCampaignBoostInfo.fromJSON(object.tradingRewardBoostInfo)
                : undefined,
            disqualifiedMarketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.disqualifiedMarketIds)
                ? object.disqualifiedMarketIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.campaignDurationSeconds !== undefined && (obj.campaignDurationSeconds = message.campaignDurationSeconds);
        if (message.quoteDenoms) {
            obj.quoteDenoms = message.quoteDenoms.map((e) => e);
        }
        else {
            obj.quoteDenoms = [];
        }
        message.tradingRewardBoostInfo !== undefined && (obj.tradingRewardBoostInfo = message.tradingRewardBoostInfo
            ? TradingRewardCampaignBoostInfo.toJSON(message.tradingRewardBoostInfo)
            : undefined);
        if (message.disqualifiedMarketIds) {
            obj.disqualifiedMarketIds = message.disqualifiedMarketIds.map((e) => e);
        }
        else {
            obj.disqualifiedMarketIds = [];
        }
        return obj;
    },
    create(base) {
        return TradingRewardCampaignInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTradingRewardCampaignInfo();
        message.campaignDurationSeconds = (_a = object.campaignDurationSeconds) !== null && _a !== void 0 ? _a : "0";
        message.quoteDenoms = ((_b = object.quoteDenoms) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.tradingRewardBoostInfo =
            (object.tradingRewardBoostInfo !== undefined && object.tradingRewardBoostInfo !== null)
                ? TradingRewardCampaignBoostInfo.fromPartial(object.tradingRewardBoostInfo)
                : undefined;
        message.disqualifiedMarketIds = ((_c = object.disqualifiedMarketIds) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseFeeDiscountTierInfo() {
    return { makerDiscountRate: "", takerDiscountRate: "", stakedAmount: "", volume: "" };
}
export const FeeDiscountTierInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.makerDiscountRate !== "") {
            writer.uint32(10).string(message.makerDiscountRate);
        }
        if (message.takerDiscountRate !== "") {
            writer.uint32(18).string(message.takerDiscountRate);
        }
        if (message.stakedAmount !== "") {
            writer.uint32(26).string(message.stakedAmount);
        }
        if (message.volume !== "") {
            writer.uint32(34).string(message.volume);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountTierInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.makerDiscountRate = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.takerDiscountRate = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.stakedAmount = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            makerDiscountRate: isSet(object.makerDiscountRate) ? String(object.makerDiscountRate) : "",
            takerDiscountRate: isSet(object.takerDiscountRate) ? String(object.takerDiscountRate) : "",
            stakedAmount: isSet(object.stakedAmount) ? String(object.stakedAmount) : "",
            volume: isSet(object.volume) ? String(object.volume) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.makerDiscountRate !== undefined && (obj.makerDiscountRate = message.makerDiscountRate);
        message.takerDiscountRate !== undefined && (obj.takerDiscountRate = message.takerDiscountRate);
        message.stakedAmount !== undefined && (obj.stakedAmount = message.stakedAmount);
        message.volume !== undefined && (obj.volume = message.volume);
        return obj;
    },
    create(base) {
        return FeeDiscountTierInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseFeeDiscountTierInfo();
        message.makerDiscountRate = (_a = object.makerDiscountRate) !== null && _a !== void 0 ? _a : "";
        message.takerDiscountRate = (_b = object.takerDiscountRate) !== null && _b !== void 0 ? _b : "";
        message.stakedAmount = (_c = object.stakedAmount) !== null && _c !== void 0 ? _c : "";
        message.volume = (_d = object.volume) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseFeeDiscountSchedule() {
    return { bucketCount: "0", bucketDuration: "0", quoteDenoms: [], tierInfos: [], disqualifiedMarketIds: [] };
}
export const FeeDiscountSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bucketCount !== "0") {
            writer.uint32(8).uint64(message.bucketCount);
        }
        if (message.bucketDuration !== "0") {
            writer.uint32(16).int64(message.bucketDuration);
        }
        for (const v of message.quoteDenoms) {
            writer.uint32(26).string(v);
        }
        for (const v of message.tierInfos) {
            FeeDiscountTierInfo.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.disqualifiedMarketIds) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.bucketCount = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.bucketDuration = longToString(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quoteDenoms.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.tierInfos.push(FeeDiscountTierInfo.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.disqualifiedMarketIds.push(reader.string());
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
            bucketCount: isSet(object.bucketCount) ? String(object.bucketCount) : "0",
            bucketDuration: isSet(object.bucketDuration) ? String(object.bucketDuration) : "0",
            quoteDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.quoteDenoms) ? object.quoteDenoms.map((e) => String(e)) : [],
            tierInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.tierInfos)
                ? object.tierInfos.map((e) => FeeDiscountTierInfo.fromJSON(e))
                : [],
            disqualifiedMarketIds: Array.isArray(object === null || object === void 0 ? void 0 : object.disqualifiedMarketIds)
                ? object.disqualifiedMarketIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bucketCount !== undefined && (obj.bucketCount = message.bucketCount);
        message.bucketDuration !== undefined && (obj.bucketDuration = message.bucketDuration);
        if (message.quoteDenoms) {
            obj.quoteDenoms = message.quoteDenoms.map((e) => e);
        }
        else {
            obj.quoteDenoms = [];
        }
        if (message.tierInfos) {
            obj.tierInfos = message.tierInfos.map((e) => e ? FeeDiscountTierInfo.toJSON(e) : undefined);
        }
        else {
            obj.tierInfos = [];
        }
        if (message.disqualifiedMarketIds) {
            obj.disqualifiedMarketIds = message.disqualifiedMarketIds.map((e) => e);
        }
        else {
            obj.disqualifiedMarketIds = [];
        }
        return obj;
    },
    create(base) {
        return FeeDiscountSchedule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseFeeDiscountSchedule();
        message.bucketCount = (_a = object.bucketCount) !== null && _a !== void 0 ? _a : "0";
        message.bucketDuration = (_b = object.bucketDuration) !== null && _b !== void 0 ? _b : "0";
        message.quoteDenoms = ((_c = object.quoteDenoms) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.tierInfos = ((_d = object.tierInfos) === null || _d === void 0 ? void 0 : _d.map((e) => FeeDiscountTierInfo.fromPartial(e))) || [];
        message.disqualifiedMarketIds = ((_e = object.disqualifiedMarketIds) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseFeeDiscountTierTTL() {
    return { tier: "0", ttlTimestamp: "0" };
}
export const FeeDiscountTierTTL = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tier !== "0") {
            writer.uint32(8).uint64(message.tier);
        }
        if (message.ttlTimestamp !== "0") {
            writer.uint32(16).int64(message.ttlTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeDiscountTierTTL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.tier = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ttlTimestamp = longToString(reader.int64());
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
            tier: isSet(object.tier) ? String(object.tier) : "0",
            ttlTimestamp: isSet(object.ttlTimestamp) ? String(object.ttlTimestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tier !== undefined && (obj.tier = message.tier);
        message.ttlTimestamp !== undefined && (obj.ttlTimestamp = message.ttlTimestamp);
        return obj;
    },
    create(base) {
        return FeeDiscountTierTTL.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeDiscountTierTTL();
        message.tier = (_a = object.tier) !== null && _a !== void 0 ? _a : "0";
        message.ttlTimestamp = (_b = object.ttlTimestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseVolumeRecord() {
    return { makerVolume: "", takerVolume: "" };
}
export const VolumeRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.makerVolume !== "") {
            writer.uint32(10).string(message.makerVolume);
        }
        if (message.takerVolume !== "") {
            writer.uint32(18).string(message.takerVolume);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVolumeRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.makerVolume = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.takerVolume = reader.string();
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
            makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
            takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.makerVolume !== undefined && (obj.makerVolume = message.makerVolume);
        message.takerVolume !== undefined && (obj.takerVolume = message.takerVolume);
        return obj;
    },
    create(base) {
        return VolumeRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVolumeRecord();
        message.makerVolume = (_a = object.makerVolume) !== null && _a !== void 0 ? _a : "";
        message.takerVolume = (_b = object.takerVolume) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAccountRewards() {
    return { account: "", rewards: [] };
}
export const AccountRewards = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        for (const v of message.rewards) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountRewards();
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
                    message.rewards.push(Coin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    create(base) {
        return AccountRewards.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAccountRewards();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.rewards = ((_b = object.rewards) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradeRecords() {
    return { marketId: "", latestTradeRecords: [] };
}
export const TradeRecords = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        for (const v of message.latestTradeRecords) {
            TradeRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeRecords();
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
                    message.latestTradeRecords.push(TradeRecord.decode(reader, reader.uint32()));
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
            latestTradeRecords: Array.isArray(object === null || object === void 0 ? void 0 : object.latestTradeRecords)
                ? object.latestTradeRecords.map((e) => TradeRecord.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        if (message.latestTradeRecords) {
            obj.latestTradeRecords = message.latestTradeRecords.map((e) => e ? TradeRecord.toJSON(e) : undefined);
        }
        else {
            obj.latestTradeRecords = [];
        }
        return obj;
    },
    create(base) {
        return TradeRecords.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTradeRecords();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.latestTradeRecords = ((_b = object.latestTradeRecords) === null || _b === void 0 ? void 0 : _b.map((e) => TradeRecord.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSubaccountIDs() {
    return { subaccountIds: [] };
}
export const SubaccountIDs = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.subaccountIds) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountIDs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subaccountIds.push(reader.bytes());
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
            subaccountIds: Array.isArray(object === null || object === void 0 ? void 0 : object.subaccountIds)
                ? object.subaccountIds.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subaccountIds) {
            obj.subaccountIds = message.subaccountIds.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.subaccountIds = [];
        }
        return obj;
    },
    create(base) {
        return SubaccountIDs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSubaccountIDs();
        message.subaccountIds = ((_a = object.subaccountIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseTradeRecord() {
    return { timestamp: "0", price: "", quantity: "" };
}
export const TradeRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timestamp !== "0") {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(26).string(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.timestamp = longToString(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.quantity = reader.string();
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
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            price: isSet(object.price) ? String(object.price) : "",
            quantity: isSet(object.quantity) ? String(object.quantity) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        return obj;
    },
    create(base) {
        return TradeRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTradeRecord();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : "0";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        message.quantity = (_c = object.quantity) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseLevel() {
    return { p: "", q: "" };
}
export const Level = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.p !== "") {
            writer.uint32(10).string(message.p);
        }
        if (message.q !== "") {
            writer.uint32(18).string(message.q);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLevel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.p = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.q = reader.string();
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
        return { p: isSet(object.p) ? String(object.p) : "", q: isSet(object.q) ? String(object.q) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.p !== undefined && (obj.p = message.p);
        message.q !== undefined && (obj.q = message.q);
        return obj;
    },
    create(base) {
        return Level.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLevel();
        message.p = (_a = object.p) !== null && _a !== void 0 ? _a : "";
        message.q = (_b = object.q) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAggregateSubaccountVolumeRecord() {
    return { subaccountId: "", marketVolumes: [] };
}
export const AggregateSubaccountVolumeRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketVolumes) {
            MarketVolume.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateSubaccountVolumeRecord();
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
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            marketVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.marketVolumes)
                ? object.marketVolumes.map((e) => MarketVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        if (message.marketVolumes) {
            obj.marketVolumes = message.marketVolumes.map((e) => e ? MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.marketVolumes = [];
        }
        return obj;
    },
    create(base) {
        return AggregateSubaccountVolumeRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAggregateSubaccountVolumeRecord();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.marketVolumes = ((_b = object.marketVolumes) === null || _b === void 0 ? void 0 : _b.map((e) => MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAggregateAccountVolumeRecord() {
    return { account: "", marketVolumes: [] };
}
export const AggregateAccountVolumeRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        for (const v of message.marketVolumes) {
            MarketVolume.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAggregateAccountVolumeRecord();
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
            account: isSet(object.account) ? String(object.account) : "",
            marketVolumes: Array.isArray(object === null || object === void 0 ? void 0 : object.marketVolumes)
                ? object.marketVolumes.map((e) => MarketVolume.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        if (message.marketVolumes) {
            obj.marketVolumes = message.marketVolumes.map((e) => e ? MarketVolume.toJSON(e) : undefined);
        }
        else {
            obj.marketVolumes = [];
        }
        return obj;
    },
    create(base) {
        return AggregateAccountVolumeRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAggregateAccountVolumeRecord();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.marketVolumes = ((_b = object.marketVolumes) === null || _b === void 0 ? void 0 : _b.map((e) => MarketVolume.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMarketVolume() {
    return { marketId: "", volume: undefined };
}
export const MarketVolume = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.volume !== undefined) {
            VolumeRecord.encode(message.volume, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketVolume();
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
                    message.volume = VolumeRecord.decode(reader, reader.uint32());
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
            volume: isSet(object.volume) ? VolumeRecord.fromJSON(object.volume) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.volume !== undefined && (obj.volume = message.volume ? VolumeRecord.toJSON(message.volume) : undefined);
        return obj;
    },
    create(base) {
        return MarketVolume.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMarketVolume();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.volume = (object.volume !== undefined && object.volume !== null)
            ? VolumeRecord.fromPartial(object.volume)
            : undefined;
        return message;
    },
};
function createBaseDenomDecimals() {
    return { denom: "", decimals: "0" };
}
export const DenomDecimals = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.decimals !== "0") {
            writer.uint32(16).uint64(message.decimals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomDecimals();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.decimals = longToString(reader.uint64());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            decimals: isSet(object.decimals) ? String(object.decimals) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.decimals !== undefined && (obj.decimals = message.decimals);
        return obj;
    },
    create(base) {
        return DenomDecimals.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDenomDecimals();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.decimals = (_b = object.decimals) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
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
