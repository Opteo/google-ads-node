// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/customer_client.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerClient extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasClientCustomer(): boolean;
  clearClientCustomer(): void;
  getClientCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
  setClientCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHidden(): boolean;
  clearHidden(): void;
  getHidden(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHidden(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasLevel(): boolean;
  clearLevel(): void;
  getLevel(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLevel(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTimeZone(): boolean;
  clearTimeZone(): void;
  getTimeZone(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTimeZone(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTestAccount(): boolean;
  clearTestAccount(): void;
  getTestAccount(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTestAccount(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasManager(): boolean;
  clearManager(): void;
  getManager(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setManager(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasDescriptiveName(): boolean;
  clearDescriptiveName(): void;
  getDescriptiveName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescriptiveName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;
  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerClient.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerClient): CustomerClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerClient;
  static deserializeBinaryFromReader(message: CustomerClient, reader: jspb.BinaryReader): CustomerClient;
}

export namespace CustomerClient {
  export type AsObject = {
    resourceName: string,
    clientCustomer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hidden?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    level?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    timeZone?: google_protobuf_wrappers_pb.StringValue.AsObject,
    testAccount?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    manager?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    descriptiveName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

