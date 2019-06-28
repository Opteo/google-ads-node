// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/webpage_condition_operand.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class WebpageConditionOperandEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebpageConditionOperandEnum.AsObject;
  static toObject(includeInstance: boolean, msg: WebpageConditionOperandEnum): WebpageConditionOperandEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebpageConditionOperandEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebpageConditionOperandEnum;
  static deserializeBinaryFromReader(message: WebpageConditionOperandEnum, reader: jspb.BinaryReader): WebpageConditionOperandEnum;
}

export namespace WebpageConditionOperandEnum {
  export type AsObject = {
  }

  export enum WebpageConditionOperand {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    URL = 2,
    CATEGORY = 3,
    PAGE_TITLE = 4,
    PAGE_CONTENT = 5,
    CUSTOM_LABEL = 6,
  }
}

