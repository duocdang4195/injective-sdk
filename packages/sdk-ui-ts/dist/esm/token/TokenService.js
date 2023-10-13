import { TokenType, getUnknownTokenWithSymbol, } from '@injectivelabs/token-metadata';
import { awaitForAll } from '@injectivelabs/utils';
import { DenomClientAsync } from '../denom/DenomClientAsync';
/**
 * With the TokenService class we can convert objects
 * with denoms to append token metadata information
 */
export class TokenService {
    network;
    chainId;
    denomClient;
    constructor({ chainId, network, endpoints, alchemyRpcUrl, }) {
        this.network = network;
        this.chainId = chainId;
        this.denomClient = new DenomClientAsync(network, {
            endpoints,
            alchemyRpcUrl,
        });
    }
    async toCoinsWithToken(supply) {
        const tokens = await awaitForAll(supply, (coin) => this.denomClient.getDenomToken(coin.denom));
        return tokens.filter((token) => token);
    }
    async toSupplyWithToken(supply) {
        return this.toCoinsWithToken(supply);
    }
    async toBalancesWithToken(balances, ibcBalances) {
        const bankBalancesWithToken = (await awaitForAll(Object.keys(balances), async (denom) => ({
            denom,
            balance: balances[denom],
            token: await this.denomClient.getDenomToken(denom),
        }))).filter((balance) => balance.token !== undefined);
        const ibcBankBalancesWithToken = (await awaitForAll(Object.keys(ibcBalances), async (denom) => {
            return {
                denom,
                balance: ibcBalances[denom],
                token: await this.denomClient.getDenomToken(denom),
            };
        })).filter((balance) => balance.token !== undefined);
        return {
            bankBalancesWithToken,
            ibcBankBalancesWithToken,
        };
    }
    async toCw20BalancesWithToken(cw20Balances) {
        const balancesWithToken = await awaitForAll(cw20Balances, async (balance) => {
            const token = await this.denomClient.getDenomToken(balance.contractAddress);
            if (!token) {
                return;
            }
            return {
                ...balance,
                token,
                denom: token.denom,
            };
        });
        return balancesWithToken.filter((balance) => balance);
    }
    async toContractCw20BalancesWithToken({ contractAddress, contractAccountsBalance, }) {
        const token = await this.denomClient.getDenomToken(contractAddress);
        const defaultToken = {
            name: contractAddress,
            logo: '',
            denom: contractAddress,
            tokenType: TokenType.Cw20,
        };
        // When token can't be fetched from the token-metadata, we use a default token.
        const tokenOrDefaultToken = token || defaultToken;
        return contractAccountsBalance.map((balance) => {
            return {
                ...balance,
                token: tokenOrDefaultToken,
                denom: tokenOrDefaultToken.denom || contractAddress,
            };
        });
    }
    async toSubaccountBalanceWithToken(balance) {
        return {
            token: (await this.denomClient.getDenomToken(balance.denom)),
            denom: balance.denom,
            availableBalance: balance.availableBalance,
            totalBalance: balance.totalBalance,
        };
    }
    async toSubaccountBalancesWithToken(balances) {
        return (await awaitForAll(balances, this.toSubaccountBalanceWithToken.bind(this))).filter((balance) => balance.token !== undefined);
    }
    async toSpotMarketWithToken(market) {
        const baseToken = await this.denomClient.getDenomToken(market.baseDenom);
        const quoteToken = await this.denomClient.getDenomToken(market.quoteDenom);
        const slug = baseToken && quoteToken
            ? `${baseToken.symbol.toLowerCase()}-${quoteToken.symbol.toLowerCase()}`
            : market.ticker.replace('/', '-').replace(' ', '-').toLowerCase();
        return {
            ...market,
            slug,
            baseToken,
            quoteToken,
        };
    }
    async toSpotMarketsWithToken(markets) {
        return (await awaitForAll(markets, this.toSpotMarketWithToken.bind(this))).filter((market) => market.baseToken !== undefined && market.quoteToken !== undefined);
    }
    async toDerivativeMarketWithToken(market) {
        const slug = market.ticker
            .replaceAll('/', '-')
            .replaceAll(' ', '-')
            .toLowerCase();
        const [baseTokenSymbol] = slug.split('-');
        const baseToken = await this.denomClient.getDenomToken(baseTokenSymbol);
        const quoteToken = await this.denomClient.getDenomToken(market.quoteDenom);
        return {
            ...market,
            slug,
            baseToken,
            quoteToken,
        };
    }
    async toDerivativeMarketsWithToken(markets) {
        return (await awaitForAll(markets, this.toDerivativeMarketWithToken.bind(this))).filter((market) => market.baseToken !== undefined && market.quoteToken !== undefined);
    }
    async toBinaryOptionsMarketWithToken(market) {
        const quoteToken = await this.denomClient.getDenomToken(market.quoteDenom);
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
            tokenType: TokenType.Native,
        };
        return {
            ...market,
            slug,
            baseToken,
            quoteToken,
        };
    }
    async toBinaryOptionsMarketsWithToken(markets) {
        return (await awaitForAll(markets, this.toBinaryOptionsMarketWithToken.bind(this))).filter((market) => market.baseToken !== undefined && market.quoteToken !== undefined);
    }
    async toBridgeTransactionWithToken(transaction) {
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
            return {
                ...transaction,
                token: (await this.denomClient.getDenomToken('INJ')),
            };
        }
        const tokenFromDenomAsSymbol = (await this.denomClient.getDenomToken(transaction.denom));
        if (tokenFromDenomAsSymbol) {
            return {
                ...transaction,
                token: tokenFromDenomAsSymbol,
            };
        }
        return {
            ...transaction,
            token: getUnknownTokenWithSymbol(transaction.denom),
        };
    }
    async toBridgeTransactionsWithToken(transactions) {
        return (await awaitForAll(transactions, this.toBridgeTransactionWithToken.bind(this))).filter((transaction) => transaction && transaction.token !== undefined);
    }
}
//# sourceMappingURL=TokenService.js.map