import { Network, NetworkEndpoints } from '@injectivelabs/networks';
import { ChainId, Coin } from '@injectivelabs/ts-types';
import { ContractAccountBalance, ExplorerCW20BalanceWithToken } from '@injectivelabs/sdk-ts';
import { BankBalances, UiBaseSpotMarket, UiSubaccountBalance, UiBasePerpetualMarket, UiBaseSpotMarketWithToken, UiBaseBinaryOptionsMarket, UiBaseExpiryFuturesMarket, PerpetualMarketWithTokenAndSlug, BinaryOptionsMarketWithTokenAndSlug, ExpiryFuturesMarketWithTokenAndSlug } from '../client/types';
import { BalanceWithToken, UiBridgeTransaction, SubaccountBalanceWithToken, UiBridgeTransactionWithToken } from '../types';
import { Token } from '@injectivelabs/token-metadata';
import { DenomClientAsync } from '../denom/DenomClientAsync';
/**
 * With the TokenService class we can convert objects
 * with denoms to append token metadata information
 */
export declare class TokenService {
    network: Network;
    chainId: ChainId;
    denomClient: DenomClientAsync;
    constructor({ chainId, network, endpoints, alchemyRpcUrl, }: {
        chainId: ChainId;
        network: Network;
        endpoints?: NetworkEndpoints;
        alchemyRpcUrl?: string;
    });
    toCoinsWithToken(supply: Coin[]): Promise<Token[]>;
    toSupplyWithToken(supply: Coin[]): Promise<Token[]>;
    toBalancesWithToken(balances: BankBalances, ibcBalances: BankBalances): Promise<{
        bankBalancesWithToken: BalanceWithToken[];
        ibcBankBalancesWithToken: BalanceWithToken[];
    }>;
    toCw20BalancesWithToken(cw20Balances: ExplorerCW20BalanceWithToken[]): Promise<BalanceWithToken[]>;
    toContractCw20BalancesWithToken({ contractAddress, contractAccountsBalance, }: {
        contractAddress: string;
        contractAccountsBalance: ContractAccountBalance[];
    }): Promise<BalanceWithToken[]>;
    toSubaccountBalanceWithToken(balance: UiSubaccountBalance): Promise<SubaccountBalanceWithToken>;
    toSubaccountBalancesWithToken(balances: UiSubaccountBalance[]): Promise<SubaccountBalanceWithToken[]>;
    toSpotMarketWithToken(market: UiBaseSpotMarket): Promise<UiBaseSpotMarketWithToken>;
    toSpotMarketsWithToken(markets: UiBaseSpotMarket[]): Promise<UiBaseSpotMarketWithToken[]>;
    toDerivativeMarketWithToken<T extends UiBasePerpetualMarket | UiBaseExpiryFuturesMarket, R extends PerpetualMarketWithTokenAndSlug | ExpiryFuturesMarketWithTokenAndSlug>(market: T): Promise<R>;
    toDerivativeMarketsWithToken(markets: Array<UiBasePerpetualMarket | UiBaseExpiryFuturesMarket>): Promise<Array<PerpetualMarketWithTokenAndSlug | ExpiryFuturesMarketWithTokenAndSlug>>;
    toBinaryOptionsMarketWithToken(market: UiBaseBinaryOptionsMarket): Promise<BinaryOptionsMarketWithTokenAndSlug>;
    toBinaryOptionsMarketsWithToken(markets: UiBaseBinaryOptionsMarket[]): Promise<BinaryOptionsMarketWithTokenAndSlug[]>;
    toBridgeTransactionWithToken(transaction: UiBridgeTransaction): Promise<UiBridgeTransactionWithToken>;
    toBridgeTransactionsWithToken(transactions: UiBridgeTransaction[]): Promise<UiBridgeTransactionWithToken[]>;
}
//# sourceMappingURL=TokenService.d.ts.map