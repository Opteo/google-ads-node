// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/product_bidding_category_constant.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_product_bidding_category_level_pb from "../../../../../google/ads/googleads/v4/enums/product_bidding_category_level_pb";
import * as google_ads_googleads_v4_enums_product_bidding_category_status_pb from "../../../../../google/ads/googleads/v4/enums/product_bidding_category_status_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ProductBiddingCategoryConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProductBiddingCategoryConstantParent(): boolean;
  clearProductBiddingCategoryConstantParent(): void;
  getProductBiddingCategoryConstantParent(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductBiddingCategoryConstantParent(value?: google_protobuf_wrappers_pb.StringValue): void;

  getLevel(): google_ads_googleads_v4_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevelMap[keyof google_ads_googleads_v4_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevelMap];
  setLevel(value: google_ads_googleads_v4_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevelMap[keyof google_ads_googleads_v4_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevelMap]): void;

  getStatus(): google_ads_googleads_v4_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatusMap[keyof google_ads_googleads_v4_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatusMap[keyof google_ads_googleads_v4_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatusMap]): void;

  hasLanguageCode(): boolean;
  clearLanguageCode(): void;
  getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLocalizedName(): boolean;
  clearLocalizedName(): void;
  getLocalizedName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLocalizedName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductBiddingCategoryConstant.AsObject;
  static toObject(includeInstance: boolean, msg: ProductBiddingCategoryConstant): ProductBiddingCategoryConstant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductBiddingCategoryConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductBiddingCategoryConstant;
  static deserializeBinaryFromReader(message: ProductBiddingCategoryConstant, reader: jspb.BinaryReader): ProductBiddingCategoryConstant;
}

export namespace ProductBiddingCategoryConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productBiddingCategoryConstantParent?: google_protobuf_wrappers_pb.StringValue.AsObject,
    level: google_ads_googleads_v4_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevelMap[keyof google_ads_googleads_v4_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevelMap],
    status: google_ads_googleads_v4_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatusMap[keyof google_ads_googleads_v4_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatusMap],
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    localizedName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

