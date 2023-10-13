import { GoogleProtobufAny } from '@injectivelabs/core-proto-ts';
import { getEthereumAddress, getInjectiveAddress } from '../../../../utils';
export const createAnyMessage = (msg) => {
    const message = GoogleProtobufAny.Any.create();
    message.typeUrl = `${msg.type.startsWith('/') ? '' : '/'}${msg.type}`;
    message.value = msg.value;
    return message;
};
export const createAny = (value, type) => {
    const message = GoogleProtobufAny.Any.create();
    message.typeUrl = type;
    message.value = value;
    return message;
};
export const getInjectiveSignerAddress = (address) => {
    if (!address) {
        return '';
    }
    if (address.startsWith('inj')) {
        return address;
    }
    if (address.startsWith('0x')) {
        return getInjectiveAddress(address);
    }
    return '';
};
export const getEthereumSignerAddress = (address) => {
    if (!address) {
        return '';
    }
    if (address.startsWith('0x')) {
        return address;
    }
    if (address.startsWith('inj')) {
        return getEthereumAddress(address);
    }
    return '';
};
//# sourceMappingURL=helpers.js.map