// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/dynamic_search_ads_search_term_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb from "../../../../../google/ads/googleads/v2/resources/dynamic_search_ads_search_term_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetDynamicSearchAdsSearchTermViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDynamicSearchAdsSearchTermViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDynamicSearchAdsSearchTermViewRequest): GetDynamicSearchAdsSearchTermViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDynamicSearchAdsSearchTermViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDynamicSearchAdsSearchTermViewRequest;
  static deserializeBinaryFromReader(message: GetDynamicSearchAdsSearchTermViewRequest, reader: jspb.BinaryReader): GetDynamicSearchAdsSearchTermViewRequest;
}

export namespace GetDynamicSearchAdsSearchTermViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

