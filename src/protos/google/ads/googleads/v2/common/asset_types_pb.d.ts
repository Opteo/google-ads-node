// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/asset_types.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_mime_type_pb from "../../../../../google/ads/googleads/v2/enums/mime_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class YoutubeVideoAsset extends jspb.Message {
  hasYoutubeVideoId(): boolean;
  clearYoutubeVideoId(): void;
  getYoutubeVideoId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setYoutubeVideoId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YoutubeVideoAsset.AsObject;
  static toObject(includeInstance: boolean, msg: YoutubeVideoAsset): YoutubeVideoAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: YoutubeVideoAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YoutubeVideoAsset;
  static deserializeBinaryFromReader(message: YoutubeVideoAsset, reader: jspb.BinaryReader): YoutubeVideoAsset;
}

export namespace YoutubeVideoAsset {
  export type AsObject = {
    youtubeVideoId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class MediaBundleAsset extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaBundleAsset.AsObject;
  static toObject(includeInstance: boolean, msg: MediaBundleAsset): MediaBundleAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaBundleAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaBundleAsset;
  static deserializeBinaryFromReader(message: MediaBundleAsset, reader: jspb.BinaryReader): MediaBundleAsset;
}

export namespace MediaBundleAsset {
  export type AsObject = {
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }
}

export class ImageAsset extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;

  hasFileSize(): boolean;
  clearFileSize(): void;
  getFileSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFileSize(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getMimeType(): google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType;
  setMimeType(value: google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType): void;

  hasFullSize(): boolean;
  clearFullSize(): void;
  getFullSize(): ImageDimension | undefined;
  setFullSize(value?: ImageDimension): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageAsset.AsObject;
  static toObject(includeInstance: boolean, msg: ImageAsset): ImageAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageAsset;
  static deserializeBinaryFromReader(message: ImageAsset, reader: jspb.BinaryReader): ImageAsset;
}

export namespace ImageAsset {
  export type AsObject = {
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    fileSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    mimeType: google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType,
    fullSize?: ImageDimension.AsObject,
  }
}

export class ImageDimension extends jspb.Message {
  hasHeightPixels(): boolean;
  clearHeightPixels(): void;
  getHeightPixels(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHeightPixels(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasWidthPixels(): boolean;
  clearWidthPixels(): void;
  getWidthPixels(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setWidthPixels(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageDimension.AsObject;
  static toObject(includeInstance: boolean, msg: ImageDimension): ImageDimension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageDimension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageDimension;
  static deserializeBinaryFromReader(message: ImageDimension, reader: jspb.BinaryReader): ImageDimension;
}

export namespace ImageDimension {
  export type AsObject = {
    heightPixels?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    widthPixels?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TextAsset extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAsset.AsObject;
  static toObject(includeInstance: boolean, msg: TextAsset): TextAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAsset;
  static deserializeBinaryFromReader(message: TextAsset, reader: jspb.BinaryReader): TextAsset;
}

export namespace TextAsset {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

