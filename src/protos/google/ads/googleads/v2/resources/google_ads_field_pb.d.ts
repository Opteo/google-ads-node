// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/google_ads_field.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_google_ads_field_category_pb from "../../../../../google/ads/googleads/v2/enums/google_ads_field_category_pb";
import * as google_ads_googleads_v2_enums_google_ads_field_data_type_pb from "../../../../../google/ads/googleads/v2/enums/google_ads_field_data_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GoogleAdsField extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getCategory(): google_ads_googleads_v2_enums_google_ads_field_category_pb.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory;
  setCategory(value: google_ads_googleads_v2_enums_google_ads_field_category_pb.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory): void;

  hasSelectable(): boolean;
  clearSelectable(): void;
  getSelectable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSelectable(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasFilterable(): boolean;
  clearFilterable(): void;
  getFilterable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setFilterable(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasSortable(): boolean;
  clearSortable(): void;
  getSortable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSortable(value?: google_protobuf_wrappers_pb.BoolValue): void;

  clearSelectableWithList(): void;
  getSelectableWithList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setSelectableWithList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addSelectableWith(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearAttributeResourcesList(): void;
  getAttributeResourcesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setAttributeResourcesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addAttributeResources(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearMetricsList(): void;
  getMetricsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setMetricsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addMetrics(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearSegmentsList(): void;
  getSegmentsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setSegmentsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addSegments(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearEnumValuesList(): void;
  getEnumValuesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setEnumValuesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addEnumValues(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getDataType(): google_ads_googleads_v2_enums_google_ads_field_data_type_pb.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType;
  setDataType(value: google_ads_googleads_v2_enums_google_ads_field_data_type_pb.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType): void;

  hasTypeUrl(): boolean;
  clearTypeUrl(): void;
  getTypeUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTypeUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasIsRepeated(): boolean;
  clearIsRepeated(): void;
  getIsRepeated(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsRepeated(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsField.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsField): GoogleAdsField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsField;
  static deserializeBinaryFromReader(message: GoogleAdsField, reader: jspb.BinaryReader): GoogleAdsField;
}

export namespace GoogleAdsField {
  export type AsObject = {
    resourceName: string,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    category: google_ads_googleads_v2_enums_google_ads_field_category_pb.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory,
    selectable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    filterable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    sortable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    selectableWithList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    attributeResourcesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    metricsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    segmentsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    enumValuesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    dataType: google_ads_googleads_v2_enums_google_ads_field_data_type_pb.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType,
    typeUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    isRepeated?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

