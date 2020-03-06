// package: google.ads.googleads.v3.enums
// file: google/ads/googleads/v3/enums/product_custom_attribute_index.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ProductCustomAttributeIndexEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCustomAttributeIndexEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCustomAttributeIndexEnum): ProductCustomAttributeIndexEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCustomAttributeIndexEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCustomAttributeIndexEnum;
  static deserializeBinaryFromReader(message: ProductCustomAttributeIndexEnum, reader: jspb.BinaryReader): ProductCustomAttributeIndexEnum;
}

export namespace ProductCustomAttributeIndexEnum {
  export type AsObject = {
  }

  export enum ProductCustomAttributeIndex {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INDEX0 = 7,
    INDEX1 = 8,
    INDEX2 = 9,
    INDEX3 = 10,
    INDEX4 = 11,
  }
}

