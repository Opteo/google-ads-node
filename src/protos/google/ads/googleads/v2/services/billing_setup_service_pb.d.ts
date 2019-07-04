// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/billing_setup_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_billing_setup_pb from "../../../../../google/ads/googleads/v2/resources/billing_setup_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetBillingSetupRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSetupRequest): GetBillingSetupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSetupRequest;
  static deserializeBinaryFromReader(message: GetBillingSetupRequest, reader: jspb.BinaryReader): GetBillingSetupRequest;
}

export namespace GetBillingSetupRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateBillingSetupRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): BillingSetupOperation | undefined;
  setOperation(value?: BillingSetupOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBillingSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBillingSetupRequest): MutateBillingSetupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBillingSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBillingSetupRequest;
  static deserializeBinaryFromReader(message: MutateBillingSetupRequest, reader: jspb.BinaryReader): MutateBillingSetupRequest;
}

export namespace MutateBillingSetupRequest {
  export type AsObject = {
    customerId: string,
    operation?: BillingSetupOperation.AsObject,
  }
}

export class BillingSetupOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): BillingSetupOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSetupOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSetupOperation): BillingSetupOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingSetupOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSetupOperation;
  static deserializeBinaryFromReader(message: BillingSetupOperation, reader: jspb.BinaryReader): BillingSetupOperation;
}

export namespace BillingSetupOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 2,
    REMOVE = 1,
  }
}

export class MutateBillingSetupResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): MutateBillingSetupResult | undefined;
  setResult(value?: MutateBillingSetupResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBillingSetupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBillingSetupResponse): MutateBillingSetupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBillingSetupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBillingSetupResponse;
  static deserializeBinaryFromReader(message: MutateBillingSetupResponse, reader: jspb.BinaryReader): MutateBillingSetupResponse;
}

export namespace MutateBillingSetupResponse {
  export type AsObject = {
    result?: MutateBillingSetupResult.AsObject,
  }
}

export class MutateBillingSetupResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBillingSetupResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBillingSetupResult): MutateBillingSetupResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBillingSetupResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBillingSetupResult;
  static deserializeBinaryFromReader(message: MutateBillingSetupResult, reader: jspb.BinaryReader): MutateBillingSetupResult;
}

export namespace MutateBillingSetupResult {
  export type AsObject = {
    resourceName: string,
  }
}

