// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/customer_manager_link.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_manager_link_status_pb from "../../../../../google/ads/googleads/v2/enums/manager_link_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerManagerLink extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasManagerCustomer(): boolean;
  clearManagerCustomer(): void;
  getManagerCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
  setManagerCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasManagerLinkId(): boolean;
  clearManagerLinkId(): void;
  getManagerLinkId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setManagerLinkId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getStatus(): google_ads_googleads_v2_enums_manager_link_status_pb.ManagerLinkStatusEnum.ManagerLinkStatus;
  setStatus(value: google_ads_googleads_v2_enums_manager_link_status_pb.ManagerLinkStatusEnum.ManagerLinkStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerManagerLink.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerManagerLink): CustomerManagerLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerManagerLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerManagerLink;
  static deserializeBinaryFromReader(message: CustomerManagerLink, reader: jspb.BinaryReader): CustomerManagerLink;
}

export namespace CustomerManagerLink {
  export type AsObject = {
    resourceName: string,
    managerCustomer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    managerLinkId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v2_enums_manager_link_status_pb.ManagerLinkStatusEnum.ManagerLinkStatus,
  }
}

