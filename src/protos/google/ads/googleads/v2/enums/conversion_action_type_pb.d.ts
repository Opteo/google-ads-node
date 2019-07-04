// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/conversion_action_type.proto

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

  export enum ConversionActionType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_CALL = 2,
    CLICK_TO_CALL = 3,
    GOOGLE_PLAY_DOWNLOAD = 4,
    GOOGLE_PLAY_IN_APP_PURCHASE = 5,
    UPLOAD_CALLS = 6,
    UPLOAD_CLICKS = 7,
    WEBPAGE = 8,
    WEBSITE_CALL = 9,
  }
}

