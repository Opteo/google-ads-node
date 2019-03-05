// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_label_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_campaign_label_pb from "../../../../../google/ads/googleads/v1/resources/campaign_label_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetCampaignLabelRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignLabelRequest): GetCampaignLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignLabelRequest;
  static deserializeBinaryFromReader(message: GetCampaignLabelRequest, reader: jspb.BinaryReader): GetCampaignLabelRequest;
}

export namespace GetCampaignLabelRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignLabelsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CampaignLabelOperation>;
  setOperationsList(value: Array<CampaignLabelOperation>): void;
  addOperations(value?: CampaignLabelOperation, index?: number): CampaignLabelOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignLabelsRequest): MutateCampaignLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignLabelsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignLabelsRequest, reader: jspb.BinaryReader): MutateCampaignLabelsRequest;
}

export namespace MutateCampaignLabelsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignLabelOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignLabelOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_campaign_label_pb.CampaignLabel | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_campaign_label_pb.CampaignLabel): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignLabelOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignLabelOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignLabelOperation): CampaignLabelOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignLabelOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignLabelOperation;
  static deserializeBinaryFromReader(message: CampaignLabelOperation, reader: jspb.BinaryReader): CampaignLabelOperation;
}

export namespace CampaignLabelOperation {
  export type AsObject = {
    create?: google_ads_googleads_v1_resources_campaign_label_pb.CampaignLabel.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateCampaignLabelsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCampaignLabelResult>;
  setResultsList(value: Array<MutateCampaignLabelResult>): void;
  addResults(value?: MutateCampaignLabelResult, index?: number): MutateCampaignLabelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignLabelsResponse): MutateCampaignLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignLabelsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignLabelsResponse, reader: jspb.BinaryReader): MutateCampaignLabelsResponse;
}

export namespace MutateCampaignLabelsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignLabelResult.AsObject>,
  }
}

export class MutateCampaignLabelResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignLabelResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignLabelResult): MutateCampaignLabelResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignLabelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignLabelResult;
  static deserializeBinaryFromReader(message: MutateCampaignLabelResult, reader: jspb.BinaryReader): MutateCampaignLabelResult;
}

export namespace MutateCampaignLabelResult {
  export type AsObject = {
    resourceName: string,
  }
}

