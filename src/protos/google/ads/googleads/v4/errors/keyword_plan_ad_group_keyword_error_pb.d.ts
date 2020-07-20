// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/keyword_plan_ad_group_keyword_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanAdGroupKeywordErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroupKeywordErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroupKeywordErrorEnum): KeywordPlanAdGroupKeywordErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanAdGroupKeywordErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroupKeywordErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroupKeywordErrorEnum, reader: jspb.BinaryReader): KeywordPlanAdGroupKeywordErrorEnum;
}

export namespace KeywordPlanAdGroupKeywordErrorEnum {
  export type AsObject = {
  }

  export interface KeywordPlanAdGroupKeywordErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    INVALID_KEYWORD_MATCH_TYPE: 2;
    DUPLICATE_KEYWORD: 3;
    KEYWORD_TEXT_TOO_LONG: 4;
    KEYWORD_HAS_INVALID_CHARS: 5;
    KEYWORD_HAS_TOO_MANY_WORDS: 6;
    INVALID_KEYWORD_TEXT: 7;
    NEGATIVE_KEYWORD_HAS_CPC_BID: 8;
  }

  export const KeywordPlanAdGroupKeywordError: KeywordPlanAdGroupKeywordErrorMap;
}

