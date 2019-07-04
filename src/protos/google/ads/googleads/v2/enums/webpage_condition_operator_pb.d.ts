// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/webpage_condition_operator.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class WebpageConditionOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebpageConditionOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: WebpageConditionOperatorEnum): WebpageConditionOperatorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebpageConditionOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebpageConditionOperatorEnum;
  static deserializeBinaryFromReader(message: WebpageConditionOperatorEnum, reader: jspb.BinaryReader): WebpageConditionOperatorEnum;
}

export namespace WebpageConditionOperatorEnum {
  export type AsObject = {
  }

  export enum WebpageConditionOperator {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EQUALS = 2,
    CONTAINS = 3,
  }
}

