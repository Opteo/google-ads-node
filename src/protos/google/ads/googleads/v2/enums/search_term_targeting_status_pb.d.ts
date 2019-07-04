// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/search_term_targeting_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SearchTermTargetingStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTermTargetingStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTermTargetingStatusEnum): SearchTermTargetingStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchTermTargetingStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTermTargetingStatusEnum;
  static deserializeBinaryFromReader(message: SearchTermTargetingStatusEnum, reader: jspb.BinaryReader): SearchTermTargetingStatusEnum;
}

export namespace SearchTermTargetingStatusEnum {
  export type AsObject = {
  }

  export enum SearchTermTargetingStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADDED = 2,
    EXCLUDED = 3,
    ADDED_EXCLUDED = 4,
    NONE = 5,
  }
}

