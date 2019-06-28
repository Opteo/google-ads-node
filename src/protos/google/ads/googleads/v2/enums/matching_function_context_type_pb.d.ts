// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/matching_function_context_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MatchingFunctionContextTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingFunctionContextTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingFunctionContextTypeEnum): MatchingFunctionContextTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchingFunctionContextTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingFunctionContextTypeEnum;
  static deserializeBinaryFromReader(message: MatchingFunctionContextTypeEnum, reader: jspb.BinaryReader): MatchingFunctionContextTypeEnum;
}

export namespace MatchingFunctionContextTypeEnum {
  export type AsObject = {
  }

  export enum MatchingFunctionContextType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FEED_ITEM_ID = 2,
    DEVICE_NAME = 3,
  }
}

