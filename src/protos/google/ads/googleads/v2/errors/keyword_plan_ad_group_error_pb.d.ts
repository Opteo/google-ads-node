// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/keyword_plan_ad_group_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanAdGroupErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroupErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroupErrorEnum): KeywordPlanAdGroupErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanAdGroupErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroupErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroupErrorEnum, reader: jspb.BinaryReader): KeywordPlanAdGroupErrorEnum;
}

export namespace KeywordPlanAdGroupErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanAdGroupError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_NAME = 2,
    DUPLICATE_NAME = 3,
  }
}

