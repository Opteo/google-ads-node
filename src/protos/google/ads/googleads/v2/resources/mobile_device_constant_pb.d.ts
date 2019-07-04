// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/mobile_device_constant.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_mobile_device_type_pb from "../../../../../google/ads/googleads/v2/enums/mobile_device_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MobileDeviceConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasManufacturerName(): boolean;
  clearManufacturerName(): void;
  getManufacturerName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setManufacturerName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOperatingSystemName(): boolean;
  clearOperatingSystemName(): void;
  getOperatingSystemName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOperatingSystemName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getType(): google_ads_googleads_v2_enums_mobile_device_type_pb.MobileDeviceTypeEnum.MobileDeviceType;
  setType(value: google_ads_googleads_v2_enums_mobile_device_type_pb.MobileDeviceTypeEnum.MobileDeviceType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDeviceConstant.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDeviceConstant): MobileDeviceConstant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileDeviceConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDeviceConstant;
  static deserializeBinaryFromReader(message: MobileDeviceConstant, reader: jspb.BinaryReader): MobileDeviceConstant;
}

export namespace MobileDeviceConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    manufacturerName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    operatingSystemName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_mobile_device_type_pb.MobileDeviceTypeEnum.MobileDeviceType,
  }
}

