// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/managed_placement_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_managed_placement_view_pb from "../../../../../google/ads/googleads/v2/resources/managed_placement_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetManagedPlacementViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetManagedPlacementViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetManagedPlacementViewRequest): GetManagedPlacementViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetManagedPlacementViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetManagedPlacementViewRequest;
  static deserializeBinaryFromReader(message: GetManagedPlacementViewRequest, reader: jspb.BinaryReader): GetManagedPlacementViewRequest;
}

export namespace GetManagedPlacementViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

