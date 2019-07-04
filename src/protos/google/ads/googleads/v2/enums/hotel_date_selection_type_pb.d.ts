// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/hotel_date_selection_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class HotelDateSelectionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelDateSelectionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: HotelDateSelectionTypeEnum): HotelDateSelectionTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelDateSelectionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelDateSelectionTypeEnum;
  static deserializeBinaryFromReader(message: HotelDateSelectionTypeEnum, reader: jspb.BinaryReader): HotelDateSelectionTypeEnum;
}

export namespace HotelDateSelectionTypeEnum {
  export type AsObject = {
  }

  export enum HotelDateSelectionType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DEFAULT_SELECTION = 50,
    USER_SELECTED = 51,
  }
}

