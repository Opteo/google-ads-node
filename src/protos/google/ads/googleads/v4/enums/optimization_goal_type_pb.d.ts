// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/optimization_goal_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OptimizationGoalTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptimizationGoalTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OptimizationGoalTypeEnum): OptimizationGoalTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptimizationGoalTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptimizationGoalTypeEnum;
  static deserializeBinaryFromReader(message: OptimizationGoalTypeEnum, reader: jspb.BinaryReader): OptimizationGoalTypeEnum;
}

export namespace OptimizationGoalTypeEnum {
  export type AsObject = {
  }

  export interface OptimizationGoalTypeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    CALL_CLICKS: 2;
    DRIVING_DIRECTIONS: 3;
  }

  export const OptimizationGoalType: OptimizationGoalTypeMap;
}

