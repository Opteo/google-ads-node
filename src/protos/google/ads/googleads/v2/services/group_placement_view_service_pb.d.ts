// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/group_placement_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_group_placement_view_pb from "../../../../../google/ads/googleads/v2/resources/group_placement_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetGroupPlacementViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupPlacementViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupPlacementViewRequest): GetGroupPlacementViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupPlacementViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupPlacementViewRequest;
  static deserializeBinaryFromReader(message: GetGroupPlacementViewRequest, reader: jspb.BinaryReader): GetGroupPlacementViewRequest;
}

export namespace GetGroupPlacementViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

