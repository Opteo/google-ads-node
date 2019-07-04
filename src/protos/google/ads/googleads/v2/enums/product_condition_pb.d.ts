// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/product_condition.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ProductConditionEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductConditionEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProductConditionEnum): ProductConditionEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductConditionEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductConditionEnum;
  static deserializeBinaryFromReader(message: ProductConditionEnum, reader: jspb.BinaryReader): ProductConditionEnum;
}

export namespace ProductConditionEnum {
  export type AsObject = {
  }

  export enum ProductCondition {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NEW = 3,
    REFURBISHED = 4,
    USED = 5,
  }
}

