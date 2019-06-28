// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_list_size_range.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListSizeRangeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListSizeRangeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListSizeRangeEnum): UserListSizeRangeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListSizeRangeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListSizeRangeEnum;
  static deserializeBinaryFromReader(message: UserListSizeRangeEnum, reader: jspb.BinaryReader): UserListSizeRangeEnum;
}

export namespace UserListSizeRangeEnum {
  export type AsObject = {
  }

  export enum UserListSizeRange {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LESS_THAN_FIVE_HUNDRED = 2,
    LESS_THAN_ONE_THOUSAND = 3,
    ONE_THOUSAND_TO_TEN_THOUSAND = 4,
    TEN_THOUSAND_TO_FIFTY_THOUSAND = 5,
    FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND = 6,
    ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND = 7,
    THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND = 8,
    FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION = 9,
    ONE_MILLION_TO_TWO_MILLION = 10,
    TWO_MILLION_TO_THREE_MILLION = 11,
    THREE_MILLION_TO_FIVE_MILLION = 12,
    FIVE_MILLION_TO_TEN_MILLION = 13,
    TEN_MILLION_TO_TWENTY_MILLION = 14,
    TWENTY_MILLION_TO_THIRTY_MILLION = 15,
    THIRTY_MILLION_TO_FIFTY_MILLION = 16,
    OVER_FIFTY_MILLION = 17,
  }
}

