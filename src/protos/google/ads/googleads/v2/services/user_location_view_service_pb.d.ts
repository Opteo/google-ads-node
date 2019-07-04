// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/user_location_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_user_location_view_pb from "../../../../../google/ads/googleads/v2/resources/user_location_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetUserLocationViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLocationViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLocationViewRequest): GetUserLocationViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserLocationViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLocationViewRequest;
  static deserializeBinaryFromReader(message: GetUserLocationViewRequest, reader: jspb.BinaryReader): GetUserLocationViewRequest;
}

export namespace GetUserLocationViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

