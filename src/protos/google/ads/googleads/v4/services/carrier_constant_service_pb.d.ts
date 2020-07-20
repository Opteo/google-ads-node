// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/carrier_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_carrier_constant_pb from "../../../../../google/ads/googleads/v4/resources/carrier_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";

export class GetCarrierConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCarrierConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCarrierConstantRequest): GetCarrierConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCarrierConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCarrierConstantRequest;
  static deserializeBinaryFromReader(message: GetCarrierConstantRequest, reader: jspb.BinaryReader): GetCarrierConstantRequest;
}

export namespace GetCarrierConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

