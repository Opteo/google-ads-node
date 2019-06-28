// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/conversion_action_counting_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionActionCountingTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionActionCountingTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionActionCountingTypeEnum): ConversionActionCountingTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionActionCountingTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionActionCountingTypeEnum;
  static deserializeBinaryFromReader(message: ConversionActionCountingTypeEnum, reader: jspb.BinaryReader): ConversionActionCountingTypeEnum;
}

export namespace ConversionActionCountingTypeEnum {
  export type AsObject = {
  }

  export enum ConversionActionCountingType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ONE_PER_CLICK = 2,
    MANY_PER_CLICK = 3,
  }
}

