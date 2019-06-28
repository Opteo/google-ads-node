// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/distance_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_distance_view_pb from "../../../../../google/ads/googleads/v2/resources/distance_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetDistanceViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDistanceViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDistanceViewRequest): GetDistanceViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDistanceViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDistanceViewRequest;
  static deserializeBinaryFromReader(message: GetDistanceViewRequest, reader: jspb.BinaryReader): GetDistanceViewRequest;
}

export namespace GetDistanceViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

