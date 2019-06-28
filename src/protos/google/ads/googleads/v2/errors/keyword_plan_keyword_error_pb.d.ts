// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/keyword_plan_keyword_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanKeywordErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanKeywordErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanKeywordErrorEnum): KeywordPlanKeywordErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanKeywordErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanKeywordErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanKeywordErrorEnum, reader: jspb.BinaryReader): KeywordPlanKeywordErrorEnum;
}

export namespace KeywordPlanKeywordErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanKeywordError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_KEYWORD_MATCH_TYPE = 2,
    DUPLICATE_KEYWORD = 3,
    KEYWORD_TEXT_TOO_LONG = 4,
    KEYWORD_HAS_INVALID_CHARS = 5,
    KEYWORD_HAS_TOO_MANY_WORDS = 6,
    INVALID_KEYWORD_TEXT = 7,
  }
}

