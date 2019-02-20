// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/product_type_level.proto

import * as jspb from "google-protobuf";

export class ProductTypeLevelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTypeLevelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTypeLevelEnum): ProductTypeLevelEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductTypeLevelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTypeLevelEnum;
  static deserializeBinaryFromReader(message: ProductTypeLevelEnum, reader: jspb.BinaryReader): ProductTypeLevelEnum;
}

export namespace ProductTypeLevelEnum {
  export type AsObject = {
  }

  export enum ProductTypeLevel {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PRODUCT_TYPE_L1 = 2,
    PRODUCT_TYPE_L2 = 3,
    PRODUCT_TYPE_L3 = 4,
    PRODUCT_TYPE_L4 = 5,
    PRODUCT_TYPE_L5 = 6,
  }
}

