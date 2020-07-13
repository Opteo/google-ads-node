// package: google.ads.googleads.v4.common
// file: google/ads/googleads/v4/common/tag_snippet.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_tracking_code_page_format_pb from "../../../../../google/ads/googleads/v4/enums/tracking_code_page_format_pb";
import * as google_ads_googleads_v4_enums_tracking_code_type_pb from "../../../../../google/ads/googleads/v4/enums/tracking_code_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TagSnippet extends jspb.Message {
  getType(): google_ads_googleads_v4_enums_tracking_code_type_pb.TrackingCodeTypeEnum.TrackingCodeTypeMap[keyof google_ads_googleads_v4_enums_tracking_code_type_pb.TrackingCodeTypeEnum.TrackingCodeTypeMap];
  setType(value: google_ads_googleads_v4_enums_tracking_code_type_pb.TrackingCodeTypeEnum.TrackingCodeTypeMap[keyof google_ads_googleads_v4_enums_tracking_code_type_pb.TrackingCodeTypeEnum.TrackingCodeTypeMap]): void;

  getPageFormat(): google_ads_googleads_v4_enums_tracking_code_page_format_pb.TrackingCodePageFormatEnum.TrackingCodePageFormatMap[keyof google_ads_googleads_v4_enums_tracking_code_page_format_pb.TrackingCodePageFormatEnum.TrackingCodePageFormatMap];
  setPageFormat(value: google_ads_googleads_v4_enums_tracking_code_page_format_pb.TrackingCodePageFormatEnum.TrackingCodePageFormatMap[keyof google_ads_googleads_v4_enums_tracking_code_page_format_pb.TrackingCodePageFormatEnum.TrackingCodePageFormatMap]): void;

  hasGlobalSiteTag(): boolean;
  clearGlobalSiteTag(): void;
  getGlobalSiteTag(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGlobalSiteTag(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEventSnippet(): boolean;
  clearEventSnippet(): void;
  getEventSnippet(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEventSnippet(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagSnippet.AsObject;
  static toObject(includeInstance: boolean, msg: TagSnippet): TagSnippet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TagSnippet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagSnippet;
  static deserializeBinaryFromReader(message: TagSnippet, reader: jspb.BinaryReader): TagSnippet;
}

export namespace TagSnippet {
  export type AsObject = {
    type: google_ads_googleads_v4_enums_tracking_code_type_pb.TrackingCodeTypeEnum.TrackingCodeTypeMap[keyof google_ads_googleads_v4_enums_tracking_code_type_pb.TrackingCodeTypeEnum.TrackingCodeTypeMap],
    pageFormat: google_ads_googleads_v4_enums_tracking_code_page_format_pb.TrackingCodePageFormatEnum.TrackingCodePageFormatMap[keyof google_ads_googleads_v4_enums_tracking_code_page_format_pb.TrackingCodePageFormatEnum.TrackingCodePageFormatMap],
    globalSiteTag?: google_protobuf_wrappers_pb.StringValue.AsObject,
    eventSnippet?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

