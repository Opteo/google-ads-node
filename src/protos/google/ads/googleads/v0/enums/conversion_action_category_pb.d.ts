// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/conversion_action_category.proto

import * as jspb from "google-protobuf";

export class ConversionActionCategoryEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionActionCategoryEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionActionCategoryEnum): ConversionActionCategoryEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionActionCategoryEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionActionCategoryEnum;
  static deserializeBinaryFromReader(message: ConversionActionCategoryEnum, reader: jspb.BinaryReader): ConversionActionCategoryEnum;
}

export namespace ConversionActionCategoryEnum {
  export type AsObject = {
  }

  export enum ConversionActionCategory {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DEFAULT = 2,
    PAGE_VIEW = 3,
    PURCHASE = 4,
    SIGNUP = 5,
    LEAD = 6,
    DOWNLOAD = 7,
  }
}

