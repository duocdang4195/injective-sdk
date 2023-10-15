"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeName = exports.nameToNode = void 0;
const eth_ens_namehash_1 = __importDefault(require("@ensdomains/eth-ens-namehash"));
const ens_validation_1 = require("@ensdomains/ens-validation");
const exceptions_1 = require("@injectivelabs/exceptions");
const js_sha3_1 = require("js-sha3");
const nameHash = (inputName) => {
    let node = '';
    for (let i = 0; i < 32; i += 1) {
        node += '00';
    }
    if (inputName) {
        const labels = inputName.split('.');
        for (let i = labels.length - 1; i >= 0; i -= 1) {
            const normalizedLabel = eth_ens_namehash_1.default.normalize(labels[i]);
            const labelSha = (0, js_sha3_1.keccak_256)(normalizedLabel);
            node = (0, js_sha3_1.keccak_256)(Buffer.from(node + labelSha, 'hex'));
        }
    }
    return `0x${node}`;
};
const nameToNode = (name) => {
    if (!name) {
        return [];
    }
    const hash = nameHash(name);
    return Array.from(Buffer.from(hash.slice(2), 'hex'));
};
exports.nameToNode = nameToNode;
const validateNameLength = (label) => {
    if (typeof label !== 'string') {
        return 0;
    }
    return !(label.length < 3 || label.length > 512);
};
const validateName = (name) => {
    if (!name) {
        return false;
    }
    if (!validateNameLength(name)) {
        return false;
    }
    const blackList = 
    // eslint-disable-next-line no-control-regex,no-misleading-character-class
    /[\u0000-\u002c\u002e-\u002f\u003a-\u005e\u0060\u007b-\u007f\u200b\u200c\u200d\ufeff]/g;
    if (blackList.test(name)) {
        return false;
    }
    if (!(0, ens_validation_1.validate)(name)) {
        return false;
    }
    return true;
};
const normalizeName = (name) => {
    if (!name) {
        throw new exceptions_1.GeneralException(new Error('Invalid Domain'), {
            context: 'Params',
            type: exceptions_1.ErrorType.ValidationError,
        });
    }
    const labelArr = name.split('.');
    const emptyLabel = labelArr.find((i) => i.length < 1);
    if (emptyLabel !== undefined) {
        throw new exceptions_1.GeneralException(new Error('Domain cannot have empty labels'), {
            context: 'Params',
            type: exceptions_1.ErrorType.ValidationError,
        });
    }
    let normalizedArray;
    try {
        normalizedArray = labelArr.map((e) => eth_ens_namehash_1.default.normalize(e));
    }
    catch (e) {
        throw new exceptions_1.GeneralException(new Error('Invalid Domain'), {
            context: 'Params',
            type: exceptions_1.ErrorType.ValidationError,
        });
    }
    const normalizedDomain = normalizedArray.join('.');
    let label = normalizedDomain;
    if (normalizedArray.length > 1) {
        label = normalizedArray.slice(0, normalizedArray.length - 1).join('.');
    }
    if (!validateName(label)) {
        throw new exceptions_1.GeneralException(new Error('Invalid Domain'), {
            context: 'Params',
            type: exceptions_1.ErrorType.ValidationError,
        });
    }
    return normalizedDomain;
};
exports.normalizeName = normalizeName;
//# sourceMappingURL=utils.js.map