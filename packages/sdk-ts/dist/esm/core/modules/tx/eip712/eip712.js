import { getDefaultEip712Types, getEip712Domain, getEipTxDetails, getEip712Fee, getTypesIncludingFeePayer, } from './utils';
export const getEip712TypedData = ({ msgs, tx, fee, ethereumChainId, }) => {
    const messages = Array.isArray(msgs) ? msgs : [msgs];
    const eip712Msgs = messages.map((m) => m.toEip712());
    const eip712MessageTypes = messages[0].toEip712Types();
    const types = getDefaultEip712Types();
    const typesWithMessageTypes = {
        types: {
            ...types.types,
            ...Object.fromEntries(eip712MessageTypes),
        },
    };
    const typesWithFeePayer = getTypesIncludingFeePayer({
        fee,
        types: typesWithMessageTypes,
    });
    return {
        primaryType: 'Tx',
        ...typesWithFeePayer,
        ...getEip712Domain(ethereumChainId),
        message: {
            ...getEipTxDetails(tx),
            ...getEip712Fee(fee),
            msgs: eip712Msgs,
        },
    };
};
//# sourceMappingURL=eip712.js.map