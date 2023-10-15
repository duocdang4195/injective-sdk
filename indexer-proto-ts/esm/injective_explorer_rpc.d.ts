import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
export declare const protobufPackage = "injective_explorer_rpc";
export interface GetAccountTxsRequest {
    /** Address of account */
    address: string;
    /** Return transactions before this block number */
    before: string;
    /** Return transactions after this block number */
    after: string;
    limit: number;
    skip: string;
    type: string;
    module: string;
    fromNumber: string;
    toNumber: string;
    /**
     * The starting timestamp in UNIX milliseconds that the txs must be equal or
     * older than
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds that the txs must be equal or
     * younger than
     */
    endTime: string;
    /** The status of the txs to be returned */
    status: string;
}
export interface GetAccountTxsResponse {
    paging: Paging | undefined;
    data: TxDetailData[];
}
/** Paging defines the structure for required params for handling pagination */
export interface Paging {
    /** total number of txs saved in database */
    total: string;
    /** can be either block height or index num */
    from: number;
    /** can be either block height or index num */
    to: number;
    /** count entries by subaccount, serving some places on helix */
    countBySubaccount: string;
    /** array of tokens to navigate to the next pages */
    next: string[];
}
/** TxDetailData wraps tx data includes details information */
export interface TxDetailData {
    id: string;
    blockNumber: string;
    blockTimestamp: string;
    hash: string;
    code: number;
    data: Uint8Array;
    info: string;
    gasWanted: string;
    gasUsed: string;
    gasFee: GasFee | undefined;
    codespace: string;
    events: Event[];
    txType: string;
    messages: Uint8Array;
    signatures: Signature[];
    memo: string;
    txNumber: string;
    /** Block timestamp in unix milli */
    blockUnixTimestamp: string;
    /** Transaction log indicating errors */
    errorLog: string;
    /** transaction event logs */
    logs: Uint8Array;
    /** peggy bridge claim id, non-zero if tx contains MsgDepositClaim */
    claimIds: string[];
}
export interface GasFee {
    amount: CosmosCoin[];
    gasLimit: string;
    payer: string;
    granter: string;
}
export interface CosmosCoin {
    /** Coin denominator */
    denom: string;
    /** Coin amount (big int) */
    amount: string;
}
export interface Event {
    type: string;
    attributes: {
        [key: string]: string;
    };
}
export interface Event_AttributesEntry {
    key: string;
    value: string;
}
/** Signature wraps tx signature */
export interface Signature {
    pubkey: string;
    address: string;
    sequence: string;
    signature: string;
}
export interface GetContractTxsRequest {
    /** Address of contract */
    address: string;
    limit: number;
    skip: string;
    fromNumber: string;
    toNumber: string;
}
export interface GetContractTxsResponse {
    paging: Paging | undefined;
    data: TxDetailData[];
}
export interface GetBlocksRequest {
    before: string;
    after: string;
    limit: number;
}
export interface GetBlocksResponse {
    paging: Paging | undefined;
    data: BlockInfo[];
}
export interface BlockInfo {
    height: string;
    proposer: string;
    moniker: string;
    blockHash: string;
    parentHash: string;
    numPreCommits: string;
    numTxs: string;
    txs: TxDataRPC[];
    timestamp: string;
}
/** TxData wraps tx data */
export interface TxDataRPC {
    id: string;
    blockNumber: string;
    blockTimestamp: string;
    hash: string;
    codespace: string;
    messages: string;
    txNumber: string;
    /** Transaction log indicating errors */
    errorLog: string;
    code: number;
    /** peggy bridge claim id, non-zero if tx contains MsgDepositClaim */
    claimIds: string[];
}
export interface GetBlockRequest {
    id: string;
}
export interface GetBlockResponse {
    /** Status of the response. */
    s: string;
    /** Error message. */
    errmsg: string;
    data: BlockDetailInfo | undefined;
}
export interface BlockDetailInfo {
    height: string;
    proposer: string;
    moniker: string;
    blockHash: string;
    parentHash: string;
    numPreCommits: string;
    numTxs: string;
    totalTxs: string;
    txs: TxData[];
    timestamp: string;
}
/** TxData wraps tx data */
export interface TxData {
    id: string;
    blockNumber: string;
    blockTimestamp: string;
    hash: string;
    codespace: string;
    messages: Uint8Array;
    txNumber: string;
    /** Transaction log indicating errors */
    errorLog: string;
    code: number;
    txMsgTypes: Uint8Array;
    /** transaction event logs */
    logs: Uint8Array;
    /** peggy bridge claim id, non-zero if tx contains MsgDepositClaim */
    claimIds: string[];
}
export interface GetValidatorsRequest {
}
export interface GetValidatorsResponse {
    /** Status of the response. */
    s: string;
    /** Error message. */
    errmsg: string;
    data: Validator[];
}
/** Validator defines the structure for validator information. */
export interface Validator {
    id: string;
    moniker: string;
    operatorAddress: string;
    consensusAddress: string;
    jailed: boolean;
    status: number;
    tokens: string;
    delegatorShares: string;
    description: ValidatorDescription | undefined;
    unbondingHeight: string;
    unbondingTime: string;
    commissionRate: string;
    commissionMaxRate: string;
    commissionMaxChangeRate: string;
    commissionUpdateTime: string;
    proposed: string;
    signed: string;
    missed: string;
    timestamp: string;
    uptimes: ValidatorUptime[];
    slashingEvents: SlashingEvent[];
    /** uptime percentage base on latest 10k block */
    uptimePercentage: number;
    /** URL of the validator logo */
    imageUrl: string;
}
export interface ValidatorDescription {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
    imageUrl: string;
}
export interface ValidatorUptime {
    blockNumber: string;
    status: string;
}
export interface SlashingEvent {
    blockNumber: string;
    blockTimestamp: string;
    address: string;
    power: string;
    reason: string;
    jailed: string;
    missedBlocks: string;
}
export interface GetValidatorRequest {
    address: string;
}
export interface GetValidatorResponse {
    /** Status of the response. */
    s: string;
    /** Error message. */
    errmsg: string;
    data: Validator | undefined;
}
export interface GetValidatorUptimeRequest {
    address: string;
}
export interface GetValidatorUptimeResponse {
    /** Status of the response. */
    s: string;
    /** Error message. */
    errmsg: string;
    data: ValidatorUptime[];
}
export interface GetTxsRequest {
    before: string;
    after: string;
    limit: number;
    skip: string;
    type: string;
    module: string;
    fromNumber: string;
    toNumber: string;
    /**
     * The starting timestamp in UNIX milliseconds that the txs must be equal or
     * older than
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds that the txs must be equal or
     * younger than
     */
    endTime: string;
    /** The status of the txs to be returned */
    status: string;
}
export interface GetTxsResponse {
    paging: Paging | undefined;
    data: TxData[];
}
export interface GetTxByTxHashRequest {
    hash: string;
}
export interface GetTxByTxHashResponse {
    /** Status of the response. */
    s: string;
    /** Error message. */
    errmsg: string;
    data: TxDetailData | undefined;
}
export interface GetPeggyDepositTxsRequest {
    /** Sender address of deposit request */
    sender: string;
    /** Address of receiveer upon deposit */
    receiver: string;
    limit: number;
    skip: string;
}
export interface GetPeggyDepositTxsResponse {
    field: PeggyDepositTx[];
}
/** PeggyDepositTx wraps tx data includes peggy deposit tx details information */
export interface PeggyDepositTx {
    /** Sender address of deposit request */
    sender: string;
    /** Address of receiveer upon deposit */
    receiver: string;
    /**
     * The event nonce of WithdrawalClaim event emitted by Ethereum chain upon
     * deposit
     */
    eventNonce: string;
    /**
     * The block height of WithdrawalClaim event emitted by Ethereum chain upon
     * deposit
     */
    eventHeight: string;
    /** Amount of tokens being deposited */
    amount: string;
    /** Denom of tokens being deposited */
    denom: string;
    /** orchestratorAddress who created batch request */
    orchestratorAddress: string;
    state: string;
    /** The claimType will be DepoistClaim for Deposits */
    claimType: number;
    txHashes: string[];
    createdAt: string;
    updatedAt: string;
}
export interface GetPeggyWithdrawalTxsRequest {
    /** Sender address of withdrawal request */
    sender: string;
    /** Address of receiveer upon withdrawal */
    receiver: string;
    limit: number;
    skip: string;
}
export interface GetPeggyWithdrawalTxsResponse {
    field: PeggyWithdrawalTx[];
}
/**
 * PeggyWithdrawalTx wraps tx data includes peggy withdrawal tx details
 * information
 */
export interface PeggyWithdrawalTx {
    /** Sender address of withdrawal request */
    sender: string;
    /** Address of receiveer upon withdrawal */
    receiver: string;
    /** Amount of tokens being withdrawan */
    amount: string;
    /** Denom of tokens being withdrawan */
    denom: string;
    /** The bridge fee paid by sender for withdrawal */
    bridgeFee: string;
    /** A auto incremented unique ID representing the withdrawal request */
    outgoingTxId: string;
    /**
     * The timestamp after which Batch request will be discarded if not processed
     * already
     */
    batchTimeout: string;
    /** A auto incremented unique ID representing the Withdrawal Batches */
    batchNonce: string;
    /** orchestratorAddress who created batch request */
    orchestratorAddress: string;
    /**
     * The event nonce of WithdrawalClaim event emitted by Ethereum chain upon
     * batch withdrawal
     */
    eventNonce: string;
    /**
     * The block height of WithdrawalClaim event emitted by Ethereum chain upon
     * batch withdrawal
     */
    eventHeight: string;
    state: string;
    /** The claimType will be WithdrawalClaim for Batch Withdrawals */
    claimType: number;
    txHashes: string[];
    createdAt: string;
    updatedAt: string;
}
export interface GetIBCTransferTxsRequest {
    sender: string;
    receiver: string;
    srcChannel: string;
    srcPort: string;
    destChannel: string;
    destPort: string;
    limit: number;
    skip: string;
}
export interface GetIBCTransferTxsResponse {
    field: IBCTransferTx[];
}
/** IBCTransferTx wraps tx data includes ibc transfer tx details information */
export interface IBCTransferTx {
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** identifies the port on the receiving chain */
    destinationPort: string;
    /** identifies the channel end on the receiving chain */
    destinationChannel: string;
    /** transfer amount */
    amount: string;
    /** transafer denom */
    denom: string;
    /**
     * Timeout height relative to the current block height. The timeout is disabled
     * when set to 0
     */
    timeoutHeight: string;
    /** Timeout timestamp (in nanoseconds) relative to the current block timestamp */
    timeoutTimestamp: string;
    /**
     * number corresponds to the order of sends and receives, where a Packet with
     * an earlier sequence number must be sent and received before a Packet with a
     * later sequence number
     */
    packetSequence: string;
    dataHex: Uint8Array;
    state: string;
    /** it's injective chain tx hash array */
    txHashes: string[];
    createdAt: string;
    updatedAt: string;
}
export interface GetWasmCodesRequest {
    limit: number;
    fromNumber: string;
    toNumber: string;
}
export interface GetWasmCodesResponse {
    paging: Paging | undefined;
    data: WasmCode[];
}
/** Detail of cosmwasm stored code */
export interface WasmCode {
    /** ID of stored wasmcode, sorted in descending order */
    codeId: string;
    /** Tx hash of store code transaction */
    txHash: string;
    /** Checksum of the cosmwasm code */
    checksum: Checksum | undefined;
    /** Block time when the code is stored, in millisecond */
    createdAt: string;
    /** Contract type of the wasm code */
    contractType: string;
    /** version string of the wasm code */
    version: string;
    /** describe instantiate permission */
    permission: ContractPermission | undefined;
    /** code schema preview */
    codeSchema: string;
    /** code repo preview, may contain schema folder */
    codeView: string;
    /** count number of contract instantiation from this code */
    instantiates: string;
    /** creator of this code */
    creator: string;
    /** monotonic order of the code stored */
    codeNumber: string;
    /** id of the proposal that store this code */
    proposalId: string;
}
export interface Checksum {
    /** Algorithm of hash function */
    algorithm: string;
    /** Hash if apply algorithm to the cosmwasm bytecode */
    hash: string;
}
export interface ContractPermission {
    /** Access type of instantiation */
    accessType: number;
    /** Account address */
    address: string;
}
export interface GetWasmCodeByIDRequest {
    /** Code ID of the code */
    codeId: string;
}
export interface GetWasmCodeByIDResponse {
    /** ID of stored wasmcode, sorted in descending order */
    codeId: string;
    /** Tx hash of store code transaction */
    txHash: string;
    /** Checksum of the cosmwasm code */
    checksum: Checksum | undefined;
    /** Block time when the code is stored, in millisecond */
    createdAt: string;
    /** Contract type of the wasm code */
    contractType: string;
    /** version string of the wasm code */
    version: string;
    /** describe instantiate permission */
    permission: ContractPermission | undefined;
    /** code schema preview */
    codeSchema: string;
    /** code repo preview, may contain schema folder */
    codeView: string;
    /** count number of contract instantiation from this code */
    instantiates: string;
    /** creator of this code */
    creator: string;
    /** monotonic order of the code stored */
    codeNumber: string;
    /** id of the proposal that store this code */
    proposalId: string;
}
export interface GetWasmContractsRequest {
    limit: number;
    codeId: string;
    fromNumber: string;
    toNumber: string;
    assetsOnly: boolean;
    skip: string;
    /** Label of the contract */
    label: string;
}
export interface GetWasmContractsResponse {
    paging: Paging | undefined;
    data: WasmContract[];
}
/** Detail of cosmwasm instantiated contract */
export interface WasmContract {
    /** General name of the contract */
    label: string;
    /** Address of the contract */
    address: string;
    /** hash of the instantiate transaction */
    txHash: string;
    /** Address of the contract creator */
    creator: string;
    /** Number of times call to execute contract */
    executes: string;
    /** Block timestamp that contract was instantiated, in millisecond */
    instantiatedAt: string;
    /** init message when this contract was instantiated */
    initMessage: string;
    /** Block timestamp that contract was called, in millisecond */
    lastExecutedAt: string;
    /** Contract funds */
    funds: ContractFund[];
    /** Code id of the contract */
    codeId: string;
    /** Admin of the contract */
    admin: string;
    /** Latest migrate message of the contract */
    currentMigrateMessage: string;
    /** Monotonic contract number in database */
    contractNumber: string;
    /** Contract version string */
    version: string;
    /** Contract type */
    type: string;
    cw20Metadata: Cw20Metadata | undefined;
    /** id of the proposal that instantiate this contract */
    proposalId: string;
}
export interface ContractFund {
    /** Denominator */
    denom: string;
    /** Amount of denom */
    amount: string;
}
/** General cw20 metadata */
export interface Cw20Metadata {
    tokenInfo: Cw20TokenInfo | undefined;
    marketingInfo: Cw20MarketingInfo | undefined;
}
/** Token name, symbol, decimal and so on */
export interface Cw20TokenInfo {
    /** General name of the token */
    name: string;
    /** Symbol of then token */
    symbol: string;
    /** Decimal places of token */
    decimals: string;
    /** Token's total supply */
    totalSupply: string;
}
/** Marketing info */
export interface Cw20MarketingInfo {
    /** Project information */
    project: string;
    /** Token's description */
    description: string;
    /** logo (url/embedded) */
    logo: string;
    /** A random field for additional marketing info */
    marketing: Uint8Array;
}
export interface GetWasmContractByAddressRequest {
    /** Contract address */
    contractAddress: string;
}
export interface GetWasmContractByAddressResponse {
    /** General name of the contract */
    label: string;
    /** Address of the contract */
    address: string;
    /** hash of the instantiate transaction */
    txHash: string;
    /** Address of the contract creator */
    creator: string;
    /** Number of times call to execute contract */
    executes: string;
    /** Block timestamp that contract was instantiated, in millisecond */
    instantiatedAt: string;
    /** init message when this contract was instantiated */
    initMessage: string;
    /** Block timestamp that contract was called, in millisecond */
    lastExecutedAt: string;
    /** Contract funds */
    funds: ContractFund[];
    /** Code id of the contract */
    codeId: string;
    /** Admin of the contract */
    admin: string;
    /** Latest migrate message of the contract */
    currentMigrateMessage: string;
    /** Monotonic contract number in database */
    contractNumber: string;
    /** Contract version string */
    version: string;
    /** Contract type */
    type: string;
    cw20Metadata: Cw20Metadata | undefined;
    /** id of the proposal that instantiate this contract */
    proposalId: string;
}
export interface GetCw20BalanceRequest {
    /** address to list balance of */
    address: string;
    limit: number;
}
export interface GetCw20BalanceResponse {
    field: WasmCw20Balance[];
}
export interface WasmCw20Balance {
    /** Address of CW20 contract */
    contractAddress: string;
    /** Account address */
    account: string;
    /** Account balance */
    balance: string;
    /** update timestamp in milisecond */
    updatedAt: string;
    cw20Metadata: Cw20Metadata | undefined;
}
export interface RelayersRequest {
    /** Specify multiple marketIDs to search. */
    marketIDs: string[];
}
export interface RelayersResponse {
    field: RelayerMarkets[];
}
export interface RelayerMarkets {
    /** Market ID of the market */
    marketId: string;
    /** Relayers list for specified market */
    relayers: Relayer[];
}
export interface Relayer {
    /** Relayer identifier */
    name: string;
    /** Call to action. A link to the relayer */
    cta: string;
}
export interface GetBankTransfersRequest {
    /** Transfer sender address */
    senders: string[];
    /** Transfer recipient address */
    recipients: string[];
    /**
     * Returns transfers with the community pool address as either sender or
     * recipient
     */
    isCommunityPoolRelated: boolean;
    limit: number;
    skip: string;
    /**
     * The starting timestamp in UNIX milliseconds that the transfers must be equal
     * or older than
     */
    startTime: string;
    /**
     * The ending timestamp in UNIX milliseconds that the transfers must be equal
     * or younger than
     */
    endTime: string;
    /** Transfers where either the sender or the recipient is one of the addresses */
    address: string[];
    perPage: number;
    token: string;
}
export interface GetBankTransfersResponse {
    paging: Paging | undefined;
    data: BankTransfer[];
}
/** Bank transfer represents a transfer */
export interface BankTransfer {
    sender: string;
    recipient: string;
    /** Amounts transferred */
    amounts: Coin[];
    blockNumber: string;
    blockTimestamp: string;
}
export interface Coin {
    /** Denom of the coin */
    denom: string;
    amount: string;
}
export interface StreamTxsRequest {
}
export interface StreamTxsResponse {
    id: string;
    blockNumber: string;
    blockTimestamp: string;
    hash: string;
    codespace: string;
    messages: string;
    txNumber: string;
    /** Transaction log indicating errors */
    errorLog: string;
    code: number;
    /** peggy bridge claim id, non-zero if tx contains MsgDepositClaim */
    claimIds: string[];
}
export interface StreamBlocksRequest {
}
export interface StreamBlocksResponse {
    height: string;
    proposer: string;
    moniker: string;
    blockHash: string;
    parentHash: string;
    numPreCommits: string;
    numTxs: string;
    txs: TxDataRPC[];
    timestamp: string;
}
export declare const GetAccountTxsRequest: {
    encode(message: GetAccountTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountTxsRequest;
    fromJSON(object: any): GetAccountTxsRequest;
    toJSON(message: GetAccountTxsRequest): unknown;
    create(base?: DeepPartial<GetAccountTxsRequest>): GetAccountTxsRequest;
    fromPartial(object: DeepPartial<GetAccountTxsRequest>): GetAccountTxsRequest;
};
export declare const GetAccountTxsResponse: {
    encode(message: GetAccountTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountTxsResponse;
    fromJSON(object: any): GetAccountTxsResponse;
    toJSON(message: GetAccountTxsResponse): unknown;
    create(base?: DeepPartial<GetAccountTxsResponse>): GetAccountTxsResponse;
    fromPartial(object: DeepPartial<GetAccountTxsResponse>): GetAccountTxsResponse;
};
export declare const Paging: {
    encode(message: Paging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Paging;
    fromJSON(object: any): Paging;
    toJSON(message: Paging): unknown;
    create(base?: DeepPartial<Paging>): Paging;
    fromPartial(object: DeepPartial<Paging>): Paging;
};
export declare const TxDetailData: {
    encode(message: TxDetailData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDetailData;
    fromJSON(object: any): TxDetailData;
    toJSON(message: TxDetailData): unknown;
    create(base?: DeepPartial<TxDetailData>): TxDetailData;
    fromPartial(object: DeepPartial<TxDetailData>): TxDetailData;
};
export declare const GasFee: {
    encode(message: GasFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasFee;
    fromJSON(object: any): GasFee;
    toJSON(message: GasFee): unknown;
    create(base?: DeepPartial<GasFee>): GasFee;
    fromPartial(object: DeepPartial<GasFee>): GasFee;
};
export declare const CosmosCoin: {
    encode(message: CosmosCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmosCoin;
    fromJSON(object: any): CosmosCoin;
    toJSON(message: CosmosCoin): unknown;
    create(base?: DeepPartial<CosmosCoin>): CosmosCoin;
    fromPartial(object: DeepPartial<CosmosCoin>): CosmosCoin;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create(base?: DeepPartial<Event>): Event;
    fromPartial(object: DeepPartial<Event>): Event;
};
export declare const Event_AttributesEntry: {
    encode(message: Event_AttributesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event_AttributesEntry;
    fromJSON(object: any): Event_AttributesEntry;
    toJSON(message: Event_AttributesEntry): unknown;
    create(base?: DeepPartial<Event_AttributesEntry>): Event_AttributesEntry;
    fromPartial(object: DeepPartial<Event_AttributesEntry>): Event_AttributesEntry;
};
export declare const Signature: {
    encode(message: Signature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Signature;
    fromJSON(object: any): Signature;
    toJSON(message: Signature): unknown;
    create(base?: DeepPartial<Signature>): Signature;
    fromPartial(object: DeepPartial<Signature>): Signature;
};
export declare const GetContractTxsRequest: {
    encode(message: GetContractTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetContractTxsRequest;
    fromJSON(object: any): GetContractTxsRequest;
    toJSON(message: GetContractTxsRequest): unknown;
    create(base?: DeepPartial<GetContractTxsRequest>): GetContractTxsRequest;
    fromPartial(object: DeepPartial<GetContractTxsRequest>): GetContractTxsRequest;
};
export declare const GetContractTxsResponse: {
    encode(message: GetContractTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetContractTxsResponse;
    fromJSON(object: any): GetContractTxsResponse;
    toJSON(message: GetContractTxsResponse): unknown;
    create(base?: DeepPartial<GetContractTxsResponse>): GetContractTxsResponse;
    fromPartial(object: DeepPartial<GetContractTxsResponse>): GetContractTxsResponse;
};
export declare const GetBlocksRequest: {
    encode(message: GetBlocksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlocksRequest;
    fromJSON(object: any): GetBlocksRequest;
    toJSON(message: GetBlocksRequest): unknown;
    create(base?: DeepPartial<GetBlocksRequest>): GetBlocksRequest;
    fromPartial(object: DeepPartial<GetBlocksRequest>): GetBlocksRequest;
};
export declare const GetBlocksResponse: {
    encode(message: GetBlocksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlocksResponse;
    fromJSON(object: any): GetBlocksResponse;
    toJSON(message: GetBlocksResponse): unknown;
    create(base?: DeepPartial<GetBlocksResponse>): GetBlocksResponse;
    fromPartial(object: DeepPartial<GetBlocksResponse>): GetBlocksResponse;
};
export declare const BlockInfo: {
    encode(message: BlockInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockInfo;
    fromJSON(object: any): BlockInfo;
    toJSON(message: BlockInfo): unknown;
    create(base?: DeepPartial<BlockInfo>): BlockInfo;
    fromPartial(object: DeepPartial<BlockInfo>): BlockInfo;
};
export declare const TxDataRPC: {
    encode(message: TxDataRPC, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDataRPC;
    fromJSON(object: any): TxDataRPC;
    toJSON(message: TxDataRPC): unknown;
    create(base?: DeepPartial<TxDataRPC>): TxDataRPC;
    fromPartial(object: DeepPartial<TxDataRPC>): TxDataRPC;
};
export declare const GetBlockRequest: {
    encode(message: GetBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockRequest;
    fromJSON(object: any): GetBlockRequest;
    toJSON(message: GetBlockRequest): unknown;
    create(base?: DeepPartial<GetBlockRequest>): GetBlockRequest;
    fromPartial(object: DeepPartial<GetBlockRequest>): GetBlockRequest;
};
export declare const GetBlockResponse: {
    encode(message: GetBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockResponse;
    fromJSON(object: any): GetBlockResponse;
    toJSON(message: GetBlockResponse): unknown;
    create(base?: DeepPartial<GetBlockResponse>): GetBlockResponse;
    fromPartial(object: DeepPartial<GetBlockResponse>): GetBlockResponse;
};
export declare const BlockDetailInfo: {
    encode(message: BlockDetailInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockDetailInfo;
    fromJSON(object: any): BlockDetailInfo;
    toJSON(message: BlockDetailInfo): unknown;
    create(base?: DeepPartial<BlockDetailInfo>): BlockDetailInfo;
    fromPartial(object: DeepPartial<BlockDetailInfo>): BlockDetailInfo;
};
export declare const TxData: {
    encode(message: TxData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxData;
    fromJSON(object: any): TxData;
    toJSON(message: TxData): unknown;
    create(base?: DeepPartial<TxData>): TxData;
    fromPartial(object: DeepPartial<TxData>): TxData;
};
export declare const GetValidatorsRequest: {
    encode(_: GetValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorsRequest;
    fromJSON(_: any): GetValidatorsRequest;
    toJSON(_: GetValidatorsRequest): unknown;
    create(base?: DeepPartial<GetValidatorsRequest>): GetValidatorsRequest;
    fromPartial(_: DeepPartial<GetValidatorsRequest>): GetValidatorsRequest;
};
export declare const GetValidatorsResponse: {
    encode(message: GetValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorsResponse;
    fromJSON(object: any): GetValidatorsResponse;
    toJSON(message: GetValidatorsResponse): unknown;
    create(base?: DeepPartial<GetValidatorsResponse>): GetValidatorsResponse;
    fromPartial(object: DeepPartial<GetValidatorsResponse>): GetValidatorsResponse;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    create(base?: DeepPartial<Validator>): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValidatorDescription: {
    encode(message: ValidatorDescription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorDescription;
    fromJSON(object: any): ValidatorDescription;
    toJSON(message: ValidatorDescription): unknown;
    create(base?: DeepPartial<ValidatorDescription>): ValidatorDescription;
    fromPartial(object: DeepPartial<ValidatorDescription>): ValidatorDescription;
};
export declare const ValidatorUptime: {
    encode(message: ValidatorUptime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUptime;
    fromJSON(object: any): ValidatorUptime;
    toJSON(message: ValidatorUptime): unknown;
    create(base?: DeepPartial<ValidatorUptime>): ValidatorUptime;
    fromPartial(object: DeepPartial<ValidatorUptime>): ValidatorUptime;
};
export declare const SlashingEvent: {
    encode(message: SlashingEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SlashingEvent;
    fromJSON(object: any): SlashingEvent;
    toJSON(message: SlashingEvent): unknown;
    create(base?: DeepPartial<SlashingEvent>): SlashingEvent;
    fromPartial(object: DeepPartial<SlashingEvent>): SlashingEvent;
};
export declare const GetValidatorRequest: {
    encode(message: GetValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorRequest;
    fromJSON(object: any): GetValidatorRequest;
    toJSON(message: GetValidatorRequest): unknown;
    create(base?: DeepPartial<GetValidatorRequest>): GetValidatorRequest;
    fromPartial(object: DeepPartial<GetValidatorRequest>): GetValidatorRequest;
};
export declare const GetValidatorResponse: {
    encode(message: GetValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorResponse;
    fromJSON(object: any): GetValidatorResponse;
    toJSON(message: GetValidatorResponse): unknown;
    create(base?: DeepPartial<GetValidatorResponse>): GetValidatorResponse;
    fromPartial(object: DeepPartial<GetValidatorResponse>): GetValidatorResponse;
};
export declare const GetValidatorUptimeRequest: {
    encode(message: GetValidatorUptimeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorUptimeRequest;
    fromJSON(object: any): GetValidatorUptimeRequest;
    toJSON(message: GetValidatorUptimeRequest): unknown;
    create(base?: DeepPartial<GetValidatorUptimeRequest>): GetValidatorUptimeRequest;
    fromPartial(object: DeepPartial<GetValidatorUptimeRequest>): GetValidatorUptimeRequest;
};
export declare const GetValidatorUptimeResponse: {
    encode(message: GetValidatorUptimeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorUptimeResponse;
    fromJSON(object: any): GetValidatorUptimeResponse;
    toJSON(message: GetValidatorUptimeResponse): unknown;
    create(base?: DeepPartial<GetValidatorUptimeResponse>): GetValidatorUptimeResponse;
    fromPartial(object: DeepPartial<GetValidatorUptimeResponse>): GetValidatorUptimeResponse;
};
export declare const GetTxsRequest: {
    encode(message: GetTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsRequest;
    fromJSON(object: any): GetTxsRequest;
    toJSON(message: GetTxsRequest): unknown;
    create(base?: DeepPartial<GetTxsRequest>): GetTxsRequest;
    fromPartial(object: DeepPartial<GetTxsRequest>): GetTxsRequest;
};
export declare const GetTxsResponse: {
    encode(message: GetTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsResponse;
    fromJSON(object: any): GetTxsResponse;
    toJSON(message: GetTxsResponse): unknown;
    create(base?: DeepPartial<GetTxsResponse>): GetTxsResponse;
    fromPartial(object: DeepPartial<GetTxsResponse>): GetTxsResponse;
};
export declare const GetTxByTxHashRequest: {
    encode(message: GetTxByTxHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxByTxHashRequest;
    fromJSON(object: any): GetTxByTxHashRequest;
    toJSON(message: GetTxByTxHashRequest): unknown;
    create(base?: DeepPartial<GetTxByTxHashRequest>): GetTxByTxHashRequest;
    fromPartial(object: DeepPartial<GetTxByTxHashRequest>): GetTxByTxHashRequest;
};
export declare const GetTxByTxHashResponse: {
    encode(message: GetTxByTxHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxByTxHashResponse;
    fromJSON(object: any): GetTxByTxHashResponse;
    toJSON(message: GetTxByTxHashResponse): unknown;
    create(base?: DeepPartial<GetTxByTxHashResponse>): GetTxByTxHashResponse;
    fromPartial(object: DeepPartial<GetTxByTxHashResponse>): GetTxByTxHashResponse;
};
export declare const GetPeggyDepositTxsRequest: {
    encode(message: GetPeggyDepositTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPeggyDepositTxsRequest;
    fromJSON(object: any): GetPeggyDepositTxsRequest;
    toJSON(message: GetPeggyDepositTxsRequest): unknown;
    create(base?: DeepPartial<GetPeggyDepositTxsRequest>): GetPeggyDepositTxsRequest;
    fromPartial(object: DeepPartial<GetPeggyDepositTxsRequest>): GetPeggyDepositTxsRequest;
};
export declare const GetPeggyDepositTxsResponse: {
    encode(message: GetPeggyDepositTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPeggyDepositTxsResponse;
    fromJSON(object: any): GetPeggyDepositTxsResponse;
    toJSON(message: GetPeggyDepositTxsResponse): unknown;
    create(base?: DeepPartial<GetPeggyDepositTxsResponse>): GetPeggyDepositTxsResponse;
    fromPartial(object: DeepPartial<GetPeggyDepositTxsResponse>): GetPeggyDepositTxsResponse;
};
export declare const PeggyDepositTx: {
    encode(message: PeggyDepositTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeggyDepositTx;
    fromJSON(object: any): PeggyDepositTx;
    toJSON(message: PeggyDepositTx): unknown;
    create(base?: DeepPartial<PeggyDepositTx>): PeggyDepositTx;
    fromPartial(object: DeepPartial<PeggyDepositTx>): PeggyDepositTx;
};
export declare const GetPeggyWithdrawalTxsRequest: {
    encode(message: GetPeggyWithdrawalTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPeggyWithdrawalTxsRequest;
    fromJSON(object: any): GetPeggyWithdrawalTxsRequest;
    toJSON(message: GetPeggyWithdrawalTxsRequest): unknown;
    create(base?: DeepPartial<GetPeggyWithdrawalTxsRequest>): GetPeggyWithdrawalTxsRequest;
    fromPartial(object: DeepPartial<GetPeggyWithdrawalTxsRequest>): GetPeggyWithdrawalTxsRequest;
};
export declare const GetPeggyWithdrawalTxsResponse: {
    encode(message: GetPeggyWithdrawalTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPeggyWithdrawalTxsResponse;
    fromJSON(object: any): GetPeggyWithdrawalTxsResponse;
    toJSON(message: GetPeggyWithdrawalTxsResponse): unknown;
    create(base?: DeepPartial<GetPeggyWithdrawalTxsResponse>): GetPeggyWithdrawalTxsResponse;
    fromPartial(object: DeepPartial<GetPeggyWithdrawalTxsResponse>): GetPeggyWithdrawalTxsResponse;
};
export declare const PeggyWithdrawalTx: {
    encode(message: PeggyWithdrawalTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeggyWithdrawalTx;
    fromJSON(object: any): PeggyWithdrawalTx;
    toJSON(message: PeggyWithdrawalTx): unknown;
    create(base?: DeepPartial<PeggyWithdrawalTx>): PeggyWithdrawalTx;
    fromPartial(object: DeepPartial<PeggyWithdrawalTx>): PeggyWithdrawalTx;
};
export declare const GetIBCTransferTxsRequest: {
    encode(message: GetIBCTransferTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIBCTransferTxsRequest;
    fromJSON(object: any): GetIBCTransferTxsRequest;
    toJSON(message: GetIBCTransferTxsRequest): unknown;
    create(base?: DeepPartial<GetIBCTransferTxsRequest>): GetIBCTransferTxsRequest;
    fromPartial(object: DeepPartial<GetIBCTransferTxsRequest>): GetIBCTransferTxsRequest;
};
export declare const GetIBCTransferTxsResponse: {
    encode(message: GetIBCTransferTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIBCTransferTxsResponse;
    fromJSON(object: any): GetIBCTransferTxsResponse;
    toJSON(message: GetIBCTransferTxsResponse): unknown;
    create(base?: DeepPartial<GetIBCTransferTxsResponse>): GetIBCTransferTxsResponse;
    fromPartial(object: DeepPartial<GetIBCTransferTxsResponse>): GetIBCTransferTxsResponse;
};
export declare const IBCTransferTx: {
    encode(message: IBCTransferTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferTx;
    fromJSON(object: any): IBCTransferTx;
    toJSON(message: IBCTransferTx): unknown;
    create(base?: DeepPartial<IBCTransferTx>): IBCTransferTx;
    fromPartial(object: DeepPartial<IBCTransferTx>): IBCTransferTx;
};
export declare const GetWasmCodesRequest: {
    encode(message: GetWasmCodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmCodesRequest;
    fromJSON(object: any): GetWasmCodesRequest;
    toJSON(message: GetWasmCodesRequest): unknown;
    create(base?: DeepPartial<GetWasmCodesRequest>): GetWasmCodesRequest;
    fromPartial(object: DeepPartial<GetWasmCodesRequest>): GetWasmCodesRequest;
};
export declare const GetWasmCodesResponse: {
    encode(message: GetWasmCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmCodesResponse;
    fromJSON(object: any): GetWasmCodesResponse;
    toJSON(message: GetWasmCodesResponse): unknown;
    create(base?: DeepPartial<GetWasmCodesResponse>): GetWasmCodesResponse;
    fromPartial(object: DeepPartial<GetWasmCodesResponse>): GetWasmCodesResponse;
};
export declare const WasmCode: {
    encode(message: WasmCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmCode;
    fromJSON(object: any): WasmCode;
    toJSON(message: WasmCode): unknown;
    create(base?: DeepPartial<WasmCode>): WasmCode;
    fromPartial(object: DeepPartial<WasmCode>): WasmCode;
};
export declare const Checksum: {
    encode(message: Checksum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Checksum;
    fromJSON(object: any): Checksum;
    toJSON(message: Checksum): unknown;
    create(base?: DeepPartial<Checksum>): Checksum;
    fromPartial(object: DeepPartial<Checksum>): Checksum;
};
export declare const ContractPermission: {
    encode(message: ContractPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractPermission;
    fromJSON(object: any): ContractPermission;
    toJSON(message: ContractPermission): unknown;
    create(base?: DeepPartial<ContractPermission>): ContractPermission;
    fromPartial(object: DeepPartial<ContractPermission>): ContractPermission;
};
export declare const GetWasmCodeByIDRequest: {
    encode(message: GetWasmCodeByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmCodeByIDRequest;
    fromJSON(object: any): GetWasmCodeByIDRequest;
    toJSON(message: GetWasmCodeByIDRequest): unknown;
    create(base?: DeepPartial<GetWasmCodeByIDRequest>): GetWasmCodeByIDRequest;
    fromPartial(object: DeepPartial<GetWasmCodeByIDRequest>): GetWasmCodeByIDRequest;
};
export declare const GetWasmCodeByIDResponse: {
    encode(message: GetWasmCodeByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmCodeByIDResponse;
    fromJSON(object: any): GetWasmCodeByIDResponse;
    toJSON(message: GetWasmCodeByIDResponse): unknown;
    create(base?: DeepPartial<GetWasmCodeByIDResponse>): GetWasmCodeByIDResponse;
    fromPartial(object: DeepPartial<GetWasmCodeByIDResponse>): GetWasmCodeByIDResponse;
};
export declare const GetWasmContractsRequest: {
    encode(message: GetWasmContractsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmContractsRequest;
    fromJSON(object: any): GetWasmContractsRequest;
    toJSON(message: GetWasmContractsRequest): unknown;
    create(base?: DeepPartial<GetWasmContractsRequest>): GetWasmContractsRequest;
    fromPartial(object: DeepPartial<GetWasmContractsRequest>): GetWasmContractsRequest;
};
export declare const GetWasmContractsResponse: {
    encode(message: GetWasmContractsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmContractsResponse;
    fromJSON(object: any): GetWasmContractsResponse;
    toJSON(message: GetWasmContractsResponse): unknown;
    create(base?: DeepPartial<GetWasmContractsResponse>): GetWasmContractsResponse;
    fromPartial(object: DeepPartial<GetWasmContractsResponse>): GetWasmContractsResponse;
};
export declare const WasmContract: {
    encode(message: WasmContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmContract;
    fromJSON(object: any): WasmContract;
    toJSON(message: WasmContract): unknown;
    create(base?: DeepPartial<WasmContract>): WasmContract;
    fromPartial(object: DeepPartial<WasmContract>): WasmContract;
};
export declare const ContractFund: {
    encode(message: ContractFund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractFund;
    fromJSON(object: any): ContractFund;
    toJSON(message: ContractFund): unknown;
    create(base?: DeepPartial<ContractFund>): ContractFund;
    fromPartial(object: DeepPartial<ContractFund>): ContractFund;
};
export declare const Cw20Metadata: {
    encode(message: Cw20Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cw20Metadata;
    fromJSON(object: any): Cw20Metadata;
    toJSON(message: Cw20Metadata): unknown;
    create(base?: DeepPartial<Cw20Metadata>): Cw20Metadata;
    fromPartial(object: DeepPartial<Cw20Metadata>): Cw20Metadata;
};
export declare const Cw20TokenInfo: {
    encode(message: Cw20TokenInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cw20TokenInfo;
    fromJSON(object: any): Cw20TokenInfo;
    toJSON(message: Cw20TokenInfo): unknown;
    create(base?: DeepPartial<Cw20TokenInfo>): Cw20TokenInfo;
    fromPartial(object: DeepPartial<Cw20TokenInfo>): Cw20TokenInfo;
};
export declare const Cw20MarketingInfo: {
    encode(message: Cw20MarketingInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cw20MarketingInfo;
    fromJSON(object: any): Cw20MarketingInfo;
    toJSON(message: Cw20MarketingInfo): unknown;
    create(base?: DeepPartial<Cw20MarketingInfo>): Cw20MarketingInfo;
    fromPartial(object: DeepPartial<Cw20MarketingInfo>): Cw20MarketingInfo;
};
export declare const GetWasmContractByAddressRequest: {
    encode(message: GetWasmContractByAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmContractByAddressRequest;
    fromJSON(object: any): GetWasmContractByAddressRequest;
    toJSON(message: GetWasmContractByAddressRequest): unknown;
    create(base?: DeepPartial<GetWasmContractByAddressRequest>): GetWasmContractByAddressRequest;
    fromPartial(object: DeepPartial<GetWasmContractByAddressRequest>): GetWasmContractByAddressRequest;
};
export declare const GetWasmContractByAddressResponse: {
    encode(message: GetWasmContractByAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetWasmContractByAddressResponse;
    fromJSON(object: any): GetWasmContractByAddressResponse;
    toJSON(message: GetWasmContractByAddressResponse): unknown;
    create(base?: DeepPartial<GetWasmContractByAddressResponse>): GetWasmContractByAddressResponse;
    fromPartial(object: DeepPartial<GetWasmContractByAddressResponse>): GetWasmContractByAddressResponse;
};
export declare const GetCw20BalanceRequest: {
    encode(message: GetCw20BalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCw20BalanceRequest;
    fromJSON(object: any): GetCw20BalanceRequest;
    toJSON(message: GetCw20BalanceRequest): unknown;
    create(base?: DeepPartial<GetCw20BalanceRequest>): GetCw20BalanceRequest;
    fromPartial(object: DeepPartial<GetCw20BalanceRequest>): GetCw20BalanceRequest;
};
export declare const GetCw20BalanceResponse: {
    encode(message: GetCw20BalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCw20BalanceResponse;
    fromJSON(object: any): GetCw20BalanceResponse;
    toJSON(message: GetCw20BalanceResponse): unknown;
    create(base?: DeepPartial<GetCw20BalanceResponse>): GetCw20BalanceResponse;
    fromPartial(object: DeepPartial<GetCw20BalanceResponse>): GetCw20BalanceResponse;
};
export declare const WasmCw20Balance: {
    encode(message: WasmCw20Balance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmCw20Balance;
    fromJSON(object: any): WasmCw20Balance;
    toJSON(message: WasmCw20Balance): unknown;
    create(base?: DeepPartial<WasmCw20Balance>): WasmCw20Balance;
    fromPartial(object: DeepPartial<WasmCw20Balance>): WasmCw20Balance;
};
export declare const RelayersRequest: {
    encode(message: RelayersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayersRequest;
    fromJSON(object: any): RelayersRequest;
    toJSON(message: RelayersRequest): unknown;
    create(base?: DeepPartial<RelayersRequest>): RelayersRequest;
    fromPartial(object: DeepPartial<RelayersRequest>): RelayersRequest;
};
export declare const RelayersResponse: {
    encode(message: RelayersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayersResponse;
    fromJSON(object: any): RelayersResponse;
    toJSON(message: RelayersResponse): unknown;
    create(base?: DeepPartial<RelayersResponse>): RelayersResponse;
    fromPartial(object: DeepPartial<RelayersResponse>): RelayersResponse;
};
export declare const RelayerMarkets: {
    encode(message: RelayerMarkets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayerMarkets;
    fromJSON(object: any): RelayerMarkets;
    toJSON(message: RelayerMarkets): unknown;
    create(base?: DeepPartial<RelayerMarkets>): RelayerMarkets;
    fromPartial(object: DeepPartial<RelayerMarkets>): RelayerMarkets;
};
export declare const Relayer: {
    encode(message: Relayer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Relayer;
    fromJSON(object: any): Relayer;
    toJSON(message: Relayer): unknown;
    create(base?: DeepPartial<Relayer>): Relayer;
    fromPartial(object: DeepPartial<Relayer>): Relayer;
};
export declare const GetBankTransfersRequest: {
    encode(message: GetBankTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBankTransfersRequest;
    fromJSON(object: any): GetBankTransfersRequest;
    toJSON(message: GetBankTransfersRequest): unknown;
    create(base?: DeepPartial<GetBankTransfersRequest>): GetBankTransfersRequest;
    fromPartial(object: DeepPartial<GetBankTransfersRequest>): GetBankTransfersRequest;
};
export declare const GetBankTransfersResponse: {
    encode(message: GetBankTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBankTransfersResponse;
    fromJSON(object: any): GetBankTransfersResponse;
    toJSON(message: GetBankTransfersResponse): unknown;
    create(base?: DeepPartial<GetBankTransfersResponse>): GetBankTransfersResponse;
    fromPartial(object: DeepPartial<GetBankTransfersResponse>): GetBankTransfersResponse;
};
export declare const BankTransfer: {
    encode(message: BankTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BankTransfer;
    fromJSON(object: any): BankTransfer;
    toJSON(message: BankTransfer): unknown;
    create(base?: DeepPartial<BankTransfer>): BankTransfer;
    fromPartial(object: DeepPartial<BankTransfer>): BankTransfer;
};
export declare const Coin: {
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): unknown;
    create(base?: DeepPartial<Coin>): Coin;
    fromPartial(object: DeepPartial<Coin>): Coin;
};
export declare const StreamTxsRequest: {
    encode(_: StreamTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamTxsRequest;
    fromJSON(_: any): StreamTxsRequest;
    toJSON(_: StreamTxsRequest): unknown;
    create(base?: DeepPartial<StreamTxsRequest>): StreamTxsRequest;
    fromPartial(_: DeepPartial<StreamTxsRequest>): StreamTxsRequest;
};
export declare const StreamTxsResponse: {
    encode(message: StreamTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamTxsResponse;
    fromJSON(object: any): StreamTxsResponse;
    toJSON(message: StreamTxsResponse): unknown;
    create(base?: DeepPartial<StreamTxsResponse>): StreamTxsResponse;
    fromPartial(object: DeepPartial<StreamTxsResponse>): StreamTxsResponse;
};
export declare const StreamBlocksRequest: {
    encode(_: StreamBlocksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamBlocksRequest;
    fromJSON(_: any): StreamBlocksRequest;
    toJSON(_: StreamBlocksRequest): unknown;
    create(base?: DeepPartial<StreamBlocksRequest>): StreamBlocksRequest;
    fromPartial(_: DeepPartial<StreamBlocksRequest>): StreamBlocksRequest;
};
export declare const StreamBlocksResponse: {
    encode(message: StreamBlocksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StreamBlocksResponse;
    fromJSON(object: any): StreamBlocksResponse;
    toJSON(message: StreamBlocksResponse): unknown;
    create(base?: DeepPartial<StreamBlocksResponse>): StreamBlocksResponse;
    fromPartial(object: DeepPartial<StreamBlocksResponse>): StreamBlocksResponse;
};
/** ExplorerAPI implements explorer data API for e.g. Blockchain Explorer */
export interface InjectiveExplorerRPC {
    /** GetAccountTxs returns tranctions involving in an account based upon params. */
    GetAccountTxs(request: DeepPartial<GetAccountTxsRequest>, metadata?: grpc.Metadata): Promise<GetAccountTxsResponse>;
    /** GetContractTxs returns contract-related transactions */
    GetContractTxs(request: DeepPartial<GetContractTxsRequest>, metadata?: grpc.Metadata): Promise<GetContractTxsResponse>;
    /** GetBlocks returns blocks based upon the request params */
    GetBlocks(request: DeepPartial<GetBlocksRequest>, metadata?: grpc.Metadata): Promise<GetBlocksResponse>;
    /** GetBlock returns block based upon the height or hash */
    GetBlock(request: DeepPartial<GetBlockRequest>, metadata?: grpc.Metadata): Promise<GetBlockResponse>;
    /** GetValidators returns validators on the active chain */
    GetValidators(request: DeepPartial<GetValidatorsRequest>, metadata?: grpc.Metadata): Promise<GetValidatorsResponse>;
    /** GetValidator returns validator information on the active chain */
    GetValidator(request: DeepPartial<GetValidatorRequest>, metadata?: grpc.Metadata): Promise<GetValidatorResponse>;
    /** GetValidatorUptime returns validator uptime information on the active chain */
    GetValidatorUptime(request: DeepPartial<GetValidatorUptimeRequest>, metadata?: grpc.Metadata): Promise<GetValidatorUptimeResponse>;
    /** GetTxs returns transactions based upon the request params */
    GetTxs(request: DeepPartial<GetTxsRequest>, metadata?: grpc.Metadata): Promise<GetTxsResponse>;
    /** GetTxByTxHash returns certain transaction information by its tx hash. */
    GetTxByTxHash(request: DeepPartial<GetTxByTxHashRequest>, metadata?: grpc.Metadata): Promise<GetTxByTxHashResponse>;
    /**
     * GetPeggyDepositTxs returns the peggy deposit transactions based upon the
     * request params
     */
    GetPeggyDepositTxs(request: DeepPartial<GetPeggyDepositTxsRequest>, metadata?: grpc.Metadata): Promise<GetPeggyDepositTxsResponse>;
    /**
     * GetPeggyWithdrawalTxs returns the peggy withdrawal transactions based upon
     * the request params
     */
    GetPeggyWithdrawalTxs(request: DeepPartial<GetPeggyWithdrawalTxsRequest>, metadata?: grpc.Metadata): Promise<GetPeggyWithdrawalTxsResponse>;
    /**
     * GetIBCTransferTxs returns the ibc transfer transactions based upon the
     * request params
     */
    GetIBCTransferTxs(request: DeepPartial<GetIBCTransferTxsRequest>, metadata?: grpc.Metadata): Promise<GetIBCTransferTxsResponse>;
    /** GetWasmCodes lists all stored code */
    GetWasmCodes(request: DeepPartial<GetWasmCodesRequest>, metadata?: grpc.Metadata): Promise<GetWasmCodesResponse>;
    /** GetWasmCodeById list cosmwasm code infor by ID */
    GetWasmCodeByID(request: DeepPartial<GetWasmCodeByIDRequest>, metadata?: grpc.Metadata): Promise<GetWasmCodeByIDResponse>;
    /** GetWasmContracts lists all contracts */
    GetWasmContracts(request: DeepPartial<GetWasmContractsRequest>, metadata?: grpc.Metadata): Promise<GetWasmContractsResponse>;
    /** GetWasmContractByAddress list cosmwasm contract info by its address */
    GetWasmContractByAddress(request: DeepPartial<GetWasmContractByAddressRequest>, metadata?: grpc.Metadata): Promise<GetWasmContractByAddressResponse>;
    /** GetCw20Balance lists all cw20 balances of an injective account */
    GetCw20Balance(request: DeepPartial<GetCw20BalanceRequest>, metadata?: grpc.Metadata): Promise<GetCw20BalanceResponse>;
    /**
     * Request relayers infos by marketIDs. If no ids are provided, all market with
     * associated relayers are returned
     */
    Relayers(request: DeepPartial<RelayersRequest>, metadata?: grpc.Metadata): Promise<RelayersResponse>;
    /** GetBankTransfers returns bank transfers. */
    GetBankTransfers(request: DeepPartial<GetBankTransfersRequest>, metadata?: grpc.Metadata): Promise<GetBankTransfersResponse>;
    /** StreamTxs returns transactions based upon the request params */
    StreamTxs(request: DeepPartial<StreamTxsRequest>, metadata?: grpc.Metadata): Observable<StreamTxsResponse>;
    /** StreamBlocks returns the latest blocks */
    StreamBlocks(request: DeepPartial<StreamBlocksRequest>, metadata?: grpc.Metadata): Observable<StreamBlocksResponse>;
}
export declare class InjectiveExplorerRPCClientImpl implements InjectiveExplorerRPC {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetAccountTxs(request: DeepPartial<GetAccountTxsRequest>, metadata?: grpc.Metadata): Promise<GetAccountTxsResponse>;
    GetContractTxs(request: DeepPartial<GetContractTxsRequest>, metadata?: grpc.Metadata): Promise<GetContractTxsResponse>;
    GetBlocks(request: DeepPartial<GetBlocksRequest>, metadata?: grpc.Metadata): Promise<GetBlocksResponse>;
    GetBlock(request: DeepPartial<GetBlockRequest>, metadata?: grpc.Metadata): Promise<GetBlockResponse>;
    GetValidators(request: DeepPartial<GetValidatorsRequest>, metadata?: grpc.Metadata): Promise<GetValidatorsResponse>;
    GetValidator(request: DeepPartial<GetValidatorRequest>, metadata?: grpc.Metadata): Promise<GetValidatorResponse>;
    GetValidatorUptime(request: DeepPartial<GetValidatorUptimeRequest>, metadata?: grpc.Metadata): Promise<GetValidatorUptimeResponse>;
    GetTxs(request: DeepPartial<GetTxsRequest>, metadata?: grpc.Metadata): Promise<GetTxsResponse>;
    GetTxByTxHash(request: DeepPartial<GetTxByTxHashRequest>, metadata?: grpc.Metadata): Promise<GetTxByTxHashResponse>;
    GetPeggyDepositTxs(request: DeepPartial<GetPeggyDepositTxsRequest>, metadata?: grpc.Metadata): Promise<GetPeggyDepositTxsResponse>;
    GetPeggyWithdrawalTxs(request: DeepPartial<GetPeggyWithdrawalTxsRequest>, metadata?: grpc.Metadata): Promise<GetPeggyWithdrawalTxsResponse>;
    GetIBCTransferTxs(request: DeepPartial<GetIBCTransferTxsRequest>, metadata?: grpc.Metadata): Promise<GetIBCTransferTxsResponse>;
    GetWasmCodes(request: DeepPartial<GetWasmCodesRequest>, metadata?: grpc.Metadata): Promise<GetWasmCodesResponse>;
    GetWasmCodeByID(request: DeepPartial<GetWasmCodeByIDRequest>, metadata?: grpc.Metadata): Promise<GetWasmCodeByIDResponse>;
    GetWasmContracts(request: DeepPartial<GetWasmContractsRequest>, metadata?: grpc.Metadata): Promise<GetWasmContractsResponse>;
    GetWasmContractByAddress(request: DeepPartial<GetWasmContractByAddressRequest>, metadata?: grpc.Metadata): Promise<GetWasmContractByAddressResponse>;
    GetCw20Balance(request: DeepPartial<GetCw20BalanceRequest>, metadata?: grpc.Metadata): Promise<GetCw20BalanceResponse>;
    Relayers(request: DeepPartial<RelayersRequest>, metadata?: grpc.Metadata): Promise<RelayersResponse>;
    GetBankTransfers(request: DeepPartial<GetBankTransfersRequest>, metadata?: grpc.Metadata): Promise<GetBankTransfersResponse>;
    StreamTxs(request: DeepPartial<StreamTxsRequest>, metadata?: grpc.Metadata): Observable<StreamTxsResponse>;
    StreamBlocks(request: DeepPartial<StreamBlocksRequest>, metadata?: grpc.Metadata): Observable<StreamBlocksResponse>;
}
export declare const InjectiveExplorerRPCDesc: {
    serviceName: string;
};
export declare const InjectiveExplorerRPCGetAccountTxsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetContractTxsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetBlocksDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetBlockDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetValidatorsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetValidatorDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetValidatorUptimeDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetTxsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetTxByTxHashDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetPeggyDepositTxsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetPeggyWithdrawalTxsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetIBCTransferTxsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetWasmCodesDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetWasmCodeByIDDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetWasmContractsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetWasmContractByAddressDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetCw20BalanceDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCRelayersDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCGetBankTransfersDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCStreamTxsDesc: UnaryMethodDefinitionish;
export declare const InjectiveExplorerRPCStreamBlocksDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
    invoke<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Observable<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        streamingTransport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
    invoke<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Observable<any>;
}
declare var tsProtoGlobalThis: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};
