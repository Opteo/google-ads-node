// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/message_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MessagePlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessagePlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MessagePlaceholderFieldEnum): MessagePlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessagePlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessagePlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: MessagePlaceholderFieldEnum, reader: jspb.BinaryReader): MessagePlaceholderFieldEnum;
}

export namespace MessagePlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum MessagePlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BUSINESS_NAME = 2,
    COUNTRY_CODE = 3,
    PHONE_NUMBER = 4,
    MESSAGE_EXTENSION_TEXT = 5,
    MESSAGE_TEXT = 6,
  }
}

