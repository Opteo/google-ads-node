// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/shared_set_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SharedSetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSetTypeEnum): SharedSetTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedSetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSetTypeEnum;
  static deserializeBinaryFromReader(message: SharedSetTypeEnum, reader: jspb.BinaryReader): SharedSetTypeEnum;
}

export namespace SharedSetTypeEnum {
  export type AsObject = {
  }

  export enum SharedSetType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NEGATIVE_KEYWORDS = 2,
    NEGATIVE_PLACEMENTS = 3,
  }
}

