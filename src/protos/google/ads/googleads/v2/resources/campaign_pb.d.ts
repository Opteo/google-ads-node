// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_bidding_pb from "../../../../../google/ads/googleads/v2/common/bidding_pb";
import * as google_ads_googleads_v2_common_custom_parameter_pb from "../../../../../google/ads/googleads/v2/common/custom_parameter_pb";
import * as google_ads_googleads_v2_common_frequency_cap_pb from "../../../../../google/ads/googleads/v2/common/frequency_cap_pb";
import * as google_ads_googleads_v2_common_real_time_bidding_setting_pb from "../../../../../google/ads/googleads/v2/common/real_time_bidding_setting_pb";
import * as google_ads_googleads_v2_common_targeting_setting_pb from "../../../../../google/ads/googleads/v2/common/targeting_setting_pb";
import * as google_ads_googleads_v2_enums_ad_serving_optimization_status_pb from "../../../../../google/ads/googleads/v2/enums/ad_serving_optimization_status_pb";
import * as google_ads_googleads_v2_enums_advertising_channel_sub_type_pb from "../../../../../google/ads/googleads/v2/enums/advertising_channel_sub_type_pb";
import * as google_ads_googleads_v2_enums_advertising_channel_type_pb from "../../../../../google/ads/googleads/v2/enums/advertising_channel_type_pb";
import * as google_ads_googleads_v2_enums_app_campaign_app_store_pb from "../../../../../google/ads/googleads/v2/enums/app_campaign_app_store_pb";
import * as google_ads_googleads_v2_enums_app_campaign_bidding_strategy_goal_type_pb from "../../../../../google/ads/googleads/v2/enums/app_campaign_bidding_strategy_goal_type_pb";
import * as google_ads_googleads_v2_enums_bidding_strategy_type_pb from "../../../../../google/ads/googleads/v2/enums/bidding_strategy_type_pb";
import * as google_ads_googleads_v2_enums_brand_safety_suitability_pb from "../../../../../google/ads/googleads/v2/enums/brand_safety_suitability_pb";
import * as google_ads_googleads_v2_enums_campaign_experiment_type_pb from "../../../../../google/ads/googleads/v2/enums/campaign_experiment_type_pb";
import * as google_ads_googleads_v2_enums_campaign_serving_status_pb from "../../../../../google/ads/googleads/v2/enums/campaign_serving_status_pb";
import * as google_ads_googleads_v2_enums_campaign_status_pb from "../../../../../google/ads/googleads/v2/enums/campaign_status_pb";
import * as google_ads_googleads_v2_enums_negative_geo_target_type_pb from "../../../../../google/ads/googleads/v2/enums/negative_geo_target_type_pb";
import * as google_ads_googleads_v2_enums_payment_mode_pb from "../../../../../google/ads/googleads/v2/enums/payment_mode_pb";
import * as google_ads_googleads_v2_enums_positive_geo_target_type_pb from "../../../../../google/ads/googleads/v2/enums/positive_geo_target_type_pb";
import * as google_ads_googleads_v2_enums_vanity_pharma_display_url_mode_pb from "../../../../../google/ads/googleads/v2/enums/vanity_pharma_display_url_mode_pb";
import * as google_ads_googleads_v2_enums_vanity_pharma_text_pb from "../../../../../google/ads/googleads/v2/enums/vanity_pharma_text_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Campaign extends jspb.Message {
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

  getStatus(): google_ads_googleads_v2_enums_campaign_status_pb.CampaignStatusEnum.CampaignStatus;
  setStatus(value: google_ads_googleads_v2_enums_campaign_status_pb.CampaignStatusEnum.CampaignStatus): void;

  getServingStatus(): google_ads_googleads_v2_enums_campaign_serving_status_pb.CampaignServingStatusEnum.CampaignServingStatus;
  setServingStatus(value: google_ads_googleads_v2_enums_campaign_serving_status_pb.CampaignServingStatusEnum.CampaignServingStatus): void;

  getAdServingOptimizationStatus(): google_ads_googleads_v2_enums_ad_serving_optimization_status_pb.AdServingOptimizationStatusEnum.AdServingOptimizationStatus;
  setAdServingOptimizationStatus(value: google_ads_googleads_v2_enums_ad_serving_optimization_status_pb.AdServingOptimizationStatusEnum.AdServingOptimizationStatus): void;

  getAdvertisingChannelType(): google_ads_googleads_v2_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType;
  setAdvertisingChannelType(value: google_ads_googleads_v2_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType): void;

  getAdvertisingChannelSubType(): google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType;
  setAdvertisingChannelSubType(value: google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType): void;

  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;
  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearUrlCustomParametersList(): void;
  getUrlCustomParametersList(): Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;

  hasRealTimeBiddingSetting(): boolean;
  clearRealTimeBiddingSetting(): void;
  getRealTimeBiddingSetting(): google_ads_googleads_v2_common_real_time_bidding_setting_pb.RealTimeBiddingSetting | undefined;
  setRealTimeBiddingSetting(value?: google_ads_googleads_v2_common_real_time_bidding_setting_pb.RealTimeBiddingSetting): void;

  hasNetworkSettings(): boolean;
  clearNetworkSettings(): void;
  getNetworkSettings(): Campaign.NetworkSettings | undefined;
  setNetworkSettings(value?: Campaign.NetworkSettings): void;

  hasHotelSetting(): boolean;
  clearHotelSetting(): void;
  getHotelSetting(): Campaign.HotelSettingInfo | undefined;
  setHotelSetting(value?: Campaign.HotelSettingInfo): void;

  hasDynamicSearchAdsSetting(): boolean;
  clearDynamicSearchAdsSetting(): void;
  getDynamicSearchAdsSetting(): Campaign.DynamicSearchAdsSetting | undefined;
  setDynamicSearchAdsSetting(value?: Campaign.DynamicSearchAdsSetting): void;

  hasShoppingSetting(): boolean;
  clearShoppingSetting(): void;
  getShoppingSetting(): Campaign.ShoppingSetting | undefined;
  setShoppingSetting(value?: Campaign.ShoppingSetting): void;

  hasTargetingSetting(): boolean;
  clearTargetingSetting(): void;
  getTargetingSetting(): google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting | undefined;
  setTargetingSetting(value?: google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting): void;

  hasGeoTargetTypeSetting(): boolean;
  clearGeoTargetTypeSetting(): void;
  getGeoTargetTypeSetting(): Campaign.GeoTargetTypeSetting | undefined;
  setGeoTargetTypeSetting(value?: Campaign.GeoTargetTypeSetting): void;

  hasAppCampaignSetting(): boolean;
  clearAppCampaignSetting(): void;
  getAppCampaignSetting(): Campaign.AppCampaignSetting | undefined;
  setAppCampaignSetting(value?: Campaign.AppCampaignSetting): void;

  clearLabelsList(): void;
  getLabelsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setLabelsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addLabels(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getExperimentType(): google_ads_googleads_v2_enums_campaign_experiment_type_pb.CampaignExperimentTypeEnum.CampaignExperimentType;
  setExperimentType(value: google_ads_googleads_v2_enums_campaign_experiment_type_pb.CampaignExperimentTypeEnum.CampaignExperimentType): void;

  hasBaseCampaign(): boolean;
  clearBaseCampaign(): void;
  getBaseCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBaseCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCampaignBudget(): boolean;
  clearCampaignBudget(): void;
  getCampaignBudget(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaignBudget(value?: google_protobuf_wrappers_pb.StringValue): void;

  getBiddingStrategyType(): google_ads_googleads_v2_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType;
  setBiddingStrategyType(value: google_ads_googleads_v2_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;
  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearFrequencyCapsList(): void;
  getFrequencyCapsList(): Array<google_ads_googleads_v2_common_frequency_cap_pb.FrequencyCapEntry>;
  setFrequencyCapsList(value: Array<google_ads_googleads_v2_common_frequency_cap_pb.FrequencyCapEntry>): void;
  addFrequencyCaps(value?: google_ads_googleads_v2_common_frequency_cap_pb.FrequencyCapEntry, index?: number): google_ads_googleads_v2_common_frequency_cap_pb.FrequencyCapEntry;

  getVideoBrandSafetySuitability(): google_ads_googleads_v2_enums_brand_safety_suitability_pb.BrandSafetySuitabilityEnum.BrandSafetySuitability;
  setVideoBrandSafetySuitability(value: google_ads_googleads_v2_enums_brand_safety_suitability_pb.BrandSafetySuitabilityEnum.BrandSafetySuitability): void;

  hasVanityPharma(): boolean;
  clearVanityPharma(): void;
  getVanityPharma(): Campaign.VanityPharma | undefined;
  setVanityPharma(value?: Campaign.VanityPharma): void;

  hasSelectiveOptimization(): boolean;
  clearSelectiveOptimization(): void;
  getSelectiveOptimization(): Campaign.SelectiveOptimization | undefined;
  setSelectiveOptimization(value?: Campaign.SelectiveOptimization): void;

  hasTrackingSetting(): boolean;
  clearTrackingSetting(): void;
  getTrackingSetting(): Campaign.TrackingSetting | undefined;
  setTrackingSetting(value?: Campaign.TrackingSetting): void;

  getPaymentMode(): google_ads_googleads_v2_enums_payment_mode_pb.PaymentModeEnum.PaymentMode;
  setPaymentMode(value: google_ads_googleads_v2_enums_payment_mode_pb.PaymentModeEnum.PaymentMode): void;

  hasBiddingStrategy(): boolean;
  clearBiddingStrategy(): void;
  getBiddingStrategy(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBiddingStrategy(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCommission(): boolean;
  clearCommission(): void;
  getCommission(): google_ads_googleads_v2_common_bidding_pb.Commission | undefined;
  setCommission(value?: google_ads_googleads_v2_common_bidding_pb.Commission): void;

  hasManualCpc(): boolean;
  clearManualCpc(): void;
  getManualCpc(): google_ads_googleads_v2_common_bidding_pb.ManualCpc | undefined;
  setManualCpc(value?: google_ads_googleads_v2_common_bidding_pb.ManualCpc): void;

  hasManualCpm(): boolean;
  clearManualCpm(): void;
  getManualCpm(): google_ads_googleads_v2_common_bidding_pb.ManualCpm | undefined;
  setManualCpm(value?: google_ads_googleads_v2_common_bidding_pb.ManualCpm): void;

  hasManualCpv(): boolean;
  clearManualCpv(): void;
  getManualCpv(): google_ads_googleads_v2_common_bidding_pb.ManualCpv | undefined;
  setManualCpv(value?: google_ads_googleads_v2_common_bidding_pb.ManualCpv): void;

  hasMaximizeConversions(): boolean;
  clearMaximizeConversions(): void;
  getMaximizeConversions(): google_ads_googleads_v2_common_bidding_pb.MaximizeConversions | undefined;
  setMaximizeConversions(value?: google_ads_googleads_v2_common_bidding_pb.MaximizeConversions): void;

  hasMaximizeConversionValue(): boolean;
  clearMaximizeConversionValue(): void;
  getMaximizeConversionValue(): google_ads_googleads_v2_common_bidding_pb.MaximizeConversionValue | undefined;
  setMaximizeConversionValue(value?: google_ads_googleads_v2_common_bidding_pb.MaximizeConversionValue): void;

  hasTargetCpa(): boolean;
  clearTargetCpa(): void;
  getTargetCpa(): google_ads_googleads_v2_common_bidding_pb.TargetCpa | undefined;
  setTargetCpa(value?: google_ads_googleads_v2_common_bidding_pb.TargetCpa): void;

  hasTargetImpressionShare(): boolean;
  clearTargetImpressionShare(): void;
  getTargetImpressionShare(): google_ads_googleads_v2_common_bidding_pb.TargetImpressionShare | undefined;
  setTargetImpressionShare(value?: google_ads_googleads_v2_common_bidding_pb.TargetImpressionShare): void;

  hasTargetRoas(): boolean;
  clearTargetRoas(): void;
  getTargetRoas(): google_ads_googleads_v2_common_bidding_pb.TargetRoas | undefined;
  setTargetRoas(value?: google_ads_googleads_v2_common_bidding_pb.TargetRoas): void;

  hasTargetSpend(): boolean;
  clearTargetSpend(): void;
  getTargetSpend(): google_ads_googleads_v2_common_bidding_pb.TargetSpend | undefined;
  setTargetSpend(value?: google_ads_googleads_v2_common_bidding_pb.TargetSpend): void;

  hasPercentCpc(): boolean;
  clearPercentCpc(): void;
  getPercentCpc(): google_ads_googleads_v2_common_bidding_pb.PercentCpc | undefined;
  setPercentCpc(value?: google_ads_googleads_v2_common_bidding_pb.PercentCpc): void;

  hasTargetCpm(): boolean;
  clearTargetCpm(): void;
  getTargetCpm(): google_ads_googleads_v2_common_bidding_pb.TargetCpm | undefined;
  setTargetCpm(value?: google_ads_googleads_v2_common_bidding_pb.TargetCpm): void;

  getCampaignBiddingStrategyCase(): Campaign.CampaignBiddingStrategyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Campaign.AsObject;
  static toObject(includeInstance: boolean, msg: Campaign): Campaign.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Campaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Campaign;
  static deserializeBinaryFromReader(message: Campaign, reader: jspb.BinaryReader): Campaign;
}

export namespace Campaign {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_campaign_status_pb.CampaignStatusEnum.CampaignStatus,
    servingStatus: google_ads_googleads_v2_enums_campaign_serving_status_pb.CampaignServingStatusEnum.CampaignServingStatus,
    adServingOptimizationStatus: google_ads_googleads_v2_enums_ad_serving_optimization_status_pb.AdServingOptimizationStatusEnum.AdServingOptimizationStatus,
    advertisingChannelType: google_ads_googleads_v2_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType,
    advertisingChannelSubType: google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.AsObject>,
    realTimeBiddingSetting?: google_ads_googleads_v2_common_real_time_bidding_setting_pb.RealTimeBiddingSetting.AsObject,
    networkSettings?: Campaign.NetworkSettings.AsObject,
    hotelSetting?: Campaign.HotelSettingInfo.AsObject,
    dynamicSearchAdsSetting?: Campaign.DynamicSearchAdsSetting.AsObject,
    shoppingSetting?: Campaign.ShoppingSetting.AsObject,
    targetingSetting?: google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting.AsObject,
    geoTargetTypeSetting?: Campaign.GeoTargetTypeSetting.AsObject,
    appCampaignSetting?: Campaign.AppCampaignSetting.AsObject,
    labelsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    experimentType: google_ads_googleads_v2_enums_campaign_experiment_type_pb.CampaignExperimentTypeEnum.CampaignExperimentType,
    baseCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaignBudget?: google_protobuf_wrappers_pb.StringValue.AsObject,
    biddingStrategyType: google_ads_googleads_v2_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType,
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    frequencyCapsList: Array<google_ads_googleads_v2_common_frequency_cap_pb.FrequencyCapEntry.AsObject>,
    videoBrandSafetySuitability: google_ads_googleads_v2_enums_brand_safety_suitability_pb.BrandSafetySuitabilityEnum.BrandSafetySuitability,
    vanityPharma?: Campaign.VanityPharma.AsObject,
    selectiveOptimization?: Campaign.SelectiveOptimization.AsObject,
    trackingSetting?: Campaign.TrackingSetting.AsObject,
    paymentMode: google_ads_googleads_v2_enums_payment_mode_pb.PaymentModeEnum.PaymentMode,
    biddingStrategy?: google_protobuf_wrappers_pb.StringValue.AsObject,
    commission?: google_ads_googleads_v2_common_bidding_pb.Commission.AsObject,
    manualCpc?: google_ads_googleads_v2_common_bidding_pb.ManualCpc.AsObject,
    manualCpm?: google_ads_googleads_v2_common_bidding_pb.ManualCpm.AsObject,
    manualCpv?: google_ads_googleads_v2_common_bidding_pb.ManualCpv.AsObject,
    maximizeConversions?: google_ads_googleads_v2_common_bidding_pb.MaximizeConversions.AsObject,
    maximizeConversionValue?: google_ads_googleads_v2_common_bidding_pb.MaximizeConversionValue.AsObject,
    targetCpa?: google_ads_googleads_v2_common_bidding_pb.TargetCpa.AsObject,
    targetImpressionShare?: google_ads_googleads_v2_common_bidding_pb.TargetImpressionShare.AsObject,
    targetRoas?: google_ads_googleads_v2_common_bidding_pb.TargetRoas.AsObject,
    targetSpend?: google_ads_googleads_v2_common_bidding_pb.TargetSpend.AsObject,
    percentCpc?: google_ads_googleads_v2_common_bidding_pb.PercentCpc.AsObject,
    targetCpm?: google_ads_googleads_v2_common_bidding_pb.TargetCpm.AsObject,
  }

  export class NetworkSettings extends jspb.Message {
    hasTargetGoogleSearch(): boolean;
    clearTargetGoogleSearch(): void;
    getTargetGoogleSearch(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetGoogleSearch(value?: google_protobuf_wrappers_pb.BoolValue): void;

    hasTargetSearchNetwork(): boolean;
    clearTargetSearchNetwork(): void;
    getTargetSearchNetwork(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetSearchNetwork(value?: google_protobuf_wrappers_pb.BoolValue): void;

    hasTargetContentNetwork(): boolean;
    clearTargetContentNetwork(): void;
    getTargetContentNetwork(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetContentNetwork(value?: google_protobuf_wrappers_pb.BoolValue): void;

    hasTargetPartnerSearchNetwork(): boolean;
    clearTargetPartnerSearchNetwork(): void;
    getTargetPartnerSearchNetwork(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTargetPartnerSearchNetwork(value?: google_protobuf_wrappers_pb.BoolValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSettings.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSettings): NetworkSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSettings;
    static deserializeBinaryFromReader(message: NetworkSettings, reader: jspb.BinaryReader): NetworkSettings;
  }

  export namespace NetworkSettings {
    export type AsObject = {
      targetGoogleSearch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      targetSearchNetwork?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      targetContentNetwork?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      targetPartnerSearchNetwork?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }

  export class HotelSettingInfo extends jspb.Message {
    hasHotelCenterId(): boolean;
    clearHotelCenterId(): void;
    getHotelCenterId(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHotelCenterId(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelSettingInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HotelSettingInfo): HotelSettingInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelSettingInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelSettingInfo;
    static deserializeBinaryFromReader(message: HotelSettingInfo, reader: jspb.BinaryReader): HotelSettingInfo;
  }

  export namespace HotelSettingInfo {
    export type AsObject = {
      hotelCenterId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export class DynamicSearchAdsSetting extends jspb.Message {
    hasDomainName(): boolean;
    clearDomainName(): void;
    getDomainName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDomainName(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasLanguageCode(): boolean;
    clearLanguageCode(): void;
    getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasUseSuppliedUrlsOnly(): boolean;
    clearUseSuppliedUrlsOnly(): void;
    getUseSuppliedUrlsOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseSuppliedUrlsOnly(value?: google_protobuf_wrappers_pb.BoolValue): void;

    clearFeedsList(): void;
    getFeedsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setFeedsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addFeeds(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicSearchAdsSetting.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicSearchAdsSetting): DynamicSearchAdsSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicSearchAdsSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicSearchAdsSetting;
    static deserializeBinaryFromReader(message: DynamicSearchAdsSetting, reader: jspb.BinaryReader): DynamicSearchAdsSetting;
  }

  export namespace DynamicSearchAdsSetting {
    export type AsObject = {
      domainName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
      useSuppliedUrlsOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      feedsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
  }

  export class ShoppingSetting extends jspb.Message {
    hasMerchantId(): boolean;
    clearMerchantId(): void;
    getMerchantId(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMerchantId(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasSalesCountry(): boolean;
    clearSalesCountry(): void;
    getSalesCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSalesCountry(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasCampaignPriority(): boolean;
    clearCampaignPriority(): void;
    getCampaignPriority(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setCampaignPriority(value?: google_protobuf_wrappers_pb.Int32Value): void;

    hasEnableLocal(): boolean;
    clearEnableLocal(): void;
    getEnableLocal(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableLocal(value?: google_protobuf_wrappers_pb.BoolValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShoppingSetting.AsObject;
    static toObject(includeInstance: boolean, msg: ShoppingSetting): ShoppingSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShoppingSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShoppingSetting;
    static deserializeBinaryFromReader(message: ShoppingSetting, reader: jspb.BinaryReader): ShoppingSetting;
  }

  export namespace ShoppingSetting {
    export type AsObject = {
      merchantId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      salesCountry?: google_protobuf_wrappers_pb.StringValue.AsObject,
      campaignPriority?: google_protobuf_wrappers_pb.Int32Value.AsObject,
      enableLocal?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }

  export class TrackingSetting extends jspb.Message {
    hasTrackingUrl(): boolean;
    clearTrackingUrl(): void;
    getTrackingUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTrackingUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrackingSetting.AsObject;
    static toObject(includeInstance: boolean, msg: TrackingSetting): TrackingSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrackingSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrackingSetting;
    static deserializeBinaryFromReader(message: TrackingSetting, reader: jspb.BinaryReader): TrackingSetting;
  }

  export namespace TrackingSetting {
    export type AsObject = {
      trackingUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }

  export class GeoTargetTypeSetting extends jspb.Message {
    getPositiveGeoTargetType(): google_ads_googleads_v2_enums_positive_geo_target_type_pb.PositiveGeoTargetTypeEnum.PositiveGeoTargetType;
    setPositiveGeoTargetType(value: google_ads_googleads_v2_enums_positive_geo_target_type_pb.PositiveGeoTargetTypeEnum.PositiveGeoTargetType): void;

    getNegativeGeoTargetType(): google_ads_googleads_v2_enums_negative_geo_target_type_pb.NegativeGeoTargetTypeEnum.NegativeGeoTargetType;
    setNegativeGeoTargetType(value: google_ads_googleads_v2_enums_negative_geo_target_type_pb.NegativeGeoTargetTypeEnum.NegativeGeoTargetType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoTargetTypeSetting.AsObject;
    static toObject(includeInstance: boolean, msg: GeoTargetTypeSetting): GeoTargetTypeSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoTargetTypeSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoTargetTypeSetting;
    static deserializeBinaryFromReader(message: GeoTargetTypeSetting, reader: jspb.BinaryReader): GeoTargetTypeSetting;
  }

  export namespace GeoTargetTypeSetting {
    export type AsObject = {
      positiveGeoTargetType: google_ads_googleads_v2_enums_positive_geo_target_type_pb.PositiveGeoTargetTypeEnum.PositiveGeoTargetType,
      negativeGeoTargetType: google_ads_googleads_v2_enums_negative_geo_target_type_pb.NegativeGeoTargetTypeEnum.NegativeGeoTargetType,
    }
  }

  export class SelectiveOptimization extends jspb.Message {
    clearConversionActionsList(): void;
    getConversionActionsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setConversionActionsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addConversionActions(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectiveOptimization.AsObject;
    static toObject(includeInstance: boolean, msg: SelectiveOptimization): SelectiveOptimization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectiveOptimization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectiveOptimization;
    static deserializeBinaryFromReader(message: SelectiveOptimization, reader: jspb.BinaryReader): SelectiveOptimization;
  }

  export namespace SelectiveOptimization {
    export type AsObject = {
      conversionActionsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
  }

  export class AppCampaignSetting extends jspb.Message {
    getBiddingStrategyGoalType(): google_ads_googleads_v2_enums_app_campaign_bidding_strategy_goal_type_pb.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType;
    setBiddingStrategyGoalType(value: google_ads_googleads_v2_enums_app_campaign_bidding_strategy_goal_type_pb.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType): void;

    hasAppId(): boolean;
    clearAppId(): void;
    getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;

    getAppStore(): google_ads_googleads_v2_enums_app_campaign_app_store_pb.AppCampaignAppStoreEnum.AppCampaignAppStore;
    setAppStore(value: google_ads_googleads_v2_enums_app_campaign_app_store_pb.AppCampaignAppStoreEnum.AppCampaignAppStore): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppCampaignSetting.AsObject;
    static toObject(includeInstance: boolean, msg: AppCampaignSetting): AppCampaignSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppCampaignSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppCampaignSetting;
    static deserializeBinaryFromReader(message: AppCampaignSetting, reader: jspb.BinaryReader): AppCampaignSetting;
  }

  export namespace AppCampaignSetting {
    export type AsObject = {
      biddingStrategyGoalType: google_ads_googleads_v2_enums_app_campaign_bidding_strategy_goal_type_pb.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType,
      appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
      appStore: google_ads_googleads_v2_enums_app_campaign_app_store_pb.AppCampaignAppStoreEnum.AppCampaignAppStore,
    }
  }

  export class VanityPharma extends jspb.Message {
    getVanityPharmaDisplayUrlMode(): google_ads_googleads_v2_enums_vanity_pharma_display_url_mode_pb.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode;
    setVanityPharmaDisplayUrlMode(value: google_ads_googleads_v2_enums_vanity_pharma_display_url_mode_pb.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode): void;

    getVanityPharmaText(): google_ads_googleads_v2_enums_vanity_pharma_text_pb.VanityPharmaTextEnum.VanityPharmaText;
    setVanityPharmaText(value: google_ads_googleads_v2_enums_vanity_pharma_text_pb.VanityPharmaTextEnum.VanityPharmaText): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VanityPharma.AsObject;
    static toObject(includeInstance: boolean, msg: VanityPharma): VanityPharma.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VanityPharma, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VanityPharma;
    static deserializeBinaryFromReader(message: VanityPharma, reader: jspb.BinaryReader): VanityPharma;
  }

  export namespace VanityPharma {
    export type AsObject = {
      vanityPharmaDisplayUrlMode: google_ads_googleads_v2_enums_vanity_pharma_display_url_mode_pb.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode,
      vanityPharmaText: google_ads_googleads_v2_enums_vanity_pharma_text_pb.VanityPharmaTextEnum.VanityPharmaText,
    }
  }

  export enum CampaignBiddingStrategyCase {
    CAMPAIGN_BIDDING_STRATEGY_NOT_SET = 0,
    BIDDING_STRATEGY = 23,
    COMMISSION = 49,
    MANUAL_CPC = 24,
    MANUAL_CPM = 25,
    MANUAL_CPV = 37,
    MAXIMIZE_CONVERSIONS = 30,
    MAXIMIZE_CONVERSION_VALUE = 31,
    TARGET_CPA = 26,
    TARGET_IMPRESSION_SHARE = 48,
    TARGET_ROAS = 29,
    TARGET_SPEND = 27,
    PERCENT_CPC = 34,
    TARGET_CPM = 41,
  }
}

