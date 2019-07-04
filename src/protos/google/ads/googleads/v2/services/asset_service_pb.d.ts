// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/asset_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_asset_pb from "../../../../../google/ads/googleads/v2/resources/asset_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAssetRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetRequest): GetAssetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetRequest;
  static deserializeBinaryFromReader(message: GetAssetRequest, reader: jspb.BinaryReader): GetAssetRequest;
}

export namespace GetAssetRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAssetsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<AssetOperation>;
  setOperationsList(value: Array<AssetOperation>): void;
  addOperations(value?: AssetOperation, index?: number): AssetOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAssetsRequest): MutateAssetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAssetsRequest;
  static deserializeBinaryFromReader(message: MutateAssetsRequest, reader: jspb.BinaryReader): MutateAssetsRequest;
}

export namespace MutateAssetsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AssetOperation.AsObject>,
  }
}

export class AssetOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_asset_pb.Asset | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_asset_pb.Asset): void;

  getOperationCase(): AssetOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AssetOperation): AssetOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetOperation;
  static deserializeBinaryFromReader(message: AssetOperation, reader: jspb.BinaryReader): AssetOperation;
}

export namespace AssetOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_asset_pb.Asset.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
  }
}

export class MutateAssetsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<MutateAssetResult>;
  setResultsList(value: Array<MutateAssetResult>): void;
  addResults(value?: MutateAssetResult, index?: number): MutateAssetResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAssetsResponse): MutateAssetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAssetsResponse;
  static deserializeBinaryFromReader(message: MutateAssetsResponse, reader: jspb.BinaryReader): MutateAssetsResponse;
}

export namespace MutateAssetsResponse {
  export type AsObject = {
    resultsList: Array<MutateAssetResult.AsObject>,
  }
}

export class MutateAssetResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAssetResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAssetResult): MutateAssetResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAssetResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAssetResult;
  static deserializeBinaryFromReader(message: MutateAssetResult, reader: jspb.BinaryReader): MutateAssetResult;
}

export namespace MutateAssetResult {
  export type AsObject = {
    resourceName: string,
  }
}

