// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/price_extension_price_unit.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PriceExtensionPriceUnitEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceExtensionPriceUnitEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PriceExtensionPriceUnitEnum): PriceExtensionPriceUnitEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceExtensionPriceUnitEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceExtensionPriceUnitEnum;
  static deserializeBinaryFromReader(message: PriceExtensionPriceUnitEnum, reader: jspb.BinaryReader): PriceExtensionPriceUnitEnum;
}

export namespace PriceExtensionPriceUnitEnum {
  export type AsObject = {
  }

  export enum PriceExtensionPriceUnit {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PER_HOUR = 2,
    PER_DAY = 3,
    PER_WEEK = 4,
    PER_MONTH = 5,
    PER_YEAR = 6,
    PER_NIGHT = 7,
  }
}

