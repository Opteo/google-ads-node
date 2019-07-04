// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/google_ads_field_category.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GoogleAdsFieldCategoryEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsFieldCategoryEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsFieldCategoryEnum): GoogleAdsFieldCategoryEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsFieldCategoryEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsFieldCategoryEnum;
  static deserializeBinaryFromReader(message: GoogleAdsFieldCategoryEnum, reader: jspb.BinaryReader): GoogleAdsFieldCategoryEnum;
}

export namespace GoogleAdsFieldCategoryEnum {
  export type AsObject = {
  }

  export enum GoogleAdsFieldCategory {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RESOURCE = 2,
    ATTRIBUTE = 3,
    SEGMENT = 5,
    METRIC = 6,
  }
}

