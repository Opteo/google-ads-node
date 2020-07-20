// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/third_party_app_analytics_link_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_third_party_app_analytics_link_pb from "../../../../../google/ads/googleads/v4/resources/third_party_app_analytics_link_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetThirdPartyAppAnalyticsLinkRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThirdPartyAppAnalyticsLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThirdPartyAppAnalyticsLinkRequest): GetThirdPartyAppAnalyticsLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetThirdPartyAppAnalyticsLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThirdPartyAppAnalyticsLinkRequest;
  static deserializeBinaryFromReader(message: GetThirdPartyAppAnalyticsLinkRequest, reader: jspb.BinaryReader): GetThirdPartyAppAnalyticsLinkRequest;
}

export namespace GetThirdPartyAppAnalyticsLinkRequest {
  export type AsObject = {
    resourceName: string,
  }
}

