// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/account_link_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccountLinkStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLinkStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLinkStatusEnum): AccountLinkStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountLinkStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLinkStatusEnum;
  static deserializeBinaryFromReader(message: AccountLinkStatusEnum, reader: jspb.BinaryReader): AccountLinkStatusEnum;
}

export namespace AccountLinkStatusEnum {
  export type AsObject = {
  }

  export interface AccountLinkStatusMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    ENABLED: 2;
    REMOVED: 3;
  }

  export const AccountLinkStatus: AccountLinkStatusMap;
}

