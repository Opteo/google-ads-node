// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_interest_taxonomy_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserInterestTaxonomyTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInterestTaxonomyTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserInterestTaxonomyTypeEnum): UserInterestTaxonomyTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInterestTaxonomyTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInterestTaxonomyTypeEnum;
  static deserializeBinaryFromReader(message: UserInterestTaxonomyTypeEnum, reader: jspb.BinaryReader): UserInterestTaxonomyTypeEnum;
}

export namespace UserInterestTaxonomyTypeEnum {
  export type AsObject = {
  }

  export enum UserInterestTaxonomyType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AFFINITY = 2,
    IN_MARKET = 3,
    MOBILE_APP_INSTALL_USER = 4,
    VERTICAL_GEO = 5,
    NEW_SMART_PHONE_USER = 6,
  }
}

