// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/conversion_action_category.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

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

  export interface ConversionActionCategoryMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    DEFAULT: 2;
    PAGE_VIEW: 3;
    PURCHASE: 4;
    SIGNUP: 5;
    LEAD: 6;
    DOWNLOAD: 7;
    ADD_TO_CART: 8;
    BEGIN_CHECKOUT: 9;
    SUBSCRIBE_PAID: 10;
    PHONE_CALL_LEAD: 11;
    IMPORTED_LEAD: 12;
    SUBMIT_LEAD_FORM: 13;
    BOOK_APPOINTMENT: 14;
    REQUEST_QUOTE: 15;
    GET_DIRECTIONS: 16;
    OUTBOUND_CLICK: 17;
    CONTACT: 18;
    ENGAGEMENT: 19;
    STORE_VISIT: 20;
    STORE_SALE: 21;
  }

  export const ConversionActionCategory: ConversionActionCategoryMap;
}

