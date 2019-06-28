// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/interaction_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class InteractionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionTypeEnum): InteractionTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InteractionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionTypeEnum;
  static deserializeBinaryFromReader(message: InteractionTypeEnum, reader: jspb.BinaryReader): InteractionTypeEnum;
}

export namespace InteractionTypeEnum {
  export type AsObject = {
  }

  export enum InteractionType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CALLS = 8000,
  }
}

