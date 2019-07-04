// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/feed_item_target.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_criteria_pb from "../../../../../google/ads/googleads/v2/common/criteria_pb";
import * as google_ads_googleads_v2_enums_feed_item_target_device_pb from "../../../../../google/ads/googleads/v2/enums/feed_item_target_device_pb";
import * as google_ads_googleads_v2_enums_feed_item_target_type_pb from "../../../../../google/ads/googleads/v2/enums/feed_item_target_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemTarget extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasFeedItem(): boolean;
  clearFeedItem(): void;
  getFeedItem(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeedItem(value?: google_protobuf_wrappers_pb.StringValue): void;

  getFeedItemTargetType(): google_ads_googleads_v2_enums_feed_item_target_type_pb.FeedItemTargetTypeEnum.FeedItemTargetType;
  setFeedItemTargetType(value: google_ads_googleads_v2_enums_feed_item_target_type_pb.FeedItemTargetTypeEnum.FeedItemTargetType): void;

  hasFeedItemTargetId(): boolean;
  clearFeedItemTargetId(): void;
  getFeedItemTargetId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFeedItemTargetId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasKeyword(): boolean;
  clearKeyword(): void;
  getKeyword(): google_ads_googleads_v2_common_criteria_pb.KeywordInfo | undefined;
  setKeyword(value?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo): void;

  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;
  getGeoTargetConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): google_ads_googleads_v2_enums_feed_item_target_device_pb.FeedItemTargetDeviceEnum.FeedItemTargetDevice;
  setDevice(value: google_ads_googleads_v2_enums_feed_item_target_device_pb.FeedItemTargetDeviceEnum.FeedItemTargetDevice): void;

  hasAdSchedule(): boolean;
  clearAdSchedule(): void;
  getAdSchedule(): google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo | undefined;
  setAdSchedule(value?: google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo): void;

  getTargetCase(): FeedItemTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTarget.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTarget): FeedItemTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTarget;
  static deserializeBinaryFromReader(message: FeedItemTarget, reader: jspb.BinaryReader): FeedItemTarget;
}

export namespace FeedItemTarget {
  export type AsObject = {
    resourceName: string,
    feedItem?: google_protobuf_wrappers_pb.StringValue.AsObject,
    feedItemTargetType: google_ads_googleads_v2_enums_feed_item_target_type_pb.FeedItemTargetTypeEnum.FeedItemTargetType,
    feedItemTargetId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    keyword?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo.AsObject,
    geoTargetConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
    device: google_ads_googleads_v2_enums_feed_item_target_device_pb.FeedItemTargetDeviceEnum.FeedItemTargetDevice,
    adSchedule?: google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.AsObject,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    CAMPAIGN = 4,
    AD_GROUP = 5,
    KEYWORD = 7,
    GEO_TARGET_CONSTANT = 8,
    DEVICE = 9,
    AD_SCHEDULE = 10,
  }
}

