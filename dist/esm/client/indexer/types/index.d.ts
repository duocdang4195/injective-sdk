import { IndexerErrorModule } from '@injectivelabs/exceptions';
export * from './account';
export * from './account-portfolio';
export * from './auction';
export * from './derivatives-rest';
export * from './derivatives';
export * from './exchange';
export * from './explorer';
export * from './explorer-rest';
export * from './insurance-funds';
export * from './leaderboard-rest';
export * from './markets-history-rest';
export * from './mito';
export * from './swap';
export * from './oracle';
export * from './spot-rest';
export * from './spot';
export * from './trading';
export interface StreamStatusResponse {
    details: string;
    code: number;
    metadata: any;
}
export declare const IndexerModule: {
    Account: IndexerErrorModule.Account;
    Auction: IndexerErrorModule.Auction;
    Derivatives: IndexerErrorModule.Derivatives;
    Explorer: IndexerErrorModule.Explorer;
    InsuranceFund: IndexerErrorModule.InsuranceFund;
    Meta: IndexerErrorModule.Meta;
    Mito: IndexerErrorModule.Mito;
    Dmm: IndexerErrorModule.Dmm;
    Oracle: IndexerErrorModule.Oracle;
    Portfolio: IndexerErrorModule.Portfolio;
    Spot: IndexerErrorModule.Spot;
    Transaction: IndexerErrorModule.Transaction;
    Trading: IndexerErrorModule.Trading;
    ChronosDerivative: IndexerErrorModule.ChronosDerivative;
    ChronosSpot: IndexerErrorModule.ChronosSpot;
    ChronosMarkets: IndexerErrorModule.ChronosMarkets;
};
//# sourceMappingURL=index.d.ts.map