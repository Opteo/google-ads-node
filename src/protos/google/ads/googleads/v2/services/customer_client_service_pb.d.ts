// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/customer_client_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_customer_client_pb from "../../../../../google/ads/googleads/v2/resources/customer_client_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetCustomerClientRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerClientRequest): GetCustomerClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerClientRequest;
  static deserializeBinaryFromReader(message: GetCustomerClientRequest, reader: jspb.BinaryReader): GetCustomerClientRequest;
}

export namespace GetCustomerClientRequest {
  export type AsObject = {
    resourceName: string,
  }
}

