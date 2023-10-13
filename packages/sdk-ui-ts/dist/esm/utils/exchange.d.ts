import { InsuranceFund, GrpcOrderType } from '@injectivelabs/sdk-ts';
import { OrderSide } from '@injectivelabs/ts-types';
import { type Token } from '@injectivelabs/token-metadata';
export declare const orderSideToOrderType: (orderType: OrderSide) => GrpcOrderType;
export declare const getTokenFromInsuranceFund: (denom: string, response: InsuranceFund) => Token;
//# sourceMappingURL=exchange.d.ts.map