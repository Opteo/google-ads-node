// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/shared_set.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_shared_set_status_pb from "../../../../../google/ads/googleads/v2/enums/shared_set_status_pb";
import * as google_ads_googleads_v2_enums_shared_set_type_pb from "../../../../../google/ads/googleads/v2/enums/shared_set_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SharedSet extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getType(): google_ads_googleads_v2_enums_shared_set_type_pb.SharedSetTypeEnum.SharedSetType;
  setType(value: google_ads_googleads_v2_enums_shared_set_type_pb.SharedSetTypeEnum.SharedSetType): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): google_ads_googleads_v2_enums_shared_set_status_pb.SharedSetStatusEnum.SharedSetStatus;
  setStatus(value: google_ads_googleads_v2_enums_shared_set_status_pb.SharedSetStatusEnum.SharedSetStatus): void;

  hasMemberCount(): boolean;
  clearMemberCount(): void;
  getMemberCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMemberCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasReferenceCount(): boolean;
  clearReferenceCount(): void;
  getReferenceCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setReferenceCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSet.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSet): SharedSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSet;
  static deserializeBinaryFromReader(message: SharedSet, reader: jspb.BinaryReader): SharedSet;
}

export namespace SharedSet {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_shared_set_type_pb.SharedSetTypeEnum.SharedSetType,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_shared_set_status_pb.SharedSetStatusEnum.SharedSetStatus,
    memberCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    referenceCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

