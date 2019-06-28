// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/campaign_feed_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignFeedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignFeedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignFeedErrorEnum): CampaignFeedErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignFeedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignFeedErrorEnum;
  static deserializeBinaryFromReader(message: CampaignFeedErrorEnum, reader: jspb.BinaryReader): CampaignFeedErrorEnum;
}

export namespace CampaignFeedErrorEnum {
  export type AsObject = {
  }

  export enum CampaignFeedError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE = 2,
    CANNOT_CREATE_FOR_REMOVED_FEED = 4,
    CANNOT_CREATE_ALREADY_EXISTING_CAMPAIGN_FEED = 5,
    CANNOT_MODIFY_REMOVED_CAMPAIGN_FEED = 6,
    INVALID_PLACEHOLDER_TYPE = 7,
    MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE = 8,
  }
}

