import BigNumber from 'bignumber.js';
import { DEFAULT_STD_FEE, DEFAULT_GAS_LIMIT, DEFAULT_GAS_PRICE, } from './constants';
import BigNumberInBase from './classes/BigNumber/BigNumberInBase';
import BigNumberInWei from './classes/BigNumber/BigNumberInWei';
export const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
/**
 * When we want to execute the promises in batch
 */
export const awaitAll = async (array, callback) => await Promise.all(array.map(async (item) => await callback(item)));
/**
 * When we want to execute the promises one by one
 * and not all in batch as with await Promise.all()
 */
export const awaitForAll = async (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        try {
            result.push(await callback(array[i]));
        }
        catch (e) {
            //
        }
    }
    return result;
};
export const splitArrayToChunks = ({ array, chunkSize, filter, }) => {
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
export const getStdFeeForToken = (token = { denom: 'inj', decimals: 18 }, gasPrice, gasLimit) => {
    const gasPriceInBase = gasPrice || new BigNumberInWei(DEFAULT_GAS_PRICE).toBase();
    const gasPriceScaled = new BigNumberInBase(gasPriceInBase).toWei(token.decimals);
    return {
        amount: [
            {
                denom: token.denom,
                amount: gasPriceScaled.times(DEFAULT_GAS_LIMIT).toFixed(),
            },
        ],
        gas: (gasLimit || DEFAULT_GAS_LIMIT).toString(),
    };
};
export const getStdFee = ({ gas = DEFAULT_GAS_LIMIT.toString(), gasPrice = DEFAULT_GAS_PRICE, payer, granter, feePayer, }) => ({
    amount: [
        {
            denom: 'inj',
            amount: new BigNumber(gas).times(gasPrice).toString(),
        },
    ],
    gas: gas.toString(),
    payer /** for Web3Gateway fee delegation */,
    granter,
    feePayer,
});
export const getDefaultStdFee = () => DEFAULT_STD_FEE;
//# sourceMappingURL=helpers.js.map