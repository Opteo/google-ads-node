// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/merchant_center_link_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_merchant_center_link_pb from "../../../../../google/ads/googleads/v2/resources/merchant_center_link_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class ListMerchantCenterLinksRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMerchantCenterLinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMerchantCenterLinksRequest): ListMerchantCenterLinksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMerchantCenterLinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMerchantCenterLinksRequest;
  static deserializeBinaryFromReader(message: ListMerchantCenterLinksRequest, reader: jspb.BinaryReader): ListMerchantCenterLinksRequest;
}

export namespace ListMerchantCenterLinksRequest {
  export type AsObject = {
    customerId: string,
  }
}

export class ListMerchantCenterLinksResponse extends jspb.Message {
  clearMerchantCenterLinksList(): void;
  getMerchantCenterLinksList(): Array<google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink>;
  setMerchantCenterLinksList(value: Array<google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink>): void;
  addMerchantCenterLinks(value?: google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink, index?: number): google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMerchantCenterLinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMerchantCenterLinksResponse): ListMerchantCenterLinksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMerchantCenterLinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMerchantCenterLinksResponse;
  static deserializeBinaryFromReader(message: ListMerchantCenterLinksResponse, reader: jspb.BinaryReader): ListMerchantCenterLinksResponse;
}

export namespace ListMerchantCenterLinksResponse {
  export type AsObject = {
    merchantCenterLinksList: Array<google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink.AsObject>,
  }
}

export class GetMerchantCenterLinkRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMerchantCenterLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMerchantCenterLinkRequest): GetMerchantCenterLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMerchantCenterLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMerchantCenterLinkRequest;
  static deserializeBinaryFromReader(message: GetMerchantCenterLinkRequest, reader: jspb.BinaryReader): GetMerchantCenterLinkRequest;
}

export namespace GetMerchantCenterLinkRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateMerchantCenterLinkRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): MerchantCenterLinkOperation | undefined;
  setOperation(value?: MerchantCenterLinkOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateMerchantCenterLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateMerchantCenterLinkRequest): MutateMerchantCenterLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateMerchantCenterLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateMerchantCenterLinkRequest;
  static deserializeBinaryFromReader(message: MutateMerchantCenterLinkRequest, reader: jspb.BinaryReader): MutateMerchantCenterLinkRequest;
}

export namespace MutateMerchantCenterLinkRequest {
  export type AsObject = {
    customerId: string,
    operation?: MerchantCenterLinkOperation.AsObject,
  }
}

export class MerchantCenterLinkOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): MerchantCenterLinkOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCenterLinkOperation.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCenterLinkOperation): MerchantCenterLinkOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerchantCenterLinkOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCenterLinkOperation;
  static deserializeBinaryFromReader(message: MerchantCenterLinkOperation, reader: jspb.BinaryReader): MerchantCenterLinkOperation;
}

export namespace MerchantCenterLinkOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    update?: google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    UPDATE = 1,
    REMOVE = 2,
  }
}

export class MutateMerchantCenterLinkResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): MutateMerchantCenterLinkResult | undefined;
  setResult(value?: MutateMerchantCenterLinkResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateMerchantCenterLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateMerchantCenterLinkResponse): MutateMerchantCenterLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateMerchantCenterLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateMerchantCenterLinkResponse;
  static deserializeBinaryFromReader(message: MutateMerchantCenterLinkResponse, reader: jspb.BinaryReader): MutateMerchantCenterLinkResponse;
}

export namespace MutateMerchantCenterLinkResponse {
  export type AsObject = {
    result?: MutateMerchantCenterLinkResult.AsObject,
  }
}

export class MutateMerchantCenterLinkResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateMerchantCenterLinkResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateMerchantCenterLinkResult): MutateMerchantCenterLinkResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateMerchantCenterLinkResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateMerchantCenterLinkResult;
  static deserializeBinaryFromReader(message: MutateMerchantCenterLinkResult, reader: jspb.BinaryReader): MutateMerchantCenterLinkResult;
}

export namespace MutateMerchantCenterLinkResult {
  export type AsObject = {
    resourceName: string,
  }
}

