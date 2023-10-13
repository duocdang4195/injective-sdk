import { zeroPad } from 'ethers/lib/utils';
import { bech32 } from 'bech32';
import { toUtf8 } from '@injectivelabs/sdk-ts';
export const parseSmartContractStateResponse = (response) => {
    const data = response.data || '';
    try {
        return JSON.parse(toUtf8(data));
    }
    catch (e) {
        if (typeof data === 'string') {
            return data;
        }
        return JSON.parse(Buffer.from(data).toString());
    }
};
// Scan for the Sequence attribute in all the outputs of the transaction.
export function parseSequenceFromLogInjective(info) {
    let sequence = '';
    const jsonLog = info.logs || JSON.parse(info.rawLog);
    jsonLog.map((row) => {
        row.events.map((event) => {
            event.attributes.map((attribute) => {
                if (attribute.key === 'message.sequence') {
                    sequence = attribute.value;
                }
            });
        });
    });
    return sequence.toString();
}
export async function getEmitterAddressInjective(programAddress) {
    return Buffer.from(zeroPad(bech32.fromWords(bech32.decode(programAddress).words), 32)).toString('hex');
}
//# sourceMappingURL=utils.js.map