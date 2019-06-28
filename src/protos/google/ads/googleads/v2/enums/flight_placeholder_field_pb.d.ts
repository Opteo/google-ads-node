// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/flight_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FlightPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FlightPlaceholderFieldEnum): FlightPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlightPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: FlightPlaceholderFieldEnum, reader: jspb.BinaryReader): FlightPlaceholderFieldEnum;
}

export namespace FlightPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum FlightPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DESTINATION_ID = 2,
    ORIGIN_ID = 3,
    FLIGHT_DESCRIPTION = 4,
    ORIGIN_NAME = 5,
    DESTINATION_NAME = 6,
    FLIGHT_PRICE = 7,
    FORMATTED_PRICE = 8,
    FLIGHT_SALE_PRICE = 9,
    FORMATTED_SALE_PRICE = 10,
    IMAGE_URL = 11,
    FINAL_URLS = 12,
    FINAL_MOBILE_URLS = 13,
    TRACKING_URL = 14,
    ANDROID_APP_LINK = 15,
    SIMILAR_DESTINATION_IDS = 16,
    IOS_APP_LINK = 17,
    IOS_APP_STORE_ID = 18,
  }
}

