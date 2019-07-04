// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_group_ad_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupAdStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdStatusEnum): AdGroupAdStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupAdStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdStatusEnum;
  static deserializeBinaryFromReader(message: AdGroupAdStatusEnum, reader: jspb.BinaryReader): AdGroupAdStatusEnum;
}

export namespace AdGroupAdStatusEnum {
  export type AsObject = {
  }

  export enum AdGroupAdStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

