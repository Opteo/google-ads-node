// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/price_extension_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PriceExtensionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceExtensionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PriceExtensionTypeEnum): PriceExtensionTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceExtensionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceExtensionTypeEnum;
  static deserializeBinaryFromReader(message: PriceExtensionTypeEnum, reader: jspb.BinaryReader): PriceExtensionTypeEnum;
}

export namespace PriceExtensionTypeEnum {
  export type AsObject = {
  }

  export enum PriceExtensionType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BRANDS = 2,
    EVENTS = 3,
    LOCATIONS = 4,
    NEIGHBORHOODS = 5,
    PRODUCT_CATEGORIES = 6,
    PRODUCT_TIERS = 7,
    SERVICES = 8,
    SERVICE_CATEGORIES = 9,
    SERVICE_TIERS = 10,
  }
}

