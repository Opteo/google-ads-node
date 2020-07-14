// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/detail_placement_view.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_placement_type_pb from "../../../../../google/ads/googleads/v4/enums/placement_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DetailPlacementView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasPlacement(): boolean;
  clearPlacement(): void;
  getPlacement(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlacement(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDisplayName(): boolean;
  clearDisplayName(): void;
  getDisplayName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDisplayName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasGroupPlacementTargetUrl(): boolean;
  clearGroupPlacementTargetUrl(): void;
  getGroupPlacementTargetUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGroupPlacementTargetUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTargetUrl(): boolean;
  clearTargetUrl(): void;
  getTargetUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  getPlacementType(): google_ads_googleads_v4_enums_placement_type_pb.PlacementTypeEnum.PlacementTypeMap[keyof google_ads_googleads_v4_enums_placement_type_pb.PlacementTypeEnum.PlacementTypeMap];
  setPlacementType(value: google_ads_googleads_v4_enums_placement_type_pb.PlacementTypeEnum.PlacementTypeMap[keyof google_ads_googleads_v4_enums_placement_type_pb.PlacementTypeEnum.PlacementTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailPlacementView.AsObject;
  static toObject(includeInstance: boolean, msg: DetailPlacementView): DetailPlacementView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetailPlacementView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailPlacementView;
  static deserializeBinaryFromReader(message: DetailPlacementView, reader: jspb.BinaryReader): DetailPlacementView;
}

export namespace DetailPlacementView {
  export type AsObject = {
    resourceName: string,
    placement?: google_protobuf_wrappers_pb.StringValue.AsObject,
    displayName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    groupPlacementTargetUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placementType: google_ads_googleads_v4_enums_placement_type_pb.PlacementTypeEnum.PlacementTypeMap[keyof google_ads_googleads_v4_enums_placement_type_pb.PlacementTypeEnum.PlacementTypeMap],
  }
}

