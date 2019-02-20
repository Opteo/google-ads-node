// package: google.api
// file: google/api/experimental/authorization_config.proto

import * as jspb from "google-protobuf";

export class AuthorizationConfig extends jspb.Message {
  getProvider(): string;
  setProvider(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationConfig): AuthorizationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationConfig;
  static deserializeBinaryFromReader(message: AuthorizationConfig, reader: jspb.BinaryReader): AuthorizationConfig;
}

export namespace AuthorizationConfig {
  export type AsObject = {
    provider: string,
  }
}

