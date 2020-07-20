// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/location_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_location_view_pb from "../../../../../google/ads/googleads/v4/resources/location_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";

export class GetLocationViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationViewRequest): GetLocationViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationViewRequest;
  static deserializeBinaryFromReader(message: GetLocationViewRequest, reader: jspb.BinaryReader): GetLocationViewRequest;
}

export namespace GetLocationViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

