export interface CosmosChannel {
    aChainId: string;
    bChainId: string;
    aToBChannelId: string;
    aToBClientId: string;
    bToAClientId: string;
    bToAChannelId: string;
    port: string;
}
export interface CosmosTxResponse {
    denom: string;
    amount: string;
    receiver: string;
    sender: string;
    txHash: string;
    timeoutTimestamp: string;
}
export interface IbcMsgTransfer {
    token: {
        denom: string;
        amount: string;
    };
    timeout_timestamp: string;
}
export interface KeplrWalletAttribute {
    key: string;
    value: string;
}
export interface KeplrWalletSendPacketAttribute {
    amount: string;
    denom: string;
    receiver: string;
    sender: string;
}
export interface KeplrWalletEvent {
    type: string;
    attributes: KeplrWalletAttribute[];
}
export interface KeplrWalletEvents {
    events: KeplrWalletEvent[];
}
export interface KeplrWalletResponse {
    code: number;
    height: number;
    rawLog: string;
    transactionHash: string;
}
export interface TerraWalletMsg {
    receiver: string;
    sender: string;
    timeout_timestamp: string;
    token: {
        amount: any;
        denom: string;
    };
}
export interface TerraWalletResponse {
    msgs: TerraWalletMsg[];
    result: {
        raw_log: string;
        txhash: string;
    };
    success: boolean;
}
//# sourceMappingURL=cosmos.d.ts.map