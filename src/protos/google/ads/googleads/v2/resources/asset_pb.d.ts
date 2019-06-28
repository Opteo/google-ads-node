// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/asset.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_asset_types_pb from "../../../../../google/ads/googleads/v2/common/asset_types_pb";
import * as google_ads_googleads_v2_enums_asset_type_pb from "../../../../../google/ads/googleads/v2/enums/asset_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Asset extends jspb.Message {
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

  getType(): google_ads_googleads_v2_enums_asset_type_pb.AssetTypeEnum.AssetType;
  setType(value: google_ads_googleads_v2_enums_asset_type_pb.AssetTypeEnum.AssetType): void;

  hasYoutubeVideoAsset(): boolean;
  clearYoutubeVideoAsset(): void;
  getYoutubeVideoAsset(): google_ads_googleads_v2_common_asset_types_pb.YoutubeVideoAsset | undefined;
  setYoutubeVideoAsset(value?: google_ads_googleads_v2_common_asset_types_pb.YoutubeVideoAsset): void;

  hasMediaBundleAsset(): boolean;
  clearMediaBundleAsset(): void;
  getMediaBundleAsset(): google_ads_googleads_v2_common_asset_types_pb.MediaBundleAsset | undefined;
  setMediaBundleAsset(value?: google_ads_googleads_v2_common_asset_types_pb.MediaBundleAsset): void;

  hasImageAsset(): boolean;
  clearImageAsset(): void;
  getImageAsset(): google_ads_googleads_v2_common_asset_types_pb.ImageAsset | undefined;
  setImageAsset(value?: google_ads_googleads_v2_common_asset_types_pb.ImageAsset): void;

  hasTextAsset(): boolean;
  clearTextAsset(): void;
  getTextAsset(): google_ads_googleads_v2_common_asset_types_pb.TextAsset | undefined;
  setTextAsset(value?: google_ads_googleads_v2_common_asset_types_pb.TextAsset): void;

  getAssetDataCase(): Asset.AssetDataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_asset_type_pb.AssetTypeEnum.AssetType,
    youtubeVideoAsset?: google_ads_googleads_v2_common_asset_types_pb.YoutubeVideoAsset.AsObject,
    mediaBundleAsset?: google_ads_googleads_v2_common_asset_types_pb.MediaBundleAsset.AsObject,
    imageAsset?: google_ads_googleads_v2_common_asset_types_pb.ImageAsset.AsObject,
    textAsset?: google_ads_googleads_v2_common_asset_types_pb.TextAsset.AsObject,
  }

  export enum AssetDataCase {
    ASSET_DATA_NOT_SET = 0,
    YOUTUBE_VIDEO_ASSET = 5,
    MEDIA_BUNDLE_ASSET = 6,
    IMAGE_ASSET = 7,
    TEXT_ASSET = 8,
  }
}

