// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/change_status_resource_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ChangeStatusResourceTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStatusResourceTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStatusResourceTypeEnum): ChangeStatusResourceTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeStatusResourceTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStatusResourceTypeEnum;
  static deserializeBinaryFromReader(message: ChangeStatusResourceTypeEnum, reader: jspb.BinaryReader): ChangeStatusResourceTypeEnum;
}

export namespace ChangeStatusResourceTypeEnum {
  export type AsObject = {
  }

  export enum ChangeStatusResourceType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_GROUP = 3,
    AD_GROUP_AD = 4,
    AD_GROUP_CRITERION = 5,
    CAMPAIGN = 6,
    CAMPAIGN_CRITERION = 7,
    FEED = 9,
    FEED_ITEM = 10,
    AD_GROUP_FEED = 11,
    CAMPAIGN_FEED = 12,
    AD_GROUP_BID_MODIFIER = 13,
  }
}

