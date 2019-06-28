// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/listing_custom_attribute_index.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

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
    INDEX0 = 7,
    INDEX1 = 8,
    INDEX2 = 9,
    INDEX3 = 10,
    INDEX4 = 11,
  }
}

