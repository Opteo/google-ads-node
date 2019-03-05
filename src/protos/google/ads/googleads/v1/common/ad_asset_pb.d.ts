// package: google.ads.googleads.v1.common
// file: google/ads/googleads/v1/common/ad_asset.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_enums_served_asset_field_type_pb from "../../../../../google/ads/googleads/v1/enums/served_asset_field_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdTextAsset extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;

  getPinnedField(): google_ads_googleads_v1_enums_served_asset_field_type_pb.ServedAssetFieldTypeEnum.ServedAssetFieldType;
  setPinnedField(value: google_ads_googleads_v1_enums_served_asset_field_type_pb.ServedAssetFieldTypeEnum.ServedAssetFieldType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdTextAsset.AsObject;
  static toObject(includeInstance: boolean, msg: AdTextAsset): AdTextAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdTextAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdTextAsset;
  static deserializeBinaryFromReader(message: AdTextAsset, reader: jspb.BinaryReader): AdTextAsset;
}

export namespace AdTextAsset {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pinnedField: google_ads_googleads_v1_enums_served_asset_field_type_pb.ServedAssetFieldTypeEnum.ServedAssetFieldType,
  }
}

