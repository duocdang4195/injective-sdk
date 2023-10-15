"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointsLocal = exports.endpointsDevnet2 = exports.endpointsDevnet1 = exports.endpointsDevnet = exports.endpointsTestnetOld = exports.endpointsTestnet = exports.endpointsTestnetK8s = exports.endpointsTestnetSentry = exports.endpointsInternal = exports.endpointsPublic = exports.endpointsStaging = exports.endpointsMainnet = exports.endpointsMainnetLB = exports.endpointsMainnetK8s = void 0;
exports.endpointsMainnetK8s = {
    indexer: 'https://k8s.mainnet.exchange.grpc-web.injective.network',
    grpc: 'https://k8s.mainnet.chain.grpc-web.injective.network',
    rpc: 'https://k8s.mainnet.tm.injective.network',
    rest: 'https://k8s.mainnet.lcd.injective.network',
    chronos: 'https://k8s.mainnet.chronos.grpc-web.injective.network',
    explorer: 'https://k8s.mainnet.explorer.grpc-web.injective.network',
    cache: 'https://k8s.testnet.gateway.grpc-web.injective.network/',
};
exports.endpointsMainnetLB = {
    indexer: 'https://k8s.global.mainnet.exchange.grpc-web.injective.network',
    grpc: 'https://k8s.global.mainnet.chain.grpc-web.injective.network',
    rpc: 'https://k8s.global.mainnet.tm.injective.network',
    rest: 'https://k8s.global.mainnet.lcd.injective.network',
    chronos: 'https://k8s.global.mainnet.chronos.grpc-web.injective.network',
    explorer: 'https://k8s.global.mainnet.explorer.grpc-web.injective.network',
};
exports.endpointsMainnet = {
    indexer: 'https://api.injective.network',
    grpc: 'https://grpc.injective.network',
    rpc: 'https://tm.injective.network',
    rest: 'https://lcd.injective.network',
    chronos: 'https://api.injective.network',
    explorer: 'https://api.injective.network',
};
exports.endpointsStaging = {
    indexer: 'https://staging.api.injective.network',
    grpc: 'https://staging.grpc.injective.network',
    rpc: 'https://staging.tm.injective.network',
    rest: 'https://staging.lcd.injective.network',
    chronos: 'https://staging.api.injective.network',
    explorer: 'https://staging.api.injective.network',
};
exports.endpointsPublic = Object.assign({}, exports.endpointsStaging);
exports.endpointsInternal = {
    indexer: 'https://products.exchange.grpc-web.injective.network',
    grpc: 'https://products.chain.grpc-web.injective.network',
    rpc: 'https://products.tm.injective.network',
    rest: 'https://products.lcd.injective.network',
    chronos: 'https://products.exchange.grpc-web.injective.network',
    explorer: 'https://products.exchange.grpc-web.injective.network',
};
exports.endpointsTestnetSentry = {
    indexer: 'https://testnet.sentry.exchange.grpc-web.injective.network',
    grpc: 'https://testnet.sentry.chain.grpc-web.injective.network',
    rpc: 'https://testnet.sentry.tm.injective.network',
    rest: 'https://testnet.sentry.lcd.injective.network',
    chronos: 'https://testnet.sentry.exchange.grpc-web.injective.network',
    explorer: 'https://testnet.sentry.exchange.grpc-web.injective.network',
};
exports.endpointsTestnetK8s = {
    indexer: 'https://k8s.testnet.exchange.grpc-web.injective.network',
    grpc: 'https://k8s.testnet.chain.grpc-web.injective.network',
    rpc: 'https://k8s.testnet.tm.injective.network',
    rest: 'https://k8s.testnet.lcd.injective.network',
    chronos: 'https://k8s.testnet.exchange.grpc-web.injective.network',
    explorer: 'https://k8s.testnet.explorer.grpc-web.injective.network',
    cache: 'https://k8s.testnet.gateway.grpc-web.injective.network/',
};
exports.endpointsTestnet = {
    indexer: 'https://testnet.exchange.grpc-web.injective.network',
    grpc: 'https://testnet.chain.grpc-web.injective.network',
    rpc: 'https://testnet.tm.injective.network',
    rest: 'https://testnet.lcd.injective.network',
    chronos: 'https://testnet.exchange.grpc-web.injective.network',
    explorer: 'https://testnet.exchange.grpc-web.injective.network',
};
exports.endpointsTestnetOld = {
    indexer: 'https://testnet.exchange.grpc-web.injective.dev',
    grpc: 'https://testnet.chain.grpc-web.injective.dev',
    rpc: 'https://testnet.tm.injective.dev',
    rest: 'https://testnet.lcd.injective.dev',
    chronos: 'https://testnet.exchange.grpc-web.injective.dev',
    explorer: 'https://testnet.exchange.grpc-web.injective.dev',
};
exports.endpointsDevnet = {
    indexer: 'https://devnet.api.injective.dev',
    grpc: 'https://devnet.grpc.injective.dev',
    rpc: 'https://devnet.tm.injective.dev',
    rest: 'https://devnet.lcd.injective.dev',
    chronos: 'https://devnet.api.injective.dev',
    explorer: 'https://devnet.api.injective.dev',
};
exports.endpointsDevnet1 = {
    indexer: 'https://devnet-1.api.injective.dev',
    grpc: 'https://devnet-1.grpc.injective.dev',
    rpc: 'https://devnet-1.tm.injective.dev',
    rest: 'https://devnet-1.lcd.injective.dev',
    chronos: 'https://devnet-1.api.injective.dev',
    explorer: 'https://devnet-1.api.injective.dev',
};
exports.endpointsDevnet2 = {
    indexer: 'https://devnet-2.api.injective.dev',
    grpc: 'https://devnet-2.grpc.injective.dev',
    rpc: 'https://devnet-2.tm.injective.dev',
    rest: 'https://devnet-2.lcd.injective.dev',
    chronos: 'https://devnet-2.api.injective.dev',
    explorer: 'https://devnet-2.api.injective.dev',
};
exports.endpointsLocal = {
    indexer: 'https://localhost:4444',
    grpc: 'http://localhost:9091',
    rpc: 'http://localhost:9091',
    rest: 'http://localhost:9091',
    chronos: 'https://localhost:4445',
    explorer: 'https://localhost:4446',
};
//# sourceMappingURL=endpoints.js.map