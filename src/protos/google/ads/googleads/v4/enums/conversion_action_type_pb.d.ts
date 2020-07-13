// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/conversion_action_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionActionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionActionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionActionTypeEnum): ConversionActionTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionActionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionActionTypeEnum;
  static deserializeBinaryFromReader(message: ConversionActionTypeEnum, reader: jspb.BinaryReader): ConversionActionTypeEnum;
}

export namespace ConversionActionTypeEnum {
  export type AsObject = {
  }

  export interface ConversionActionTypeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    AD_CALL: 2;
    CLICK_TO_CALL: 3;
    GOOGLE_PLAY_DOWNLOAD: 4;
    GOOGLE_PLAY_IN_APP_PURCHASE: 5;
    UPLOAD_CALLS: 6;
    UPLOAD_CLICKS: 7;
    WEBPAGE: 8;
    WEBSITE_CALL: 9;
    STORE_SALES_DIRECT_UPLOAD: 10;
    STORE_SALES: 11;
    FIREBASE_ANDROID_FIRST_OPEN: 12;
    FIREBASE_ANDROID_IN_APP_PURCHASE: 13;
    FIREBASE_ANDROID_CUSTOM: 14;
    FIREBASE_IOS_FIRST_OPEN: 15;
    FIREBASE_IOS_IN_APP_PURCHASE: 16;
    FIREBASE_IOS_CUSTOM: 17;
    THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN: 18;
    THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE: 19;
    THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM: 20;
    THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN: 21;
    THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE: 22;
    THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM: 23;
  }

  export const ConversionActionType: ConversionActionTypeMap;
}

