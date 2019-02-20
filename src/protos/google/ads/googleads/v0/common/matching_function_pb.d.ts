// package: google.ads.googleads.v0.common
// file: google/ads/googleads/v0/common/matching_function.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class MatchingFunction extends jspb.Message {
  hasFunctionString(): boolean;
  clearFunctionString(): void;
  getFunctionString(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFunctionString(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingFunction.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingFunction): MatchingFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchingFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingFunction;
  static deserializeBinaryFromReader(message: MatchingFunction, reader: jspb.BinaryReader): MatchingFunction;
}

export namespace MatchingFunction {
  export type AsObject = {
    functionString?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

