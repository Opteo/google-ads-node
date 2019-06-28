// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/mobile_device_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_mobile_device_constant_pb from "../../../../../google/ads/googleads/v2/resources/mobile_device_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetMobileDeviceConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMobileDeviceConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMobileDeviceConstantRequest): GetMobileDeviceConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMobileDeviceConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMobileDeviceConstantRequest;
  static deserializeBinaryFromReader(message: GetMobileDeviceConstantRequest, reader: jspb.BinaryReader): GetMobileDeviceConstantRequest;
}

export namespace GetMobileDeviceConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

