// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/user_interest.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_criterion_category_availability_pb from "../../../../../google/ads/googleads/v2/common/criterion_category_availability_pb";
import * as google_ads_googleads_v2_enums_user_interest_taxonomy_type_pb from "../../../../../google/ads/googleads/v2/enums/user_interest_taxonomy_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserInterest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getTaxonomyType(): google_ads_googleads_v2_enums_user_interest_taxonomy_type_pb.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType;
  setTaxonomyType(value: google_ads_googleads_v2_enums_user_interest_taxonomy_type_pb.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType): void;

  hasUserInterestId(): boolean;
  clearUserInterestId(): void;
  getUserInterestId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setUserInterestId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasUserInterestParent(): boolean;
  clearUserInterestParent(): void;
  getUserInterestParent(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserInterestParent(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLaunchedToAll(): boolean;
  clearLaunchedToAll(): void;
  getLaunchedToAll(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setLaunchedToAll(value?: google_protobuf_wrappers_pb.BoolValue): void;

  clearAvailabilitiesList(): void;
  getAvailabilitiesList(): Array<google_ads_googleads_v2_common_criterion_category_availability_pb.CriterionCategoryAvailability>;
  setAvailabilitiesList(value: Array<google_ads_googleads_v2_common_criterion_category_availability_pb.CriterionCategoryAvailability>): void;
  addAvailabilities(value?: google_ads_googleads_v2_common_criterion_category_availability_pb.CriterionCategoryAvailability, index?: number): google_ads_googleads_v2_common_criterion_category_availability_pb.CriterionCategoryAvailability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInterest.AsObject;
  static toObject(includeInstance: boolean, msg: UserInterest): UserInterest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInterest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInterest;
  static deserializeBinaryFromReader(message: UserInterest, reader: jspb.BinaryReader): UserInterest;
}

export namespace UserInterest {
  export type AsObject = {
    resourceName: string,
    taxonomyType: google_ads_googleads_v2_enums_user_interest_taxonomy_type_pb.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType,
    userInterestId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    userInterestParent?: google_protobuf_wrappers_pb.StringValue.AsObject,
    launchedToAll?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    availabilitiesList: Array<google_ads_googleads_v2_common_criterion_category_availability_pb.CriterionCategoryAvailability.AsObject>,
  }
}

