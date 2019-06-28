// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/operating_system_version_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_operating_system_version_constant_pb from "../../../../../google/ads/googleads/v2/resources/operating_system_version_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetOperatingSystemVersionConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperatingSystemVersionConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperatingSystemVersionConstantRequest): GetOperatingSystemVersionConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOperatingSystemVersionConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperatingSystemVersionConstantRequest;
  static deserializeBinaryFromReader(message: GetOperatingSystemVersionConstantRequest, reader: jspb.BinaryReader): GetOperatingSystemVersionConstantRequest;
}

export namespace GetOperatingSystemVersionConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

