// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/dynamic_search_ads_search_term_view.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DynamicSearchAdsSearchTermView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasSearchTerm(): boolean;
  clearSearchTerm(): void;
  getSearchTerm(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSearchTerm(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHeadline(): boolean;
  clearHeadline(): void;
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLandingPage(): boolean;
  clearLandingPage(): void;
  getLandingPage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLandingPage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPageUrl(): boolean;
  clearPageUrl(): void;
  getPageUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPageUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHasNegativeKeyword(): boolean;
  clearHasNegativeKeyword(): void;
  getHasNegativeKeyword(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasNegativeKeyword(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasHasMatchingKeyword(): boolean;
  clearHasMatchingKeyword(): void;
  getHasMatchingKeyword(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasMatchingKeyword(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasHasNegativeUrl(): boolean;
  clearHasNegativeUrl(): void;
  getHasNegativeUrl(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasNegativeUrl(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicSearchAdsSearchTermView.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicSearchAdsSearchTermView): DynamicSearchAdsSearchTermView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DynamicSearchAdsSearchTermView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicSearchAdsSearchTermView;
  static deserializeBinaryFromReader(message: DynamicSearchAdsSearchTermView, reader: jspb.BinaryReader): DynamicSearchAdsSearchTermView;
}

export namespace DynamicSearchAdsSearchTermView {
  export type AsObject = {
    resourceName: string,
    searchTerm?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    landingPage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pageUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hasNegativeKeyword?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hasMatchingKeyword?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hasNegativeUrl?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

