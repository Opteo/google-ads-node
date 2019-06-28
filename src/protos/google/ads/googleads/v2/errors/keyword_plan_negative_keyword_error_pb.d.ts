// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/keyword_plan_negative_keyword_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanNegativeKeywordErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanNegativeKeywordErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanNegativeKeywordErrorEnum): KeywordPlanNegativeKeywordErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanNegativeKeywordErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanNegativeKeywordErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanNegativeKeywordErrorEnum, reader: jspb.BinaryReader): KeywordPlanNegativeKeywordErrorEnum;
}

export namespace KeywordPlanNegativeKeywordErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanNegativeKeywordError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
  }
}

