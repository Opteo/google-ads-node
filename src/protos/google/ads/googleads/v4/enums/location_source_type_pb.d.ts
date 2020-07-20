// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/location_source_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LocationSourceTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationSourceTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LocationSourceTypeEnum): LocationSourceTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationSourceTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationSourceTypeEnum;
  static deserializeBinaryFromReader(message: LocationSourceTypeEnum, reader: jspb.BinaryReader): LocationSourceTypeEnum;
}

export namespace LocationSourceTypeEnum {
  export type AsObject = {
  }

  export interface LocationSourceTypeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    GOOGLE_MY_BUSINESS: 2;
    AFFILIATE: 3;
  }

  export const LocationSourceType: LocationSourceTypeMap;
}

