// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/conversion_attribution_event_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionAttributionEventTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAttributionEventTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAttributionEventTypeEnum): ConversionAttributionEventTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionAttributionEventTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAttributionEventTypeEnum;
  static deserializeBinaryFromReader(message: ConversionAttributionEventTypeEnum, reader: jspb.BinaryReader): ConversionAttributionEventTypeEnum;
}

export namespace ConversionAttributionEventTypeEnum {
  export type AsObject = {
  }

  export enum ConversionAttributionEventType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    IMPRESSION = 2,
    INTERACTION = 3,
  }
}

