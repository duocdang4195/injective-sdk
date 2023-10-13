"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmitterAddressInjective = exports.parseSequenceFromLogInjective = exports.parseSmartContractStateResponse = void 0;
const utils_1 = require("ethers/lib/utils");
const bech32_1 = require("bech32");
const sdk_ts_1 = require("@injectivelabs/sdk-ts");
const parseSmartContractStateResponse = (response) => {
    const data = response.data || '';
    try {
        return JSON.parse((0, sdk_ts_1.toUtf8)(data));
    }
    catch (e) {
        if (typeof data === 'string') {
            return data;
        }
        return JSON.parse(Buffer.from(data).toString());
    }
};
exports.parseSmartContractStateResponse = parseSmartContractStateResponse;
// Scan for the Sequence attribute in all the outputs of the transaction.
function parseSequenceFromLogInjective(info) {
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
exports.parseSequenceFromLogInjective = parseSequenceFromLogInjective;
function getEmitterAddressInjective(programAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        return Buffer.from((0, utils_1.zeroPad)(bech32_1.bech32.fromWords(bech32_1.bech32.decode(programAddress).words), 32)).toString('hex');
    });
}
exports.getEmitterAddressInjective = getEmitterAddressInjective;
//# sourceMappingURL=utils.js.map