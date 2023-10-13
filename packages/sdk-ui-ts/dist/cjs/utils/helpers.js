"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidatorLogoWithVendorPathPrefix = exports.getTokenLogoFromTokenType = exports.getTokenLogoWithVendorPathPrefix = void 0;
const path_1 = __importDefault(require("path"));
const token_metadata_1 = require("@injectivelabs/token-metadata");
const mappings_1 = require("./mappings");
// @ts-ignore
const mappings_json_1 = __importDefault(require("../validators-logo/mappings.json"));
const getTokenLogoWithVendorPathPrefix = (image) => {
    if (image.includes('@injectivelabs')) {
        return image;
    }
    if (image.includes('http')) {
        return image;
    }
    if (image.includes('bridgingNetworks')) {
        return image;
    }
    return path_1.default.join('/', 'vendor', '@injectivelabs', 'token-metadata', image);
};
exports.getTokenLogoWithVendorPathPrefix = getTokenLogoWithVendorPathPrefix;
const getTokenLogoFromTokenType = (tokenType) => {
    switch (true) {
        case tokenType === token_metadata_1.TokenType.InsuranceFund:
            return (0, exports.getTokenLogoWithVendorPathPrefix)('insurance-fund.svg');
        case tokenType === token_metadata_1.TokenType.Native:
            return (0, exports.getTokenLogoWithVendorPathPrefix)('injective-black-fill.svg');
        case tokenType === token_metadata_1.TokenType.Cw20:
            return (0, exports.getTokenLogoWithVendorPathPrefix)('cw20.svg');
        case tokenType === token_metadata_1.TokenType.Ibc:
            return (0, exports.getTokenLogoWithVendorPathPrefix)('ibc.svg');
        default:
            return (0, exports.getTokenLogoWithVendorPathPrefix)('injective-black-fill.svg');
    }
};
exports.getTokenLogoFromTokenType = getTokenLogoFromTokenType;
const getValidatorLogoWithVendorPathPrefix = (validatorAddress) => {
    const validatorToAddressFromKeybaseMap = JSON.parse(JSON.stringify(mappings_json_1.default));
    const validatorLogoPath = validatorToAddressFromKeybaseMap[validatorAddress]
        ? validatorToAddressFromKeybaseMap[validatorAddress]
        : mappings_1.validatorAddressToPathMap[validatorAddress];
    return path_1.default.join('/', 'vendor', '@injectivelabs', 'sdk-ui-ts', validatorLogoPath ? validatorLogoPath : 'untracked.png');
};
exports.getValidatorLogoWithVendorPathPrefix = getValidatorLogoWithVendorPathPrefix;
//# sourceMappingURL=helpers.js.map