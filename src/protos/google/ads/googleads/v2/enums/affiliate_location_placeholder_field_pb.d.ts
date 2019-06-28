// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/affiliate_location_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AffiliateLocationPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AffiliateLocationPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AffiliateLocationPlaceholderFieldEnum): AffiliateLocationPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AffiliateLocationPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AffiliateLocationPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: AffiliateLocationPlaceholderFieldEnum, reader: jspb.BinaryReader): AffiliateLocationPlaceholderFieldEnum;
}

export namespace AffiliateLocationPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum AffiliateLocationPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BUSINESS_NAME = 2,
    ADDRESS_LINE_1 = 3,
    ADDRESS_LINE_2 = 4,
    CITY = 5,
    PROVINCE = 6,
    POSTAL_CODE = 7,
    COUNTRY_CODE = 8,
    PHONE_NUMBER = 9,
    LANGUAGE_CODE = 10,
    CHAIN_ID = 11,
    CHAIN_NAME = 12,
  }
}

