// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/feed_item_quality_approval_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemQualityApprovalStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemQualityApprovalStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemQualityApprovalStatusEnum): FeedItemQualityApprovalStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemQualityApprovalStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemQualityApprovalStatusEnum;
  static deserializeBinaryFromReader(message: FeedItemQualityApprovalStatusEnum, reader: jspb.BinaryReader): FeedItemQualityApprovalStatusEnum;
}

export namespace FeedItemQualityApprovalStatusEnum {
  export type AsObject = {
  }

  export enum FeedItemQualityApprovalStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    APPROVED = 2,
    DISAPPROVED = 3,
  }
}

