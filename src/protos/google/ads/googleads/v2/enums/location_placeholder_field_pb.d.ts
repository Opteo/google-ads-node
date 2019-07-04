// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/location_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LocationPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LocationPlaceholderFieldEnum): LocationPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: LocationPlaceholderFieldEnum, reader: jspb.BinaryReader): LocationPlaceholderFieldEnum;
}

export namespace LocationPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum LocationPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BUSINESS_NAME = 2,
    ADDRESS_LINE_1 = 3,
    ADDRESS_LINE_2 = 4,
    CITY = 5,
    PROVINCE = 6,
    POSTAL_CODE = 7,
    COUNTRY_CODE = 8,
    PHONE_NUMBER = 9,
  }
}

