// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/merchant_center_link_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MerchantCenterLinkStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCenterLinkStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCenterLinkStatusEnum): MerchantCenterLinkStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerchantCenterLinkStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCenterLinkStatusEnum;
  static deserializeBinaryFromReader(message: MerchantCenterLinkStatusEnum, reader: jspb.BinaryReader): MerchantCenterLinkStatusEnum;
}

export namespace MerchantCenterLinkStatusEnum {
  export type AsObject = {
  }

  export enum MerchantCenterLinkStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PENDING = 3,
  }
}

