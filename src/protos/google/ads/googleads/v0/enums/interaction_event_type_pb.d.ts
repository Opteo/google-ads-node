// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/interaction_event_type.proto

import * as jspb from "google-protobuf";

export class InteractionEventTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionEventTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionEventTypeEnum): InteractionEventTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InteractionEventTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionEventTypeEnum;
  static deserializeBinaryFromReader(message: InteractionEventTypeEnum, reader: jspb.BinaryReader): InteractionEventTypeEnum;
}

export namespace InteractionEventTypeEnum {
  export type AsObject = {
  }

  export enum InteractionEventType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CLICK = 2,
    ENGAGEMENT = 3,
    VIDEO_VIEW = 4,
    NONE = 5,
  }
}

