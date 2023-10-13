"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEVNET_ASSET_PRICE_SERVICE_URL = exports.ASSET_PRICE_SERVICE_URL = exports.peggyGraphQlEndpointForNetwork = exports.PEGGY_DEVNET2_GRAPH_URL = exports.PEGGY_DEVNET1_GRAPH_URL = exports.PEGGY_DEVNET_GRAPH_URL = exports.PEGGY_TESTNET_GRAPH_URL = exports.PEGGY_GRAPH_URL = exports.NUMBER_REGEX = exports.UI_MINIMAL_AMOUNT = exports.DEFAULT_PAGINATION_TOTAL_COUNT = exports.PAGINATION_TOTAL_PAGE_LIMIT = exports.BRIDGE_FEE_IN_USD = exports.INJ_FEE_BUFFER = exports.BIG_NUMBER_ROUND_UP_MODE = exports.BIG_NUMBER_ROUND_DOWN_MODE = exports.TIP_IN_GWEI = exports.DEFAULT_MAINNET_GAS_PRICE = exports.DEFAULT_GAS_PRICE = exports.TX_DEFAULTS_GAS = exports.GWEI_IN_WEI = exports.SECONDS_IN_A_DAY = exports.NULL_BYTES = exports.ZERO_MARKET_ID = exports.ZERO_BYTES_32 = exports.ZERO_ADDRESS = exports.UNLIMITED_ALLOWANCE = exports.ZERO_IN_BASE = exports.ZERO_IN_WEI = exports.ZERO_TO_STRING = exports.ZERO = exports.GAS_LIMIT_MULTIPLIER = exports.BITCOIN_GECKO_ID = exports.INJ_COIN_GECKO_ID = exports.INJECTIVE_DENOM = exports.INJ_DENOM = void 0;
const utils_1 = require("@injectivelabs/utils");
const networks_1 = require("@injectivelabs/networks");
exports.INJ_DENOM = 'inj';
exports.INJECTIVE_DENOM = 'inj';
exports.INJ_COIN_GECKO_ID = 'injective-protocol';
exports.BITCOIN_GECKO_ID = 'bitcoin';
exports.GAS_LIMIT_MULTIPLIER = 1.2;
exports.ZERO = new utils_1.BigNumber(0);
exports.ZERO_TO_STRING = '0';
exports.ZERO_IN_WEI = new utils_1.BigNumberInWei(0);
exports.ZERO_IN_BASE = new utils_1.BigNumberInBase(0);
exports.UNLIMITED_ALLOWANCE = new utils_1.BigNumber(2).pow(256).minus(1);
exports.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
exports.ZERO_BYTES_32 = '0x0000000000000000000000000000000000000000000000000000000000000000';
exports.ZERO_MARKET_ID = '0x000000000000000000000000000000000000000000000000000000000000000000000000';
exports.NULL_BYTES = '0x';
exports.SECONDS_IN_A_DAY = new utils_1.BigNumber(60 * 60 * 24);
exports.GWEI_IN_WEI = new utils_1.BigNumber(1000000000);
exports.TX_DEFAULTS_GAS = 80000000;
exports.DEFAULT_GAS_PRICE = new utils_1.BigNumber(120).times(exports.GWEI_IN_WEI);
exports.DEFAULT_MAINNET_GAS_PRICE = new utils_1.BigNumber(30).times(exports.GWEI_IN_WEI);
exports.TIP_IN_GWEI = new utils_1.BigNumberInBase(2).times(exports.GWEI_IN_WEI);
exports.BIG_NUMBER_ROUND_DOWN_MODE = utils_1.BigNumberInBase.ROUND_DOWN;
exports.BIG_NUMBER_ROUND_UP_MODE = utils_1.BigNumberInBase.ROUND_UP;
exports.INJ_FEE_BUFFER = 0.01;
exports.BRIDGE_FEE_IN_USD = 10;
exports.PAGINATION_TOTAL_PAGE_LIMIT = 10000;
exports.DEFAULT_PAGINATION_TOTAL_COUNT = 1000000;
exports.UI_MINIMAL_AMOUNT = 0.0001;
// eslint-disable-next-line prefer-regex-literals
exports.NUMBER_REGEX = new RegExp(/^-?(0|[1-9]\d*)?(\.\d+)?$/);
exports.PEGGY_GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/injectivelabs/injective-peggo-mainnet';
exports.PEGGY_TESTNET_GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/injectivelabs/injective-peggo-goerli';
exports.PEGGY_DEVNET_GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/injectivelabsdev/injective-peggo-devnet';
exports.PEGGY_DEVNET1_GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/injectivelabsdev/injective-peggo-devnet';
exports.PEGGY_DEVNET2_GRAPH_URL = 'https://api.thegraph.com/subgraphs/name/injectivelabsdev/injective-peggo-devnet';
const peggyGraphQlEndpointForNetwork = (network) => {
    if (network === networks_1.Network.Devnet) {
        return exports.PEGGY_DEVNET_GRAPH_URL;
    }
    if (network === networks_1.Network.Devnet1) {
        return exports.PEGGY_DEVNET1_GRAPH_URL;
    }
    if (network === networks_1.Network.Devnet2) {
        return exports.PEGGY_DEVNET2_GRAPH_URL;
    }
    if ((0, networks_1.isTestnet)(network)) {
        return exports.PEGGY_TESTNET_GRAPH_URL;
    }
    return exports.PEGGY_GRAPH_URL;
};
exports.peggyGraphQlEndpointForNetwork = peggyGraphQlEndpointForNetwork;
exports.ASSET_PRICE_SERVICE_URL = 'https://k8s.mainnet.asset.injective.network/asset-price/v1';
exports.DEVNET_ASSET_PRICE_SERVICE_URL = 'https://devnet.api.injective.dev/asset-price/v1';
//# sourceMappingURL=constants.js.map