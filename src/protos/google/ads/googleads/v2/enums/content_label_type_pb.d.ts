// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/content_label_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ContentLabelTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentLabelTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ContentLabelTypeEnum): ContentLabelTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentLabelTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentLabelTypeEnum;
  static deserializeBinaryFromReader(message: ContentLabelTypeEnum, reader: jspb.BinaryReader): ContentLabelTypeEnum;
}

export namespace ContentLabelTypeEnum {
  export type AsObject = {
  }

  export enum ContentLabelType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEXUALLY_SUGGESTIVE = 2,
    BELOW_THE_FOLD = 3,
    PARKED_DOMAIN = 4,
    GAME = 5,
    JUVENILE = 6,
    PROFANITY = 7,
    TRAGEDY = 8,
    VIDEO = 9,
    VIDEO_RATING_DV_G = 10,
    VIDEO_RATING_DV_PG = 11,
    VIDEO_RATING_DV_T = 12,
    VIDEO_RATING_DV_MA = 13,
    VIDEO_NOT_YET_RATED = 14,
    EMBEDDED_VIDEO = 15,
    LIVE_STREAMING_VIDEO = 16,
    SOCIAL_ISSUES = 17,
  }
}

