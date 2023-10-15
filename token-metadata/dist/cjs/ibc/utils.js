"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNonCanonicalIbcTokenName = exports.getIbcDestinationChain = exports.canonicalChannelsToChainListFromInjective = exports.getChannelIdFromPath = exports.isIbcTokenCanonical = void 0;
const channels_1 = require("./channels");
const types_1 = require("../types");
const isIbcTokenCanonical = (token) => {
    const { denom } = token;
    if (!denom.startsWith('ibc/') || !token.ibc) {
        return false;
    }
    const pathParts = token.ibc.path.replace('transfer/', '').split('/');
    /** More than one channelId */
    if (pathParts.length > 1) {
        return false;
    }
    const [channelId] = pathParts;
    return channels_1.canonicalChannelIds.includes(channelId);
};
exports.isIbcTokenCanonical = isIbcTokenCanonical;
const getChannelIdFromPath = (path) => {
    const pathParts = path.replace('transfer/', '').split('/');
    const [channelId] = pathParts;
    return channelId;
};
exports.getChannelIdFromPath = getChannelIdFromPath;
exports.canonicalChannelsToChainListFromInjective = channels_1.canonicalChannelsToChainList.filter((item) => item.chainA === 'Injective');
const getIbcDestinationChain = ({ channelPaths, channel, index, token, }) => {
    if (token.tokenType !== types_1.TokenType.Ibc) {
        return '';
    }
    const foundChannelFromInjective = exports.canonicalChannelsToChainListFromInjective.find((item) => item.channelId === channel);
    if (foundChannelFromInjective) {
        return foundChannelFromInjective.chainB;
    }
    if (index === channelPaths.length - 1) {
        return token.name;
    }
    return '';
};
exports.getIbcDestinationChain = getIbcDestinationChain;
const formatNonCanonicalIbcTokenName = (token) => {
    const formattedDenomTrace = token.ibc.channelId.replaceAll('transfer/', '');
    const channelToLastChain = formattedDenomTrace.split('/').shift();
    const foundChannelFromInjective = exports.canonicalChannelsToChainListFromInjective.find((item) => item.channelId === channelToLastChain);
    const lastChain = foundChannelFromInjective
        ? foundChannelFromInjective.chainB
        : 'Unknown';
    return `${token.ibc.baseDenom.toUpperCase()}-${lastChain.toLowerCase()}-${channelToLastChain}`;
};
exports.formatNonCanonicalIbcTokenName = formatNonCanonicalIbcTokenName;
//# sourceMappingURL=utils.js.map