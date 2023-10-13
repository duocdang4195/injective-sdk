export const getKeyFromRpcUrl = (rpcUrl) => {
    if (!rpcUrl.includes('alchemyapi.io')) {
        return rpcUrl;
    }
    const [key] = rpcUrl.split('/').reverse();
    return key;
};
//# sourceMappingURL=alchemy.js.map