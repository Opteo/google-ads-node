// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/listing_group_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ListingGroupTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingGroupTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ListingGroupTypeEnum): ListingGroupTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListingGroupTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingGroupTypeEnum;
  static deserializeBinaryFromReader(message: ListingGroupTypeEnum, reader: jspb.BinaryReader): ListingGroupTypeEnum;
}

export namespace ListingGroupTypeEnum {
  export type AsObject = {
  }

  export enum ListingGroupType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SUBDIVISION = 2,
    UNIT = 3,
  }
}

