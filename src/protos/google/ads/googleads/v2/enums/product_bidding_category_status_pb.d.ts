// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/product_bidding_category_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ProductBiddingCategoryStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductBiddingCategoryStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProductBiddingCategoryStatusEnum): ProductBiddingCategoryStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductBiddingCategoryStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductBiddingCategoryStatusEnum;
  static deserializeBinaryFromReader(message: ProductBiddingCategoryStatusEnum, reader: jspb.BinaryReader): ProductBiddingCategoryStatusEnum;
}

export namespace ProductBiddingCategoryStatusEnum {
  export type AsObject = {
  }

  export enum ProductBiddingCategoryStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ACTIVE = 2,
    OBSOLETE = 3,
  }
}

