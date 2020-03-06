// package: google.ads.googleads.v3.errors
// file: google/ads/googleads/v3/errors/reach_plan_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ReachPlanErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachPlanErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ReachPlanErrorEnum): ReachPlanErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReachPlanErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachPlanErrorEnum;
  static deserializeBinaryFromReader(message: ReachPlanErrorEnum, reader: jspb.BinaryReader): ReachPlanErrorEnum;
}

export namespace ReachPlanErrorEnum {
  export type AsObject = {
  }

  export enum ReachPlanError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
  }
}

