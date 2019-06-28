// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/custom_interest_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomInterestStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterestStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterestStatusEnum): CustomInterestStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomInterestStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterestStatusEnum;
  static deserializeBinaryFromReader(message: CustomInterestStatusEnum, reader: jspb.BinaryReader): CustomInterestStatusEnum;
}

export namespace CustomInterestStatusEnum {
  export type AsObject = {
  }

  export enum CustomInterestStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

