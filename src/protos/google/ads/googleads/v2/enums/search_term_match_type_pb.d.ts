// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/search_term_match_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SearchTermMatchTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTermMatchTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTermMatchTypeEnum): SearchTermMatchTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchTermMatchTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTermMatchTypeEnum;
  static deserializeBinaryFromReader(message: SearchTermMatchTypeEnum, reader: jspb.BinaryReader): SearchTermMatchTypeEnum;
}

export namespace SearchTermMatchTypeEnum {
  export type AsObject = {
  }

  export enum SearchTermMatchType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BROAD = 2,
    EXACT = 3,
    PHRASE = 4,
    NEAR_EXACT = 5,
    NEAR_PHRASE = 6,
  }
}

