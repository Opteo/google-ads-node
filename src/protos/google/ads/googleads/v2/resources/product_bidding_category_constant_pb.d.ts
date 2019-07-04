// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/product_bidding_category_constant.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_product_bidding_category_level_pb from "../../../../../google/ads/googleads/v2/enums/product_bidding_category_level_pb";
import * as google_ads_googleads_v2_enums_product_bidding_category_status_pb from "../../../../../google/ads/googleads/v2/enums/product_bidding_category_status_pb";
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

  getLevel(): google_ads_googleads_v2_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel;
  setLevel(value: google_ads_googleads_v2_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel): void;

  getStatus(): google_ads_googleads_v2_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatus;
  setStatus(value: google_ads_googleads_v2_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatus): void;

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
    level: google_ads_googleads_v2_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel,
    status: google_ads_googleads_v2_enums_product_bidding_category_status_pb.ProductBiddingCategoryStatusEnum.ProductBiddingCategoryStatus,
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    localizedName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

