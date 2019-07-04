// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_customizer_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdCustomizerPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdCustomizerPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdCustomizerPlaceholderFieldEnum): AdCustomizerPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdCustomizerPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdCustomizerPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: AdCustomizerPlaceholderFieldEnum, reader: jspb.BinaryReader): AdCustomizerPlaceholderFieldEnum;
}

export namespace AdCustomizerPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum AdCustomizerPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INTEGER = 2,
    PRICE = 3,
    DATE = 4,
    STRING = 5,
  }
}

