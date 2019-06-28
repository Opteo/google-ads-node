// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/change_status.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_change_status_operation_pb from "../../../../../google/ads/googleads/v2/enums/change_status_operation_pb";
import * as google_ads_googleads_v2_enums_change_status_resource_type_pb from "../../../../../google/ads/googleads/v2/enums/change_status_resource_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ChangeStatus extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasLastChangeDateTime(): boolean;
  clearLastChangeDateTime(): void;
  getLastChangeDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLastChangeDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  getResourceType(): google_ads_googleads_v2_enums_change_status_resource_type_pb.ChangeStatusResourceTypeEnum.ChangeStatusResourceType;
  setResourceType(value: google_ads_googleads_v2_enums_change_status_resource_type_pb.ChangeStatusResourceTypeEnum.ChangeStatusResourceType): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  getResourceStatus(): google_ads_googleads_v2_enums_change_status_operation_pb.ChangeStatusOperationEnum.ChangeStatusOperation;
  setResourceStatus(value: google_ads_googleads_v2_enums_change_status_operation_pb.ChangeStatusOperationEnum.ChangeStatusOperation): void;

  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;
  getAdGroupAd(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupAd(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;
  getAdGroupCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCampaignCriterion(): boolean;
  clearCampaignCriterion(): void;
  getCampaignCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaignCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasFeedItem(): boolean;
  clearFeedItem(): void;
  getFeedItem(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeedItem(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdGroupFeed(): boolean;
  clearAdGroupFeed(): void;
  getAdGroupFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCampaignFeed(): boolean;
  clearCampaignFeed(): void;
  getCampaignFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaignFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdGroupBidModifier(): boolean;
  clearAdGroupBidModifier(): void;
  getAdGroupBidModifier(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupBidModifier(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStatus): ChangeStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStatus;
  static deserializeBinaryFromReader(message: ChangeStatus, reader: jspb.BinaryReader): ChangeStatus;
}

export namespace ChangeStatus {
  export type AsObject = {
    resourceName: string,
    lastChangeDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    resourceType: google_ads_googleads_v2_enums_change_status_resource_type_pb.ChangeStatusResourceTypeEnum.ChangeStatusResourceType,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    resourceStatus: google_ads_googleads_v2_enums_change_status_operation_pb.ChangeStatusOperationEnum.ChangeStatusOperation,
    adGroupAd?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroupCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaignCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    feedItem?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroupFeed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaignFeed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroupBidModifier?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

