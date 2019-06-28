// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/bidding_source.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BiddingSourceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingSourceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingSourceEnum): BiddingSourceEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiddingSourceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingSourceEnum;
  static deserializeBinaryFromReader(message: BiddingSourceEnum, reader: jspb.BinaryReader): BiddingSourceEnum;
}

export namespace BiddingSourceEnum {
  export type AsObject = {
  }

  export enum BiddingSource {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CAMPAIGN_BIDDING_STRATEGY = 5,
    AD_GROUP = 6,
    AD_GROUP_CRITERION = 7,
  }
}

