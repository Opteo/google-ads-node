// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/criterion_system_serving_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CriterionSystemServingStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionSystemServingStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionSystemServingStatusEnum): CriterionSystemServingStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CriterionSystemServingStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionSystemServingStatusEnum;
  static deserializeBinaryFromReader(message: CriterionSystemServingStatusEnum, reader: jspb.BinaryReader): CriterionSystemServingStatusEnum;
}

export namespace CriterionSystemServingStatusEnum {
  export type AsObject = {
  }

  export enum CriterionSystemServingStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ELIGIBLE = 2,
    RARELY_SERVED = 3,
  }
}

