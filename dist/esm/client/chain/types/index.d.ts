import { ChainErrorModule } from '@injectivelabs/exceptions';
export * from './auth';
export * from './authZ';
export * from './auction';
export * from './auth-rest';
export * from './bank-rest';
export * from './tendermint-rest';
export * from './bank';
export * from './distribution';
export * from './exchange';
export * from './gov';
export * from './insurance';
export * from './mint';
export * from './oracle';
export * from './peggy';
export * from './staking';
export * from './wasm';
export interface RestApiResponse<T> {
    data: T;
}
export declare const ChainModule: {
    Auction: ChainErrorModule.Auction;
    Auth: ChainErrorModule.Auth;
    Authz: ChainErrorModule.Authz;
    Bank: ChainErrorModule.Bank;
    Distribution: ChainErrorModule.Distribution;
    Exchange: ChainErrorModule.Exchange;
    Gov: ChainErrorModule.Gov;
    Ibc: ChainErrorModule.Ibc;
    InsuranceFund: ChainErrorModule.InsuranceFund;
    Mint: ChainErrorModule.Mint;
    Oracle: ChainErrorModule.Oracle;
    Peggy: ChainErrorModule.Peggy;
    Staking: ChainErrorModule.Staking;
    Wasm: ChainErrorModule.Wasm;
    WasmX: ChainErrorModule.WasmX;
    Tendermint: ChainErrorModule.Tendermint;
};
//# sourceMappingURL=index.d.ts.map