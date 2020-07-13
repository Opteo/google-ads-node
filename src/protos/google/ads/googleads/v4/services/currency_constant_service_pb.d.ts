// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/currency_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_currency_constant_pb from "../../../../../google/ads/googleads/v4/resources/currency_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";

export class GetCurrencyConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrencyConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrencyConstantRequest): GetCurrencyConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrencyConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrencyConstantRequest;
  static deserializeBinaryFromReader(message: GetCurrencyConstantRequest, reader: jspb.BinaryReader): GetCurrencyConstantRequest;
}

export namespace GetCurrencyConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

