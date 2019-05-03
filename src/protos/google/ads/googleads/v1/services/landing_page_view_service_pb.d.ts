// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/landing_page_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_landing_page_view_pb from "../../../../../google/ads/googleads/v1/resources/landing_page_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetLandingPageViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLandingPageViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLandingPageViewRequest): GetLandingPageViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLandingPageViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLandingPageViewRequest;
  static deserializeBinaryFromReader(message: GetLandingPageViewRequest, reader: jspb.BinaryReader): GetLandingPageViewRequest;
}

export namespace GetLandingPageViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

