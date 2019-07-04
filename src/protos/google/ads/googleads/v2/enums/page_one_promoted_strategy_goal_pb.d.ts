// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/page_one_promoted_strategy_goal.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PageOnePromotedStrategyGoalEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageOnePromotedStrategyGoalEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PageOnePromotedStrategyGoalEnum): PageOnePromotedStrategyGoalEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageOnePromotedStrategyGoalEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageOnePromotedStrategyGoalEnum;
  static deserializeBinaryFromReader(message: PageOnePromotedStrategyGoalEnum, reader: jspb.BinaryReader): PageOnePromotedStrategyGoalEnum;
}

export namespace PageOnePromotedStrategyGoalEnum {
  export type AsObject = {
  }

  export enum PageOnePromotedStrategyGoal {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FIRST_PAGE = 2,
    FIRST_PAGE_PROMOTED = 3,
  }
}

