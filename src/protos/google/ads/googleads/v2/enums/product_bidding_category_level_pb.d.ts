// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/product_bidding_category_level.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ProductBiddingCategoryLevelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductBiddingCategoryLevelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProductBiddingCategoryLevelEnum): ProductBiddingCategoryLevelEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductBiddingCategoryLevelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductBiddingCategoryLevelEnum;
  static deserializeBinaryFromReader(message: ProductBiddingCategoryLevelEnum, reader: jspb.BinaryReader): ProductBiddingCategoryLevelEnum;
}

export namespace ProductBiddingCategoryLevelEnum {
  export type AsObject = {
  }

  export enum ProductBiddingCategoryLevel {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LEVEL1 = 2,
    LEVEL2 = 3,
    LEVEL3 = 4,
    LEVEL4 = 5,
    LEVEL5 = 6,
  }
}

