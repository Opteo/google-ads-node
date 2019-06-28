// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/keyword_plan_idea_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanIdeaErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanIdeaErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanIdeaErrorEnum): KeywordPlanIdeaErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanIdeaErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanIdeaErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanIdeaErrorEnum, reader: jspb.BinaryReader): KeywordPlanIdeaErrorEnum;
}

export namespace KeywordPlanIdeaErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanIdeaError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    URL_CRAWL_ERROR = 2,
    INVALID_VALUE = 3,
  }
}

