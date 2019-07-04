// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/keyword_plan_competition_level.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanCompetitionLevelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCompetitionLevelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCompetitionLevelEnum): KeywordPlanCompetitionLevelEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanCompetitionLevelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCompetitionLevelEnum;
  static deserializeBinaryFromReader(message: KeywordPlanCompetitionLevelEnum, reader: jspb.BinaryReader): KeywordPlanCompetitionLevelEnum;
}

export namespace KeywordPlanCompetitionLevelEnum {
  export type AsObject = {
  }

  export enum KeywordPlanCompetitionLevel {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
  }
}

