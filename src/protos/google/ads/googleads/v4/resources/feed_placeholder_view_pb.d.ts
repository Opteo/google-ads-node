// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/feed_placeholder_view.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_placeholder_type_pb from "../../../../../google/ads/googleads/v4/enums/placeholder_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedPlaceholderView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getPlaceholderType(): google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap];
  setPlaceholderType(value: google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedPlaceholderView.AsObject;
  static toObject(includeInstance: boolean, msg: FeedPlaceholderView): FeedPlaceholderView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedPlaceholderView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedPlaceholderView;
  static deserializeBinaryFromReader(message: FeedPlaceholderView, reader: jspb.BinaryReader): FeedPlaceholderView;
}

export namespace FeedPlaceholderView {
  export type AsObject = {
    resourceName: string,
    placeholderType: google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap],
  }
}

