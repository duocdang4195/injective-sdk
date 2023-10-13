import path from 'path';
import { TokenType } from '@injectivelabs/token-metadata';
import { validatorAddressToPathMap } from './mappings';
// @ts-ignore
import validatorToAddressMapFromKeybase from '../validators-logo/mappings.json';
export const getTokenLogoWithVendorPathPrefix = (image) => {
    if (image.includes('@injectivelabs')) {
        return image;
    }
    if (image.includes('http')) {
        return image;
    }
    if (image.includes('bridgingNetworks')) {
        return image;
    }
    return path.join('/', 'vendor', '@injectivelabs', 'token-metadata', image);
};
export const getTokenLogoFromTokenType = (tokenType) => {
    switch (true) {
        case tokenType === TokenType.InsuranceFund:
            return getTokenLogoWithVendorPathPrefix('insurance-fund.svg');
        case tokenType === TokenType.Native:
            return getTokenLogoWithVendorPathPrefix('injective-black-fill.svg');
        case tokenType === TokenType.Cw20:
            return getTokenLogoWithVendorPathPrefix('cw20.svg');
        case tokenType === TokenType.Ibc:
            return getTokenLogoWithVendorPathPrefix('ibc.svg');
        default:
            return getTokenLogoWithVendorPathPrefix('injective-black-fill.svg');
    }
};
export const getValidatorLogoWithVendorPathPrefix = (validatorAddress) => {
    const validatorToAddressFromKeybaseMap = JSON.parse(JSON.stringify(validatorToAddressMapFromKeybase));
    const validatorLogoPath = validatorToAddressFromKeybaseMap[validatorAddress]
        ? validatorToAddressFromKeybaseMap[validatorAddress]
        : validatorAddressToPathMap[validatorAddress];
    return path.join('/', 'vendor', '@injectivelabs', 'sdk-ui-ts', validatorLogoPath ? validatorLogoPath : 'untracked.png');
};
//# sourceMappingURL=helpers.js.map