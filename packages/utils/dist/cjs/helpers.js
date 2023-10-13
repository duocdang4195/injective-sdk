"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultStdFee = exports.getStdFee = exports.getStdFeeForToken = exports.splitArrayToChunks = exports.awaitForAll = exports.awaitAll = exports.sleep = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const constants_1 = require("./constants");
const BigNumberInBase_1 = __importDefault(require("./classes/BigNumber/BigNumberInBase"));
const BigNumberInWei_1 = __importDefault(require("./classes/BigNumber/BigNumberInWei"));
const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
exports.sleep = sleep;
/**
 * When we want to execute the promises in batch
 */
const awaitAll = (array, callback) => __awaiter(void 0, void 0, void 0, function* () { return yield Promise.all(array.map((item) => __awaiter(void 0, void 0, void 0, function* () { return yield callback(item); }))); });
exports.awaitAll = awaitAll;
/**
 * When we want to execute the promises one by one
 * and not all in batch as with await Promise.all()
 */
const awaitForAll = (array, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        try {
            result.push(yield callback(array[i]));
        }
        catch (e) {
            //
        }
    }
    return result;
});
exports.awaitForAll = awaitForAll;
const splitArrayToChunks = ({ array, chunkSize, filter, }) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        if (filter) {
            chunks.push(chunk.filter(filter));
        }
        else {
            chunks.push(chunk);
        }
    }
    return chunks;
};
exports.splitArrayToChunks = splitArrayToChunks;
const getStdFeeForToken = (token = { denom: 'inj', decimals: 18 }, gasPrice, gasLimit) => {
    const gasPriceInBase = gasPrice || new BigNumberInWei_1.default(constants_1.DEFAULT_GAS_PRICE).toBase();
    const gasPriceScaled = new BigNumberInBase_1.default(gasPriceInBase).toWei(token.decimals);
    return {
        amount: [
            {
                denom: token.denom,
                amount: gasPriceScaled.times(constants_1.DEFAULT_GAS_LIMIT).toFixed(),
            },
        ],
        gas: (gasLimit || constants_1.DEFAULT_GAS_LIMIT).toString(),
    };
};
exports.getStdFeeForToken = getStdFeeForToken;
const getStdFee = ({ gas = constants_1.DEFAULT_GAS_LIMIT.toString(), gasPrice = constants_1.DEFAULT_GAS_PRICE, payer, granter, feePayer, }) => ({
    amount: [
        {
            denom: 'inj',
            amount: new bignumber_js_1.default(gas).times(gasPrice).toString(),
        },
    ],
    gas: gas.toString(),
    payer /** for Web3Gateway fee delegation */,
    granter,
    feePayer,
});
exports.getStdFee = getStdFee;
const getDefaultStdFee = () => constants_1.DEFAULT_STD_FEE;
exports.getDefaultStdFee = getDefaultStdFee;
//# sourceMappingURL=helpers.js.map