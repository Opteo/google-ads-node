// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/tracking_code_page_format.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TrackingCodePageFormatEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackingCodePageFormatEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TrackingCodePageFormatEnum): TrackingCodePageFormatEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackingCodePageFormatEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackingCodePageFormatEnum;
  static deserializeBinaryFromReader(message: TrackingCodePageFormatEnum, reader: jspb.BinaryReader): TrackingCodePageFormatEnum;
}

export namespace TrackingCodePageFormatEnum {
  export type AsObject = {
  }

  export enum TrackingCodePageFormat {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    HTML = 2,
    AMP = 3,
  }
}

