// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/call_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CallPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CallPlaceholderFieldEnum): CallPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: CallPlaceholderFieldEnum, reader: jspb.BinaryReader): CallPlaceholderFieldEnum;
}

export namespace CallPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum CallPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PHONE_NUMBER = 2,
    COUNTRY_CODE = 3,
    TRACKED = 4,
    CONVERSION_TYPE_ID = 5,
    CONVERSION_REPORTING_STATE = 6,
  }
}

