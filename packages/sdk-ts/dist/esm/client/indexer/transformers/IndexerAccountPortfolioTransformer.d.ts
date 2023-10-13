import { Coin } from '@injectivelabs/ts-types';
import { GrpcCoin } from '../../../types';
import { PositionV2, GrpcPositionV2, PositionsWithUPNL, AccountPortfolioV2, SubaccountDepositV2, GrpcPositionsWithUPNL, GrpcSubaccountDepositV2, PortfolioSubaccountBalanceV2, GrpcPortfolioSubaccountBalanceV2 } from '../types/account-portfolio';
import { InjectivePortfolioRpc } from '@injectivelabs/indexer-proto-ts';
export declare class IndexerGrpcAccountPortfolioTransformer {
    static accountPortfolioResponseToAccountPortfolio(response: InjectivePortfolioRpc.AccountPortfolioResponse, address: string): AccountPortfolioV2;
    static grpcCoinToCoin(coin: GrpcCoin): Coin;
    static grpcPositionWithUPNLToPositionWithUPNL(positionsWithUPNL: GrpcPositionsWithUPNL): PositionsWithUPNL;
    static grpcPositionToGrpcPosition(position: GrpcPositionV2): PositionV2;
    static grpcSubaccountDepositToSubaccountDeposit(subaccountDeposit: GrpcSubaccountDepositV2): SubaccountDepositV2;
    static grpcSubaccountBalanceToSubaccountBalance(subaccountBalance: GrpcPortfolioSubaccountBalanceV2): PortfolioSubaccountBalanceV2;
}
//# sourceMappingURL=IndexerAccountPortfolioTransformer.d.ts.map