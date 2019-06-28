// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/customer_client_link.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_manager_link_status_pb from "../../../../../google/ads/googleads/v2/enums/manager_link_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerClientLink extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasClientCustomer(): boolean;
  clearClientCustomer(): void;
  getClientCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
  setClientCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasManagerLinkId(): boolean;
  clearManagerLinkId(): void;
  getManagerLinkId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setManagerLinkId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getStatus(): google_ads_googleads_v2_enums_manager_link_status_pb.ManagerLinkStatusEnum.ManagerLinkStatus;
  setStatus(value: google_ads_googleads_v2_enums_manager_link_status_pb.ManagerLinkStatusEnum.ManagerLinkStatus): void;

  hasHidden(): boolean;
  clearHidden(): void;
  getHidden(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHidden(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerClientLink.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerClientLink): CustomerClientLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerClientLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerClientLink;
  static deserializeBinaryFromReader(message: CustomerClientLink, reader: jspb.BinaryReader): CustomerClientLink;
}

export namespace CustomerClientLink {
  export type AsObject = {
    resourceName: string,
    clientCustomer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    managerLinkId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v2_enums_manager_link_status_pb.ManagerLinkStatusEnum.ManagerLinkStatus,
    hidden?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

