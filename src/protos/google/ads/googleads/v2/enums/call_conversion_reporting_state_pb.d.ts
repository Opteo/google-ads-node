// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/call_conversion_reporting_state.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CallConversionReportingStateEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallConversionReportingStateEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CallConversionReportingStateEnum): CallConversionReportingStateEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallConversionReportingStateEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallConversionReportingStateEnum;
  static deserializeBinaryFromReader(message: CallConversionReportingStateEnum, reader: jspb.BinaryReader): CallConversionReportingStateEnum;
}

export namespace CallConversionReportingStateEnum {
  export type AsObject = {
  }

  export enum CallConversionReportingState {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DISABLED = 2,
    USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION = 3,
    USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION = 4,
  }
}

