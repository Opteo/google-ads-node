// package: google.ads.googleads.v3.enums
// file: google/ads/googleads/v3/enums/reach_plan_network.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ReachPlanNetworkEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachPlanNetworkEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ReachPlanNetworkEnum): ReachPlanNetworkEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReachPlanNetworkEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachPlanNetworkEnum;
  static deserializeBinaryFromReader(message: ReachPlanNetworkEnum, reader: jspb.BinaryReader): ReachPlanNetworkEnum;
}

export namespace ReachPlanNetworkEnum {
  export type AsObject = {
  }

  export enum ReachPlanNetwork {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    YOUTUBE = 2,
    GOOGLE_VIDEO_PARTNERS = 3,
    YOUTUBE_AND_GOOGLE_VIDEO_PARTNERS = 4,
  }
}

