// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/product_group_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_product_group_view_pb from "../../../../../google/ads/googleads/v1/resources/product_group_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetProductGroupViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductGroupViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductGroupViewRequest): GetProductGroupViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductGroupViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductGroupViewRequest;
  static deserializeBinaryFromReader(message: GetProductGroupViewRequest, reader: jspb.BinaryReader): GetProductGroupViewRequest;
}

export namespace GetProductGroupViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

