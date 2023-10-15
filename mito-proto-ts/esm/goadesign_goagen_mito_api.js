/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
export const protobufPackage = "mito_api";
function createBaseGetVaultsRequest() {
    return { limit: undefined, pageIndex: undefined, codeId: undefined };
}
export const GetVaultsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== undefined) {
            writer.uint32(8).uint32(message.limit);
        }
        if (message.pageIndex !== undefined) {
            writer.uint32(16).uint32(message.pageIndex);
        }
        if (message.codeId !== undefined) {
            writer.uint32(24).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetVaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.pageIndex = reader.uint32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.codeId = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : undefined,
            codeId: isSet(object.codeId) ? String(object.codeId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.pageIndex !== undefined && (obj.pageIndex = Math.round(message.pageIndex));
        message.codeId !== undefined && (obj.codeId = message.codeId);
        return obj;
    },
    create(base) {
        return GetVaultsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetVaultsRequest();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : undefined;
        message.pageIndex = (_b = object.pageIndex) !== null && _b !== void 0 ? _b : undefined;
        message.codeId = (_c = object.codeId) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetVaultsResponse() {
    return { vaults: [], pagination: undefined };
}
export const GetVaultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaults) {
            Vault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vaults.push(Vault.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vaults: Array.isArray(object === null || object === void 0 ? void 0 : object.vaults) ? object.vaults.map((e) => Vault.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vaults) {
            obj.vaults = message.vaults.map((e) => e ? Vault.toJSON(e) : undefined);
        }
        else {
            obj.vaults = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return GetVaultsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetVaultsResponse();
        message.vaults = ((_a = object.vaults) === null || _a === void 0 ? void 0 : _a.map((e) => Vault.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseVault() {
    return {
        contractAddress: "",
        codeId: "0",
        vaultName: "",
        marketId: "",
        currentTvl: 0,
        profits: undefined,
        updatedAt: "0",
        vaultType: "",
        lpTokenPrice: 0,
        subaccountInfo: undefined,
        masterContractAddress: "",
        totalLpAmount: "",
        slug: "",
        createdAt: "0",
        notionalValueCap: "",
        tvlChanges: undefined,
        apy: 0,
    };
}
export const Vault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.codeId !== "0") {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.vaultName !== "") {
            writer.uint32(26).string(message.vaultName);
        }
        if (message.marketId !== "") {
            writer.uint32(34).string(message.marketId);
        }
        if (message.currentTvl !== 0) {
            writer.uint32(41).double(message.currentTvl);
        }
        if (message.profits !== undefined) {
            Changes.encode(message.profits, writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== "0") {
            writer.uint32(56).uint64(message.updatedAt);
        }
        if (message.vaultType !== "") {
            writer.uint32(66).string(message.vaultType);
        }
        if (message.lpTokenPrice !== 0) {
            writer.uint32(73).double(message.lpTokenPrice);
        }
        if (message.subaccountInfo !== undefined) {
            SubaccountBalance.encode(message.subaccountInfo, writer.uint32(82).fork()).ldelim();
        }
        if (message.masterContractAddress !== "") {
            writer.uint32(90).string(message.masterContractAddress);
        }
        if (message.totalLpAmount !== "") {
            writer.uint32(98).string(message.totalLpAmount);
        }
        if (message.slug !== "") {
            writer.uint32(106).string(message.slug);
        }
        if (message.createdAt !== "0") {
            writer.uint32(112).sint64(message.createdAt);
        }
        if (message.notionalValueCap !== "") {
            writer.uint32(122).string(message.notionalValueCap);
        }
        if (message.tvlChanges !== undefined) {
            Changes.encode(message.tvlChanges, writer.uint32(130).fork()).ldelim();
        }
        if (message.apy !== 0) {
            writer.uint32(137).double(message.apy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.codeId = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.vaultName = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.marketId = reader.string();
                    continue;
                case 5:
                    if (tag != 41) {
                        break;
                    }
                    message.currentTvl = reader.double();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.profits = Changes.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.updatedAt = longToString(reader.uint64());
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.vaultType = reader.string();
                    continue;
                case 9:
                    if (tag != 73) {
                        break;
                    }
                    message.lpTokenPrice = reader.double();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.subaccountInfo = SubaccountBalance.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.masterContractAddress = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.totalLpAmount = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.slug = reader.string();
                    continue;
                case 14:
                    if (tag != 112) {
                        break;
                    }
                    message.createdAt = longToString(reader.sint64());
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.notionalValueCap = reader.string();
                    continue;
                case 16:
                    if (tag != 130) {
                        break;
                    }
                    message.tvlChanges = Changes.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag != 137) {
                        break;
                    }
                    message.apy = reader.double();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            codeId: isSet(object.codeId) ? String(object.codeId) : "0",
            vaultName: isSet(object.vaultName) ? String(object.vaultName) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            currentTvl: isSet(object.currentTvl) ? Number(object.currentTvl) : 0,
            profits: isSet(object.profits) ? Changes.fromJSON(object.profits) : undefined,
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            vaultType: isSet(object.vaultType) ? String(object.vaultType) : "",
            lpTokenPrice: isSet(object.lpTokenPrice) ? Number(object.lpTokenPrice) : 0,
            subaccountInfo: isSet(object.subaccountInfo) ? SubaccountBalance.fromJSON(object.subaccountInfo) : undefined,
            masterContractAddress: isSet(object.masterContractAddress) ? String(object.masterContractAddress) : "",
            totalLpAmount: isSet(object.totalLpAmount) ? String(object.totalLpAmount) : "",
            slug: isSet(object.slug) ? String(object.slug) : "",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            notionalValueCap: isSet(object.notionalValueCap) ? String(object.notionalValueCap) : "",
            tvlChanges: isSet(object.tvlChanges) ? Changes.fromJSON(object.tvlChanges) : undefined,
            apy: isSet(object.apy) ? Number(object.apy) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.codeId !== undefined && (obj.codeId = message.codeId);
        message.vaultName !== undefined && (obj.vaultName = message.vaultName);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.currentTvl !== undefined && (obj.currentTvl = message.currentTvl);
        message.profits !== undefined && (obj.profits = message.profits ? Changes.toJSON(message.profits) : undefined);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.vaultType !== undefined && (obj.vaultType = message.vaultType);
        message.lpTokenPrice !== undefined && (obj.lpTokenPrice = message.lpTokenPrice);
        message.subaccountInfo !== undefined &&
            (obj.subaccountInfo = message.subaccountInfo ? SubaccountBalance.toJSON(message.subaccountInfo) : undefined);
        message.masterContractAddress !== undefined && (obj.masterContractAddress = message.masterContractAddress);
        message.totalLpAmount !== undefined && (obj.totalLpAmount = message.totalLpAmount);
        message.slug !== undefined && (obj.slug = message.slug);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.notionalValueCap !== undefined && (obj.notionalValueCap = message.notionalValueCap);
        message.tvlChanges !== undefined &&
            (obj.tvlChanges = message.tvlChanges ? Changes.toJSON(message.tvlChanges) : undefined);
        message.apy !== undefined && (obj.apy = message.apy);
        return obj;
    },
    create(base) {
        return Vault.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = createBaseVault();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.codeId = (_b = object.codeId) !== null && _b !== void 0 ? _b : "0";
        message.vaultName = (_c = object.vaultName) !== null && _c !== void 0 ? _c : "";
        message.marketId = (_d = object.marketId) !== null && _d !== void 0 ? _d : "";
        message.currentTvl = (_e = object.currentTvl) !== null && _e !== void 0 ? _e : 0;
        message.profits = (object.profits !== undefined && object.profits !== null)
            ? Changes.fromPartial(object.profits)
            : undefined;
        message.updatedAt = (_f = object.updatedAt) !== null && _f !== void 0 ? _f : "0";
        message.vaultType = (_g = object.vaultType) !== null && _g !== void 0 ? _g : "";
        message.lpTokenPrice = (_h = object.lpTokenPrice) !== null && _h !== void 0 ? _h : 0;
        message.subaccountInfo = (object.subaccountInfo !== undefined && object.subaccountInfo !== null)
            ? SubaccountBalance.fromPartial(object.subaccountInfo)
            : undefined;
        message.masterContractAddress = (_j = object.masterContractAddress) !== null && _j !== void 0 ? _j : "";
        message.totalLpAmount = (_k = object.totalLpAmount) !== null && _k !== void 0 ? _k : "";
        message.slug = (_l = object.slug) !== null && _l !== void 0 ? _l : "";
        message.createdAt = (_m = object.createdAt) !== null && _m !== void 0 ? _m : "0";
        message.notionalValueCap = (_o = object.notionalValueCap) !== null && _o !== void 0 ? _o : "";
        message.tvlChanges = (object.tvlChanges !== undefined && object.tvlChanges !== null)
            ? Changes.fromPartial(object.tvlChanges)
            : undefined;
        message.apy = (_p = object.apy) !== null && _p !== void 0 ? _p : 0;
        return message;
    },
};
function createBaseChanges() {
    return {
        allTimeChange: 0,
        threeMonthsChange: undefined,
        oneMonthChange: undefined,
        oneDayChange: undefined,
        oneWeekChange: undefined,
        oneYearChange: undefined,
        threeYearsChange: undefined,
        sixMonthsChange: undefined,
    };
}
export const Changes = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.allTimeChange !== 0) {
            writer.uint32(9).double(message.allTimeChange);
        }
        if (message.threeMonthsChange !== undefined) {
            writer.uint32(17).double(message.threeMonthsChange);
        }
        if (message.oneMonthChange !== undefined) {
            writer.uint32(25).double(message.oneMonthChange);
        }
        if (message.oneDayChange !== undefined) {
            writer.uint32(33).double(message.oneDayChange);
        }
        if (message.oneWeekChange !== undefined) {
            writer.uint32(41).double(message.oneWeekChange);
        }
        if (message.oneYearChange !== undefined) {
            writer.uint32(49).double(message.oneYearChange);
        }
        if (message.threeYearsChange !== undefined) {
            writer.uint32(57).double(message.threeYearsChange);
        }
        if (message.sixMonthsChange !== undefined) {
            writer.uint32(65).double(message.sixMonthsChange);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChanges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 9) {
                        break;
                    }
                    message.allTimeChange = reader.double();
                    continue;
                case 2:
                    if (tag != 17) {
                        break;
                    }
                    message.threeMonthsChange = reader.double();
                    continue;
                case 3:
                    if (tag != 25) {
                        break;
                    }
                    message.oneMonthChange = reader.double();
                    continue;
                case 4:
                    if (tag != 33) {
                        break;
                    }
                    message.oneDayChange = reader.double();
                    continue;
                case 5:
                    if (tag != 41) {
                        break;
                    }
                    message.oneWeekChange = reader.double();
                    continue;
                case 6:
                    if (tag != 49) {
                        break;
                    }
                    message.oneYearChange = reader.double();
                    continue;
                case 7:
                    if (tag != 57) {
                        break;
                    }
                    message.threeYearsChange = reader.double();
                    continue;
                case 8:
                    if (tag != 65) {
                        break;
                    }
                    message.sixMonthsChange = reader.double();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            allTimeChange: isSet(object.allTimeChange) ? Number(object.allTimeChange) : 0,
            threeMonthsChange: isSet(object.threeMonthsChange) ? Number(object.threeMonthsChange) : undefined,
            oneMonthChange: isSet(object.oneMonthChange) ? Number(object.oneMonthChange) : undefined,
            oneDayChange: isSet(object.oneDayChange) ? Number(object.oneDayChange) : undefined,
            oneWeekChange: isSet(object.oneWeekChange) ? Number(object.oneWeekChange) : undefined,
            oneYearChange: isSet(object.oneYearChange) ? Number(object.oneYearChange) : undefined,
            threeYearsChange: isSet(object.threeYearsChange) ? Number(object.threeYearsChange) : undefined,
            sixMonthsChange: isSet(object.sixMonthsChange) ? Number(object.sixMonthsChange) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.allTimeChange !== undefined && (obj.allTimeChange = message.allTimeChange);
        message.threeMonthsChange !== undefined && (obj.threeMonthsChange = message.threeMonthsChange);
        message.oneMonthChange !== undefined && (obj.oneMonthChange = message.oneMonthChange);
        message.oneDayChange !== undefined && (obj.oneDayChange = message.oneDayChange);
        message.oneWeekChange !== undefined && (obj.oneWeekChange = message.oneWeekChange);
        message.oneYearChange !== undefined && (obj.oneYearChange = message.oneYearChange);
        message.threeYearsChange !== undefined && (obj.threeYearsChange = message.threeYearsChange);
        message.sixMonthsChange !== undefined && (obj.sixMonthsChange = message.sixMonthsChange);
        return obj;
    },
    create(base) {
        return Changes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseChanges();
        message.allTimeChange = (_a = object.allTimeChange) !== null && _a !== void 0 ? _a : 0;
        message.threeMonthsChange = (_b = object.threeMonthsChange) !== null && _b !== void 0 ? _b : undefined;
        message.oneMonthChange = (_c = object.oneMonthChange) !== null && _c !== void 0 ? _c : undefined;
        message.oneDayChange = (_d = object.oneDayChange) !== null && _d !== void 0 ? _d : undefined;
        message.oneWeekChange = (_e = object.oneWeekChange) !== null && _e !== void 0 ? _e : undefined;
        message.oneYearChange = (_f = object.oneYearChange) !== null && _f !== void 0 ? _f : undefined;
        message.threeYearsChange = (_g = object.threeYearsChange) !== null && _g !== void 0 ? _g : undefined;
        message.sixMonthsChange = (_h = object.sixMonthsChange) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
function createBaseSubaccountBalance() {
    return { subaccountId: "", balances: [] };
}
export const SubaccountBalance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.balances) {
            DenomBalance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubaccountBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.subaccountId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.balances.push(DenomBalance.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => DenomBalance.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subaccountId !== undefined && (obj.subaccountId = message.subaccountId);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? DenomBalance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return SubaccountBalance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubaccountBalance();
        message.subaccountId = (_a = object.subaccountId) !== null && _a !== void 0 ? _a : "";
        message.balances = ((_b = object.balances) === null || _b === void 0 ? void 0 : _b.map((e) => DenomBalance.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDenomBalance() {
    return { denom: "", totalBalance: "" };
}
export const DenomBalance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.totalBalance !== "") {
            writer.uint32(18).string(message.totalBalance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.totalBalance = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            totalBalance: isSet(object.totalBalance) ? String(object.totalBalance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.totalBalance !== undefined && (obj.totalBalance = message.totalBalance);
        return obj;
    },
    create(base) {
        return DenomBalance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDenomBalance();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.totalBalance = (_b = object.totalBalance) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePagination() {
    return { total: 0 };
}
export const Pagination = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePagination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.total = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { total: isSet(object.total) ? Number(object.total) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },
    create(base) {
        return Pagination.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePagination();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetVaultRequest() {
    return { contractAddress: undefined, slug: undefined };
}
export const GetVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== undefined) {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.slug !== undefined) {
            writer.uint32(18).string(message.slug);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetVaultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.slug = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : undefined,
            slug: isSet(object.slug) ? String(object.slug) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.slug !== undefined && (obj.slug = message.slug);
        return obj;
    },
    create(base) {
        return GetVaultRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetVaultRequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : undefined;
        message.slug = (_b = object.slug) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseGetVaultResponse() {
    return { vault: [] };
}
export const GetVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vault) {
            Vault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vault.push(Vault.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { vault: Array.isArray(object === null || object === void 0 ? void 0 : object.vault) ? object.vault.map((e) => Vault.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.vault) {
            obj.vault = message.vault.map((e) => e ? Vault.toJSON(e) : undefined);
        }
        else {
            obj.vault = [];
        }
        return obj;
    },
    create(base) {
        return GetVaultResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetVaultResponse();
        message.vault = ((_a = object.vault) === null || _a === void 0 ? void 0 : _a.map((e) => Vault.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLPTokenPriceChartRequest() {
    return { vaultAddress: "", fromTime: undefined, toTime: undefined };
}
export const LPTokenPriceChartRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultAddress !== "") {
            writer.uint32(10).string(message.vaultAddress);
        }
        if (message.fromTime !== undefined) {
            writer.uint32(16).uint64(message.fromTime);
        }
        if (message.toTime !== undefined) {
            writer.uint32(24).uint64(message.toTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLPTokenPriceChartRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.fromTime = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.toTime = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
            fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
            toTime: isSet(object.toTime) ? String(object.toTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.fromTime !== undefined && (obj.fromTime = message.fromTime);
        message.toTime !== undefined && (obj.toTime = message.toTime);
        return obj;
    },
    create(base) {
        return LPTokenPriceChartRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLPTokenPriceChartRequest();
        message.vaultAddress = (_a = object.vaultAddress) !== null && _a !== void 0 ? _a : "";
        message.fromTime = (_b = object.fromTime) !== null && _b !== void 0 ? _b : undefined;
        message.toTime = (_c = object.toTime) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseLPTokenPriceChartResponse() {
    return { prices: [] };
}
export const LPTokenPriceChartResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prices) {
            PriceSnapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLPTokenPriceChartResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.prices.push(PriceSnapshot.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { prices: Array.isArray(object === null || object === void 0 ? void 0 : object.prices) ? object.prices.map((e) => PriceSnapshot.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map((e) => e ? PriceSnapshot.toJSON(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    create(base) {
        return LPTokenPriceChartResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLPTokenPriceChartResponse();
        message.prices = ((_a = object.prices) === null || _a === void 0 ? void 0 : _a.map((e) => PriceSnapshot.fromPartial(e))) || [];
        return message;
    },
};
function createBasePriceSnapshot() {
    return { price: 0, updatedAt: "0" };
}
export const PriceSnapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== 0) {
            writer.uint32(9).double(message.price);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(16).uint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePriceSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 9) {
                        break;
                    }
                    message.price = reader.double();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.updatedAt = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            price: isSet(object.price) ? Number(object.price) : 0,
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return PriceSnapshot.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePriceSnapshot();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : 0;
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseTVLChartRequest() {
    return { vaultAddress: "", fromTime: undefined, toTime: undefined };
}
export const TVLChartRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultAddress !== "") {
            writer.uint32(10).string(message.vaultAddress);
        }
        if (message.fromTime !== undefined) {
            writer.uint32(16).uint64(message.fromTime);
        }
        if (message.toTime !== undefined) {
            writer.uint32(24).uint64(message.toTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTVLChartRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.fromTime = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.toTime = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
            fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
            toTime: isSet(object.toTime) ? String(object.toTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.fromTime !== undefined && (obj.fromTime = message.fromTime);
        message.toTime !== undefined && (obj.toTime = message.toTime);
        return obj;
    },
    create(base) {
        return TVLChartRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTVLChartRequest();
        message.vaultAddress = (_a = object.vaultAddress) !== null && _a !== void 0 ? _a : "";
        message.fromTime = (_b = object.fromTime) !== null && _b !== void 0 ? _b : undefined;
        message.toTime = (_c = object.toTime) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseTVLChartResponse() {
    return { prices: [] };
}
export const TVLChartResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.prices) {
            PriceSnapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTVLChartResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.prices.push(PriceSnapshot.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { prices: Array.isArray(object === null || object === void 0 ? void 0 : object.prices) ? object.prices.map((e) => PriceSnapshot.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map((e) => e ? PriceSnapshot.toJSON(e) : undefined);
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    create(base) {
        return TVLChartResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTVLChartResponse();
        message.prices = ((_a = object.prices) === null || _a === void 0 ? void 0 : _a.map((e) => PriceSnapshot.fromPartial(e))) || [];
        return message;
    },
};
function createBaseVaultsByHolderAddressRequest() {
    return { limit: undefined, pageIndex: undefined, holderAddress: "", vaultAddress: undefined };
}
export const VaultsByHolderAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== undefined) {
            writer.uint32(8).uint32(message.limit);
        }
        if (message.pageIndex !== undefined) {
            writer.uint32(16).uint32(message.pageIndex);
        }
        if (message.holderAddress !== "") {
            writer.uint32(26).string(message.holderAddress);
        }
        if (message.vaultAddress !== undefined) {
            writer.uint32(34).string(message.vaultAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultsByHolderAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.pageIndex = reader.uint32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.holderAddress = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : undefined,
            holderAddress: isSet(object.holderAddress) ? String(object.holderAddress) : "",
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.pageIndex !== undefined && (obj.pageIndex = Math.round(message.pageIndex));
        message.holderAddress !== undefined && (obj.holderAddress = message.holderAddress);
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        return obj;
    },
    create(base) {
        return VaultsByHolderAddressRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVaultsByHolderAddressRequest();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : undefined;
        message.pageIndex = (_b = object.pageIndex) !== null && _b !== void 0 ? _b : undefined;
        message.holderAddress = (_c = object.holderAddress) !== null && _c !== void 0 ? _c : "";
        message.vaultAddress = (_d = object.vaultAddress) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseVaultsByHolderAddressResponse() {
    return { subscriptions: [] };
}
export const VaultsByHolderAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.subscriptions) {
            Subscription.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultsByHolderAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.subscriptions.push(Subscription.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.subscriptions)
                ? object.subscriptions.map((e) => Subscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subscriptions) {
            obj.subscriptions = message.subscriptions.map((e) => e ? Subscription.toJSON(e) : undefined);
        }
        else {
            obj.subscriptions = [];
        }
        return obj;
    },
    create(base) {
        return VaultsByHolderAddressResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVaultsByHolderAddressResponse();
        message.subscriptions = ((_a = object.subscriptions) === null || _a === void 0 ? void 0 : _a.map((e) => Subscription.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSubscription() {
    return { vaultInfo: undefined, lpAmount: "", holderAddress: "", lpAmountPercentage: 0 };
}
export const Subscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultInfo !== undefined) {
            Vault.encode(message.vaultInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.lpAmount !== "") {
            writer.uint32(18).string(message.lpAmount);
        }
        if (message.holderAddress !== "") {
            writer.uint32(26).string(message.holderAddress);
        }
        if (message.lpAmountPercentage !== 0) {
            writer.uint32(33).double(message.lpAmountPercentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vaultInfo = Vault.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.lpAmount = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.holderAddress = reader.string();
                    continue;
                case 4:
                    if (tag != 33) {
                        break;
                    }
                    message.lpAmountPercentage = reader.double();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vaultInfo: isSet(object.vaultInfo) ? Vault.fromJSON(object.vaultInfo) : undefined,
            lpAmount: isSet(object.lpAmount) ? String(object.lpAmount) : "",
            holderAddress: isSet(object.holderAddress) ? String(object.holderAddress) : "",
            lpAmountPercentage: isSet(object.lpAmountPercentage) ? Number(object.lpAmountPercentage) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultInfo !== undefined &&
            (obj.vaultInfo = message.vaultInfo ? Vault.toJSON(message.vaultInfo) : undefined);
        message.lpAmount !== undefined && (obj.lpAmount = message.lpAmount);
        message.holderAddress !== undefined && (obj.holderAddress = message.holderAddress);
        message.lpAmountPercentage !== undefined && (obj.lpAmountPercentage = message.lpAmountPercentage);
        return obj;
    },
    create(base) {
        return Subscription.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSubscription();
        message.vaultInfo = (object.vaultInfo !== undefined && object.vaultInfo !== null)
            ? Vault.fromPartial(object.vaultInfo)
            : undefined;
        message.lpAmount = (_a = object.lpAmount) !== null && _a !== void 0 ? _a : "";
        message.holderAddress = (_b = object.holderAddress) !== null && _b !== void 0 ? _b : "";
        message.lpAmountPercentage = (_c = object.lpAmountPercentage) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseLPHoldersRequest() {
    return { limit: undefined, pageIndex: undefined, vaultAddress: "", stakingContractAddress: undefined };
}
export const LPHoldersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== undefined) {
            writer.uint32(8).uint32(message.limit);
        }
        if (message.pageIndex !== undefined) {
            writer.uint32(16).uint32(message.pageIndex);
        }
        if (message.vaultAddress !== "") {
            writer.uint32(26).string(message.vaultAddress);
        }
        if (message.stakingContractAddress !== undefined) {
            writer.uint32(34).string(message.stakingContractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLPHoldersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.pageIndex = reader.uint32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.stakingContractAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            pageIndex: isSet(object.pageIndex) ? Number(object.pageIndex) : undefined,
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
            stakingContractAddress: isSet(object.stakingContractAddress) ? String(object.stakingContractAddress) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.pageIndex !== undefined && (obj.pageIndex = Math.round(message.pageIndex));
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.stakingContractAddress !== undefined && (obj.stakingContractAddress = message.stakingContractAddress);
        return obj;
    },
    create(base) {
        return LPHoldersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLPHoldersRequest();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : undefined;
        message.pageIndex = (_b = object.pageIndex) !== null && _b !== void 0 ? _b : undefined;
        message.vaultAddress = (_c = object.vaultAddress) !== null && _c !== void 0 ? _c : "";
        message.stakingContractAddress = (_d = object.stakingContractAddress) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseLPHoldersResponse() {
    return { holders: [] };
}
export const LPHoldersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.holders) {
            Holders.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLPHoldersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.holders.push(Holders.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { holders: Array.isArray(object === null || object === void 0 ? void 0 : object.holders) ? object.holders.map((e) => Holders.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.holders) {
            obj.holders = message.holders.map((e) => e ? Holders.toJSON(e) : undefined);
        }
        else {
            obj.holders = [];
        }
        return obj;
    },
    create(base) {
        return LPHoldersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLPHoldersResponse();
        message.holders = ((_a = object.holders) === null || _a === void 0 ? void 0 : _a.map((e) => Holders.fromPartial(e))) || [];
        return message;
    },
};
function createBaseHolders() {
    return {
        holderAddress: "",
        vaultAddress: "",
        amount: "",
        updatedAt: "0",
        lpAmountPercentage: 0,
        redemptionLockTime: "0",
        stakedAmount: "",
    };
}
export const Holders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.holderAddress !== "") {
            writer.uint32(10).string(message.holderAddress);
        }
        if (message.vaultAddress !== "") {
            writer.uint32(18).string(message.vaultAddress);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(32).sint64(message.updatedAt);
        }
        if (message.lpAmountPercentage !== 0) {
            writer.uint32(41).double(message.lpAmountPercentage);
        }
        if (message.redemptionLockTime !== "0") {
            writer.uint32(48).sint64(message.redemptionLockTime);
        }
        if (message.stakedAmount !== "") {
            writer.uint32(58).string(message.stakedAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHolders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.holderAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.updatedAt = longToString(reader.sint64());
                    continue;
                case 5:
                    if (tag != 41) {
                        break;
                    }
                    message.lpAmountPercentage = reader.double();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.redemptionLockTime = longToString(reader.sint64());
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.stakedAmount = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            holderAddress: isSet(object.holderAddress) ? String(object.holderAddress) : "",
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            lpAmountPercentage: isSet(object.lpAmountPercentage) ? Number(object.lpAmountPercentage) : 0,
            redemptionLockTime: isSet(object.redemptionLockTime) ? String(object.redemptionLockTime) : "0",
            stakedAmount: isSet(object.stakedAmount) ? String(object.stakedAmount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.holderAddress !== undefined && (obj.holderAddress = message.holderAddress);
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.lpAmountPercentage !== undefined && (obj.lpAmountPercentage = message.lpAmountPercentage);
        message.redemptionLockTime !== undefined && (obj.redemptionLockTime = message.redemptionLockTime);
        message.stakedAmount !== undefined && (obj.stakedAmount = message.stakedAmount);
        return obj;
    },
    create(base) {
        return Holders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseHolders();
        message.holderAddress = (_a = object.holderAddress) !== null && _a !== void 0 ? _a : "";
        message.vaultAddress = (_b = object.vaultAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.updatedAt = (_d = object.updatedAt) !== null && _d !== void 0 ? _d : "0";
        message.lpAmountPercentage = (_e = object.lpAmountPercentage) !== null && _e !== void 0 ? _e : 0;
        message.redemptionLockTime = (_f = object.redemptionLockTime) !== null && _f !== void 0 ? _f : "0";
        message.stakedAmount = (_g = object.stakedAmount) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBasePortfolioRequest() {
    return { holderAddress: "" };
}
export const PortfolioRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.holderAddress !== "") {
            writer.uint32(10).string(message.holderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.holderAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { holderAddress: isSet(object.holderAddress) ? String(object.holderAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.holderAddress !== undefined && (obj.holderAddress = message.holderAddress);
        return obj;
    },
    create(base) {
        return PortfolioRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePortfolioRequest();
        message.holderAddress = (_a = object.holderAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePortfolioResponse() {
    return { totalValue: 0, pnl: 0, totalValueChart: [], pnlChart: [], pnlUpdatedAt: "0" };
}
export const PortfolioResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalValue !== 0) {
            writer.uint32(9).double(message.totalValue);
        }
        if (message.pnl !== 0) {
            writer.uint32(17).double(message.pnl);
        }
        for (const v of message.totalValueChart) {
            PriceSnapshot.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.pnlChart) {
            PriceSnapshot.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.pnlUpdatedAt !== "0") {
            writer.uint32(40).sint64(message.pnlUpdatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 9) {
                        break;
                    }
                    message.totalValue = reader.double();
                    continue;
                case 2:
                    if (tag != 17) {
                        break;
                    }
                    message.pnl = reader.double();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.totalValueChart.push(PriceSnapshot.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.pnlChart.push(PriceSnapshot.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.pnlUpdatedAt = longToString(reader.sint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            totalValue: isSet(object.totalValue) ? Number(object.totalValue) : 0,
            pnl: isSet(object.pnl) ? Number(object.pnl) : 0,
            totalValueChart: Array.isArray(object === null || object === void 0 ? void 0 : object.totalValueChart)
                ? object.totalValueChart.map((e) => PriceSnapshot.fromJSON(e))
                : [],
            pnlChart: Array.isArray(object === null || object === void 0 ? void 0 : object.pnlChart) ? object.pnlChart.map((e) => PriceSnapshot.fromJSON(e)) : [],
            pnlUpdatedAt: isSet(object.pnlUpdatedAt) ? String(object.pnlUpdatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalValue !== undefined && (obj.totalValue = message.totalValue);
        message.pnl !== undefined && (obj.pnl = message.pnl);
        if (message.totalValueChart) {
            obj.totalValueChart = message.totalValueChart.map((e) => e ? PriceSnapshot.toJSON(e) : undefined);
        }
        else {
            obj.totalValueChart = [];
        }
        if (message.pnlChart) {
            obj.pnlChart = message.pnlChart.map((e) => e ? PriceSnapshot.toJSON(e) : undefined);
        }
        else {
            obj.pnlChart = [];
        }
        message.pnlUpdatedAt !== undefined && (obj.pnlUpdatedAt = message.pnlUpdatedAt);
        return obj;
    },
    create(base) {
        return PortfolioResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePortfolioResponse();
        message.totalValue = (_a = object.totalValue) !== null && _a !== void 0 ? _a : 0;
        message.pnl = (_b = object.pnl) !== null && _b !== void 0 ? _b : 0;
        message.totalValueChart = ((_c = object.totalValueChart) === null || _c === void 0 ? void 0 : _c.map((e) => PriceSnapshot.fromPartial(e))) || [];
        message.pnlChart = ((_d = object.pnlChart) === null || _d === void 0 ? void 0 : _d.map((e) => PriceSnapshot.fromPartial(e))) || [];
        message.pnlUpdatedAt = (_e = object.pnlUpdatedAt) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseLeaderboardRequest() {
    return { epochId: undefined };
}
export const LeaderboardRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== undefined) {
            writer.uint32(8).uint32(message.epochId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaderboardRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.epochId = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { epochId: isSet(object.epochId) ? Number(object.epochId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = Math.round(message.epochId));
        return obj;
    },
    create(base) {
        return LeaderboardRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLeaderboardRequest();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseLeaderboardResponse() {
    return { entries: [], snapshotBlock: "0", updatedAt: "0", epochId: 0 };
}
export const LeaderboardResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            LeaderboardEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.snapshotBlock !== "0") {
            writer.uint32(16).sint64(message.snapshotBlock);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(24).sint64(message.updatedAt);
        }
        if (message.epochId !== 0) {
            writer.uint32(32).uint32(message.epochId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaderboardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.entries.push(LeaderboardEntry.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.snapshotBlock = longToString(reader.sint64());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.updatedAt = longToString(reader.sint64());
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.epochId = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map((e) => LeaderboardEntry.fromJSON(e)) : [],
            snapshotBlock: isSet(object.snapshotBlock) ? String(object.snapshotBlock) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            epochId: isSet(object.epochId) ? Number(object.epochId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? LeaderboardEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.snapshotBlock !== undefined && (obj.snapshotBlock = message.snapshotBlock);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.epochId !== undefined && (obj.epochId = Math.round(message.epochId));
        return obj;
    },
    create(base) {
        return LeaderboardResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLeaderboardResponse();
        message.entries = ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => LeaderboardEntry.fromPartial(e))) || [];
        message.snapshotBlock = (_b = object.snapshotBlock) !== null && _b !== void 0 ? _b : "0";
        message.updatedAt = (_c = object.updatedAt) !== null && _c !== void 0 ? _c : "0";
        message.epochId = (_d = object.epochId) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseLeaderboardEntry() {
    return { address: "", pnl: 0 };
}
export const LeaderboardEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pnl !== 0) {
            writer.uint32(17).double(message.pnl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaderboardEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag != 17) {
                        break;
                    }
                    message.pnl = reader.double();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            pnl: isSet(object.pnl) ? Number(object.pnl) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pnl !== undefined && (obj.pnl = message.pnl);
        return obj;
    },
    create(base) {
        return LeaderboardEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLeaderboardEntry();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pnl = (_b = object.pnl) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseLeaderboardEpochsRequest() {
    return { fromEpochId: undefined, toEpochId: undefined, limit: undefined };
}
export const LeaderboardEpochsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromEpochId !== undefined) {
            writer.uint32(8).uint32(message.fromEpochId);
        }
        if (message.toEpochId !== undefined) {
            writer.uint32(16).uint32(message.toEpochId);
        }
        if (message.limit !== undefined) {
            writer.uint32(24).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaderboardEpochsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.fromEpochId = reader.uint32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.toEpochId = reader.uint32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fromEpochId: isSet(object.fromEpochId) ? Number(object.fromEpochId) : undefined,
            toEpochId: isSet(object.toEpochId) ? Number(object.toEpochId) : undefined,
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromEpochId !== undefined && (obj.fromEpochId = Math.round(message.fromEpochId));
        message.toEpochId !== undefined && (obj.toEpochId = Math.round(message.toEpochId));
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return LeaderboardEpochsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLeaderboardEpochsRequest();
        message.fromEpochId = (_a = object.fromEpochId) !== null && _a !== void 0 ? _a : undefined;
        message.toEpochId = (_b = object.toEpochId) !== null && _b !== void 0 ? _b : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseLeaderboardEpochsResponse() {
    return { epochs: [], pagination: undefined };
}
export const LeaderboardEpochsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochs) {
            LeaderboardEpoch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaderboardEpochsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.epochs.push(LeaderboardEpoch.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochs: Array.isArray(object === null || object === void 0 ? void 0 : object.epochs) ? object.epochs.map((e) => LeaderboardEpoch.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map((e) => e ? LeaderboardEpoch.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return LeaderboardEpochsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLeaderboardEpochsResponse();
        message.epochs = ((_a = object.epochs) === null || _a === void 0 ? void 0 : _a.map((e) => LeaderboardEpoch.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseLeaderboardEpoch() {
    return { epochId: 0, startAt: "0", endAt: "0", isLive: false };
}
export const LeaderboardEpoch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== 0) {
            writer.uint32(8).uint32(message.epochId);
        }
        if (message.startAt !== "0") {
            writer.uint32(16).sint64(message.startAt);
        }
        if (message.endAt !== "0") {
            writer.uint32(24).sint64(message.endAt);
        }
        if (message.isLive === true) {
            writer.uint32(32).bool(message.isLive);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaderboardEpoch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.epochId = reader.uint32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.startAt = longToString(reader.sint64());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.endAt = longToString(reader.sint64());
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.isLive = reader.bool();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? Number(object.epochId) : 0,
            startAt: isSet(object.startAt) ? String(object.startAt) : "0",
            endAt: isSet(object.endAt) ? String(object.endAt) : "0",
            isLive: isSet(object.isLive) ? Boolean(object.isLive) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = Math.round(message.epochId));
        message.startAt !== undefined && (obj.startAt = message.startAt);
        message.endAt !== undefined && (obj.endAt = message.endAt);
        message.isLive !== undefined && (obj.isLive = message.isLive);
        return obj;
    },
    create(base) {
        return LeaderboardEpoch.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLeaderboardEpoch();
        message.epochId = (_a = object.epochId) !== null && _a !== void 0 ? _a : 0;
        message.startAt = (_b = object.startAt) !== null && _b !== void 0 ? _b : "0";
        message.endAt = (_c = object.endAt) !== null && _c !== void 0 ? _c : "0";
        message.isLive = (_d = object.isLive) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseTransfersHistoryRequest() {
    return { vault: undefined, account: undefined, limit: undefined, fromNumber: undefined, toNumber: undefined };
}
export const TransfersHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vault !== undefined) {
            writer.uint32(10).string(message.vault);
        }
        if (message.account !== undefined) {
            writer.uint32(18).string(message.account);
        }
        if (message.limit !== undefined) {
            writer.uint32(24).uint32(message.limit);
        }
        if (message.fromNumber !== undefined) {
            writer.uint32(32).uint32(message.fromNumber);
        }
        if (message.toNumber !== undefined) {
            writer.uint32(40).uint32(message.toNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransfersHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vault = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.fromNumber = reader.uint32();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.toNumber = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vault: isSet(object.vault) ? String(object.vault) : undefined,
            account: isSet(object.account) ? String(object.account) : undefined,
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            fromNumber: isSet(object.fromNumber) ? Number(object.fromNumber) : undefined,
            toNumber: isSet(object.toNumber) ? Number(object.toNumber) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vault !== undefined && (obj.vault = message.vault);
        message.account !== undefined && (obj.account = message.account);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.fromNumber !== undefined && (obj.fromNumber = Math.round(message.fromNumber));
        message.toNumber !== undefined && (obj.toNumber = Math.round(message.toNumber));
        return obj;
    },
    create(base) {
        return TransfersHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTransfersHistoryRequest();
        message.vault = (_a = object.vault) !== null && _a !== void 0 ? _a : undefined;
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : undefined;
        message.fromNumber = (_d = object.fromNumber) !== null && _d !== void 0 ? _d : undefined;
        message.toNumber = (_e = object.toNumber) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseTransfersHistoryResponse() {
    return { transfers: [], pagination: undefined };
}
export const TransfersHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfers) {
            Transfer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransfersHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.transfers.push(Transfer.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers) ? object.transfers.map((e) => Transfer.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e) => e ? Transfer.toJSON(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return TransfersHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTransfersHistoryResponse();
        message.transfers = ((_a = object.transfers) === null || _a === void 0 ? void 0 : _a.map((e) => Transfer.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseTransfer() {
    return {
        lpAmount: "",
        coins: [],
        usdValue: "",
        isDeposit: false,
        executedAt: "0",
        account: "",
        vault: "",
        txHash: "",
        tidByVault: 0,
        tidByAccount: 0,
    };
}
export const Transfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lpAmount !== "") {
            writer.uint32(10).string(message.lpAmount);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.usdValue !== "") {
            writer.uint32(26).string(message.usdValue);
        }
        if (message.isDeposit === true) {
            writer.uint32(32).bool(message.isDeposit);
        }
        if (message.executedAt !== "0") {
            writer.uint32(40).sint64(message.executedAt);
        }
        if (message.account !== "") {
            writer.uint32(50).string(message.account);
        }
        if (message.vault !== "") {
            writer.uint32(58).string(message.vault);
        }
        if (message.txHash !== "") {
            writer.uint32(66).string(message.txHash);
        }
        if (message.tidByVault !== 0) {
            writer.uint32(72).uint32(message.tidByVault);
        }
        if (message.tidByAccount !== 0) {
            writer.uint32(80).uint32(message.tidByAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.lpAmount = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.usdValue = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.isDeposit = reader.bool();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.executedAt = longToString(reader.sint64());
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.vault = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.txHash = reader.string();
                    continue;
                case 9:
                    if (tag != 72) {
                        break;
                    }
                    message.tidByVault = reader.uint32();
                    continue;
                case 10:
                    if (tag != 80) {
                        break;
                    }
                    message.tidByAccount = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            lpAmount: isSet(object.lpAmount) ? String(object.lpAmount) : "",
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : [],
            usdValue: isSet(object.usdValue) ? String(object.usdValue) : "",
            isDeposit: isSet(object.isDeposit) ? Boolean(object.isDeposit) : false,
            executedAt: isSet(object.executedAt) ? String(object.executedAt) : "0",
            account: isSet(object.account) ? String(object.account) : "",
            vault: isSet(object.vault) ? String(object.vault) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            tidByVault: isSet(object.tidByVault) ? Number(object.tidByVault) : 0,
            tidByAccount: isSet(object.tidByAccount) ? Number(object.tidByAccount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lpAmount !== undefined && (obj.lpAmount = message.lpAmount);
        if (message.coins) {
            obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.usdValue !== undefined && (obj.usdValue = message.usdValue);
        message.isDeposit !== undefined && (obj.isDeposit = message.isDeposit);
        message.executedAt !== undefined && (obj.executedAt = message.executedAt);
        message.account !== undefined && (obj.account = message.account);
        message.vault !== undefined && (obj.vault = message.vault);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.tidByVault !== undefined && (obj.tidByVault = Math.round(message.tidByVault));
        message.tidByAccount !== undefined && (obj.tidByAccount = Math.round(message.tidByAccount));
        return obj;
    },
    create(base) {
        return Transfer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseTransfer();
        message.lpAmount = (_a = object.lpAmount) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        message.usdValue = (_c = object.usdValue) !== null && _c !== void 0 ? _c : "";
        message.isDeposit = (_d = object.isDeposit) !== null && _d !== void 0 ? _d : false;
        message.executedAt = (_e = object.executedAt) !== null && _e !== void 0 ? _e : "0";
        message.account = (_f = object.account) !== null && _f !== void 0 ? _f : "";
        message.vault = (_g = object.vault) !== null && _g !== void 0 ? _g : "";
        message.txHash = (_h = object.txHash) !== null && _h !== void 0 ? _h : "";
        message.tidByVault = (_j = object.tidByVault) !== null && _j !== void 0 ? _j : 0;
        message.tidByAccount = (_k = object.tidByAccount) !== null && _k !== void 0 ? _k : 0;
        return message;
    },
};
function createBaseCoin() {
    return { amount: "", denom: "" };
}
export const Coin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            amount: isSet(object.amount) ? String(object.amount) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return Coin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCoin();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetStakingPoolsRequest() {
    return { staker: undefined, stakingContractAddress: "" };
}
export const GetStakingPoolsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.staker !== undefined) {
            writer.uint32(10).string(message.staker);
        }
        if (message.stakingContractAddress !== "") {
            writer.uint32(18).string(message.stakingContractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetStakingPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.staker = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.stakingContractAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            staker: isSet(object.staker) ? String(object.staker) : undefined,
            stakingContractAddress: isSet(object.stakingContractAddress) ? String(object.stakingContractAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.stakingContractAddress !== undefined && (obj.stakingContractAddress = message.stakingContractAddress);
        return obj;
    },
    create(base) {
        return GetStakingPoolsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetStakingPoolsRequest();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : undefined;
        message.stakingContractAddress = (_b = object.stakingContractAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetStakingPoolsResponse() {
    return { pools: [], pagination: undefined };
}
export const GetStakingPoolsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pools) {
            StakingPool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetStakingPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pools.push(StakingPool.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools) ? object.pools.map((e) => StakingPool.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => e ? StakingPool.toJSON(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return GetStakingPoolsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetStakingPoolsResponse();
        message.pools = ((_a = object.pools) === null || _a === void 0 ? void 0 : _a.map((e) => StakingPool.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseStakingPool() {
    return {
        vaultName: "",
        vaultAddress: "",
        stakeDenom: "",
        gauges: [],
        apr: 0,
        totalLiquidity: 0,
        stakingAddress: "",
        aprBreakdown: {},
    };
}
export const StakingPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultName !== "") {
            writer.uint32(10).string(message.vaultName);
        }
        if (message.vaultAddress !== "") {
            writer.uint32(18).string(message.vaultAddress);
        }
        if (message.stakeDenom !== "") {
            writer.uint32(26).string(message.stakeDenom);
        }
        for (const v of message.gauges) {
            Gauge.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.apr !== 0) {
            writer.uint32(41).double(message.apr);
        }
        if (message.totalLiquidity !== 0) {
            writer.uint32(49).double(message.totalLiquidity);
        }
        if (message.stakingAddress !== "") {
            writer.uint32(58).string(message.stakingAddress);
        }
        Object.entries(message.aprBreakdown).forEach(([key, value]) => {
            StakingPool_AprBreakdownEntry.encode({ key: key, value }, writer.uint32(66).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vaultName = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.stakeDenom = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.gauges.push(Gauge.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 41) {
                        break;
                    }
                    message.apr = reader.double();
                    continue;
                case 6:
                    if (tag != 49) {
                        break;
                    }
                    message.totalLiquidity = reader.double();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.stakingAddress = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    const entry8 = StakingPool_AprBreakdownEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.aprBreakdown[entry8.key] = entry8.value;
                    }
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vaultName: isSet(object.vaultName) ? String(object.vaultName) : "",
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
            stakeDenom: isSet(object.stakeDenom) ? String(object.stakeDenom) : "",
            gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges) ? object.gauges.map((e) => Gauge.fromJSON(e)) : [],
            apr: isSet(object.apr) ? Number(object.apr) : 0,
            totalLiquidity: isSet(object.totalLiquidity) ? Number(object.totalLiquidity) : 0,
            stakingAddress: isSet(object.stakingAddress) ? String(object.stakingAddress) : "",
            aprBreakdown: isObject(object.aprBreakdown)
                ? Object.entries(object.aprBreakdown).reduce((acc, [key, value]) => {
                    acc[key] = Number(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultName !== undefined && (obj.vaultName = message.vaultName);
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.stakeDenom !== undefined && (obj.stakeDenom = message.stakeDenom);
        if (message.gauges) {
            obj.gauges = message.gauges.map((e) => e ? Gauge.toJSON(e) : undefined);
        }
        else {
            obj.gauges = [];
        }
        message.apr !== undefined && (obj.apr = message.apr);
        message.totalLiquidity !== undefined && (obj.totalLiquidity = message.totalLiquidity);
        message.stakingAddress !== undefined && (obj.stakingAddress = message.stakingAddress);
        obj.aprBreakdown = {};
        if (message.aprBreakdown) {
            Object.entries(message.aprBreakdown).forEach(([k, v]) => {
                obj.aprBreakdown[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return StakingPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseStakingPool();
        message.vaultName = (_a = object.vaultName) !== null && _a !== void 0 ? _a : "";
        message.vaultAddress = (_b = object.vaultAddress) !== null && _b !== void 0 ? _b : "";
        message.stakeDenom = (_c = object.stakeDenom) !== null && _c !== void 0 ? _c : "";
        message.gauges = ((_d = object.gauges) === null || _d === void 0 ? void 0 : _d.map((e) => Gauge.fromPartial(e))) || [];
        message.apr = (_e = object.apr) !== null && _e !== void 0 ? _e : 0;
        message.totalLiquidity = (_f = object.totalLiquidity) !== null && _f !== void 0 ? _f : 0;
        message.stakingAddress = (_g = object.stakingAddress) !== null && _g !== void 0 ? _g : "";
        message.aprBreakdown = Object.entries((_h = object.aprBreakdown) !== null && _h !== void 0 ? _h : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Number(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseStakingPool_AprBreakdownEntry() {
    return { key: "", value: 0 };
}
export const StakingPool_AprBreakdownEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(17).double(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingPool_AprBreakdownEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag != 17) {
                        break;
                    }
                    message.value = reader.double();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? Number(object.value) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return StakingPool_AprBreakdownEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStakingPool_AprBreakdownEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGauge() {
    return { id: "", owner: "", startTimestamp: "0", endTimestamp: "0", rewardTokens: [], lastDistribution: 0 };
}
export const Gauge = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.startTimestamp !== "0") {
            writer.uint32(24).sint64(message.startTimestamp);
        }
        if (message.endTimestamp !== "0") {
            writer.uint32(32).sint64(message.endTimestamp);
        }
        for (const v of message.rewardTokens) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastDistribution !== 0) {
            writer.uint32(48).uint32(message.lastDistribution);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.startTimestamp = longToString(reader.sint64());
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.endTimestamp = longToString(reader.sint64());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.rewardTokens.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.lastDistribution = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            startTimestamp: isSet(object.startTimestamp) ? String(object.startTimestamp) : "0",
            endTimestamp: isSet(object.endTimestamp) ? String(object.endTimestamp) : "0",
            rewardTokens: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardTokens) ? object.rewardTokens.map((e) => Coin.fromJSON(e)) : [],
            lastDistribution: isSet(object.lastDistribution) ? Number(object.lastDistribution) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        message.startTimestamp !== undefined && (obj.startTimestamp = message.startTimestamp);
        message.endTimestamp !== undefined && (obj.endTimestamp = message.endTimestamp);
        if (message.rewardTokens) {
            obj.rewardTokens = message.rewardTokens.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewardTokens = [];
        }
        message.lastDistribution !== undefined && (obj.lastDistribution = Math.round(message.lastDistribution));
        return obj;
    },
    create(base) {
        return Gauge.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseGauge();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.startTimestamp = (_c = object.startTimestamp) !== null && _c !== void 0 ? _c : "0";
        message.endTimestamp = (_d = object.endTimestamp) !== null && _d !== void 0 ? _d : "0";
        message.rewardTokens = ((_e = object.rewardTokens) === null || _e === void 0 ? void 0 : _e.map((e) => Coin.fromPartial(e))) || [];
        message.lastDistribution = (_f = object.lastDistribution) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseStakingRewardByAccountRequest() {
    return { staker: "", stakingContractAddress: "" };
}
export const StakingRewardByAccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.stakingContractAddress !== "") {
            writer.uint32(18).string(message.stakingContractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingRewardByAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.staker = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.stakingContractAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            staker: isSet(object.staker) ? String(object.staker) : "",
            stakingContractAddress: isSet(object.stakingContractAddress) ? String(object.stakingContractAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.stakingContractAddress !== undefined && (obj.stakingContractAddress = message.stakingContractAddress);
        return obj;
    },
    create(base) {
        return StakingRewardByAccountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStakingRewardByAccountRequest();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.stakingContractAddress = (_b = object.stakingContractAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStakingRewardByAccountResponse() {
    return { rewards: [], pagination: undefined };
}
export const StakingRewardByAccountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            StakingReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingRewardByAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.rewards.push(StakingReward.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map((e) => StakingReward.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? StakingReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return StakingRewardByAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStakingRewardByAccountResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => StakingReward.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseStakingReward() {
    return {
        vaultName: "",
        vaultAddress: "",
        stakedAmount: undefined,
        apr: 0,
        claimableRewards: [],
        lockTimestamp: "0",
        lockedAmount: undefined,
    };
}
export const StakingReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultName !== "") {
            writer.uint32(10).string(message.vaultName);
        }
        if (message.vaultAddress !== "") {
            writer.uint32(18).string(message.vaultAddress);
        }
        if (message.stakedAmount !== undefined) {
            Coin.encode(message.stakedAmount, writer.uint32(26).fork()).ldelim();
        }
        if (message.apr !== 0) {
            writer.uint32(33).double(message.apr);
        }
        for (const v of message.claimableRewards) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.lockTimestamp !== "0") {
            writer.uint32(48).sint64(message.lockTimestamp);
        }
        if (message.lockedAmount !== undefined) {
            Coin.encode(message.lockedAmount, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vaultName = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.stakedAmount = Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag != 33) {
                        break;
                    }
                    message.apr = reader.double();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.claimableRewards.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.lockTimestamp = longToString(reader.sint64());
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.lockedAmount = Coin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vaultName: isSet(object.vaultName) ? String(object.vaultName) : "",
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
            stakedAmount: isSet(object.stakedAmount) ? Coin.fromJSON(object.stakedAmount) : undefined,
            apr: isSet(object.apr) ? Number(object.apr) : 0,
            claimableRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.claimableRewards)
                ? object.claimableRewards.map((e) => Coin.fromJSON(e))
                : [],
            lockTimestamp: isSet(object.lockTimestamp) ? String(object.lockTimestamp) : "0",
            lockedAmount: isSet(object.lockedAmount) ? Coin.fromJSON(object.lockedAmount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultName !== undefined && (obj.vaultName = message.vaultName);
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.stakedAmount !== undefined &&
            (obj.stakedAmount = message.stakedAmount ? Coin.toJSON(message.stakedAmount) : undefined);
        message.apr !== undefined && (obj.apr = message.apr);
        if (message.claimableRewards) {
            obj.claimableRewards = message.claimableRewards.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.claimableRewards = [];
        }
        message.lockTimestamp !== undefined && (obj.lockTimestamp = message.lockTimestamp);
        message.lockedAmount !== undefined &&
            (obj.lockedAmount = message.lockedAmount ? Coin.toJSON(message.lockedAmount) : undefined);
        return obj;
    },
    create(base) {
        return StakingReward.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseStakingReward();
        message.vaultName = (_a = object.vaultName) !== null && _a !== void 0 ? _a : "";
        message.vaultAddress = (_b = object.vaultAddress) !== null && _b !== void 0 ? _b : "";
        message.stakedAmount = (object.stakedAmount !== undefined && object.stakedAmount !== null)
            ? Coin.fromPartial(object.stakedAmount)
            : undefined;
        message.apr = (_c = object.apr) !== null && _c !== void 0 ? _c : 0;
        message.claimableRewards = ((_d = object.claimableRewards) === null || _d === void 0 ? void 0 : _d.map((e) => Coin.fromPartial(e))) || [];
        message.lockTimestamp = (_e = object.lockTimestamp) !== null && _e !== void 0 ? _e : "0";
        message.lockedAmount = (object.lockedAmount !== undefined && object.lockedAmount !== null)
            ? Coin.fromPartial(object.lockedAmount)
            : undefined;
        return message;
    },
};
function createBaseStakingHistoryRequest() {
    return { fromNumber: undefined, toNumber: undefined, limit: undefined, staker: undefined };
}
export const StakingHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromNumber !== undefined) {
            writer.uint32(8).uint32(message.fromNumber);
        }
        if (message.toNumber !== undefined) {
            writer.uint32(16).uint32(message.toNumber);
        }
        if (message.limit !== undefined) {
            writer.uint32(24).uint32(message.limit);
        }
        if (message.staker !== undefined) {
            writer.uint32(34).string(message.staker);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.fromNumber = reader.uint32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.toNumber = reader.uint32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.limit = reader.uint32();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.staker = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fromNumber: isSet(object.fromNumber) ? Number(object.fromNumber) : undefined,
            toNumber: isSet(object.toNumber) ? Number(object.toNumber) : undefined,
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            staker: isSet(object.staker) ? String(object.staker) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromNumber !== undefined && (obj.fromNumber = Math.round(message.fromNumber));
        message.toNumber !== undefined && (obj.toNumber = Math.round(message.toNumber));
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    create(base) {
        return StakingHistoryRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseStakingHistoryRequest();
        message.fromNumber = (_a = object.fromNumber) !== null && _a !== void 0 ? _a : undefined;
        message.toNumber = (_b = object.toNumber) !== null && _b !== void 0 ? _b : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : undefined;
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseStakingHistoryResponse() {
    return { activities: [], pagination: undefined };
}
export const StakingHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.activities) {
            StakingActivity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.activities.push(StakingActivity.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            activities: Array.isArray(object === null || object === void 0 ? void 0 : object.activities)
                ? object.activities.map((e) => StakingActivity.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activities) {
            obj.activities = message.activities.map((e) => e ? StakingActivity.toJSON(e) : undefined);
        }
        else {
            obj.activities = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return StakingHistoryResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStakingHistoryResponse();
        message.activities = ((_a = object.activities) === null || _a === void 0 ? void 0 : _a.map((e) => StakingActivity.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseStakingActivity() {
    return {
        stakeAmount: undefined,
        vaultAddress: "",
        action: "",
        txHash: "",
        rewardedTokens: [],
        timestamp: "0",
        staker: "",
        numberByAccount: 0,
    };
}
export const StakingActivity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stakeAmount !== undefined) {
            Coin.encode(message.stakeAmount, writer.uint32(10).fork()).ldelim();
        }
        if (message.vaultAddress !== "") {
            writer.uint32(18).string(message.vaultAddress);
        }
        if (message.action !== "") {
            writer.uint32(26).string(message.action);
        }
        if (message.txHash !== "") {
            writer.uint32(34).string(message.txHash);
        }
        for (const v of message.rewardedTokens) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== "0") {
            writer.uint32(48).sint64(message.timestamp);
        }
        if (message.staker !== "") {
            writer.uint32(58).string(message.staker);
        }
        if (message.numberByAccount !== 0) {
            writer.uint32(64).uint32(message.numberByAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingActivity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.stakeAmount = Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.txHash = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.rewardedTokens.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.timestamp = longToString(reader.sint64());
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.staker = reader.string();
                    continue;
                case 8:
                    if (tag != 64) {
                        break;
                    }
                    message.numberByAccount = reader.uint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            stakeAmount: isSet(object.stakeAmount) ? Coin.fromJSON(object.stakeAmount) : undefined,
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
            action: isSet(object.action) ? String(object.action) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            rewardedTokens: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardedTokens)
                ? object.rewardedTokens.map((e) => Coin.fromJSON(e))
                : [],
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            numberByAccount: isSet(object.numberByAccount) ? Number(object.numberByAccount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.stakeAmount !== undefined &&
            (obj.stakeAmount = message.stakeAmount ? Coin.toJSON(message.stakeAmount) : undefined);
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.action !== undefined && (obj.action = message.action);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        if (message.rewardedTokens) {
            obj.rewardedTokens = message.rewardedTokens.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewardedTokens = [];
        }
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.staker !== undefined && (obj.staker = message.staker);
        message.numberByAccount !== undefined && (obj.numberByAccount = Math.round(message.numberByAccount));
        return obj;
    },
    create(base) {
        return StakingActivity.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseStakingActivity();
        message.stakeAmount = (object.stakeAmount !== undefined && object.stakeAmount !== null)
            ? Coin.fromPartial(object.stakeAmount)
            : undefined;
        message.vaultAddress = (_a = object.vaultAddress) !== null && _a !== void 0 ? _a : "";
        message.action = (_b = object.action) !== null && _b !== void 0 ? _b : "";
        message.txHash = (_c = object.txHash) !== null && _c !== void 0 ? _c : "";
        message.rewardedTokens = ((_d = object.rewardedTokens) === null || _d === void 0 ? void 0 : _d.map((e) => Coin.fromPartial(e))) || [];
        message.timestamp = (_e = object.timestamp) !== null && _e !== void 0 ? _e : "0";
        message.staker = (_f = object.staker) !== null && _f !== void 0 ? _f : "";
        message.numberByAccount = (_g = object.numberByAccount) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBaseStreamTransfersRequest() {
    return { vault: undefined, account: undefined };
}
export const StreamTransfersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vault !== undefined) {
            writer.uint32(10).string(message.vault);
        }
        if (message.account !== undefined) {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTransfersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vault = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            vault: isSet(object.vault) ? String(object.vault) : undefined,
            account: isSet(object.account) ? String(object.account) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vault !== undefined && (obj.vault = message.vault);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return StreamTransfersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamTransfersRequest();
        message.vault = (_a = object.vault) !== null && _a !== void 0 ? _a : undefined;
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseStreamTransfersResponse() {
    return { data: undefined, opType: undefined };
}
export const StreamTransfersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            Transfer.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.opType !== undefined) {
            writer.uint32(18).string(message.opType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTransfersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.data = Transfer.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.opType = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? Transfer.fromJSON(object.data) : undefined,
            opType: isSet(object.opType) ? String(object.opType) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? Transfer.toJSON(message.data) : undefined);
        message.opType !== undefined && (obj.opType = message.opType);
        return obj;
    },
    create(base) {
        return StreamTransfersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamTransfersResponse();
        message.data = (object.data !== undefined && object.data !== null) ? Transfer.fromPartial(object.data) : undefined;
        message.opType = (_a = object.opType) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStreamVaultRequest() {
    return { vault: "" };
}
export const StreamVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vault !== "") {
            writer.uint32(10).string(message.vault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamVaultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vault = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { vault: isSet(object.vault) ? String(object.vault) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.vault !== undefined && (obj.vault = message.vault);
        return obj;
    },
    create(base) {
        return StreamVaultRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamVaultRequest();
        message.vault = (_a = object.vault) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStreamVaultResponse() {
    return { data: undefined, opType: undefined };
}
export const StreamVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            Vault.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.opType !== undefined) {
            writer.uint32(18).string(message.opType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.data = Vault.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.opType = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? Vault.fromJSON(object.data) : undefined,
            opType: isSet(object.opType) ? String(object.opType) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? Vault.toJSON(message.data) : undefined);
        message.opType !== undefined && (obj.opType = message.opType);
        return obj;
    },
    create(base) {
        return StreamVaultResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamVaultResponse();
        message.data = (object.data !== undefined && object.data !== null) ? Vault.fromPartial(object.data) : undefined;
        message.opType = (_a = object.opType) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStreamHolderSubscriptionRequest() {
    return { holderAddress: "", vaultAddress: undefined, stakingContractAddress: "" };
}
export const StreamHolderSubscriptionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.holderAddress !== "") {
            writer.uint32(10).string(message.holderAddress);
        }
        if (message.vaultAddress !== undefined) {
            writer.uint32(18).string(message.vaultAddress);
        }
        if (message.stakingContractAddress !== "") {
            writer.uint32(26).string(message.stakingContractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamHolderSubscriptionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.holderAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.vaultAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.stakingContractAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            holderAddress: isSet(object.holderAddress) ? String(object.holderAddress) : "",
            vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : undefined,
            stakingContractAddress: isSet(object.stakingContractAddress) ? String(object.stakingContractAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.holderAddress !== undefined && (obj.holderAddress = message.holderAddress);
        message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
        message.stakingContractAddress !== undefined && (obj.stakingContractAddress = message.stakingContractAddress);
        return obj;
    },
    create(base) {
        return StreamHolderSubscriptionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStreamHolderSubscriptionRequest();
        message.holderAddress = (_a = object.holderAddress) !== null && _a !== void 0 ? _a : "";
        message.vaultAddress = (_b = object.vaultAddress) !== null && _b !== void 0 ? _b : undefined;
        message.stakingContractAddress = (_c = object.stakingContractAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseStreamHolderSubscriptionResponse() {
    return { data: undefined, opType: undefined };
}
export const StreamHolderSubscriptionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            Subscription.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.opType !== undefined) {
            writer.uint32(18).string(message.opType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamHolderSubscriptionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.data = Subscription.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.opType = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? Subscription.fromJSON(object.data) : undefined,
            opType: isSet(object.opType) ? String(object.opType) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? Subscription.toJSON(message.data) : undefined);
        message.opType !== undefined && (obj.opType = message.opType);
        return obj;
    },
    create(base) {
        return StreamHolderSubscriptionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamHolderSubscriptionResponse();
        message.data = (object.data !== undefined && object.data !== null)
            ? Subscription.fromPartial(object.data)
            : undefined;
        message.opType = (_a = object.opType) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStreamStakingRewardByAccountRequest() {
    return { staker: "", stakingContractAddress: "" };
}
export const StreamStakingRewardByAccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.stakingContractAddress !== "") {
            writer.uint32(18).string(message.stakingContractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamStakingRewardByAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.staker = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.stakingContractAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            staker: isSet(object.staker) ? String(object.staker) : "",
            stakingContractAddress: isSet(object.stakingContractAddress) ? String(object.stakingContractAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.stakingContractAddress !== undefined && (obj.stakingContractAddress = message.stakingContractAddress);
        return obj;
    },
    create(base) {
        return StreamStakingRewardByAccountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamStakingRewardByAccountRequest();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.stakingContractAddress = (_b = object.stakingContractAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStreamStakingRewardByAccountResponse() {
    return { data: undefined, opType: undefined };
}
export const StreamStakingRewardByAccountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            StakingReward.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.opType !== undefined) {
            writer.uint32(18).string(message.opType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamStakingRewardByAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.data = StakingReward.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.opType = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? StakingReward.fromJSON(object.data) : undefined,
            opType: isSet(object.opType) ? String(object.opType) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? StakingReward.toJSON(message.data) : undefined);
        message.opType !== undefined && (obj.opType = message.opType);
        return obj;
    },
    create(base) {
        return StreamStakingRewardByAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamStakingRewardByAccountResponse();
        message.data = (object.data !== undefined && object.data !== null)
            ? StakingReward.fromPartial(object.data)
            : undefined;
        message.opType = (_a = object.opType) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStreamHistoricalStakingRequest() {
    return { staker: "", stakingContractAddress: "" };
}
export const StreamHistoricalStakingRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.stakingContractAddress !== "") {
            writer.uint32(18).string(message.stakingContractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamHistoricalStakingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.staker = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.stakingContractAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            staker: isSet(object.staker) ? String(object.staker) : "",
            stakingContractAddress: isSet(object.stakingContractAddress) ? String(object.stakingContractAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.stakingContractAddress !== undefined && (obj.stakingContractAddress = message.stakingContractAddress);
        return obj;
    },
    create(base) {
        return StreamHistoricalStakingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamHistoricalStakingRequest();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.stakingContractAddress = (_b = object.stakingContractAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStreamHistoricalStakingResponse() {
    return { data: undefined, opType: undefined };
}
export const StreamHistoricalStakingResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            StakingActivity.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.opType !== undefined) {
            writer.uint32(18).string(message.opType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamHistoricalStakingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.data = StakingActivity.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.opType = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data) ? StakingActivity.fromJSON(object.data) : undefined,
            opType: isSet(object.opType) ? String(object.opType) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? StakingActivity.toJSON(message.data) : undefined);
        message.opType !== undefined && (obj.opType = message.opType);
        return obj;
    },
    create(base) {
        return StreamHistoricalStakingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamHistoricalStakingResponse();
        message.data = (object.data !== undefined && object.data !== null)
            ? StakingActivity.fromPartial(object.data)
            : undefined;
        message.opType = (_a = object.opType) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseHealthRequest() {
    return {};
}
export const HealthRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return HealthRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseHealthRequest();
        return message;
    },
};
function createBaseHealthResponse() {
    return { version: "", commit: "", lastestSyncedBlock: "0", chainHeight: "0", status: "", blockDiffThreshold: 0 };
}
export const HealthResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.commit !== "") {
            writer.uint32(18).string(message.commit);
        }
        if (message.lastestSyncedBlock !== "0") {
            writer.uint32(24).sint64(message.lastestSyncedBlock);
        }
        if (message.chainHeight !== "0") {
            writer.uint32(32).sint64(message.chainHeight);
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        if (message.blockDiffThreshold !== 0) {
            writer.uint32(48).sint32(message.blockDiffThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHealthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.commit = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.lastestSyncedBlock = longToString(reader.sint64());
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.chainHeight = longToString(reader.sint64());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.blockDiffThreshold = reader.sint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : "",
            commit: isSet(object.commit) ? String(object.commit) : "",
            lastestSyncedBlock: isSet(object.lastestSyncedBlock) ? String(object.lastestSyncedBlock) : "0",
            chainHeight: isSet(object.chainHeight) ? String(object.chainHeight) : "0",
            status: isSet(object.status) ? String(object.status) : "",
            blockDiffThreshold: isSet(object.blockDiffThreshold) ? Number(object.blockDiffThreshold) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.commit !== undefined && (obj.commit = message.commit);
        message.lastestSyncedBlock !== undefined && (obj.lastestSyncedBlock = message.lastestSyncedBlock);
        message.chainHeight !== undefined && (obj.chainHeight = message.chainHeight);
        message.status !== undefined && (obj.status = message.status);
        message.blockDiffThreshold !== undefined && (obj.blockDiffThreshold = Math.round(message.blockDiffThreshold));
        return obj;
    },
    create(base) {
        return HealthResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseHealthResponse();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.commit = (_b = object.commit) !== null && _b !== void 0 ? _b : "";
        message.lastestSyncedBlock = (_c = object.lastestSyncedBlock) !== null && _c !== void 0 ? _c : "0";
        message.chainHeight = (_d = object.chainHeight) !== null && _d !== void 0 ? _d : "0";
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : "";
        message.blockDiffThreshold = (_f = object.blockDiffThreshold) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseExecutionRequest() {
    return { contractAddress: "" };
}
export const ExecutionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    create(base) {
        return ExecutionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseExecutionRequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseExecutionResponse() {
    return {
        contractAddress: "",
        currentBlock: "0",
        lastExecutedBlock: "0",
        lastErrorBlock: "0",
        executionLogs: [],
        lastErrorLog: undefined,
    };
}
export const ExecutionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.currentBlock !== "0") {
            writer.uint32(16).sint64(message.currentBlock);
        }
        if (message.lastExecutedBlock !== "0") {
            writer.uint32(24).sint64(message.lastExecutedBlock);
        }
        if (message.lastErrorBlock !== "0") {
            writer.uint32(32).sint64(message.lastErrorBlock);
        }
        for (const v of message.executionLogs) {
            ExecutionLog.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastErrorLog !== undefined) {
            ExecutionLog.encode(message.lastErrorLog, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.currentBlock = longToString(reader.sint64());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.lastExecutedBlock = longToString(reader.sint64());
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.lastErrorBlock = longToString(reader.sint64());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.executionLogs.push(ExecutionLog.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.lastErrorLog = ExecutionLog.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            currentBlock: isSet(object.currentBlock) ? String(object.currentBlock) : "0",
            lastExecutedBlock: isSet(object.lastExecutedBlock) ? String(object.lastExecutedBlock) : "0",
            lastErrorBlock: isSet(object.lastErrorBlock) ? String(object.lastErrorBlock) : "0",
            executionLogs: Array.isArray(object === null || object === void 0 ? void 0 : object.executionLogs)
                ? object.executionLogs.map((e) => ExecutionLog.fromJSON(e))
                : [],
            lastErrorLog: isSet(object.lastErrorLog) ? ExecutionLog.fromJSON(object.lastErrorLog) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.currentBlock !== undefined && (obj.currentBlock = message.currentBlock);
        message.lastExecutedBlock !== undefined && (obj.lastExecutedBlock = message.lastExecutedBlock);
        message.lastErrorBlock !== undefined && (obj.lastErrorBlock = message.lastErrorBlock);
        if (message.executionLogs) {
            obj.executionLogs = message.executionLogs.map((e) => e ? ExecutionLog.toJSON(e) : undefined);
        }
        else {
            obj.executionLogs = [];
        }
        message.lastErrorLog !== undefined &&
            (obj.lastErrorLog = message.lastErrorLog ? ExecutionLog.toJSON(message.lastErrorLog) : undefined);
        return obj;
    },
    create(base) {
        return ExecutionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseExecutionResponse();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.currentBlock = (_b = object.currentBlock) !== null && _b !== void 0 ? _b : "0";
        message.lastExecutedBlock = (_c = object.lastExecutedBlock) !== null && _c !== void 0 ? _c : "0";
        message.lastErrorBlock = (_d = object.lastErrorBlock) !== null && _d !== void 0 ? _d : "0";
        message.executionLogs = ((_e = object.executionLogs) === null || _e === void 0 ? void 0 : _e.map((e) => ExecutionLog.fromPartial(e))) || [];
        message.lastErrorLog = (object.lastErrorLog !== undefined && object.lastErrorLog !== null)
            ? ExecutionLog.fromPartial(object.lastErrorLog)
            : undefined;
        return message;
    },
};
function createBaseExecutionLog() {
    return { block: "0", response: "", error: "" };
}
export const ExecutionLog = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== "0") {
            writer.uint32(8).sint64(message.block);
        }
        if (message.response !== "") {
            writer.uint32(18).string(message.response);
        }
        if (message.error !== "") {
            writer.uint32(26).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutionLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.block = longToString(reader.sint64());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.response = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.error = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            block: isSet(object.block) ? String(object.block) : "0",
            response: isSet(object.response) ? String(object.response) : "",
            error: isSet(object.error) ? String(object.error) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block);
        message.response !== undefined && (obj.response = message.response);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    create(base) {
        return ExecutionLog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExecutionLog();
        message.block = (_a = object.block) !== null && _a !== void 0 ? _a : "0";
        message.response = (_b = object.response) !== null && _b !== void 0 ? _b : "";
        message.error = (_c = object.error) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMissionsRequest() {
    return { accountAddress: "" };
}
export const MissionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return MissionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMissionsRequest();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMissionsResponse() {
    return { data: [], rank: undefined };
}
export const MissionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.data) {
            Mission.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.rank !== undefined) {
            writer.uint32(16).sint64(message.rank);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.data.push(Mission.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.rank = longToString(reader.sint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => Mission.fromJSON(e)) : [],
            rank: isSet(object.rank) ? String(object.rank) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map((e) => e ? Mission.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.rank !== undefined && (obj.rank = message.rank);
        return obj;
    },
    create(base) {
        return MissionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMissionsResponse();
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => Mission.fromPartial(e))) || [];
        message.rank = (_b = object.rank) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseMission() {
    return { id: "", points: "0", completed: false, accruedPoints: "0", updatedAt: "0", progress: 0, expected: 0 };
}
export const Mission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.points !== "0") {
            writer.uint32(16).sint64(message.points);
        }
        if (message.completed === true) {
            writer.uint32(24).bool(message.completed);
        }
        if (message.accruedPoints !== "0") {
            writer.uint32(32).sint64(message.accruedPoints);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(40).sint64(message.updatedAt);
        }
        if (message.progress !== 0) {
            writer.uint32(49).double(message.progress);
        }
        if (message.expected !== 0) {
            writer.uint32(57).double(message.expected);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.points = longToString(reader.sint64());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.completed = reader.bool();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.accruedPoints = longToString(reader.sint64());
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.updatedAt = longToString(reader.sint64());
                    continue;
                case 6:
                    if (tag != 49) {
                        break;
                    }
                    message.progress = reader.double();
                    continue;
                case 7:
                    if (tag != 57) {
                        break;
                    }
                    message.expected = reader.double();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            points: isSet(object.points) ? String(object.points) : "0",
            completed: isSet(object.completed) ? Boolean(object.completed) : false,
            accruedPoints: isSet(object.accruedPoints) ? String(object.accruedPoints) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            progress: isSet(object.progress) ? Number(object.progress) : 0,
            expected: isSet(object.expected) ? Number(object.expected) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.points !== undefined && (obj.points = message.points);
        message.completed !== undefined && (obj.completed = message.completed);
        message.accruedPoints !== undefined && (obj.accruedPoints = message.accruedPoints);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.progress !== undefined && (obj.progress = message.progress);
        message.expected !== undefined && (obj.expected = message.expected);
        return obj;
    },
    create(base) {
        return Mission.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMission();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.points = (_b = object.points) !== null && _b !== void 0 ? _b : "0";
        message.completed = (_c = object.completed) !== null && _c !== void 0 ? _c : false;
        message.accruedPoints = (_d = object.accruedPoints) !== null && _d !== void 0 ? _d : "0";
        message.updatedAt = (_e = object.updatedAt) !== null && _e !== void 0 ? _e : "0";
        message.progress = (_f = object.progress) !== null && _f !== void 0 ? _f : 0;
        message.expected = (_g = object.expected) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBaseMissionLeaderboardRequest() {
    return { userAddress: undefined };
}
export const MissionLeaderboardRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userAddress !== undefined) {
            writer.uint32(10).string(message.userAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissionLeaderboardRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { userAddress: isSet(object.userAddress) ? String(object.userAddress) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.userAddress !== undefined && (obj.userAddress = message.userAddress);
        return obj;
    },
    create(base) {
        return MissionLeaderboardRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMissionLeaderboardRequest();
        message.userAddress = (_a = object.userAddress) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseMissionLeaderboardResponse() {
    return { data: [], updatedAt: "0", userRank: undefined };
}
export const MissionLeaderboardResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.data) {
            MissionLeaderboardEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.updatedAt !== "0") {
            writer.uint32(16).sint64(message.updatedAt);
        }
        if (message.userRank !== undefined) {
            writer.uint32(24).sint64(message.userRank);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissionLeaderboardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.data.push(MissionLeaderboardEntry.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.updatedAt = longToString(reader.sint64());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.userRank = longToString(reader.sint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => MissionLeaderboardEntry.fromJSON(e)) : [],
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            userRank: isSet(object.userRank) ? String(object.userRank) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map((e) => e ? MissionLeaderboardEntry.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.userRank !== undefined && (obj.userRank = message.userRank);
        return obj;
    },
    create(base) {
        return MissionLeaderboardResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMissionLeaderboardResponse();
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => MissionLeaderboardEntry.fromPartial(e))) || [];
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : "0";
        message.userRank = (_c = object.userRank) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseMissionLeaderboardEntry() {
    return { address: "", accruedPoints: "0" };
}
export const MissionLeaderboardEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.accruedPoints !== "0") {
            writer.uint32(16).sint64(message.accruedPoints);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissionLeaderboardEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.accruedPoints = longToString(reader.sint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            accruedPoints: isSet(object.accruedPoints) ? String(object.accruedPoints) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.accruedPoints !== undefined && (obj.accruedPoints = message.accruedPoints);
        return obj;
    },
    create(base) {
        return MissionLeaderboardEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMissionLeaderboardEntry();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.accruedPoints = (_b = object.accruedPoints) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseListIDOsRequest() {
    return {
        status: undefined,
        limit: undefined,
        toNumber: undefined,
        accountAddress: undefined,
        ownerAddress: undefined,
    };
}
export const ListIDOsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== undefined) {
            writer.uint32(10).string(message.status);
        }
        if (message.limit !== undefined) {
            writer.uint32(16).sint32(message.limit);
        }
        if (message.toNumber !== undefined) {
            writer.uint32(24).sint32(message.toNumber);
        }
        if (message.accountAddress !== undefined) {
            writer.uint32(34).string(message.accountAddress);
        }
        if (message.ownerAddress !== undefined) {
            writer.uint32(42).string(message.ownerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListIDOsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.limit = reader.sint32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.toNumber = reader.sint32();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.ownerAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? String(object.status) : undefined,
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            toNumber: isSet(object.toNumber) ? Number(object.toNumber) : undefined,
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : undefined,
            ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.toNumber !== undefined && (obj.toNumber = Math.round(message.toNumber));
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
        return obj;
    },
    create(base) {
        return ListIDOsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseListIDOsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : undefined;
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : undefined;
        message.toNumber = (_c = object.toNumber) !== null && _c !== void 0 ? _c : undefined;
        message.accountAddress = (_d = object.accountAddress) !== null && _d !== void 0 ? _d : undefined;
        message.ownerAddress = (_e = object.ownerAddress) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseListIDOsResponse() {
    return { idos: [], pagination: undefined };
}
export const ListIDOsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.idos) {
            IDO.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListIDOsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.idos.push(IDO.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            idos: Array.isArray(object === null || object === void 0 ? void 0 : object.idos) ? object.idos.map((e) => IDO.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idos) {
            obj.idos = message.idos.map((e) => e ? IDO.toJSON(e) : undefined);
        }
        else {
            obj.idos = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return ListIDOsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListIDOsResponse();
        message.idos = ((_a = object.idos) === null || _a === void 0 ? void 0 : _a.map((e) => IDO.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseIDO() {
    return {
        startTime: "0",
        endTime: "0",
        owner: "",
        status: "",
        tokenInfo: undefined,
        projectTokenAmount: "",
        quoteDenom: "",
        targetAmountInQuoteDenom: "",
        targetAmountInUsd: "",
        capPerAddress: "",
        contractAddress: "",
        subscribedAmount: "",
        tokenPrice: 0,
        isAccountWhiteListed: false,
        name: "",
        progress: [],
        stakeToSubscription: [],
        secondBeforeStartToSetQuotePrice: "0",
        useWhitelist: false,
    };
}
export const IDO = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.startTime !== "0") {
            writer.uint32(8).sint64(message.startTime);
        }
        if (message.endTime !== "0") {
            writer.uint32(16).sint64(message.endTime);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.status !== "") {
            writer.uint32(34).string(message.status);
        }
        if (message.tokenInfo !== undefined) {
            TokenInfo.encode(message.tokenInfo, writer.uint32(42).fork()).ldelim();
        }
        if (message.projectTokenAmount !== "") {
            writer.uint32(50).string(message.projectTokenAmount);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(58).string(message.quoteDenom);
        }
        if (message.targetAmountInQuoteDenom !== "") {
            writer.uint32(66).string(message.targetAmountInQuoteDenom);
        }
        if (message.targetAmountInUsd !== "") {
            writer.uint32(74).string(message.targetAmountInUsd);
        }
        if (message.capPerAddress !== "") {
            writer.uint32(82).string(message.capPerAddress);
        }
        if (message.contractAddress !== "") {
            writer.uint32(90).string(message.contractAddress);
        }
        if (message.subscribedAmount !== "") {
            writer.uint32(98).string(message.subscribedAmount);
        }
        if (message.tokenPrice !== 0) {
            writer.uint32(105).double(message.tokenPrice);
        }
        if (message.isAccountWhiteListed === true) {
            writer.uint32(112).bool(message.isAccountWhiteListed);
        }
        if (message.name !== "") {
            writer.uint32(122).string(message.name);
        }
        for (const v of message.progress) {
            IDOProgress.encode(v, writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.stakeToSubscription) {
            ArrayOfString.encode(v, writer.uint32(138).fork()).ldelim();
        }
        if (message.secondBeforeStartToSetQuotePrice !== "0") {
            writer.uint32(144).sint64(message.secondBeforeStartToSetQuotePrice);
        }
        if (message.useWhitelist === true) {
            writer.uint32(152).bool(message.useWhitelist);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDO();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.startTime = longToString(reader.sint64());
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.endTime = longToString(reader.sint64());
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.tokenInfo = TokenInfo.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.projectTokenAmount = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.targetAmountInQuoteDenom = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.targetAmountInUsd = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.capPerAddress = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.subscribedAmount = reader.string();
                    continue;
                case 13:
                    if (tag != 105) {
                        break;
                    }
                    message.tokenPrice = reader.double();
                    continue;
                case 14:
                    if (tag != 112) {
                        break;
                    }
                    message.isAccountWhiteListed = reader.bool();
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 16:
                    if (tag != 130) {
                        break;
                    }
                    message.progress.push(IDOProgress.decode(reader, reader.uint32()));
                    continue;
                case 17:
                    if (tag != 138) {
                        break;
                    }
                    message.stakeToSubscription.push(ArrayOfString.decode(reader, reader.uint32()));
                    continue;
                case 18:
                    if (tag != 144) {
                        break;
                    }
                    message.secondBeforeStartToSetQuotePrice = longToString(reader.sint64());
                    continue;
                case 19:
                    if (tag != 152) {
                        break;
                    }
                    message.useWhitelist = reader.bool();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            owner: isSet(object.owner) ? String(object.owner) : "",
            status: isSet(object.status) ? String(object.status) : "",
            tokenInfo: isSet(object.tokenInfo) ? TokenInfo.fromJSON(object.tokenInfo) : undefined,
            projectTokenAmount: isSet(object.projectTokenAmount) ? String(object.projectTokenAmount) : "",
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            targetAmountInQuoteDenom: isSet(object.targetAmountInQuoteDenom) ? String(object.targetAmountInQuoteDenom) : "",
            targetAmountInUsd: isSet(object.targetAmountInUsd) ? String(object.targetAmountInUsd) : "",
            capPerAddress: isSet(object.capPerAddress) ? String(object.capPerAddress) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            subscribedAmount: isSet(object.subscribedAmount) ? String(object.subscribedAmount) : "",
            tokenPrice: isSet(object.tokenPrice) ? Number(object.tokenPrice) : 0,
            isAccountWhiteListed: isSet(object.isAccountWhiteListed) ? Boolean(object.isAccountWhiteListed) : false,
            name: isSet(object.name) ? String(object.name) : "",
            progress: Array.isArray(object === null || object === void 0 ? void 0 : object.progress) ? object.progress.map((e) => IDOProgress.fromJSON(e)) : [],
            stakeToSubscription: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeToSubscription)
                ? object.stakeToSubscription.map((e) => ArrayOfString.fromJSON(e))
                : [],
            secondBeforeStartToSetQuotePrice: isSet(object.secondBeforeStartToSetQuotePrice)
                ? String(object.secondBeforeStartToSetQuotePrice)
                : "0",
            useWhitelist: isSet(object.useWhitelist) ? Boolean(object.useWhitelist) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.owner !== undefined && (obj.owner = message.owner);
        message.status !== undefined && (obj.status = message.status);
        message.tokenInfo !== undefined &&
            (obj.tokenInfo = message.tokenInfo ? TokenInfo.toJSON(message.tokenInfo) : undefined);
        message.projectTokenAmount !== undefined && (obj.projectTokenAmount = message.projectTokenAmount);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.targetAmountInQuoteDenom !== undefined && (obj.targetAmountInQuoteDenom = message.targetAmountInQuoteDenom);
        message.targetAmountInUsd !== undefined && (obj.targetAmountInUsd = message.targetAmountInUsd);
        message.capPerAddress !== undefined && (obj.capPerAddress = message.capPerAddress);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.subscribedAmount !== undefined && (obj.subscribedAmount = message.subscribedAmount);
        message.tokenPrice !== undefined && (obj.tokenPrice = message.tokenPrice);
        message.isAccountWhiteListed !== undefined && (obj.isAccountWhiteListed = message.isAccountWhiteListed);
        message.name !== undefined && (obj.name = message.name);
        if (message.progress) {
            obj.progress = message.progress.map((e) => e ? IDOProgress.toJSON(e) : undefined);
        }
        else {
            obj.progress = [];
        }
        if (message.stakeToSubscription) {
            obj.stakeToSubscription = message.stakeToSubscription.map((e) => e ? ArrayOfString.toJSON(e) : undefined);
        }
        else {
            obj.stakeToSubscription = [];
        }
        message.secondBeforeStartToSetQuotePrice !== undefined &&
            (obj.secondBeforeStartToSetQuotePrice = message.secondBeforeStartToSetQuotePrice);
        message.useWhitelist !== undefined && (obj.useWhitelist = message.useWhitelist);
        return obj;
    },
    create(base) {
        return IDO.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const message = createBaseIDO();
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : "0";
        message.endTime = (_b = object.endTime) !== null && _b !== void 0 ? _b : "0";
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : "";
        message.tokenInfo = (object.tokenInfo !== undefined && object.tokenInfo !== null)
            ? TokenInfo.fromPartial(object.tokenInfo)
            : undefined;
        message.projectTokenAmount = (_e = object.projectTokenAmount) !== null && _e !== void 0 ? _e : "";
        message.quoteDenom = (_f = object.quoteDenom) !== null && _f !== void 0 ? _f : "";
        message.targetAmountInQuoteDenom = (_g = object.targetAmountInQuoteDenom) !== null && _g !== void 0 ? _g : "";
        message.targetAmountInUsd = (_h = object.targetAmountInUsd) !== null && _h !== void 0 ? _h : "";
        message.capPerAddress = (_j = object.capPerAddress) !== null && _j !== void 0 ? _j : "";
        message.contractAddress = (_k = object.contractAddress) !== null && _k !== void 0 ? _k : "";
        message.subscribedAmount = (_l = object.subscribedAmount) !== null && _l !== void 0 ? _l : "";
        message.tokenPrice = (_m = object.tokenPrice) !== null && _m !== void 0 ? _m : 0;
        message.isAccountWhiteListed = (_o = object.isAccountWhiteListed) !== null && _o !== void 0 ? _o : false;
        message.name = (_p = object.name) !== null && _p !== void 0 ? _p : "";
        message.progress = ((_q = object.progress) === null || _q === void 0 ? void 0 : _q.map((e) => IDOProgress.fromPartial(e))) || [];
        message.stakeToSubscription = ((_r = object.stakeToSubscription) === null || _r === void 0 ? void 0 : _r.map((e) => ArrayOfString.fromPartial(e))) || [];
        message.secondBeforeStartToSetQuotePrice = (_s = object.secondBeforeStartToSetQuotePrice) !== null && _s !== void 0 ? _s : "0";
        message.useWhitelist = (_t = object.useWhitelist) !== null && _t !== void 0 ? _t : false;
        return message;
    },
};
function createBaseTokenInfo() {
    return { denom: "", supply: "", symbol: "", decimal: 0, logoUrl: "" };
}
export const TokenInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.supply !== "") {
            writer.uint32(18).string(message.supply);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.decimal !== 0) {
            writer.uint32(32).sint32(message.decimal);
        }
        if (message.logoUrl !== "") {
            writer.uint32(42).string(message.logoUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.supply = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.decimal = reader.sint32();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.logoUrl = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            supply: isSet(object.supply) ? String(object.supply) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimal: isSet(object.decimal) ? Number(object.decimal) : 0,
            logoUrl: isSet(object.logoUrl) ? String(object.logoUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.supply !== undefined && (obj.supply = message.supply);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
        message.logoUrl !== undefined && (obj.logoUrl = message.logoUrl);
        return obj;
    },
    create(base) {
        return TokenInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTokenInfo();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.supply = (_b = object.supply) !== null && _b !== void 0 ? _b : "";
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : "";
        message.decimal = (_d = object.decimal) !== null && _d !== void 0 ? _d : 0;
        message.logoUrl = (_e = object.logoUrl) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseIDOProgress() {
    return { status: "", timestamp: "0" };
}
export const IDOProgress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.timestamp !== "0") {
            writer.uint32(16).sint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDOProgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.timestamp = longToString(reader.sint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? String(object.status) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    create(base) {
        return IDOProgress.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIDOProgress();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseArrayOfString() {
    return { field: [] };
}
export const ArrayOfString = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.field) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArrayOfString();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.field.push(reader.string());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.field) {
            obj.field = message.field.map((e) => e);
        }
        else {
            obj.field = [];
        }
        return obj;
    },
    create(base) {
        return ArrayOfString.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseArrayOfString();
        message.field = ((_a = object.field) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseGetIDORequest() {
    return { contractAddress: "", accountAddress: undefined };
}
export const GetIDORequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.accountAddress !== undefined) {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDORequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return GetIDORequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetIDORequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseGetIDOResponse() {
    return { ido: undefined };
}
export const GetIDOResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ido !== undefined) {
            IDO.encode(message.ido, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDOResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.ido = IDO.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { ido: isSet(object.ido) ? IDO.fromJSON(object.ido) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.ido !== undefined && (obj.ido = message.ido ? IDO.toJSON(message.ido) : undefined);
        return obj;
    },
    create(base) {
        return GetIDOResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetIDOResponse();
        message.ido = (object.ido !== undefined && object.ido !== null) ? IDO.fromPartial(object.ido) : undefined;
        return message;
    },
};
function createBaseGetIDOSubscribersRequest() {
    return { contractAddress: "", limit: undefined, skip: undefined };
}
export const GetIDOSubscribersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.limit !== undefined) {
            writer.uint32(16).sint32(message.limit);
        }
        if (message.skip !== undefined) {
            writer.uint32(24).sint32(message.skip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDOSubscribersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.limit = reader.sint32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.skip = reader.sint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            skip: isSet(object.skip) ? Number(object.skip) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.skip !== undefined && (obj.skip = Math.round(message.skip));
        return obj;
    },
    create(base) {
        return GetIDOSubscribersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetIDOSubscribersRequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.limit = (_b = object.limit) !== null && _b !== void 0 ? _b : undefined;
        message.skip = (_c = object.skip) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetIDOSubscribersResponse() {
    return { subscribers: [], pagination: undefined, tokenInfo: undefined, quoteDenom: "" };
}
export const GetIDOSubscribersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.subscribers) {
            IDOSubscriber.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInfo !== undefined) {
            TokenInfo.encode(message.tokenInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.quoteDenom !== "") {
            writer.uint32(34).string(message.quoteDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDOSubscribersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.subscribers.push(IDOSubscriber.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.tokenInfo = TokenInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscribers: Array.isArray(object === null || object === void 0 ? void 0 : object.subscribers)
                ? object.subscribers.map((e) => IDOSubscriber.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
            tokenInfo: isSet(object.tokenInfo) ? TokenInfo.fromJSON(object.tokenInfo) : undefined,
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subscribers) {
            obj.subscribers = message.subscribers.map((e) => e ? IDOSubscriber.toJSON(e) : undefined);
        }
        else {
            obj.subscribers = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        message.tokenInfo !== undefined &&
            (obj.tokenInfo = message.tokenInfo ? TokenInfo.toJSON(message.tokenInfo) : undefined);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        return obj;
    },
    create(base) {
        return GetIDOSubscribersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetIDOSubscribersResponse();
        message.subscribers = ((_a = object.subscribers) === null || _a === void 0 ? void 0 : _a.map((e) => IDOSubscriber.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        message.tokenInfo = (object.tokenInfo !== undefined && object.tokenInfo !== null)
            ? TokenInfo.fromPartial(object.tokenInfo)
            : undefined;
        message.quoteDenom = (_b = object.quoteDenom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseIDOSubscriber() {
    return {
        address: "",
        subscribedCoin: undefined,
        lastSubscribeTime: "0",
        estimateTokenReceived: undefined,
        estimateLpAmount: undefined,
        estimateRefundAmount: undefined,
    };
}
export const IDOSubscriber = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subscribedCoin !== undefined) {
            Coin.encode(message.subscribedCoin, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastSubscribeTime !== "0") {
            writer.uint32(24).sint64(message.lastSubscribeTime);
        }
        if (message.estimateTokenReceived !== undefined) {
            Coin.encode(message.estimateTokenReceived, writer.uint32(34).fork()).ldelim();
        }
        if (message.estimateLpAmount !== undefined) {
            Coin.encode(message.estimateLpAmount, writer.uint32(42).fork()).ldelim();
        }
        if (message.estimateRefundAmount !== undefined) {
            Coin.encode(message.estimateRefundAmount, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDOSubscriber();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.subscribedCoin = Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.lastSubscribeTime = longToString(reader.sint64());
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.estimateTokenReceived = Coin.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.estimateLpAmount = Coin.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.estimateRefundAmount = Coin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            subscribedCoin: isSet(object.subscribedCoin) ? Coin.fromJSON(object.subscribedCoin) : undefined,
            lastSubscribeTime: isSet(object.lastSubscribeTime) ? String(object.lastSubscribeTime) : "0",
            estimateTokenReceived: isSet(object.estimateTokenReceived)
                ? Coin.fromJSON(object.estimateTokenReceived)
                : undefined,
            estimateLpAmount: isSet(object.estimateLpAmount) ? Coin.fromJSON(object.estimateLpAmount) : undefined,
            estimateRefundAmount: isSet(object.estimateRefundAmount) ? Coin.fromJSON(object.estimateRefundAmount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subscribedCoin !== undefined &&
            (obj.subscribedCoin = message.subscribedCoin ? Coin.toJSON(message.subscribedCoin) : undefined);
        message.lastSubscribeTime !== undefined && (obj.lastSubscribeTime = message.lastSubscribeTime);
        message.estimateTokenReceived !== undefined && (obj.estimateTokenReceived = message.estimateTokenReceived
            ? Coin.toJSON(message.estimateTokenReceived)
            : undefined);
        message.estimateLpAmount !== undefined &&
            (obj.estimateLpAmount = message.estimateLpAmount ? Coin.toJSON(message.estimateLpAmount) : undefined);
        message.estimateRefundAmount !== undefined &&
            (obj.estimateRefundAmount = message.estimateRefundAmount ? Coin.toJSON(message.estimateRefundAmount) : undefined);
        return obj;
    },
    create(base) {
        return IDOSubscriber.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIDOSubscriber();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.subscribedCoin = (object.subscribedCoin !== undefined && object.subscribedCoin !== null)
            ? Coin.fromPartial(object.subscribedCoin)
            : undefined;
        message.lastSubscribeTime = (_b = object.lastSubscribeTime) !== null && _b !== void 0 ? _b : "0";
        message.estimateTokenReceived =
            (object.estimateTokenReceived !== undefined && object.estimateTokenReceived !== null)
                ? Coin.fromPartial(object.estimateTokenReceived)
                : undefined;
        message.estimateLpAmount = (object.estimateLpAmount !== undefined && object.estimateLpAmount !== null)
            ? Coin.fromPartial(object.estimateLpAmount)
            : undefined;
        message.estimateRefundAmount = (object.estimateRefundAmount !== undefined && object.estimateRefundAmount !== null)
            ? Coin.fromPartial(object.estimateRefundAmount)
            : undefined;
        return message;
    },
};
function createBaseGetIDOSubscriptionRequest() {
    return { contractAddress: "", accountAddress: "" };
}
export const GetIDOSubscriptionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDOSubscriptionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return GetIDOSubscriptionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetIDOSubscriptionRequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetIDOSubscriptionResponse() {
    return { subscription: undefined };
}
export const GetIDOSubscriptionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscription !== undefined) {
            IDOSubscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDOSubscriptionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.subscription = IDOSubscription.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { subscription: isSet(object.subscription) ? IDOSubscription.fromJSON(object.subscription) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.subscription !== undefined &&
            (obj.subscription = message.subscription ? IDOSubscription.toJSON(message.subscription) : undefined);
        return obj;
    },
    create(base) {
        return GetIDOSubscriptionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetIDOSubscriptionResponse();
        message.subscription = (object.subscription !== undefined && object.subscription !== null)
            ? IDOSubscription.fromPartial(object.subscription)
            : undefined;
        return message;
    },
};
function createBaseIDOSubscription() {
    return {
        maxSubscriptionCoin: undefined,
        committedAmount: "",
        price: 0,
        claimableCoins: [],
        updatedAt: "0",
        rewardClaimed: false,
        tokenInfo: undefined,
        quoteDenom: "",
        stakedAmount: "",
        claimTxHash: undefined,
    };
}
export const IDOSubscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxSubscriptionCoin !== undefined) {
            Coin.encode(message.maxSubscriptionCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.committedAmount !== "") {
            writer.uint32(18).string(message.committedAmount);
        }
        if (message.price !== 0) {
            writer.uint32(25).double(message.price);
        }
        for (const v of message.claimableCoins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.updatedAt !== "0") {
            writer.uint32(40).sint64(message.updatedAt);
        }
        if (message.rewardClaimed === true) {
            writer.uint32(48).bool(message.rewardClaimed);
        }
        if (message.tokenInfo !== undefined) {
            TokenInfo.encode(message.tokenInfo, writer.uint32(58).fork()).ldelim();
        }
        if (message.quoteDenom !== "") {
            writer.uint32(66).string(message.quoteDenom);
        }
        if (message.stakedAmount !== "") {
            writer.uint32(74).string(message.stakedAmount);
        }
        if (message.claimTxHash !== undefined) {
            writer.uint32(82).string(message.claimTxHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDOSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.maxSubscriptionCoin = Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.committedAmount = reader.string();
                    continue;
                case 3:
                    if (tag != 25) {
                        break;
                    }
                    message.price = reader.double();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.claimableCoins.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.updatedAt = longToString(reader.sint64());
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.rewardClaimed = reader.bool();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.tokenInfo = TokenInfo.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.stakedAmount = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.claimTxHash = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            maxSubscriptionCoin: isSet(object.maxSubscriptionCoin) ? Coin.fromJSON(object.maxSubscriptionCoin) : undefined,
            committedAmount: isSet(object.committedAmount) ? String(object.committedAmount) : "",
            price: isSet(object.price) ? Number(object.price) : 0,
            claimableCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.claimableCoins)
                ? object.claimableCoins.map((e) => Coin.fromJSON(e))
                : [],
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            rewardClaimed: isSet(object.rewardClaimed) ? Boolean(object.rewardClaimed) : false,
            tokenInfo: isSet(object.tokenInfo) ? TokenInfo.fromJSON(object.tokenInfo) : undefined,
            quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
            stakedAmount: isSet(object.stakedAmount) ? String(object.stakedAmount) : "",
            claimTxHash: isSet(object.claimTxHash) ? String(object.claimTxHash) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxSubscriptionCoin !== undefined &&
            (obj.maxSubscriptionCoin = message.maxSubscriptionCoin ? Coin.toJSON(message.maxSubscriptionCoin) : undefined);
        message.committedAmount !== undefined && (obj.committedAmount = message.committedAmount);
        message.price !== undefined && (obj.price = message.price);
        if (message.claimableCoins) {
            obj.claimableCoins = message.claimableCoins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.claimableCoins = [];
        }
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.rewardClaimed !== undefined && (obj.rewardClaimed = message.rewardClaimed);
        message.tokenInfo !== undefined &&
            (obj.tokenInfo = message.tokenInfo ? TokenInfo.toJSON(message.tokenInfo) : undefined);
        message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
        message.stakedAmount !== undefined && (obj.stakedAmount = message.stakedAmount);
        message.claimTxHash !== undefined && (obj.claimTxHash = message.claimTxHash);
        return obj;
    },
    create(base) {
        return IDOSubscription.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseIDOSubscription();
        message.maxSubscriptionCoin = (object.maxSubscriptionCoin !== undefined && object.maxSubscriptionCoin !== null)
            ? Coin.fromPartial(object.maxSubscriptionCoin)
            : undefined;
        message.committedAmount = (_a = object.committedAmount) !== null && _a !== void 0 ? _a : "";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : 0;
        message.claimableCoins = ((_c = object.claimableCoins) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
        message.updatedAt = (_d = object.updatedAt) !== null && _d !== void 0 ? _d : "0";
        message.rewardClaimed = (_e = object.rewardClaimed) !== null && _e !== void 0 ? _e : false;
        message.tokenInfo = (object.tokenInfo !== undefined && object.tokenInfo !== null)
            ? TokenInfo.fromPartial(object.tokenInfo)
            : undefined;
        message.quoteDenom = (_f = object.quoteDenom) !== null && _f !== void 0 ? _f : "";
        message.stakedAmount = (_g = object.stakedAmount) !== null && _g !== void 0 ? _g : "";
        message.claimTxHash = (_h = object.claimTxHash) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
function createBaseGetIDOActivitiesRequest() {
    return { contractAddress: undefined, accountAddress: undefined, limit: undefined, toNumber: undefined };
}
export const GetIDOActivitiesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== undefined) {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.accountAddress !== undefined) {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.limit !== undefined) {
            writer.uint32(24).sint32(message.limit);
        }
        if (message.toNumber !== undefined) {
            writer.uint32(34).string(message.toNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDOActivitiesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.limit = reader.sint32();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.toNumber = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : undefined,
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : undefined,
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
            toNumber: isSet(object.toNumber) ? String(object.toNumber) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.toNumber !== undefined && (obj.toNumber = message.toNumber);
        return obj;
    },
    create(base) {
        return GetIDOActivitiesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetIDOActivitiesRequest();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : undefined;
        message.accountAddress = (_b = object.accountAddress) !== null && _b !== void 0 ? _b : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : undefined;
        message.toNumber = (_d = object.toNumber) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseGetIDOActivitiesResponse() {
    return { activities: [], pagination: undefined };
}
export const GetIDOActivitiesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.activities) {
            IDOSubscriptionActivity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetIDOActivitiesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.activities.push(IDOSubscriptionActivity.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            activities: Array.isArray(object === null || object === void 0 ? void 0 : object.activities)
                ? object.activities.map((e) => IDOSubscriptionActivity.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activities) {
            obj.activities = message.activities.map((e) => e ? IDOSubscriptionActivity.toJSON(e) : undefined);
        }
        else {
            obj.activities = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return GetIDOActivitiesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetIDOActivitiesResponse();
        message.activities = ((_a = object.activities) === null || _a === void 0 ? void 0 : _a.map((e) => IDOSubscriptionActivity.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseIDOSubscriptionActivity() {
    return { address: "", subscribedCoin: undefined, usdValue: 0, timestamp: "0", txHash: "" };
}
export const IDOSubscriptionActivity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.subscribedCoin !== undefined) {
            Coin.encode(message.subscribedCoin, writer.uint32(18).fork()).ldelim();
        }
        if (message.usdValue !== 0) {
            writer.uint32(25).double(message.usdValue);
        }
        if (message.timestamp !== "0") {
            writer.uint32(32).sint64(message.timestamp);
        }
        if (message.txHash !== "") {
            writer.uint32(42).string(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDOSubscriptionActivity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.subscribedCoin = Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag != 25) {
                        break;
                    }
                    message.usdValue = reader.double();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.timestamp = longToString(reader.sint64());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.txHash = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            subscribedCoin: isSet(object.subscribedCoin) ? Coin.fromJSON(object.subscribedCoin) : undefined,
            usdValue: isSet(object.usdValue) ? Number(object.usdValue) : 0,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.subscribedCoin !== undefined &&
            (obj.subscribedCoin = message.subscribedCoin ? Coin.toJSON(message.subscribedCoin) : undefined);
        message.usdValue !== undefined && (obj.usdValue = message.usdValue);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        return obj;
    },
    create(base) {
        return IDOSubscriptionActivity.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIDOSubscriptionActivity();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.subscribedCoin = (object.subscribedCoin !== undefined && object.subscribedCoin !== null)
            ? Coin.fromPartial(object.subscribedCoin)
            : undefined;
        message.usdValue = (_b = object.usdValue) !== null && _b !== void 0 ? _b : 0;
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : "0";
        message.txHash = (_d = object.txHash) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseGetWhitelistRequest() {
    return { idoAddress: "", skip: undefined, limit: undefined };
}
export const GetWhitelistRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.idoAddress !== "") {
            writer.uint32(10).string(message.idoAddress);
        }
        if (message.skip !== undefined) {
            writer.uint32(16).sint32(message.skip);
        }
        if (message.limit !== undefined) {
            writer.uint32(24).sint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWhitelistRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.idoAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.skip = reader.sint32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.limit = reader.sint32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            idoAddress: isSet(object.idoAddress) ? String(object.idoAddress) : "",
            skip: isSet(object.skip) ? Number(object.skip) : undefined,
            limit: isSet(object.limit) ? Number(object.limit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idoAddress !== undefined && (obj.idoAddress = message.idoAddress);
        message.skip !== undefined && (obj.skip = Math.round(message.skip));
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        return obj;
    },
    create(base) {
        return GetWhitelistRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetWhitelistRequest();
        message.idoAddress = (_a = object.idoAddress) !== null && _a !== void 0 ? _a : "";
        message.skip = (_b = object.skip) !== null && _b !== void 0 ? _b : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetWhitelistResponse() {
    return { idoAddress: undefined, accounts: [], pagination: undefined };
}
export const GetWhitelistResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.idoAddress !== undefined) {
            writer.uint32(10).string(message.idoAddress);
        }
        for (const v of message.accounts) {
            WhitelistAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWhitelistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.idoAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.accounts.push(WhitelistAccount.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            idoAddress: isSet(object.idoAddress) ? String(object.idoAddress) : undefined,
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => WhitelistAccount.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idoAddress !== undefined && (obj.idoAddress = message.idoAddress);
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e ? WhitelistAccount.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return GetWhitelistResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetWhitelistResponse();
        message.idoAddress = (_a = object.idoAddress) !== null && _a !== void 0 ? _a : undefined;
        message.accounts = ((_b = object.accounts) === null || _b === void 0 ? void 0 : _b.map((e) => WhitelistAccount.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseWhitelistAccount() {
    return { accountAddress: "", updatedAt: "0" };
}
export const WhitelistAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(16).sint64(message.updatedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.accountAddress = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.updatedAt = longToString(reader.sint64());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        return obj;
    },
    create(base) {
        return WhitelistAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseWhitelistAccount();
        message.accountAddress = (_a = object.accountAddress) !== null && _a !== void 0 ? _a : "";
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
export class MitoAPIClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetVaults = this.GetVaults.bind(this);
        this.GetVault = this.GetVault.bind(this);
        this.LPTokenPriceChart = this.LPTokenPriceChart.bind(this);
        this.TVLChart = this.TVLChart.bind(this);
        this.VaultsByHolderAddress = this.VaultsByHolderAddress.bind(this);
        this.LPHolders = this.LPHolders.bind(this);
        this.Portfolio = this.Portfolio.bind(this);
        this.Leaderboard = this.Leaderboard.bind(this);
        this.LeaderboardEpochs = this.LeaderboardEpochs.bind(this);
        this.TransfersHistory = this.TransfersHistory.bind(this);
        this.GetStakingPools = this.GetStakingPools.bind(this);
        this.StakingRewardByAccount = this.StakingRewardByAccount.bind(this);
        this.StakingHistory = this.StakingHistory.bind(this);
        this.StreamTransfers = this.StreamTransfers.bind(this);
        this.StreamVault = this.StreamVault.bind(this);
        this.StreamHolderSubscription = this.StreamHolderSubscription.bind(this);
        this.StreamStakingRewardByAccount = this.StreamStakingRewardByAccount.bind(this);
        this.StreamHistoricalStaking = this.StreamHistoricalStaking.bind(this);
        this.Health = this.Health.bind(this);
        this.Execution = this.Execution.bind(this);
        this.Missions = this.Missions.bind(this);
        this.MissionLeaderboard = this.MissionLeaderboard.bind(this);
        this.ListIDOs = this.ListIDOs.bind(this);
        this.GetIDO = this.GetIDO.bind(this);
        this.GetIDOSubscribers = this.GetIDOSubscribers.bind(this);
        this.GetIDOSubscription = this.GetIDOSubscription.bind(this);
        this.GetIDOActivities = this.GetIDOActivities.bind(this);
        this.GetWhitelist = this.GetWhitelist.bind(this);
    }
    GetVaults(request, metadata) {
        return this.rpc.unary(MitoAPIGetVaultsDesc, GetVaultsRequest.fromPartial(request), metadata);
    }
    GetVault(request, metadata) {
        return this.rpc.unary(MitoAPIGetVaultDesc, GetVaultRequest.fromPartial(request), metadata);
    }
    LPTokenPriceChart(request, metadata) {
        return this.rpc.unary(MitoAPILPTokenPriceChartDesc, LPTokenPriceChartRequest.fromPartial(request), metadata);
    }
    TVLChart(request, metadata) {
        return this.rpc.unary(MitoAPITVLChartDesc, TVLChartRequest.fromPartial(request), metadata);
    }
    VaultsByHolderAddress(request, metadata) {
        return this.rpc.unary(MitoAPIVaultsByHolderAddressDesc, VaultsByHolderAddressRequest.fromPartial(request), metadata);
    }
    LPHolders(request, metadata) {
        return this.rpc.unary(MitoAPILPHoldersDesc, LPHoldersRequest.fromPartial(request), metadata);
    }
    Portfolio(request, metadata) {
        return this.rpc.unary(MitoAPIPortfolioDesc, PortfolioRequest.fromPartial(request), metadata);
    }
    Leaderboard(request, metadata) {
        return this.rpc.unary(MitoAPILeaderboardDesc, LeaderboardRequest.fromPartial(request), metadata);
    }
    LeaderboardEpochs(request, metadata) {
        return this.rpc.unary(MitoAPILeaderboardEpochsDesc, LeaderboardEpochsRequest.fromPartial(request), metadata);
    }
    TransfersHistory(request, metadata) {
        return this.rpc.unary(MitoAPITransfersHistoryDesc, TransfersHistoryRequest.fromPartial(request), metadata);
    }
    GetStakingPools(request, metadata) {
        return this.rpc.unary(MitoAPIGetStakingPoolsDesc, GetStakingPoolsRequest.fromPartial(request), metadata);
    }
    StakingRewardByAccount(request, metadata) {
        return this.rpc.unary(MitoAPIStakingRewardByAccountDesc, StakingRewardByAccountRequest.fromPartial(request), metadata);
    }
    StakingHistory(request, metadata) {
        return this.rpc.unary(MitoAPIStakingHistoryDesc, StakingHistoryRequest.fromPartial(request), metadata);
    }
    StreamTransfers(request, metadata) {
        return this.rpc.invoke(MitoAPIStreamTransfersDesc, StreamTransfersRequest.fromPartial(request), metadata);
    }
    StreamVault(request, metadata) {
        return this.rpc.invoke(MitoAPIStreamVaultDesc, StreamVaultRequest.fromPartial(request), metadata);
    }
    StreamHolderSubscription(request, metadata) {
        return this.rpc.invoke(MitoAPIStreamHolderSubscriptionDesc, StreamHolderSubscriptionRequest.fromPartial(request), metadata);
    }
    StreamStakingRewardByAccount(request, metadata) {
        return this.rpc.invoke(MitoAPIStreamStakingRewardByAccountDesc, StreamStakingRewardByAccountRequest.fromPartial(request), metadata);
    }
    StreamHistoricalStaking(request, metadata) {
        return this.rpc.invoke(MitoAPIStreamHistoricalStakingDesc, StreamHistoricalStakingRequest.fromPartial(request), metadata);
    }
    Health(request, metadata) {
        return this.rpc.unary(MitoAPIHealthDesc, HealthRequest.fromPartial(request), metadata);
    }
    Execution(request, metadata) {
        return this.rpc.unary(MitoAPIExecutionDesc, ExecutionRequest.fromPartial(request), metadata);
    }
    Missions(request, metadata) {
        return this.rpc.unary(MitoAPIMissionsDesc, MissionsRequest.fromPartial(request), metadata);
    }
    MissionLeaderboard(request, metadata) {
        return this.rpc.unary(MitoAPIMissionLeaderboardDesc, MissionLeaderboardRequest.fromPartial(request), metadata);
    }
    ListIDOs(request, metadata) {
        return this.rpc.unary(MitoAPIListIDOsDesc, ListIDOsRequest.fromPartial(request), metadata);
    }
    GetIDO(request, metadata) {
        return this.rpc.unary(MitoAPIGetIDODesc, GetIDORequest.fromPartial(request), metadata);
    }
    GetIDOSubscribers(request, metadata) {
        return this.rpc.unary(MitoAPIGetIDOSubscribersDesc, GetIDOSubscribersRequest.fromPartial(request), metadata);
    }
    GetIDOSubscription(request, metadata) {
        return this.rpc.unary(MitoAPIGetIDOSubscriptionDesc, GetIDOSubscriptionRequest.fromPartial(request), metadata);
    }
    GetIDOActivities(request, metadata) {
        return this.rpc.unary(MitoAPIGetIDOActivitiesDesc, GetIDOActivitiesRequest.fromPartial(request), metadata);
    }
    GetWhitelist(request, metadata) {
        return this.rpc.unary(MitoAPIGetWhitelistDesc, GetWhitelistRequest.fromPartial(request), metadata);
    }
}
export const MitoAPIDesc = { serviceName: "mito_api.MitoAPI" };
export const MitoAPIGetVaultsDesc = {
    methodName: "GetVaults",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetVaultsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetVaultsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIGetVaultDesc = {
    methodName: "GetVault",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetVaultRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetVaultResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPILPTokenPriceChartDesc = {
    methodName: "LPTokenPriceChart",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return LPTokenPriceChartRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = LPTokenPriceChartResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPITVLChartDesc = {
    methodName: "TVLChart",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return TVLChartRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = TVLChartResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIVaultsByHolderAddressDesc = {
    methodName: "VaultsByHolderAddress",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return VaultsByHolderAddressRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = VaultsByHolderAddressResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPILPHoldersDesc = {
    methodName: "LPHolders",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return LPHoldersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = LPHoldersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIPortfolioDesc = {
    methodName: "Portfolio",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return PortfolioRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = PortfolioResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPILeaderboardDesc = {
    methodName: "Leaderboard",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return LeaderboardRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = LeaderboardResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPILeaderboardEpochsDesc = {
    methodName: "LeaderboardEpochs",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return LeaderboardEpochsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = LeaderboardEpochsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPITransfersHistoryDesc = {
    methodName: "TransfersHistory",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return TransfersHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = TransfersHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIGetStakingPoolsDesc = {
    methodName: "GetStakingPools",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetStakingPoolsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetStakingPoolsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIStakingRewardByAccountDesc = {
    methodName: "StakingRewardByAccount",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return StakingRewardByAccountRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StakingRewardByAccountResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIStakingHistoryDesc = {
    methodName: "StakingHistory",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return StakingHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StakingHistoryResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIStreamTransfersDesc = {
    methodName: "StreamTransfers",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamTransfersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamTransfersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIStreamVaultDesc = {
    methodName: "StreamVault",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamVaultRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamVaultResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIStreamHolderSubscriptionDesc = {
    methodName: "StreamHolderSubscription",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamHolderSubscriptionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamHolderSubscriptionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIStreamStakingRewardByAccountDesc = {
    methodName: "StreamStakingRewardByAccount",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamStakingRewardByAccountRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamStakingRewardByAccountResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIStreamHistoricalStakingDesc = {
    methodName: "StreamHistoricalStaking",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: true,
    requestType: {
        serializeBinary() {
            return StreamHistoricalStakingRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = StreamHistoricalStakingResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIHealthDesc = {
    methodName: "Health",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return HealthRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = HealthResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIExecutionDesc = {
    methodName: "Execution",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return ExecutionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = ExecutionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIMissionsDesc = {
    methodName: "Missions",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MissionsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MissionsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIMissionLeaderboardDesc = {
    methodName: "MissionLeaderboard",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return MissionLeaderboardRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = MissionLeaderboardResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIListIDOsDesc = {
    methodName: "ListIDOs",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return ListIDOsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = ListIDOsResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIGetIDODesc = {
    methodName: "GetIDO",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetIDORequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetIDOResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIGetIDOSubscribersDesc = {
    methodName: "GetIDOSubscribers",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetIDOSubscribersRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetIDOSubscribersResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIGetIDOSubscriptionDesc = {
    methodName: "GetIDOSubscription",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetIDOSubscriptionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetIDOSubscriptionResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIGetIDOActivitiesDesc = {
    methodName: "GetIDOActivities",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetIDOActivitiesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetIDOActivitiesResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export const MitoAPIGetWhitelistDesc = {
    methodName: "GetWhitelist",
    service: MitoAPIDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetWhitelistRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetWhitelistResponse.decode(data);
            return Object.assign(Object.assign({}, value), { toObject() {
                    return value;
                } });
        },
    },
};
export class GrpcWebImpl {
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        var _a;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc.Code.OK) {
                        resolve(response.message.toObject());
                    }
                    else {
                        const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
                        reject(err);
                    }
                },
            });
        });
    }
    invoke(methodDesc, _request, metadata) {
        var _a;
        const upStreamCodes = this.options.upStreamRetryCodes || [];
        const DEFAULT_TIMEOUT_TIME = 3000;
        const request = Object.assign(Object.assign({}, _request), methodDesc.requestType);
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(Object.assign(Object.assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Observable((observer) => {
            const upStream = (() => {
                const client = grpc.invoke(methodDesc, {
                    host: this.host,
                    request,
                    transport: this.options.streamingTransport || this.options.transport,
                    metadata: maybeCombinedMetadata,
                    debug: this.options.debug,
                    onMessage: (next) => observer.next(next),
                    onEnd: (code, message, trailers) => {
                        if (code === 0) {
                            observer.complete();
                        }
                        else if (upStreamCodes.includes(code)) {
                            setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
                        }
                        else {
                            const err = new Error(message);
                            err.code = code;
                            err.metadata = trailers;
                            observer.error(err);
                        }
                    },
                });
                observer.add(() => {
                    if (!observer.closed) {
                        return client.close();
                    }
                });
            });
            upStream();
        }).pipe(share());
    }
}
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
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
export class GrpcWebError extends tsProtoGlobalThis.Error {
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
