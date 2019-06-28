// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_group_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupStatusEnum): AdGroupStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupStatusEnum;
  static deserializeBinaryFromReader(message: AdGroupStatusEnum, reader: jspb.BinaryReader): AdGroupStatusEnum;
}

export namespace AdGroupStatusEnum {
  export type AsObject = {
  }

  export enum AdGroupStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

