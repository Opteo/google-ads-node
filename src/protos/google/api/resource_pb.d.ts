// package: google.api
// file: google/api/resource.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Resource extends jspb.Message {
  getPattern(): string;
  setPattern(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    pattern: string,
    symbol: string,
  }
}

  export const resource: jspb.ExtensionFieldInfo<Resource>;

  export const resourceReference: jspb.ExtensionFieldInfo<string>;

  export const resourceDefinition: jspb.ExtensionFieldInfo<Resource>;

