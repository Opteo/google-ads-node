// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_extension_setting.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_extension_setting_device_pb from "../../../../../google/ads/googleads/v2/enums/extension_setting_device_pb";
import * as google_ads_googleads_v2_enums_extension_type_pb from "../../../../../google/ads/googleads/v2/enums/extension_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignExtensionSetting extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getExtensionType(): google_ads_googleads_v2_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType;
  setExtensionType(value: google_ads_googleads_v2_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearExtensionFeedItemsList(): void;
  getExtensionFeedItemsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setExtensionFeedItemsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addExtensionFeedItems(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getDevice(): google_ads_googleads_v2_enums_extension_setting_device_pb.ExtensionSettingDeviceEnum.ExtensionSettingDevice;
  setDevice(value: google_ads_googleads_v2_enums_extension_setting_device_pb.ExtensionSettingDeviceEnum.ExtensionSettingDevice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExtensionSetting.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExtensionSetting): CampaignExtensionSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignExtensionSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExtensionSetting;
  static deserializeBinaryFromReader(message: CampaignExtensionSetting, reader: jspb.BinaryReader): CampaignExtensionSetting;
}

export namespace CampaignExtensionSetting {
  export type AsObject = {
    resourceName: string,
    extensionType: google_ads_googleads_v2_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    extensionFeedItemsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    device: google_ads_googleads_v2_enums_extension_setting_device_pb.ExtensionSettingDeviceEnum.ExtensionSettingDevice,
  }
}

