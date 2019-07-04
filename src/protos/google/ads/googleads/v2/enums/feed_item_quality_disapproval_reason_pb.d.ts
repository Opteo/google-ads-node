// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/feed_item_quality_disapproval_reason.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemQualityDisapprovalReasonEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemQualityDisapprovalReasonEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemQualityDisapprovalReasonEnum): FeedItemQualityDisapprovalReasonEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemQualityDisapprovalReasonEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemQualityDisapprovalReasonEnum;
  static deserializeBinaryFromReader(message: FeedItemQualityDisapprovalReasonEnum, reader: jspb.BinaryReader): FeedItemQualityDisapprovalReasonEnum;
}

export namespace FeedItemQualityDisapprovalReasonEnum {
  export type AsObject = {
  }

  export enum FeedItemQualityDisapprovalReason {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PRICE_TABLE_REPETITIVE_HEADERS = 2,
    PRICE_TABLE_REPETITIVE_DESCRIPTION = 3,
    PRICE_TABLE_INCONSISTENT_ROWS = 4,
    PRICE_DESCRIPTION_HAS_PRICE_QUALIFIERS = 5,
    PRICE_UNSUPPORTED_LANGUAGE = 6,
    PRICE_TABLE_ROW_HEADER_TABLE_TYPE_MISMATCH = 7,
    PRICE_TABLE_ROW_HEADER_HAS_PROMOTIONAL_TEXT = 8,
    PRICE_TABLE_ROW_DESCRIPTION_NOT_RELEVANT = 9,
    PRICE_TABLE_ROW_DESCRIPTION_HAS_PROMOTIONAL_TEXT = 10,
    PRICE_TABLE_ROW_HEADER_DESCRIPTION_REPETITIVE = 11,
    PRICE_TABLE_ROW_UNRATEABLE = 12,
    PRICE_TABLE_ROW_PRICE_INVALID = 13,
    PRICE_TABLE_ROW_URL_INVALID = 14,
    PRICE_HEADER_OR_DESCRIPTION_HAS_PRICE = 15,
    STRUCTURED_SNIPPETS_HEADER_POLICY_VIOLATED = 16,
    STRUCTURED_SNIPPETS_REPEATED_VALUES = 17,
    STRUCTURED_SNIPPETS_EDITORIAL_GUIDELINES = 18,
    STRUCTURED_SNIPPETS_HAS_PROMOTIONAL_TEXT = 19,
  }
}

