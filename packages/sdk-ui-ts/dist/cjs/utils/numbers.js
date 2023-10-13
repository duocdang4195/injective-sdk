"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecimalsFromNumber = void 0;
const utils_1 = require("@injectivelabs/utils");
const getDecimalsFromNumber = (number) => {
    const UI_DEFAULT_MAX_DISPLAY_DECIMALS = 4;
    const numberToBn = new utils_1.BigNumber(number).toNumber();
    const numberParts = numberToBn.toString().split('.');
    const [, decimals] = numberParts;
    const actualDecimals = decimals ? decimals.length : 0;
    return actualDecimals > UI_DEFAULT_MAX_DISPLAY_DECIMALS
        ? UI_DEFAULT_MAX_DISPLAY_DECIMALS
        : actualDecimals;
};
exports.getDecimalsFromNumber = getDecimalsFromNumber;
//# sourceMappingURL=numbers.js.map