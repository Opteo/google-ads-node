// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/target_impression_share_location.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TargetImpressionShareLocationEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetImpressionShareLocationEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TargetImpressionShareLocationEnum): TargetImpressionShareLocationEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetImpressionShareLocationEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetImpressionShareLocationEnum;
  static deserializeBinaryFromReader(message: TargetImpressionShareLocationEnum, reader: jspb.BinaryReader): TargetImpressionShareLocationEnum;
}

export namespace TargetImpressionShareLocationEnum {
  export type AsObject = {
  }

  export enum TargetImpressionShareLocation {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ANYWHERE_ON_PAGE = 2,
    TOP_OF_PAGE = 3,
    ABSOLUTE_TOP_OF_PAGE = 4,
  }
}

