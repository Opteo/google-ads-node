// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/geographic_view.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_geo_targeting_type_pb from "../../../../../google/ads/googleads/v4/enums/geo_targeting_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GeographicView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getLocationType(): google_ads_googleads_v4_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingTypeMap[keyof google_ads_googleads_v4_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingTypeMap];
  setLocationType(value: google_ads_googleads_v4_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingTypeMap[keyof google_ads_googleads_v4_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingTypeMap]): void;

  hasCountryCriterionId(): boolean;
  clearCountryCriterionId(): void;
  getCountryCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCountryCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeographicView.AsObject;
  static toObject(includeInstance: boolean, msg: GeographicView): GeographicView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeographicView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeographicView;
  static deserializeBinaryFromReader(message: GeographicView, reader: jspb.BinaryReader): GeographicView;
}

export namespace GeographicView {
  export type AsObject = {
    resourceName: string,
    locationType: google_ads_googleads_v4_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingTypeMap[keyof google_ads_googleads_v4_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingTypeMap],
    countryCriterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

