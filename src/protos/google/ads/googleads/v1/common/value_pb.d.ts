// package: google.ads.googleads.v1.common
// file: google/ads/googleads/v1/common/value.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Value extends jspb.Message {
  hasBooleanValue(): boolean;
  clearBooleanValue(): void;
  getBooleanValue(): boolean;
  setBooleanValue(value: boolean): void;

  hasInt64Value(): boolean;
  clearInt64Value(): void;
  getInt64Value(): number;
  setInt64Value(value: number): void;

  hasFloatValue(): boolean;
  clearFloatValue(): void;
  getFloatValue(): number;
  setFloatValue(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  getValueCase(): Value.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    booleanValue: boolean,
    int64Value: number,
    floatValue: number,
    doubleValue: number,
    stringValue: string,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    BOOLEAN_VALUE = 1,
    INT64_VALUE = 2,
    FLOAT_VALUE = 3,
    DOUBLE_VALUE = 4,
    STRING_VALUE = 5,
  }
}

