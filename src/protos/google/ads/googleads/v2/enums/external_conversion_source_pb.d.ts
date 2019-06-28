// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/external_conversion_source.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ExternalConversionSourceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConversionSourceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConversionSourceEnum): ExternalConversionSourceEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExternalConversionSourceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConversionSourceEnum;
  static deserializeBinaryFromReader(message: ExternalConversionSourceEnum, reader: jspb.BinaryReader): ExternalConversionSourceEnum;
}

export namespace ExternalConversionSourceEnum {
  export type AsObject = {
  }

  export enum ExternalConversionSource {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    WEBPAGE = 2,
    ANALYTICS = 3,
    UPLOAD = 4,
    AD_CALL_METRICS = 5,
    WEBSITE_CALL_METRICS = 6,
    STORE_VISITS = 7,
    ANDROID_IN_APP = 8,
    IOS_IN_APP = 9,
    IOS_FIRST_OPEN = 10,
    APP_UNSPECIFIED = 11,
    ANDROID_FIRST_OPEN = 12,
    UPLOAD_CALLS = 13,
    FIREBASE = 14,
    CLICK_TO_CALL = 15,
    SALESFORCE = 16,
    STORE_SALES_CRM = 17,
    STORE_SALES_PAYMENT_NETWORK = 18,
    GOOGLE_PLAY = 19,
    THIRD_PARTY_APP_ANALYTICS = 20,
    GOOGLE_ATTRIBUTION = 21,
    STORE_SALES_DIRECT = 22,
  }
}

