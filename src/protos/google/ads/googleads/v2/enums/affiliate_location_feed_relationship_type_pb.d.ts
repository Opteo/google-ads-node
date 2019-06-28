// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/affiliate_location_feed_relationship_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AffiliateLocationFeedRelationshipTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AffiliateLocationFeedRelationshipTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AffiliateLocationFeedRelationshipTypeEnum): AffiliateLocationFeedRelationshipTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AffiliateLocationFeedRelationshipTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AffiliateLocationFeedRelationshipTypeEnum;
  static deserializeBinaryFromReader(message: AffiliateLocationFeedRelationshipTypeEnum, reader: jspb.BinaryReader): AffiliateLocationFeedRelationshipTypeEnum;
}

export namespace AffiliateLocationFeedRelationshipTypeEnum {
  export type AsObject = {
  }

  export enum AffiliateLocationFeedRelationshipType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    GENERAL_RETAILER = 2,
  }
}

