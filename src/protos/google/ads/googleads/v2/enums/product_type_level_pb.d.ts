// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/product_type_level.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

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
    LEVEL1 = 7,
    LEVEL2 = 8,
    LEVEL3 = 9,
    LEVEL4 = 10,
    LEVEL5 = 11,
  }
}

