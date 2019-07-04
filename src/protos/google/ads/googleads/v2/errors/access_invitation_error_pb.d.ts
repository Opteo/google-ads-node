// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/access_invitation_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccessInvitationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessInvitationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccessInvitationErrorEnum): AccessInvitationErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccessInvitationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessInvitationErrorEnum;
  static deserializeBinaryFromReader(message: AccessInvitationErrorEnum, reader: jspb.BinaryReader): AccessInvitationErrorEnum;
}

export namespace AccessInvitationErrorEnum {
  export type AsObject = {
  }

  export enum AccessInvitationError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_EMAIL_ADDRESS = 2,
    EMAIL_ADDRESS_ALREADY_HAS_ACCESS = 3,
  }
}

