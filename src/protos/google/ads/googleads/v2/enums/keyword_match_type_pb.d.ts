// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/keyword_match_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordMatchTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordMatchTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordMatchTypeEnum): KeywordMatchTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordMatchTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordMatchTypeEnum;
  static deserializeBinaryFromReader(message: KeywordMatchTypeEnum, reader: jspb.BinaryReader): KeywordMatchTypeEnum;
}

export namespace KeywordMatchTypeEnum {
  export type AsObject = {
  }

  export enum KeywordMatchType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EXACT = 2,
    PHRASE = 3,
    BROAD = 4,
  }
}

