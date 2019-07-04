// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/customer_negative_criterion.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_criteria_pb from "../../../../../google/ads/googleads/v2/common/criteria_pb";
import * as google_ads_googleads_v2_enums_criterion_type_pb from "../../../../../google/ads/googleads/v2/enums/criterion_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerNegativeCriterion extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getType(): google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType;
  setType(value: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType): void;

  hasContentLabel(): boolean;
  clearContentLabel(): void;
  getContentLabel(): google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo | undefined;
  setContentLabel(value?: google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo): void;

  hasMobileApplication(): boolean;
  clearMobileApplication(): void;
  getMobileApplication(): google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo | undefined;
  setMobileApplication(value?: google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo): void;

  hasMobileAppCategory(): boolean;
  clearMobileAppCategory(): void;
  getMobileAppCategory(): google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo | undefined;
  setMobileAppCategory(value?: google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo): void;

  hasPlacement(): boolean;
  clearPlacement(): void;
  getPlacement(): google_ads_googleads_v2_common_criteria_pb.PlacementInfo | undefined;
  setPlacement(value?: google_ads_googleads_v2_common_criteria_pb.PlacementInfo): void;

  hasYoutubeVideo(): boolean;
  clearYoutubeVideo(): void;
  getYoutubeVideo(): google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo | undefined;
  setYoutubeVideo(value?: google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo): void;

  hasYoutubeChannel(): boolean;
  clearYoutubeChannel(): void;
  getYoutubeChannel(): google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo | undefined;
  setYoutubeChannel(value?: google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo): void;

  getCriterionCase(): CustomerNegativeCriterion.CriterionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerNegativeCriterion.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerNegativeCriterion): CustomerNegativeCriterion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerNegativeCriterion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerNegativeCriterion;
  static deserializeBinaryFromReader(message: CustomerNegativeCriterion, reader: jspb.BinaryReader): CustomerNegativeCriterion;
}

export namespace CustomerNegativeCriterion {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType,
    contentLabel?: google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.AsObject,
    mobileApplication?: google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.AsObject,
    mobileAppCategory?: google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.AsObject,
    placement?: google_ads_googleads_v2_common_criteria_pb.PlacementInfo.AsObject,
    youtubeVideo?: google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.AsObject,
    youtubeChannel?: google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.AsObject,
  }

  export enum CriterionCase {
    CRITERION_NOT_SET = 0,
    CONTENT_LABEL = 4,
    MOBILE_APPLICATION = 5,
    MOBILE_APP_CATEGORY = 6,
    PLACEMENT = 7,
    YOUTUBE_VIDEO = 8,
    YOUTUBE_CHANNEL = 9,
  }
}

