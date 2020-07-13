// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/mobile_app_vendor.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MobileAppVendorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileAppVendorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MobileAppVendorEnum): MobileAppVendorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileAppVendorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileAppVendorEnum;
  static deserializeBinaryFromReader(message: MobileAppVendorEnum, reader: jspb.BinaryReader): MobileAppVendorEnum;
}

export namespace MobileAppVendorEnum {
  export type AsObject = {
  }

  export interface MobileAppVendorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    APPLE_APP_STORE: 2;
    GOOGLE_APP_STORE: 3;
  }

  export const MobileAppVendor: MobileAppVendorMap;
}

