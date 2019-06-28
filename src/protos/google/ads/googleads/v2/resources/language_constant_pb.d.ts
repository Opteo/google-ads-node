// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/language_constant.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LanguageConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTargetable(): boolean;
  clearTargetable(): void;
  getTargetable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTargetable(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageConstant.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageConstant): LanguageConstant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LanguageConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageConstant;
  static deserializeBinaryFromReader(message: LanguageConstant, reader: jspb.BinaryReader): LanguageConstant;
}

export namespace LanguageConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    code?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

