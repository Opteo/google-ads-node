// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/reach_plan_ad_length.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ReachPlanAdLengthEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachPlanAdLengthEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ReachPlanAdLengthEnum): ReachPlanAdLengthEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReachPlanAdLengthEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachPlanAdLengthEnum;
  static deserializeBinaryFromReader(message: ReachPlanAdLengthEnum, reader: jspb.BinaryReader): ReachPlanAdLengthEnum;
}

export namespace ReachPlanAdLengthEnum {
  export type AsObject = {
  }

  export interface ReachPlanAdLengthMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    SIX_SECONDS: 2;
    FIFTEEN_OR_TWENTY_SECONDS: 3;
    TWENTY_SECONDS_OR_MORE: 4;
  }

  export const ReachPlanAdLength: ReachPlanAdLengthMap;
}

