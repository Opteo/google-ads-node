// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/bid_modifier_source.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BidModifierSourceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BidModifierSourceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BidModifierSourceEnum): BidModifierSourceEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BidModifierSourceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BidModifierSourceEnum;
  static deserializeBinaryFromReader(message: BidModifierSourceEnum, reader: jspb.BinaryReader): BidModifierSourceEnum;
}

export namespace BidModifierSourceEnum {
  export type AsObject = {
  }

  export enum BidModifierSource {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CAMPAIGN = 2,
    AD_GROUP = 3,
  }
}

