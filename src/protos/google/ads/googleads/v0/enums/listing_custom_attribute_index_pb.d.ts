// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/listing_custom_attribute_index.proto

import * as jspb from "google-protobuf";

export class ListingCustomAttributeIndexEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingCustomAttributeIndexEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ListingCustomAttributeIndexEnum): ListingCustomAttributeIndexEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListingCustomAttributeIndexEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingCustomAttributeIndexEnum;
  static deserializeBinaryFromReader(message: ListingCustomAttributeIndexEnum, reader: jspb.BinaryReader): ListingCustomAttributeIndexEnum;
}

export namespace ListingCustomAttributeIndexEnum {
  export type AsObject = {
  }

  export enum ListingCustomAttributeIndex {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CUSTOM_ATTRIBUTE_0 = 2,
    CUSTOM_ATTRIBUTE_1 = 3,
    CUSTOM_ATTRIBUTE_2 = 4,
    CUSTOM_ATTRIBUTE_3 = 5,
    CUSTOM_ATTRIBUTE_4 = 6,
  }
}

