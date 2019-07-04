// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/callout_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CalloutPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalloutPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CalloutPlaceholderFieldEnum): CalloutPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalloutPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalloutPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: CalloutPlaceholderFieldEnum, reader: jspb.BinaryReader): CalloutPlaceholderFieldEnum;
}

export namespace CalloutPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum CalloutPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CALLOUT_TEXT = 2,
  }
}

