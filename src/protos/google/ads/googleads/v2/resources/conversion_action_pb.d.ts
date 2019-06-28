// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/conversion_action.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_tag_snippet_pb from "../../../../../google/ads/googleads/v2/common/tag_snippet_pb";
import * as google_ads_googleads_v2_enums_attribution_model_pb from "../../../../../google/ads/googleads/v2/enums/attribution_model_pb";
import * as google_ads_googleads_v2_enums_conversion_action_category_pb from "../../../../../google/ads/googleads/v2/enums/conversion_action_category_pb";
import * as google_ads_googleads_v2_enums_conversion_action_counting_type_pb from "../../../../../google/ads/googleads/v2/enums/conversion_action_counting_type_pb";
import * as google_ads_googleads_v2_enums_conversion_action_status_pb from "../../../../../google/ads/googleads/v2/enums/conversion_action_status_pb";
import * as google_ads_googleads_v2_enums_conversion_action_type_pb from "../../../../../google/ads/googleads/v2/enums/conversion_action_type_pb";
import * as google_ads_googleads_v2_enums_data_driven_model_status_pb from "../../../../../google/ads/googleads/v2/enums/data_driven_model_status_pb";
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

  getStatus(): google_ads_googleads_v2_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatus;
  setStatus(value: google_ads_googleads_v2_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatus): void;

  getType(): google_ads_googleads_v2_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionType;
  setType(value: google_ads_googleads_v2_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionType): void;

  getCategory(): google_ads_googleads_v2_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory;
  setCategory(value: google_ads_googleads_v2_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory): void;

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

  getCountingType(): google_ads_googleads_v2_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingType;
  setCountingType(value: google_ads_googleads_v2_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingType): void;

  hasAttributionModelSettings(): boolean;
  clearAttributionModelSettings(): void;
  getAttributionModelSettings(): ConversionAction.AttributionModelSettings | undefined;
  setAttributionModelSettings(value?: ConversionAction.AttributionModelSettings): void;

  clearTagSnippetsList(): void;
  getTagSnippetsList(): Array<google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet>;
  setTagSnippetsList(value: Array<google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet>): void;
  addTagSnippets(value?: google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet, index?: number): google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet;

  hasPhoneCallDurationSeconds(): boolean;
  clearPhoneCallDurationSeconds(): void;
  getPhoneCallDurationSeconds(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPhoneCallDurationSeconds(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAppId(): boolean;
  clearAppId(): void;
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;

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
    status: google_ads_googleads_v2_enums_conversion_action_status_pb.ConversionActionStatusEnum.ConversionActionStatus,
    type: google_ads_googleads_v2_enums_conversion_action_type_pb.ConversionActionTypeEnum.ConversionActionType,
    category: google_ads_googleads_v2_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory,
    ownerCustomer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    includeInConversionsMetric?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    clickThroughLookbackWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    viewThroughLookbackWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    valueSettings?: ConversionAction.ValueSettings.AsObject,
    countingType: google_ads_googleads_v2_enums_conversion_action_counting_type_pb.ConversionActionCountingTypeEnum.ConversionActionCountingType,
    attributionModelSettings?: ConversionAction.AttributionModelSettings.AsObject,
    tagSnippetsList: Array<google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.AsObject>,
    phoneCallDurationSeconds?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export class AttributionModelSettings extends jspb.Message {
    getAttributionModel(): google_ads_googleads_v2_enums_attribution_model_pb.AttributionModelEnum.AttributionModel;
    setAttributionModel(value: google_ads_googleads_v2_enums_attribution_model_pb.AttributionModelEnum.AttributionModel): void;

    getDataDrivenModelStatus(): google_ads_googleads_v2_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatus;
    setDataDrivenModelStatus(value: google_ads_googleads_v2_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatus): void;

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
      attributionModel: google_ads_googleads_v2_enums_attribution_model_pb.AttributionModelEnum.AttributionModel,
      dataDrivenModelStatus: google_ads_googleads_v2_enums_data_driven_model_status_pb.DataDrivenModelStatusEnum.DataDrivenModelStatus,
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
}

