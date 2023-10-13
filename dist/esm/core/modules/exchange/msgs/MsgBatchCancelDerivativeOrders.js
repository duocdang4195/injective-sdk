import snakecaseKeys from 'snakecase-keys';
import { MsgBase } from '../../MsgBase';
import { InjectiveExchangeV1Beta1Tx, InjectiveExchangeV1Beta1Exchange, } from '@injectivelabs/core-proto-ts';
/**
 * @category Messages
 */
export default class MsgBatchCancelDerivativeOrders extends MsgBase {
    static fromJSON(params) {
        return new MsgBatchCancelDerivativeOrders(params);
    }
    toProto() {
        const { params } = this;
        const orderDataList = params.orders.map((order) => {
            const orderData = InjectiveExchangeV1Beta1Tx.OrderData.create();
            orderData.marketId = order.marketId;
            orderData.orderHash = order.orderHash;
            orderData.subaccountId = order.subaccountId;
            // TODO: Send order.orderMask instead when chain handles order mask properly.
            orderData.orderMask = InjectiveExchangeV1Beta1Exchange.OrderMask.ANY;
            return orderData;
        });
        const message = InjectiveExchangeV1Beta1Tx.MsgBatchCancelDerivativeOrders.create();
        message.sender = params.injectiveAddress;
        message.data = orderDataList.map((o) => o);
        return InjectiveExchangeV1Beta1Tx.MsgBatchCancelDerivativeOrders.fromPartial(message);
    }
    toData() {
        const proto = this.toProto();
        return {
            '@type': '/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders',
            ...proto,
        };
    }
    toAmino() {
        const proto = this.toProto();
        const message = {
            ...snakecaseKeys(proto),
        };
        return {
            type: 'exchange/MsgBatchCancelDerivativeOrders',
            value: message,
        };
    }
    toWeb3() {
        const amino = this.toAmino();
        const { value } = amino;
        return {
            '@type': '/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders',
            ...value,
        };
    }
    toDirectSign() {
        const proto = this.toProto();
        return {
            type: '/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders',
            message: proto,
        };
    }
    toBinary() {
        return InjectiveExchangeV1Beta1Tx.MsgBatchCancelDerivativeOrders.encode(this.toProto()).finish();
    }
}
//# sourceMappingURL=MsgBatchCancelDerivativeOrders.js.map