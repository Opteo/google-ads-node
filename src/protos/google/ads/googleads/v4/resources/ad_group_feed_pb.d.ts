// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/ad_group_feed.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_matching_function_pb from "../../../../../google/ads/googleads/v4/common/matching_function_pb";
import * as google_ads_googleads_v4_enums_feed_link_status_pb from "../../../../../google/ads/googleads/v4/enums/feed_link_status_pb";
import * as google_ads_googleads_v4_enums_placeholder_type_pb from "../../../../../google/ads/googleads/v4/enums/placeholder_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupFeed extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearPlaceholderTypesList(): void;
  getPlaceholderTypesList(): Array<google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap]>;
  setPlaceholderTypesList(value: Array<google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap]>): void;
  addPlaceholderTypes(value: google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap], index?: number): google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap];

  hasMatchingFunction(): boolean;
  clearMatchingFunction(): void;
  getMatchingFunction(): google_ads_googleads_v4_common_matching_function_pb.MatchingFunction | undefined;
  setMatchingFunction(value?: google_ads_googleads_v4_common_matching_function_pb.MatchingFunction): void;

  getStatus(): google_ads_googleads_v4_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatusMap[keyof google_ads_googleads_v4_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatusMap[keyof google_ads_googleads_v4_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupFeed.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupFeed): AdGroupFeed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupFeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupFeed;
  static deserializeBinaryFromReader(message: AdGroupFeed, reader: jspb.BinaryReader): AdGroupFeed;
}

export namespace AdGroupFeed {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placeholderTypesList: Array<google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap]>,
    matchingFunction?: google_ads_googleads_v4_common_matching_function_pb.MatchingFunction.AsObject,
    status: google_ads_googleads_v4_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatusMap[keyof google_ads_googleads_v4_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatusMap],
  }
}

