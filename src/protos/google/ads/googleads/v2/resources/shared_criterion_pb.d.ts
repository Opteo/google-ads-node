// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/shared_criterion.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_criteria_pb from "../../../../../google/ads/googleads/v2/common/criteria_pb";
import * as google_ads_googleads_v2_enums_criterion_type_pb from "../../../../../google/ads/googleads/v2/enums/criterion_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SharedCriterion extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasSharedSet(): boolean;
  clearSharedSet(): void;
  getSharedSet(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSharedSet(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCriterionId(): boolean;
  clearCriterionId(): void;
  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getType(): google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType;
  setType(value: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType): void;

  hasKeyword(): boolean;
  clearKeyword(): void;
  getKeyword(): google_ads_googleads_v2_common_criteria_pb.KeywordInfo | undefined;
  setKeyword(value?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo): void;

  hasYoutubeVideo(): boolean;
  clearYoutubeVideo(): void;
  getYoutubeVideo(): google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo | undefined;
  setYoutubeVideo(value?: google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo): void;

  hasYoutubeChannel(): boolean;
  clearYoutubeChannel(): void;
  getYoutubeChannel(): google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo | undefined;
  setYoutubeChannel(value?: google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo): void;

  hasPlacement(): boolean;
  clearPlacement(): void;
  getPlacement(): google_ads_googleads_v2_common_criteria_pb.PlacementInfo | undefined;
  setPlacement(value?: google_ads_googleads_v2_common_criteria_pb.PlacementInfo): void;

  hasMobileAppCategory(): boolean;
  clearMobileAppCategory(): void;
  getMobileAppCategory(): google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo | undefined;
  setMobileAppCategory(value?: google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo): void;

  hasMobileApplication(): boolean;
  clearMobileApplication(): void;
  getMobileApplication(): google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo | undefined;
  setMobileApplication(value?: google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo): void;

  getCriterionCase(): SharedCriterion.CriterionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedCriterion.AsObject;
  static toObject(includeInstance: boolean, msg: SharedCriterion): SharedCriterion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedCriterion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedCriterion;
  static deserializeBinaryFromReader(message: SharedCriterion, reader: jspb.BinaryReader): SharedCriterion;
}

export namespace SharedCriterion {
  export type AsObject = {
    resourceName: string,
    sharedSet?: google_protobuf_wrappers_pb.StringValue.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType,
    keyword?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo.AsObject,
    youtubeVideo?: google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.AsObject,
    youtubeChannel?: google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.AsObject,
    placement?: google_ads_googleads_v2_common_criteria_pb.PlacementInfo.AsObject,
    mobileAppCategory?: google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.AsObject,
    mobileApplication?: google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.AsObject,
  }

  export enum CriterionCase {
    CRITERION_NOT_SET = 0,
    KEYWORD = 3,
    YOUTUBE_VIDEO = 5,
    YOUTUBE_CHANNEL = 6,
    PLACEMENT = 7,
    MOBILE_APP_CATEGORY = 8,
    MOBILE_APPLICATION = 9,
  }
}

