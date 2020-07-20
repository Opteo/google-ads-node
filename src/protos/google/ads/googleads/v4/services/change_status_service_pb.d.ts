// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/change_status_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_change_status_pb from "../../../../../google/ads/googleads/v4/resources/change_status_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";

export class GetChangeStatusRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChangeStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChangeStatusRequest): GetChangeStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChangeStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChangeStatusRequest;
  static deserializeBinaryFromReader(message: GetChangeStatusRequest, reader: jspb.BinaryReader): GetChangeStatusRequest;
}

export namespace GetChangeStatusRequest {
  export type AsObject = {
    resourceName: string,
  }
}

