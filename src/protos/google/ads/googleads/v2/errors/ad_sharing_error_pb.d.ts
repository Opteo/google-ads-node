// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/ad_sharing_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdSharingErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdSharingErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdSharingErrorEnum): AdSharingErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdSharingErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdSharingErrorEnum;
  static deserializeBinaryFromReader(message: AdSharingErrorEnum, reader: jspb.BinaryReader): AdSharingErrorEnum;
}

export namespace AdSharingErrorEnum {
  export type AsObject = {
  }

  export enum AdSharingError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_GROUP_ALREADY_CONTAINS_AD = 2,
    INCOMPATIBLE_AD_UNDER_AD_GROUP = 3,
    CANNOT_SHARE_INACTIVE_AD = 4,
  }
}

