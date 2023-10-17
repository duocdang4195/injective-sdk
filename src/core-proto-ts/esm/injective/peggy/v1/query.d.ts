import { grpc } from "@injectivelabs/grpc-web";
import _m0 from "protobufjs/minimal";
import { OutgoingTransferTx, OutgoingTxBatch } from "./batch";
import { GenesisState } from "./genesis";
import { MsgConfirmBatch, MsgValsetConfirm } from "./msgs";
import { Params } from "./params";
import { BatchFees } from "./pool";
import { LastClaimEvent, Valset } from "./types";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params | undefined;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetResponse {
    valset: Valset | undefined;
}
export interface QueryValsetRequestRequest {
    nonce: string;
}
export interface QueryValsetRequestResponse {
    valset: Valset | undefined;
}
export interface QueryValsetConfirmRequest {
    nonce: string;
    address: string;
}
export interface QueryValsetConfirmResponse {
    confirm: MsgValsetConfirm | undefined;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: string;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch | undefined;
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce: string;
    contractAddress: string;
}
export interface QueryBatchRequestByNonceResponse {
    batch: OutgoingTxBatch | undefined;
}
export interface QueryBatchConfirmsRequest {
    nonce: string;
    contractAddress: string;
}
export interface QueryBatchConfirmsResponse {
    confirms: MsgConfirmBatch[];
}
export interface QueryLastEventByAddrRequest {
    address: string;
}
export interface QueryLastEventByAddrResponse {
    lastClaimEvent: LastClaimEvent | undefined;
}
export interface QueryERC20ToDenomRequest {
    erc20: string;
}
export interface QueryERC20ToDenomResponse {
    denom: string;
    cosmosOriginated: boolean;
}
export interface QueryDenomToERC20Request {
    denom: string;
}
export interface QueryDenomToERC20Response {
    erc20: string;
    cosmosOriginated: boolean;
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
    ethAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddress {
    ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
    validatorAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
    validatorAddress: string;
    ethAddress: string;
}
export interface QueryPendingSendToEth {
    senderAddress: string;
}
export interface QueryPendingSendToEthResponse {
    transfersInBatches: OutgoingTransferTx[];
    unbatchedTransfers: OutgoingTransferTx[];
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponse {
    state: GenesisState | undefined;
}
export interface MissingNoncesRequest {
}
export interface MissingNoncesResponse {
    operatorAddresses: string[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCurrentValsetRequest: {
    encode(_: QueryCurrentValsetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetRequest;
    fromJSON(_: any): QueryCurrentValsetRequest;
    toJSON(_: QueryCurrentValsetRequest): unknown;
    create(base?: DeepPartial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
    fromPartial(_: DeepPartial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
};
export declare const QueryCurrentValsetResponse: {
    encode(message: QueryCurrentValsetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetResponse;
    fromJSON(object: any): QueryCurrentValsetResponse;
    toJSON(message: QueryCurrentValsetResponse): unknown;
    create(base?: DeepPartial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
    fromPartial(object: DeepPartial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
};
export declare const QueryValsetRequestRequest: {
    encode(message: QueryValsetRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestRequest;
    fromJSON(object: any): QueryValsetRequestRequest;
    toJSON(message: QueryValsetRequestRequest): unknown;
    create(base?: DeepPartial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
    fromPartial(object: DeepPartial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
};
export declare const QueryValsetRequestResponse: {
    encode(message: QueryValsetRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestResponse;
    fromJSON(object: any): QueryValsetRequestResponse;
    toJSON(message: QueryValsetRequestResponse): unknown;
    create(base?: DeepPartial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
    fromPartial(object: DeepPartial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
};
export declare const QueryValsetConfirmRequest: {
    encode(message: QueryValsetConfirmRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmRequest;
    fromJSON(object: any): QueryValsetConfirmRequest;
    toJSON(message: QueryValsetConfirmRequest): unknown;
    create(base?: DeepPartial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
    fromPartial(object: DeepPartial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
};
export declare const QueryValsetConfirmResponse: {
    encode(message: QueryValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmResponse;
    fromJSON(object: any): QueryValsetConfirmResponse;
    toJSON(message: QueryValsetConfirmResponse): unknown;
    create(base?: DeepPartial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
    fromPartial(object: DeepPartial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest;
    fromJSON(object: any): QueryValsetConfirmsByNonceRequest;
    toJSON(message: QueryValsetConfirmsByNonceRequest): unknown;
    create(base?: DeepPartial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse;
    fromJSON(object: any): QueryValsetConfirmsByNonceResponse;
    toJSON(message: QueryValsetConfirmsByNonceResponse): unknown;
    create(base?: DeepPartial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
};
export declare const QueryLastValsetRequestsRequest: {
    encode(_: QueryLastValsetRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest;
    fromJSON(_: any): QueryLastValsetRequestsRequest;
    toJSON(_: QueryLastValsetRequestsRequest): unknown;
    create(base?: DeepPartial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
    fromPartial(_: DeepPartial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
};
export declare const QueryLastValsetRequestsResponse: {
    encode(message: QueryLastValsetRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse;
    fromJSON(object: any): QueryLastValsetRequestsResponse;
    toJSON(message: QueryLastValsetRequestsResponse): unknown;
    create(base?: DeepPartial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
    fromPartial(object: DeepPartial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest;
    toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown;
    create(base?: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse;
    toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown;
    create(base?: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
};
export declare const QueryBatchFeeRequest: {
    encode(_: QueryBatchFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeRequest;
    fromJSON(_: any): QueryBatchFeeRequest;
    toJSON(_: QueryBatchFeeRequest): unknown;
    create(base?: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
    fromPartial(_: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
};
export declare const QueryBatchFeeResponse: {
    encode(message: QueryBatchFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeResponse;
    fromJSON(object: any): QueryBatchFeeResponse;
    toJSON(message: QueryBatchFeeResponse): unknown;
    create(base?: DeepPartial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
    fromPartial(object: DeepPartial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest;
    toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown;
    create(base?: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse;
    toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown;
    create(base?: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
};
export declare const QueryOutgoingTxBatchesRequest: {
    encode(_: QueryOutgoingTxBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest;
    fromJSON(_: any): QueryOutgoingTxBatchesRequest;
    toJSON(_: QueryOutgoingTxBatchesRequest): unknown;
    create(base?: DeepPartial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
    fromPartial(_: DeepPartial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
};
export declare const QueryOutgoingTxBatchesResponse: {
    encode(message: QueryOutgoingTxBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse;
    fromJSON(object: any): QueryOutgoingTxBatchesResponse;
    toJSON(message: QueryOutgoingTxBatchesResponse): unknown;
    create(base?: DeepPartial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
    fromPartial(object: DeepPartial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
};
export declare const QueryBatchRequestByNonceRequest: {
    encode(message: QueryBatchRequestByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest;
    fromJSON(object: any): QueryBatchRequestByNonceRequest;
    toJSON(message: QueryBatchRequestByNonceRequest): unknown;
    create(base?: DeepPartial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
};
export declare const QueryBatchRequestByNonceResponse: {
    encode(message: QueryBatchRequestByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse;
    fromJSON(object: any): QueryBatchRequestByNonceResponse;
    toJSON(message: QueryBatchRequestByNonceResponse): unknown;
    create(base?: DeepPartial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
};
export declare const QueryBatchConfirmsRequest: {
    encode(message: QueryBatchConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest;
    fromJSON(object: any): QueryBatchConfirmsRequest;
    toJSON(message: QueryBatchConfirmsRequest): unknown;
    create(base?: DeepPartial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
    fromPartial(object: DeepPartial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
};
export declare const QueryBatchConfirmsResponse: {
    encode(message: QueryBatchConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse;
    fromJSON(object: any): QueryBatchConfirmsResponse;
    toJSON(message: QueryBatchConfirmsResponse): unknown;
    create(base?: DeepPartial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
    fromPartial(object: DeepPartial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
};
export declare const QueryLastEventByAddrRequest: {
    encode(message: QueryLastEventByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventByAddrRequest;
    fromJSON(object: any): QueryLastEventByAddrRequest;
    toJSON(message: QueryLastEventByAddrRequest): unknown;
    create(base?: DeepPartial<QueryLastEventByAddrRequest>): QueryLastEventByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastEventByAddrRequest>): QueryLastEventByAddrRequest;
};
export declare const QueryLastEventByAddrResponse: {
    encode(message: QueryLastEventByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventByAddrResponse;
    fromJSON(object: any): QueryLastEventByAddrResponse;
    toJSON(message: QueryLastEventByAddrResponse): unknown;
    create(base?: DeepPartial<QueryLastEventByAddrResponse>): QueryLastEventByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastEventByAddrResponse>): QueryLastEventByAddrResponse;
};
export declare const QueryERC20ToDenomRequest: {
    encode(message: QueryERC20ToDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomRequest;
    fromJSON(object: any): QueryERC20ToDenomRequest;
    toJSON(message: QueryERC20ToDenomRequest): unknown;
    create(base?: DeepPartial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
    fromPartial(object: DeepPartial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
};
export declare const QueryERC20ToDenomResponse: {
    encode(message: QueryERC20ToDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomResponse;
    fromJSON(object: any): QueryERC20ToDenomResponse;
    toJSON(message: QueryERC20ToDenomResponse): unknown;
    create(base?: DeepPartial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
    fromPartial(object: DeepPartial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
};
export declare const QueryDenomToERC20Request: {
    encode(message: QueryDenomToERC20Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Request;
    fromJSON(object: any): QueryDenomToERC20Request;
    toJSON(message: QueryDenomToERC20Request): unknown;
    create(base?: DeepPartial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
    fromPartial(object: DeepPartial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
};
export declare const QueryDenomToERC20Response: {
    encode(message: QueryDenomToERC20Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Response;
    fromJSON(object: any): QueryDenomToERC20Response;
    toJSON(message: QueryDenomToERC20Response): unknown;
    create(base?: DeepPartial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
    fromPartial(object: DeepPartial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddress;
    toJSON(message: QueryDelegateKeysByValidatorAddress): unknown;
    create(base?: DeepPartial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse;
    toJSON(message: QueryDelegateKeysByValidatorAddressResponse): unknown;
    create(base?: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
};
export declare const QueryDelegateKeysByEthAddress: {
    encode(message: QueryDelegateKeysByEthAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress;
    fromJSON(object: any): QueryDelegateKeysByEthAddress;
    toJSON(message: QueryDelegateKeysByEthAddress): unknown;
    create(base?: DeepPartial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByEthAddressResponse;
    toJSON(message: QueryDelegateKeysByEthAddressResponse): unknown;
    create(base?: DeepPartial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress;
    toJSON(message: QueryDelegateKeysByOrchestratorAddress): unknown;
    create(base?: DeepPartial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse;
    toJSON(message: QueryDelegateKeysByOrchestratorAddressResponse): unknown;
    create(base?: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
};
export declare const QueryPendingSendToEth: {
    encode(message: QueryPendingSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEth;
    fromJSON(object: any): QueryPendingSendToEth;
    toJSON(message: QueryPendingSendToEth): unknown;
    create(base?: DeepPartial<QueryPendingSendToEth>): QueryPendingSendToEth;
    fromPartial(object: DeepPartial<QueryPendingSendToEth>): QueryPendingSendToEth;
};
export declare const QueryPendingSendToEthResponse: {
    encode(message: QueryPendingSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse;
    fromJSON(object: any): QueryPendingSendToEthResponse;
    toJSON(message: QueryPendingSendToEthResponse): unknown;
    create(base?: DeepPartial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
    fromPartial(object: DeepPartial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromJSON(_: any): QueryModuleStateRequest;
    toJSON(_: QueryModuleStateRequest): unknown;
    create(base?: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromJSON(object: any): QueryModuleStateResponse;
    toJSON(message: QueryModuleStateResponse): unknown;
    create(base?: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
export declare const MissingNoncesRequest: {
    encode(_: MissingNoncesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MissingNoncesRequest;
    fromJSON(_: any): MissingNoncesRequest;
    toJSON(_: MissingNoncesRequest): unknown;
    create(base?: DeepPartial<MissingNoncesRequest>): MissingNoncesRequest;
    fromPartial(_: DeepPartial<MissingNoncesRequest>): MissingNoncesRequest;
};
export declare const MissingNoncesResponse: {
    encode(message: MissingNoncesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MissingNoncesResponse;
    fromJSON(object: any): MissingNoncesResponse;
    toJSON(message: MissingNoncesResponse): unknown;
    create(base?: DeepPartial<MissingNoncesResponse>): MissingNoncesResponse;
    fromPartial(object: DeepPartial<MissingNoncesResponse>): MissingNoncesResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Deployments queries deployments */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** valset */
    CurrentValset(request: DeepPartial<QueryCurrentValsetRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentValsetResponse>;
    ValsetRequest(request: DeepPartial<QueryValsetRequestRequest>, metadata?: grpc.Metadata): Promise<QueryValsetRequestResponse>;
    ValsetConfirm(request: DeepPartial<QueryValsetConfirmRequest>, metadata?: grpc.Metadata): Promise<QueryValsetConfirmResponse>;
    ValsetConfirmsByNonce(request: DeepPartial<QueryValsetConfirmsByNonceRequest>, metadata?: grpc.Metadata): Promise<QueryValsetConfirmsByNonceResponse>;
    LastValsetRequests(request: DeepPartial<QueryLastValsetRequestsRequest>, metadata?: grpc.Metadata): Promise<QueryLastValsetRequestsResponse>;
    LastPendingValsetRequestByAddr(request: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>, metadata?: grpc.Metadata): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    /** claim */
    LastEventByAddr(request: DeepPartial<QueryLastEventByAddrRequest>, metadata?: grpc.Metadata): Promise<QueryLastEventByAddrResponse>;
    /** batch */
    GetPendingSendToEth(request: DeepPartial<QueryPendingSendToEth>, metadata?: grpc.Metadata): Promise<QueryPendingSendToEthResponse>;
    BatchFees(request: DeepPartial<QueryBatchFeeRequest>, metadata?: grpc.Metadata): Promise<QueryBatchFeeResponse>;
    OutgoingTxBatches(request: DeepPartial<QueryOutgoingTxBatchesRequest>, metadata?: grpc.Metadata): Promise<QueryOutgoingTxBatchesResponse>;
    LastPendingBatchRequestByAddr(request: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>, metadata?: grpc.Metadata): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    BatchRequestByNonce(request: DeepPartial<QueryBatchRequestByNonceRequest>, metadata?: grpc.Metadata): Promise<QueryBatchRequestByNonceResponse>;
    BatchConfirms(request: DeepPartial<QueryBatchConfirmsRequest>, metadata?: grpc.Metadata): Promise<QueryBatchConfirmsResponse>;
    ERC20ToDenom(request: DeepPartial<QueryERC20ToDenomRequest>, metadata?: grpc.Metadata): Promise<QueryERC20ToDenomResponse>;
    DenomToERC20(request: DeepPartial<QueryDenomToERC20Request>, metadata?: grpc.Metadata): Promise<QueryDenomToERC20Response>;
    GetDelegateKeyByValidator(request: DeepPartial<QueryDelegateKeysByValidatorAddress>, metadata?: grpc.Metadata): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    GetDelegateKeyByEth(request: DeepPartial<QueryDelegateKeysByEthAddress>, metadata?: grpc.Metadata): Promise<QueryDelegateKeysByEthAddressResponse>;
    GetDelegateKeyByOrchestrator(request: DeepPartial<QueryDelegateKeysByOrchestratorAddress>, metadata?: grpc.Metadata): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    /** Retrieves the entire peggy module's state */
    PeggyModuleState(request: DeepPartial<QueryModuleStateRequest>, metadata?: grpc.Metadata): Promise<QueryModuleStateResponse>;
    MissingPeggoNonces(request: DeepPartial<MissingNoncesRequest>, metadata?: grpc.Metadata): Promise<MissingNoncesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    CurrentValset(request: DeepPartial<QueryCurrentValsetRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentValsetResponse>;
    ValsetRequest(request: DeepPartial<QueryValsetRequestRequest>, metadata?: grpc.Metadata): Promise<QueryValsetRequestResponse>;
    ValsetConfirm(request: DeepPartial<QueryValsetConfirmRequest>, metadata?: grpc.Metadata): Promise<QueryValsetConfirmResponse>;
    ValsetConfirmsByNonce(request: DeepPartial<QueryValsetConfirmsByNonceRequest>, metadata?: grpc.Metadata): Promise<QueryValsetConfirmsByNonceResponse>;
    LastValsetRequests(request: DeepPartial<QueryLastValsetRequestsRequest>, metadata?: grpc.Metadata): Promise<QueryLastValsetRequestsResponse>;
    LastPendingValsetRequestByAddr(request: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>, metadata?: grpc.Metadata): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    LastEventByAddr(request: DeepPartial<QueryLastEventByAddrRequest>, metadata?: grpc.Metadata): Promise<QueryLastEventByAddrResponse>;
    GetPendingSendToEth(request: DeepPartial<QueryPendingSendToEth>, metadata?: grpc.Metadata): Promise<QueryPendingSendToEthResponse>;
    BatchFees(request: DeepPartial<QueryBatchFeeRequest>, metadata?: grpc.Metadata): Promise<QueryBatchFeeResponse>;
    OutgoingTxBatches(request: DeepPartial<QueryOutgoingTxBatchesRequest>, metadata?: grpc.Metadata): Promise<QueryOutgoingTxBatchesResponse>;
    LastPendingBatchRequestByAddr(request: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>, metadata?: grpc.Metadata): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    BatchRequestByNonce(request: DeepPartial<QueryBatchRequestByNonceRequest>, metadata?: grpc.Metadata): Promise<QueryBatchRequestByNonceResponse>;
    BatchConfirms(request: DeepPartial<QueryBatchConfirmsRequest>, metadata?: grpc.Metadata): Promise<QueryBatchConfirmsResponse>;
    ERC20ToDenom(request: DeepPartial<QueryERC20ToDenomRequest>, metadata?: grpc.Metadata): Promise<QueryERC20ToDenomResponse>;
    DenomToERC20(request: DeepPartial<QueryDenomToERC20Request>, metadata?: grpc.Metadata): Promise<QueryDenomToERC20Response>;
    GetDelegateKeyByValidator(request: DeepPartial<QueryDelegateKeysByValidatorAddress>, metadata?: grpc.Metadata): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    GetDelegateKeyByEth(request: DeepPartial<QueryDelegateKeysByEthAddress>, metadata?: grpc.Metadata): Promise<QueryDelegateKeysByEthAddressResponse>;
    GetDelegateKeyByOrchestrator(request: DeepPartial<QueryDelegateKeysByOrchestratorAddress>, metadata?: grpc.Metadata): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    PeggyModuleState(request: DeepPartial<QueryModuleStateRequest>, metadata?: grpc.Metadata): Promise<QueryModuleStateResponse>;
    MissingPeggoNonces(request: DeepPartial<MissingNoncesRequest>, metadata?: grpc.Metadata): Promise<MissingNoncesResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryCurrentValsetDesc: UnaryMethodDefinitionish;
export declare const QueryValsetRequestDesc: UnaryMethodDefinitionish;
export declare const QueryValsetConfirmDesc: UnaryMethodDefinitionish;
export declare const QueryValsetConfirmsByNonceDesc: UnaryMethodDefinitionish;
export declare const QueryLastValsetRequestsDesc: UnaryMethodDefinitionish;
export declare const QueryLastPendingValsetRequestByAddrDesc: UnaryMethodDefinitionish;
export declare const QueryLastEventByAddrDesc: UnaryMethodDefinitionish;
export declare const QueryGetPendingSendToEthDesc: UnaryMethodDefinitionish;
export declare const QueryBatchFeesDesc: UnaryMethodDefinitionish;
export declare const QueryOutgoingTxBatchesDesc: UnaryMethodDefinitionish;
export declare const QueryLastPendingBatchRequestByAddrDesc: UnaryMethodDefinitionish;
export declare const QueryBatchRequestByNonceDesc: UnaryMethodDefinitionish;
export declare const QueryBatchConfirmsDesc: UnaryMethodDefinitionish;
export declare const QueryERC20ToDenomDesc: UnaryMethodDefinitionish;
export declare const QueryDenomToERC20Desc: UnaryMethodDefinitionish;
export declare const QueryGetDelegateKeyByValidatorDesc: UnaryMethodDefinitionish;
export declare const QueryGetDelegateKeyByEthDesc: UnaryMethodDefinitionish;
export declare const QueryGetDelegateKeyByOrchestratorDesc: UnaryMethodDefinitionish;
export declare const QueryPeggyModuleStateDesc: UnaryMethodDefinitionish;
export declare const QueryMissingPeggoNoncesDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare var tsProtoGlobalThis: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends tsProtoGlobalThis.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export {};
