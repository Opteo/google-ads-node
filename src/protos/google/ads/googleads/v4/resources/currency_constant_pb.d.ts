// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/currency_constant.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CurrencyConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSymbol(): boolean;
  clearSymbol(): void;
  getSymbol(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSymbol(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasBillableUnitMicros(): boolean;
  clearBillableUnitMicros(): void;
  getBillableUnitMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setBillableUnitMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyConstant.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyConstant): CurrencyConstant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrencyConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyConstant;
  static deserializeBinaryFromReader(message: CurrencyConstant, reader: jspb.BinaryReader): CurrencyConstant;
}

export namespace CurrencyConstant {
  export type AsObject = {
    resourceName: string,
    code?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    symbol?: google_protobuf_wrappers_pb.StringValue.AsObject,
    billableUnitMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

