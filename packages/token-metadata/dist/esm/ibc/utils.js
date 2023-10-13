import { canonicalChannelIds, canonicalChannelsToChainList } from './channels';
import { TokenType } from '../types';
export const isIbcTokenCanonical = (token) => {
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
    return canonicalChannelIds.includes(channelId);
};
export const getChannelIdFromPath = (path) => {
    const pathParts = path.replace('transfer/', '').split('/');
    const [channelId] = pathParts;
    return channelId;
};
export const canonicalChannelsToChainListFromInjective = canonicalChannelsToChainList.filter((item) => item.chainA === 'Injective');
export const getIbcDestinationChain = ({ channelPaths, channel, index, token, }) => {
    if (token.tokenType !== TokenType.Ibc) {
        return '';
    }
    const foundChannelFromInjective = canonicalChannelsToChainListFromInjective.find((item) => item.channelId === channel);
    if (foundChannelFromInjective) {
        return foundChannelFromInjective.chainB;
    }
    if (index === channelPaths.length - 1) {
        return token.name;
    }
    return '';
};
export const formatNonCanonicalIbcTokenName = (token) => {
    const formattedDenomTrace = token.ibc.channelId.replaceAll('transfer/', '');
    const channelToLastChain = formattedDenomTrace.split('/').shift();
    const foundChannelFromInjective = canonicalChannelsToChainListFromInjective.find((item) => item.channelId === channelToLastChain);
    const lastChain = foundChannelFromInjective
        ? foundChannelFromInjective.chainB
        : 'Unknown';
    return `${token.ibc.baseDenom.toUpperCase()}-${lastChain.toLowerCase()}-${channelToLastChain}`;
};
//# sourceMappingURL=utils.js.map