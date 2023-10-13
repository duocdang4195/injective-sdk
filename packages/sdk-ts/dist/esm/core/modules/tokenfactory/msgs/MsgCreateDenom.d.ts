import { MsgBase } from '../../MsgBase';
import { InjectiveTokenFactoryV1Beta1Tx } from '@injectivelabs/core-proto-ts';
export declare namespace MsgCreateDenom {
    interface Params {
        sender: string;
        subdenom: string;
    }
    type Proto = InjectiveTokenFactoryV1Beta1Tx.MsgCreateDenom;
}
/**
 * @category Messages
 */
export default class MsgCreateDenom extends MsgBase<MsgCreateDenom.Params, MsgCreateDenom.Proto> {
    static fromJSON(params: MsgCreateDenom.Params): MsgCreateDenom;
    toProto(): InjectiveTokenFactoryV1Beta1Tx.MsgCreateDenom;
    toData(): {
        sender: string;
        subdenom: string;
        '@type': string;
    };
    toAmino(): {
        type: string;
        value: {
            sender: string;
            subdenom: string;
        };
    };
    toWeb3(): {
        sender: string;
        subdenom: string;
        '@type': string;
    };
    toDirectSign(): {
        type: string;
        message: InjectiveTokenFactoryV1Beta1Tx.MsgCreateDenom;
    };
    toBinary(): Uint8Array;
}
//# sourceMappingURL=MsgCreateDenom.d.ts.map