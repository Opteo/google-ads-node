// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/media_file_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_media_file_pb from "../../../../../google/ads/googleads/v1/resources/media_file_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetMediaFileRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMediaFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMediaFileRequest): GetMediaFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMediaFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMediaFileRequest;
  static deserializeBinaryFromReader(message: GetMediaFileRequest, reader: jspb.BinaryReader): GetMediaFileRequest;
}

export namespace GetMediaFileRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateMediaFilesRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<MediaFileOperation>;
  setOperationsList(value: Array<MediaFileOperation>): void;
  addOperations(value?: MediaFileOperation, index?: number): MediaFileOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateMediaFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateMediaFilesRequest): MutateMediaFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateMediaFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateMediaFilesRequest;
  static deserializeBinaryFromReader(message: MutateMediaFilesRequest, reader: jspb.BinaryReader): MutateMediaFilesRequest;
}

export namespace MutateMediaFilesRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<MediaFileOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class MediaFileOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_media_file_pb.MediaFile | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_media_file_pb.MediaFile): void;

  getOperationCase(): MediaFileOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaFileOperation.AsObject;
  static toObject(includeInstance: boolean, msg: MediaFileOperation): MediaFileOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaFileOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaFileOperation;
  static deserializeBinaryFromReader(message: MediaFileOperation, reader: jspb.BinaryReader): MediaFileOperation;
}

export namespace MediaFileOperation {
  export type AsObject = {
    create?: google_ads_googleads_v1_resources_media_file_pb.MediaFile.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
  }
}

export class MutateMediaFilesResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateMediaFileResult>;
  setResultsList(value: Array<MutateMediaFileResult>): void;
  addResults(value?: MutateMediaFileResult, index?: number): MutateMediaFileResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateMediaFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateMediaFilesResponse): MutateMediaFilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateMediaFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateMediaFilesResponse;
  static deserializeBinaryFromReader(message: MutateMediaFilesResponse, reader: jspb.BinaryReader): MutateMediaFilesResponse;
}

export namespace MutateMediaFilesResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateMediaFileResult.AsObject>,
  }
}

export class MutateMediaFileResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateMediaFileResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateMediaFileResult): MutateMediaFileResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateMediaFileResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateMediaFileResult;
  static deserializeBinaryFromReader(message: MutateMediaFileResult, reader: jspb.BinaryReader): MutateMediaFileResult;
}

export namespace MutateMediaFileResult {
  export type AsObject = {
    resourceName: string,
  }
}

