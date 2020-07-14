// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/conversion_action.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_tag_snippet_pb from "../../../../../google/ads/googleads/v4/common/tag_snippet_pb";
import * as google_ads_googleads_v4_enums_attribution_model_pb from "../../../../../google/ads/googleads/v4/enums/attribution_model_pb";
import * as google_ads_googleads_v4_enums_conversion_action_category_pb from "../../../../../google/ads/googleads/v4/enums/conversion_action_category_pb";
import * as google_ads_googleads_v4_enums_conversion_action_counting_type_pb from "../../../../../google/ads/googleads/v4/enums/conversion_action_counting_type_pb";
import * as google_ads_googleads_v4_enums_conversion_action_status_pb from "../../../../../google/ads/googleads/v4/enums/conversion_action_status_pb";
import * as google_ads_googleads_v4_enums_conversion_action_type_pb from "../../../../../google/ads/googleads/v4/enums/conversion_action_type_pb";
import * as google_ads_googleads_v4_enums_data_driven_model_status_pb from "../../../../../google/ads/googleads/v4/enums/data_driven_model_status_pb";
import * as google_ads_googleads_v4_enums_mobile_app_vendor_pb from "../../../../../google/ads/googleads/v4/enums/mobile_app_vendor_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionAction extends jspb.Message {
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

  getStatus(): google_ads_googleads_v4_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatusMap[keyof google_ads_googleads_v4_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatusMap[keyof google_ads_googleads_v4_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatusMap]): void;

  getType(): google_ads_googleads_v4_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionTypeMap[keyof google_ads_googleads_v4_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionTypeMap];
  setType(value: google_ads_googleads_v4_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionTypeMap[keyof google_ads_googleads_v4_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionTypeMap]): void;

  getCategory(): google_ads_googleads_v4_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategoryMap[keyof google_ads_googleads_v4_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategoryMap];
  setCategory(value: google_ads_googleads_v4_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategoryMap[keyof google_ads_googleads_v4_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategoryMap]): void;

  hasOwnerCustomer(): boolean;
  clearOwnerCustomer(): void;
  getOwnerCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOwnerCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasIncludeInConversionsMetric(): boolean;
  clearIncludeInConversionsMetric(): void;
  getIncludeInConversionsMetric(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIncludeInConversionsMetric(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasClickThroughLookbackWindowDays(): boolean;
  clearClickThroughLookbackWindowDays(): void;
  getClickThroughLookbackWindowDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClickThroughLookbackWindowDays(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasViewThroughLookbackWindowDays(): boolean;
  clearViewThroughLookbackWindowDays(): void;
  getViewThroughLookbackWindowDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setViewThroughLookbackWindowDays(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasValueSettings(): boolean;
  clearValueSettings(): void;
  getValueSettings(): ConversionAction.ValueSettings | undefined;
  setValueSettings(value?: ConversionAction.ValueSettings): void;

  getCountingType(): google_ads_googleads_v4_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingTypeMap[keyof google_ads_googleads_v4_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingTypeMap];
  setCountingType(value: google_ads_googleads_v4_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingTypeMap[keyof google_ads_googleads_v4_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingTypeMap]): void;

  hasAttributionModelSettings(): boolean;
  clearAttributionModelSettings(): void;
  getAttributionModelSettings(): ConversionAction.AttributionModelSettings | undefined;
  setAttributionModelSettings(value?: ConversionAction.AttributionModelSettings): void;

  clearTagSnippetsList(): void;
  getTagSnippetsList(): Array<google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet>;
  setTagSnippetsList(value: Array<google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet>): void;
  addTagSnippets(value?: google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet, index?: number): google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet;

  hasPhoneCallDurationSeconds(): boolean;
  clearPhoneCallDurationSeconds(): void;
  getPhoneCallDurationSeconds(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPhoneCallDurationSeconds(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAppId(): boolean;
  clearAppId(): void;
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMobileAppVendor(): google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap[keyof google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap];
  setMobileAppVendor(value: google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap[keyof google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap]): void;

  hasFirebaseSettings(): boolean;
  clearFirebaseSettings(): void;
  getFirebaseSettings(): ConversionAction.FirebaseSettings | undefined;
  setFirebaseSettings(value?: ConversionAction.FirebaseSettings): void;

  hasThirdPartyAppAnalyticsSettings(): boolean;
  clearThirdPartyAppAnalyticsSettings(): void;
  getThirdPartyAppAnalyticsSettings(): ConversionAction.ThirdPartyAppAnalyticsSettings | undefined;
  setThirdPartyAppAnalyticsSettings(value?: ConversionAction.ThirdPartyAppAnalyticsSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAction.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAction): ConversionAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAction;
  static deserializeBinaryFromReader(message: ConversionAction, reader: jspb.BinaryReader): ConversionAction;
}

export namespace ConversionAction {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v4_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatusMap[keyof google_ads_googleads_v4_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatusMap],
    type: google_ads_googleads_v4_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionTypeMap[keyof google_ads_googleads_v4_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionTypeMap],
    category: google_ads_googleads_v4_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategoryMap[keyof google_ads_googleads_v4_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategoryMap],
    ownerCustomer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    includeInConversionsMetric?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    clickThroughLookbackWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    viewThroughLookbackWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    valueSettings?: ConversionAction.ValueSettings.AsObject,
    countingType: google_ads_googleads_v4_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingTypeMap[keyof google_ads_googleads_v4_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingTypeMap],
    attributionModelSettings?: ConversionAction.AttributionModelSettings.AsObject,
    tagSnippetsList: Array<google_ads_googleads_v4_common_tag_snippet_pb.TagSnippet.AsObject>,
    phoneCallDurationSeconds?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mobileAppVendor: google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap[keyof google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap],
    firebaseSettings?: ConversionAction.FirebaseSettings.AsObject,
    thirdPartyAppAnalyticsSettings?: ConversionAction.ThirdPartyAppAnalyticsSettings.AsObject,
  }

  export class AttributionModelSettings extends jspb.Message {
    getAttributionModel(): google_ads_googleads_v4_enums_attribution_model_pb.AttributionModelEnum.AttributionModelMap[keyof google_ads_googleads_v4_enums_attribution_model_pb.AttributionModelEnum.AttributionModelMap];
    setAttributionModel(value: google_ads_googleads_v4_enums_attribution_model_pb.AttributionModelEnum.AttributionModelMap[keyof google_ads_googleads_v4_enums_attribution_model_pb.AttributionModelEnum.AttributionModelMap]): void;

    getDataDrivenModelStatus(): google_ads_googleads_v4_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatusMap[keyof google_ads_googleads_v4_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatusMap];
    setDataDrivenModelStatus(value: google_ads_googleads_v4_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatusMap[keyof google_ads_googleads_v4_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatusMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttributionModelSettings.AsObject;
    static toObject(includeInstance: boolean, msg: AttributionModelSettings): AttributionModelSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttributionModelSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttributionModelSettings;
    static deserializeBinaryFromReader(message: AttributionModelSettings, reader: jspb.BinaryReader): AttributionModelSettings;
  }

  export namespace AttributionModelSettings {
    export type AsObject = {
      attributionModel: google_ads_googleads_v4_enums_attribution_model_pb.AttributionModelEnum.AttributionModelMap[keyof google_ads_googleads_v4_enums_attribution_model_pb.AttributionModelEnum.AttributionModelMap],
      dataDrivenModelStatus: google_ads_googleads_v4_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatusMap[keyof google_ads_googleads_v4_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatusMap],
    }
  }

  export class ValueSettings extends jspb.Message {
    hasDefaultValue(): boolean;
    clearDefaultValue(): void;
    getDefaultValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDefaultValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasDefaultCurrencyCode(): boolean;
    clearDefaultCurrencyCode(): void;
    getDefaultCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDefaultCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasAlwaysUseDefaultValue(): boolean;
    clearAlwaysUseDefaultValue(): void;
    getAlwaysUseDefaultValue(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAlwaysUseDefaultValue(value?: google_protobuf_wrappers_pb.BoolValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueSettings.AsObject;
    static toObject(includeInstance: boolean, msg: ValueSettings): ValueSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueSettings;
    static deserializeBinaryFromReader(message: ValueSettings, reader: jspb.BinaryReader): ValueSettings;
  }

  export namespace ValueSettings {
    export type AsObject = {
      defaultValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      defaultCurrencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
      alwaysUseDefaultValue?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }

  export class ThirdPartyAppAnalyticsSettings extends jspb.Message {
    hasEventName(): boolean;
    clearEventName(): void;
    getEventName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEventName(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThirdPartyAppAnalyticsSettings.AsObject;
    static toObject(includeInstance: boolean, msg: ThirdPartyAppAnalyticsSettings): ThirdPartyAppAnalyticsSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThirdPartyAppAnalyticsSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThirdPartyAppAnalyticsSettings;
    static deserializeBinaryFromReader(message: ThirdPartyAppAnalyticsSettings, reader: jspb.BinaryReader): ThirdPartyAppAnalyticsSettings;
  }

  export namespace ThirdPartyAppAnalyticsSettings {
    export type AsObject = {
      eventName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }

  export class FirebaseSettings extends jspb.Message {
    hasEventName(): boolean;
    clearEventName(): void;
    getEventName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEventName(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasProjectId(): boolean;
    clearProjectId(): void;
    getProjectId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setProjectId(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FirebaseSettings.AsObject;
    static toObject(includeInstance: boolean, msg: FirebaseSettings): FirebaseSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FirebaseSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FirebaseSettings;
    static deserializeBinaryFromReader(message: FirebaseSettings, reader: jspb.BinaryReader): FirebaseSettings;
  }

  export namespace FirebaseSettings {
    export type AsObject = {
      eventName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      projectId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }
}

