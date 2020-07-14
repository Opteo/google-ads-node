// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/detail_placement_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_detail_placement_view_pb from "../../../../../google/ads/googleads/v4/resources/detail_placement_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";

export class GetDetailPlacementViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetailPlacementViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetailPlacementViewRequest): GetDetailPlacementViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDetailPlacementViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetailPlacementViewRequest;
  static deserializeBinaryFromReader(message: GetDetailPlacementViewRequest, reader: jspb.BinaryReader): GetDetailPlacementViewRequest;
}

export namespace GetDetailPlacementViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

