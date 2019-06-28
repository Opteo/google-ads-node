// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/group_placement_view.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_placement_type_pb from "../../../../../google/ads/googleads/v2/enums/placement_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GroupPlacementView extends jspb.Message {
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

  hasTargetUrl(): boolean;
  clearTargetUrl(): void;
  getTargetUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  getPlacementType(): google_ads_googleads_v2_enums_placement_type_pb.PlacementTypeEnum.PlacementType;
  setPlacementType(value: google_ads_googleads_v2_enums_placement_type_pb.PlacementTypeEnum.PlacementType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupPlacementView.AsObject;
  static toObject(includeInstance: boolean, msg: GroupPlacementView): GroupPlacementView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupPlacementView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupPlacementView;
  static deserializeBinaryFromReader(message: GroupPlacementView, reader: jspb.BinaryReader): GroupPlacementView;
}

export namespace GroupPlacementView {
  export type AsObject = {
    resourceName: string,
    placement?: google_protobuf_wrappers_pb.StringValue.AsObject,
    displayName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placementType: google_ads_googleads_v2_enums_placement_type_pb.PlacementTypeEnum.PlacementType,
  }
}

