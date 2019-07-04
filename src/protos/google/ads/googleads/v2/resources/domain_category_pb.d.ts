// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/domain_category.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DomainCategory extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCategory(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLanguageCode(): boolean;
  clearLanguageCode(): void;
  getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDomain(): boolean;
  clearDomain(): void;
  getDomain(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDomain(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCoverageFraction(): boolean;
  clearCoverageFraction(): void;
  getCoverageFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCoverageFraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCategoryRank(): boolean;
  clearCategoryRank(): void;
  getCategoryRank(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCategoryRank(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHasChildren(): boolean;
  clearHasChildren(): void;
  getHasChildren(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasChildren(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasRecommendedCpcBidMicros(): boolean;
  clearRecommendedCpcBidMicros(): void;
  getRecommendedCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRecommendedCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DomainCategory.AsObject;
  static toObject(includeInstance: boolean, msg: DomainCategory): DomainCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DomainCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DomainCategory;
  static deserializeBinaryFromReader(message: DomainCategory, reader: jspb.BinaryReader): DomainCategory;
}

export namespace DomainCategory {
  export type AsObject = {
    resourceName: string,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    category?: google_protobuf_wrappers_pb.StringValue.AsObject,
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    domain?: google_protobuf_wrappers_pb.StringValue.AsObject,
    coverageFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    categoryRank?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    hasChildren?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    recommendedCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

