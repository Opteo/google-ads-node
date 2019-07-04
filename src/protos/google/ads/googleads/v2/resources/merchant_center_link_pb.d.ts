// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/merchant_center_link.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_merchant_center_link_status_pb from "../../../../../google/ads/googleads/v2/enums/merchant_center_link_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MerchantCenterLink extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMerchantCenterAccountName(): boolean;
  clearMerchantCenterAccountName(): void;
  getMerchantCenterAccountName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMerchantCenterAccountName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): google_ads_googleads_v2_enums_merchant_center_link_status_pb.MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus;
  setStatus(value: google_ads_googleads_v2_enums_merchant_center_link_status_pb.MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCenterLink.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCenterLink): MerchantCenterLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerchantCenterLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCenterLink;
  static deserializeBinaryFromReader(message: MerchantCenterLink, reader: jspb.BinaryReader): MerchantCenterLink;
}

export namespace MerchantCenterLink {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    merchantCenterAccountName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_merchant_center_link_status_pb.MerchantCenterLinkStatusEnum.MerchantCenterLinkStatus,
  }
}

