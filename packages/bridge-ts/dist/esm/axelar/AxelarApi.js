import { AxelarAssetTransfer, AxelarGateway, } from '@axelar-network/axelarjs-sdk';
import { providers, Contract } from 'ethers';
import { BigNumberInWei } from '@injectivelabs/utils';
import { ErrorType, MetamaskException, UnspecifiedErrorCode, } from '@injectivelabs/exceptions';
import { MOONBEAM_MAINNET_CHAIN_ID } from './constants';
import { erc20Abi } from './erc20Abi';
export class AxelarClient {
    axelarJsSDK;
    axelarGatewayAddress;
    constructor({ environment, gatewayAddress, }) {
        this.axelarJsSDK = new AxelarAssetTransfer({
            environment,
            auth: 'metamask',
        });
        this.axelarGatewayAddress = gatewayAddress;
    }
    async getDepositAddress({ sourceChain, destinationChain, address, asset, }) {
        return this.axelarJsSDK.getDepositAddress(sourceChain, destinationChain, address, asset);
    }
    async sendTokens(args) {
        const { axelarGateway, signer } = await this.getAxelarGateway();
        const transaction = await axelarGateway.createSendTokenTx(args);
        const response = await transaction.send(signer);
        return response;
    }
    async approveAllowance(address) {
        const { axelarGateway, signer } = await this.getAxelarGateway();
        const transaction = await axelarGateway.createApproveTx({
            tokenAddress: address,
        });
        return transaction.send(signer);
    }
    async transferTokens({ receiver, amount, contractAddress, }) {
        await this.validateNetwork();
        const { signer } = await this.getAxelarGateway();
        const contract = new Contract(contractAddress, erc20Abi, signer);
        const feeData = await signer.getFeeData();
        const tx = await contract.transfer(receiver, amount, {
            maxFeePerGas: feeData.gasPrice || feeData.maxFeePerGas,
            maxPriorityFeePerGas: feeData.maxPriorityFeePerGas || '0x77359400' /* 2 Gwei in HEX */,
        });
        return tx.wait();
    }
    async getBalance(address, contractAddress) {
        const { provider } = await this.getAxelarGateway();
        const contract = new Contract(contractAddress, erc20Abi, provider);
        const balance = (await contract.balanceOf(address));
        return new BigNumberInWei(balance.toNumber()).toString();
    }
    async getTokenAddress(symbol) {
        const { axelarGateway } = await this.getAxelarGateway();
        return axelarGateway.getTokenAddress(symbol);
    }
    async getAxelarGateway() {
        const { axelarGatewayAddress } = this;
        const provider = window.ethereum;
        if (!provider) {
            throw new MetamaskException(new Error('Please install Metamask extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
            });
        }
        await this.validateNetwork();
        const web3Provider = new providers.Web3Provider(provider, 'any');
        const signer = web3Provider.getSigner();
        return {
            axelarGateway: new AxelarGateway(axelarGatewayAddress, web3Provider),
            provider: web3Provider,
            signer,
        };
    }
    // eslint-disable-next-line class-methods-use-this
    async validateNetwork() {
        const provider = window.ethereum;
        if (!provider) {
            throw new MetamaskException(new Error('Please install Metamask extension'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletNotInstalledError,
            });
        }
        const web3Provider = new providers.Web3Provider(provider, 'any');
        const network = await web3Provider.getNetwork();
        if (network.chainId !== MOONBEAM_MAINNET_CHAIN_ID) {
            throw new MetamaskException(new Error('Please switch to the Moonbeam network in Metamask'), {
                code: UnspecifiedErrorCode,
                type: ErrorType.WalletError,
            });
        }
    }
}
//# sourceMappingURL=AxelarApi.js.map