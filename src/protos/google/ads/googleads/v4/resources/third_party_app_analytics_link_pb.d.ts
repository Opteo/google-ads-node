// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/third_party_app_analytics_link.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ThirdPartyAppAnalyticsLink extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasShareableLinkId(): boolean;
  clearShareableLinkId(): void;
  getShareableLinkId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setShareableLinkId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThirdPartyAppAnalyticsLink.AsObject;
  static toObject(includeInstance: boolean, msg: ThirdPartyAppAnalyticsLink): ThirdPartyAppAnalyticsLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThirdPartyAppAnalyticsLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThirdPartyAppAnalyticsLink;
  static deserializeBinaryFromReader(message: ThirdPartyAppAnalyticsLink, reader: jspb.BinaryReader): ThirdPartyAppAnalyticsLink;
}

export namespace ThirdPartyAppAnalyticsLink {
  export type AsObject = {
    resourceName: string,
    shareableLinkId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

