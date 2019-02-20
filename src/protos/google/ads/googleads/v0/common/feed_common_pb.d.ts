// package: google.ads.googleads.v0.common
// file: google/ads/googleads/v0/common/feed_common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Price extends jspb.Message {
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;
  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAmountMicros(): boolean;
  clearAmountMicros(): void;
  getAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    amountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

