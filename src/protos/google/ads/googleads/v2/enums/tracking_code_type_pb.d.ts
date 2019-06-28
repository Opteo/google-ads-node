// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/tracking_code_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TrackingCodeTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackingCodeTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TrackingCodeTypeEnum): TrackingCodeTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackingCodeTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackingCodeTypeEnum;
  static deserializeBinaryFromReader(message: TrackingCodeTypeEnum, reader: jspb.BinaryReader): TrackingCodeTypeEnum;
}

export namespace TrackingCodeTypeEnum {
  export type AsObject = {
  }

  export enum TrackingCodeType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    WEBPAGE = 2,
    WEBPAGE_ONCLICK = 3,
    CLICK_TO_CALL = 4,
    WEBSITE_CALL = 5,
  }
}

