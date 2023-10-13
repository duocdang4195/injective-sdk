import { SubaccountBalance, SubaccountTransfer } from '@injectivelabs/sdk-ts';
import { UiSubaccountBalance } from '../types/account';
export declare class UiAccountTransformer {
    static accountBalanceToUiAccountBalance(balance: SubaccountBalance): UiSubaccountBalance;
    static grpcAccountTransferToUiAccountTransfer(balance: SubaccountTransfer): {
        amount: string;
        denom: string;
        transferType: import("@injectivelabs/sdk-ts").TransferType;
        srcSubaccountId: string;
        srcSubaccountAddress: string;
        dstSubaccountId: string;
        dstSubaccountAddress: string;
        executedAt: number;
    };
}
//# sourceMappingURL=UiAccountTransformer.d.ts.map