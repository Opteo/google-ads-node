// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/product_bidding_category_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_product_bidding_category_constant_pb from "../../../../../google/ads/googleads/v1/resources/product_bidding_category_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetProductBiddingCategoryConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductBiddingCategoryConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductBiddingCategoryConstantRequest): GetProductBiddingCategoryConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductBiddingCategoryConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductBiddingCategoryConstantRequest;
  static deserializeBinaryFromReader(message: GetProductBiddingCategoryConstantRequest, reader: jspb.BinaryReader): GetProductBiddingCategoryConstantRequest;
}

export namespace GetProductBiddingCategoryConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

