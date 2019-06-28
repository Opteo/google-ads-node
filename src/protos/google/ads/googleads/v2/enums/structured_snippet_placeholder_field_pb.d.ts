// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/structured_snippet_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class StructuredSnippetPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructuredSnippetPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: StructuredSnippetPlaceholderFieldEnum): StructuredSnippetPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructuredSnippetPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructuredSnippetPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: StructuredSnippetPlaceholderFieldEnum, reader: jspb.BinaryReader): StructuredSnippetPlaceholderFieldEnum;
}

export namespace StructuredSnippetPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum StructuredSnippetPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    HEADER = 2,
    SNIPPETS = 3,
  }
}

