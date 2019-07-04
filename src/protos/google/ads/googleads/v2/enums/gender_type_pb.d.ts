// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/gender_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GenderTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GenderTypeEnum): GenderTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenderTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderTypeEnum;
  static deserializeBinaryFromReader(message: GenderTypeEnum, reader: jspb.BinaryReader): GenderTypeEnum;
}

export namespace GenderTypeEnum {
  export type AsObject = {
  }

  export enum GenderType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MALE = 10,
    FEMALE = 11,
    UNDETERMINED = 20,
  }
}

