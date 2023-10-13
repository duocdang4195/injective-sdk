import { HttpClient, BigNumber, BigNumberInWei, BigNumberInBase, } from '@injectivelabs/utils';
import { Network, isTestnetOrDevnet, isMainnet } from '@injectivelabs/networks';
import { GWEI_IN_WEI, DEFAULT_GAS_PRICE, DEFAULT_MAINNET_GAS_PRICE, } from '../../constants';
import { HttpRequestException } from '@injectivelabs/exceptions';
import { Network as AlchemyNetwork, Alchemy } from 'alchemy-sdk';
import { fetchEstimatorGasPrice } from './estimator';
const fetchGasPriceFromAlchemy = async (key, network = Network.Mainnet) => {
    try {
        const settings = {
            apiKey: key,
            network: isMainnet(network)
                ? AlchemyNetwork.ETH_MAINNET
                : AlchemyNetwork.ETH_GOERLI,
        };
        const alchemy = new Alchemy(settings);
        const response = await alchemy.core.getFeeData();
        if (!response) {
            throw new HttpRequestException(new Error('No response from Alchemy'));
        }
        if (response.maxFeePerGas) {
            return response.maxFeePerGas.toString();
        }
        const gasPrice = await alchemy.core.getGasPrice();
        if (!gasPrice) {
            throw new HttpRequestException(new Error('No gas price response from Alchemy'));
        }
        return new BigNumberInBase(gasPrice.toString()).toFixed();
    }
    catch (e) {
        if (e instanceof HttpRequestException) {
            throw e;
        }
        throw new HttpRequestException(new Error(e.message));
    }
};
const fetchGasPriceFromEtherchain = async () => {
    try {
        const response = (await new HttpClient('https://www.etherchain.org/api/').get('gasPriceOracle'));
        if (!response || (response && !response.data)) {
            throw new HttpRequestException(new Error('No response from Etherchain'));
        }
        return new BigNumberInWei(new BigNumber(response.data.recommendedBaseFee).multipliedBy(GWEI_IN_WEI)).toFixed(0);
    }
    catch (e) {
        if (e instanceof HttpRequestException) {
            throw e;
        }
        throw new HttpRequestException(new Error(e.message));
    }
};
const fetchGasPriceFromEthGasStation = async () => {
    try {
        const response = (await new HttpClient('https://ethgasstation.info/json').get('ethgasAPI.json'));
        if (!response || (response && !response.data)) {
            throw new HttpRequestException(new Error('No response from Ethgasstation'));
        }
        return new BigNumberInWei(new BigNumber(response.data.fastest / 10)
            .times(2.125)
            .multipliedBy(GWEI_IN_WEI)).toFixed(0);
    }
    catch (e) {
        if (e instanceof HttpRequestException) {
            throw e;
        }
        throw new HttpRequestException(new Error(e.message));
    }
};
export const fetchGasPrice = async (network, options) => {
    if (options && options.alchemyKey) {
        try {
            const gasPrice = await fetchEstimatorGasPrice(options.alchemyKey, network);
            if (gasPrice) {
                return gasPrice.fast.toString();
            }
        }
        catch (e) {
            //
        }
        try {
            const gasPrice = await fetchGasPriceFromAlchemy(options.alchemyKey, network);
            if (gasPrice) {
                return gasPrice.toString();
            }
        }
        catch (e) {
            //
        }
    }
    if (isTestnetOrDevnet(network)) {
        return new BigNumberInWei(DEFAULT_GAS_PRICE).toFixed(0);
    }
    try {
        const gasPrice = await fetchGasPriceFromEtherchain();
        if (gasPrice) {
            return gasPrice.toString();
        }
    }
    catch (e) {
        //
    }
    try {
        const gasPrice = await fetchGasPriceFromEthGasStation();
        if (gasPrice) {
            return gasPrice.toString();
        }
    }
    catch (e) {
        //
    }
    return new BigNumberInWei(DEFAULT_MAINNET_GAS_PRICE).toString();
};
//# sourceMappingURL=index.js.map