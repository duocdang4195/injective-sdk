import { MsgBase } from '../../MsgBase';
import snakecaseKeys from 'snakecase-keys';
import { InjectiveExchangeV1Beta1Tx } from '@injectivelabs/core-proto-ts';
/**
 * @category Messages
 */
export default class MsgCancelSpotOrder extends MsgBase {
    static fromJSON(params) {
        return new MsgCancelSpotOrder(params);
    }
    toProto() {
        const { params } = this;
        const message = InjectiveExchangeV1Beta1Tx.MsgCancelSpotOrder.create();
        message.sender = params.injectiveAddress;
        message.marketId = params.marketId;
        message.orderHash = params.orderHash;
        message.subaccountId = params.subaccountId;
        // TODO: message.setOrderMask does not exist yet, enable this once it does.
        return InjectiveExchangeV1Beta1Tx.MsgCancelSpotOrder.fromPartial(message);
    }
    toData() {
        const proto = this.toProto();
        return {
            '@type': '/injective.exchange.v1beta1.MsgCancelSpotOrder',
            ...proto,
        };
    }
    toAmino() {
        const proto = this.toProto();
        const message = {
            ...snakecaseKeys(proto),
        };
        return {
            type: 'exchange/MsgCancelSpotOrder',
            value: message,
        };
    }
    toWeb3() {
        const amino = this.toAmino();
        const { value } = amino;
        return {
            '@type': '/injective.exchange.v1beta1.MsgCancelSpotOrder',
            ...value,
        };
    }
    toDirectSign() {
        const proto = this.toProto();
        return {
            type: '/injective.exchange.v1beta1.MsgCancelSpotOrder',
            message: proto,
        };
    }
    toBinary() {
        return InjectiveExchangeV1Beta1Tx.MsgCancelSpotOrder.encode(this.toProto()).finish();
    }
}
//# sourceMappingURL=MsgCancelSpotOrder.js.map