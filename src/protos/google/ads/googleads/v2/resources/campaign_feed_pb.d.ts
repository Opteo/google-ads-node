// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_feed.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_matching_function_pb from "../../../../../google/ads/googleads/v2/common/matching_function_pb";
import * as google_ads_googleads_v2_enums_feed_link_status_pb from "../../../../../google/ads/googleads/v2/enums/feed_link_status_pb";
import * as google_ads_googleads_v2_enums_placeholder_type_pb from "../../../../../google/ads/googleads/v2/enums/placeholder_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignFeed extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearPlaceholderTypesList(): void;
  getPlaceholderTypesList(): Array<google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType>;
  setPlaceholderTypesList(value: Array<google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType>): void;
  addPlaceholderTypes(value: google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType, index?: number): google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType;

  hasMatchingFunction(): boolean;
  clearMatchingFunction(): void;
  getMatchingFunction(): google_ads_googleads_v2_common_matching_function_pb.MatchingFunction | undefined;
  setMatchingFunction(value?: google_ads_googleads_v2_common_matching_function_pb.MatchingFunction): void;

  getStatus(): google_ads_googleads_v2_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatus;
  setStatus(value: google_ads_googleads_v2_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignFeed.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignFeed): CampaignFeed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignFeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignFeed;
  static deserializeBinaryFromReader(message: CampaignFeed, reader: jspb.BinaryReader): CampaignFeed;
}

export namespace CampaignFeed {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placeholderTypesList: Array<google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType>,
    matchingFunction?: google_ads_googleads_v2_common_matching_function_pb.MatchingFunction.AsObject,
    status: google_ads_googleads_v2_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatus,
  }
}

