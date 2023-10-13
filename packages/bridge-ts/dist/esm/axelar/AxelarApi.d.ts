import { CosmosChain, Environment, EvmChain } from '@axelar-network/axelarjs-sdk';
import { providers } from 'ethers';
export declare class AxelarClient {
    private axelarJsSDK;
    private axelarGatewayAddress;
    constructor({ environment, gatewayAddress, }: {
        environment: Environment;
        gatewayAddress: string;
    });
    getDepositAddress({ sourceChain, destinationChain, address, asset, }: {
        sourceChain: string;
        destinationChain: string;
        address: string;
        asset: string;
    }): Promise<string>;
    sendTokens(args: {
        destinationChain: EvmChain | CosmosChain;
        destinationAddress: string;
        symbol: string;
        amount: string;
    }): Promise<providers.TransactionResponse>;
    approveAllowance(address: string): Promise<providers.TransactionResponse>;
    transferTokens({ receiver, amount, contractAddress, }: {
        receiver: string;
        amount: string;
        contractAddress: string;
    }): Promise<any>;
    getBalance(address: string, contractAddress: string): Promise<string>;
    getTokenAddress(symbol: string): Promise<string>;
    private getAxelarGateway;
    private validateNetwork;
}
//# sourceMappingURL=AxelarApi.d.ts.map