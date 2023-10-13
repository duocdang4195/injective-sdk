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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const token_metadata_1 = require("@injectivelabs/token-metadata");
const utils_1 = require("@injectivelabs/utils");
const DenomClientAsync_1 = require("../denom/DenomClientAsync");
/**
 * With the TokenService class we can convert objects
 * with denoms to append token metadata information
 */
class TokenService {
    constructor({ chainId, network, endpoints, alchemyRpcUrl, }) {
        this.network = network;
        this.chainId = chainId;
        this.denomClient = new DenomClientAsync_1.DenomClientAsync(network, {
            endpoints,
            alchemyRpcUrl,
        });
    }
    toCoinsWithToken(supply) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokens = yield (0, utils_1.awaitForAll)(supply, (coin) => this.denomClient.getDenomToken(coin.denom));
            return tokens.filter((token) => token);
        });
    }
    toSupplyWithToken(supply) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.toCoinsWithToken(supply);
        });
    }
    toBalancesWithToken(balances, ibcBalances) {
        return __awaiter(this, void 0, void 0, function* () {
            const bankBalancesWithToken = (yield (0, utils_1.awaitForAll)(Object.keys(balances), (denom) => __awaiter(this, void 0, void 0, function* () {
                return ({
                    denom,
                    balance: balances[denom],
                    token: yield this.denomClient.getDenomToken(denom),
                });
            }))).filter((balance) => balance.token !== undefined);
            const ibcBankBalancesWithToken = (yield (0, utils_1.awaitForAll)(Object.keys(ibcBalances), (denom) => __awaiter(this, void 0, void 0, function* () {
                return {
                    denom,
                    balance: ibcBalances[denom],
                    token: yield this.denomClient.getDenomToken(denom),
                };
            }))).filter((balance) => balance.token !== undefined);
            return {
                bankBalancesWithToken,
                ibcBankBalancesWithToken,
            };
        });
    }
    toCw20BalancesWithToken(cw20Balances) {
        return __awaiter(this, void 0, void 0, function* () {
            const balancesWithToken = yield (0, utils_1.awaitForAll)(cw20Balances, (balance) => __awaiter(this, void 0, void 0, function* () {
                const token = yield this.denomClient.getDenomToken(balance.contractAddress);
                if (!token) {
                    return;
                }
                return Object.assign(Object.assign({}, balance), { token, denom: token.denom });
            }));
            return balancesWithToken.filter((balance) => balance);
        });
    }
    toContractCw20BalancesWithToken({ contractAddress, contractAccountsBalance, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.denomClient.getDenomToken(contractAddress);
            const defaultToken = {
                name: contractAddress,
                logo: '',
                denom: contractAddress,
                tokenType: token_metadata_1.TokenType.Cw20,
            };
            // When token can't be fetched from the token-metadata, we use a default token.
            const tokenOrDefaultToken = token || defaultToken;
            return contractAccountsBalance.map((balance) => {
                return Object.assign(Object.assign({}, balance), { token: tokenOrDefaultToken, denom: tokenOrDefaultToken.denom || contractAddress });
            });
        });
    }
    toSubaccountBalanceWithToken(balance) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                token: (yield this.denomClient.getDenomToken(balance.denom)),
                denom: balance.denom,
                availableBalance: balance.availableBalance,
                totalBalance: balance.totalBalance,
            };
        });
    }
    toSubaccountBalancesWithToken(balances) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, utils_1.awaitForAll)(balances, this.toSubaccountBalanceWithToken.bind(this))).filter((balance) => balance.token !== undefined);
        });
    }
    toSpotMarketWithToken(market) {
        return __awaiter(this, void 0, void 0, function* () {
            const baseToken = yield this.denomClient.getDenomToken(market.baseDenom);
            const quoteToken = yield this.denomClient.getDenomToken(market.quoteDenom);
            const slug = baseToken && quoteToken
                ? `${baseToken.symbol.toLowerCase()}-${quoteToken.symbol.toLowerCase()}`
                : market.ticker.replace('/', '-').replace(' ', '-').toLowerCase();
            return Object.assign(Object.assign({}, market), { slug,
                baseToken,
                quoteToken });
        });
    }
    toSpotMarketsWithToken(markets) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, utils_1.awaitForAll)(markets, this.toSpotMarketWithToken.bind(this))).filter((market) => market.baseToken !== undefined && market.quoteToken !== undefined);
        });
    }
    toDerivativeMarketWithToken(market) {
        return __awaiter(this, void 0, void 0, function* () {
            const slug = market.ticker
                .replaceAll('/', '-')
                .replaceAll(' ', '-')
                .toLowerCase();
            const [baseTokenSymbol] = slug.split('-');
            const baseToken = yield this.denomClient.getDenomToken(baseTokenSymbol);
            const quoteToken = yield this.denomClient.getDenomToken(market.quoteDenom);
            return Object.assign(Object.assign({}, market), { slug,
                baseToken,
                quoteToken });
        });
    }
    toDerivativeMarketsWithToken(markets) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, utils_1.awaitForAll)(markets, this.toDerivativeMarketWithToken.bind(this))).filter((market) => market.baseToken !== undefined && market.quoteToken !== undefined);
        });
    }
    toBinaryOptionsMarketWithToken(market) {
        return __awaiter(this, void 0, void 0, function* () {
            const quoteToken = yield this.denomClient.getDenomToken(market.quoteDenom);
            const slug = market.ticker
                .replaceAll('/', '-')
                .replaceAll(' ', '-')
                .toLowerCase();
            const [baseTokenSymbol] = quoteToken
                ? market.ticker.replace(quoteToken.symbol, '')
                : market.ticker.replace('/', '');
            const baseToken = {
                denom: slug,
                logo: 'injective-v3.svg',
                icon: 'injective-v3.svg',
                symbol: baseTokenSymbol,
                name: baseTokenSymbol,
                decimals: 18,
                coinGeckoId: '',
                tokenType: token_metadata_1.TokenType.Native,
            };
            return Object.assign(Object.assign({}, market), { slug,
                baseToken,
                quoteToken });
        });
    }
    toBinaryOptionsMarketsWithToken(markets) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, utils_1.awaitForAll)(markets, this.toBinaryOptionsMarketWithToken.bind(this))).filter((market) => market.baseToken !== undefined && market.quoteToken !== undefined);
        });
    }
    toBridgeTransactionWithToken(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionExists = transaction && transaction.denom && Object.keys(transaction).length > 0;
            if (!transactionExists) {
                return {};
            }
            /**
             * Transferring native INJ from IBC chain
             * to Injective (ex: Osmosis -> Injective)
             */
            if (transaction.denom.startsWith('transfer') &&
                transaction.denom.endsWith('inj')) {
                return Object.assign(Object.assign({}, transaction), { token: (yield this.denomClient.getDenomToken('INJ')) });
            }
            const tokenFromDenomAsSymbol = (yield this.denomClient.getDenomToken(transaction.denom));
            if (tokenFromDenomAsSymbol) {
                return Object.assign(Object.assign({}, transaction), { token: tokenFromDenomAsSymbol });
            }
            return Object.assign(Object.assign({}, transaction), { token: (0, token_metadata_1.getUnknownTokenWithSymbol)(transaction.denom) });
        });
    }
    toBridgeTransactionsWithToken(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, utils_1.awaitForAll)(transactions, this.toBridgeTransactionWithToken.bind(this))).filter((transaction) => transaction && transaction.token !== undefined);
        });
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=TokenService.js.map