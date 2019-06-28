// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/policy.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_policy_topic_entry_type_pb from "../../../../../google/ads/googleads/v2/enums/policy_topic_entry_type_pb";
import * as google_ads_googleads_v2_enums_policy_topic_evidence_destination_mismatch_url_type_pb from "../../../../../google/ads/googleads/v2/enums/policy_topic_evidence_destination_mismatch_url_type_pb";
import * as google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_device_pb from "../../../../../google/ads/googleads/v2/enums/policy_topic_evidence_destination_not_working_device_pb";
import * as google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_dns_error_type_pb from "../../../../../google/ads/googleads/v2/enums/policy_topic_evidence_destination_not_working_dns_error_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyViolationKey extends jspb.Message {
  hasPolicyName(): boolean;
  clearPolicyName(): void;
  getPolicyName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPolicyName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasViolatingText(): boolean;
  clearViolatingText(): void;
  getViolatingText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setViolatingText(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyViolationKey.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyViolationKey): PolicyViolationKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyViolationKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyViolationKey;
  static deserializeBinaryFromReader(message: PolicyViolationKey, reader: jspb.BinaryReader): PolicyViolationKey;
}

export namespace PolicyViolationKey {
  export type AsObject = {
    policyName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    violatingText?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class PolicyValidationParameter extends jspb.Message {
  clearIgnorablePolicyTopicsList(): void;
  getIgnorablePolicyTopicsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setIgnorablePolicyTopicsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addIgnorablePolicyTopics(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearExemptPolicyViolationKeysList(): void;
  getExemptPolicyViolationKeysList(): Array<PolicyViolationKey>;
  setExemptPolicyViolationKeysList(value: Array<PolicyViolationKey>): void;
  addExemptPolicyViolationKeys(value?: PolicyViolationKey, index?: number): PolicyViolationKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyValidationParameter.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyValidationParameter): PolicyValidationParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyValidationParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyValidationParameter;
  static deserializeBinaryFromReader(message: PolicyValidationParameter, reader: jspb.BinaryReader): PolicyValidationParameter;
}

export namespace PolicyValidationParameter {
  export type AsObject = {
    ignorablePolicyTopicsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    exemptPolicyViolationKeysList: Array<PolicyViolationKey.AsObject>,
  }
}

export class PolicyTopicEntry extends jspb.Message {
  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTopic(value?: google_protobuf_wrappers_pb.StringValue): void;

  getType(): google_ads_googleads_v2_enums_policy_topic_entry_type_pb.PolicyTopicEntryTypeEnum.PolicyTopicEntryType;
  setType(value: google_ads_googleads_v2_enums_policy_topic_entry_type_pb.PolicyTopicEntryTypeEnum.PolicyTopicEntryType): void;

  clearEvidencesList(): void;
  getEvidencesList(): Array<PolicyTopicEvidence>;
  setEvidencesList(value: Array<PolicyTopicEvidence>): void;
  addEvidences(value?: PolicyTopicEvidence, index?: number): PolicyTopicEvidence;

  clearConstraintsList(): void;
  getConstraintsList(): Array<PolicyTopicConstraint>;
  setConstraintsList(value: Array<PolicyTopicConstraint>): void;
  addConstraints(value?: PolicyTopicConstraint, index?: number): PolicyTopicConstraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicEntry.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicEntry): PolicyTopicEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyTopicEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicEntry;
  static deserializeBinaryFromReader(message: PolicyTopicEntry, reader: jspb.BinaryReader): PolicyTopicEntry;
}

export namespace PolicyTopicEntry {
  export type AsObject = {
    topic?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_policy_topic_entry_type_pb.PolicyTopicEntryTypeEnum.PolicyTopicEntryType,
    evidencesList: Array<PolicyTopicEvidence.AsObject>,
    constraintsList: Array<PolicyTopicConstraint.AsObject>,
  }
}

export class PolicyTopicEvidence extends jspb.Message {
  hasWebsiteList(): boolean;
  clearWebsiteList(): void;
  getWebsiteList(): PolicyTopicEvidence.WebsiteList | undefined;
  setWebsiteList(value?: PolicyTopicEvidence.WebsiteList): void;

  hasTextList(): boolean;
  clearTextList(): void;
  getTextList(): PolicyTopicEvidence.TextList | undefined;
  setTextList(value?: PolicyTopicEvidence.TextList): void;

  hasLanguageCode(): boolean;
  clearLanguageCode(): void;
  getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDestinationTextList(): boolean;
  clearDestinationTextList(): void;
  getDestinationTextList(): PolicyTopicEvidence.DestinationTextList | undefined;
  setDestinationTextList(value?: PolicyTopicEvidence.DestinationTextList): void;

  hasDestinationMismatch(): boolean;
  clearDestinationMismatch(): void;
  getDestinationMismatch(): PolicyTopicEvidence.DestinationMismatch | undefined;
  setDestinationMismatch(value?: PolicyTopicEvidence.DestinationMismatch): void;

  hasDestinationNotWorking(): boolean;
  clearDestinationNotWorking(): void;
  getDestinationNotWorking(): PolicyTopicEvidence.DestinationNotWorking | undefined;
  setDestinationNotWorking(value?: PolicyTopicEvidence.DestinationNotWorking): void;

  getValueCase(): PolicyTopicEvidence.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicEvidence.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicEvidence): PolicyTopicEvidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyTopicEvidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicEvidence;
  static deserializeBinaryFromReader(message: PolicyTopicEvidence, reader: jspb.BinaryReader): PolicyTopicEvidence;
}

export namespace PolicyTopicEvidence {
  export type AsObject = {
    websiteList?: PolicyTopicEvidence.WebsiteList.AsObject,
    textList?: PolicyTopicEvidence.TextList.AsObject,
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    destinationTextList?: PolicyTopicEvidence.DestinationTextList.AsObject,
    destinationMismatch?: PolicyTopicEvidence.DestinationMismatch.AsObject,
    destinationNotWorking?: PolicyTopicEvidence.DestinationNotWorking.AsObject,
  }

  export class TextList extends jspb.Message {
    clearTextsList(): void;
    getTextsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setTextsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addTexts(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextList.AsObject;
    static toObject(includeInstance: boolean, msg: TextList): TextList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextList;
    static deserializeBinaryFromReader(message: TextList, reader: jspb.BinaryReader): TextList;
  }

  export namespace TextList {
    export type AsObject = {
      textsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
  }

  export class WebsiteList extends jspb.Message {
    clearWebsitesList(): void;
    getWebsitesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setWebsitesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addWebsites(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebsiteList.AsObject;
    static toObject(includeInstance: boolean, msg: WebsiteList): WebsiteList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebsiteList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebsiteList;
    static deserializeBinaryFromReader(message: WebsiteList, reader: jspb.BinaryReader): WebsiteList;
  }

  export namespace WebsiteList {
    export type AsObject = {
      websitesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
  }

  export class DestinationTextList extends jspb.Message {
    clearDestinationTextsList(): void;
    getDestinationTextsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDestinationTextsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addDestinationTexts(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DestinationTextList.AsObject;
    static toObject(includeInstance: boolean, msg: DestinationTextList): DestinationTextList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DestinationTextList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DestinationTextList;
    static deserializeBinaryFromReader(message: DestinationTextList, reader: jspb.BinaryReader): DestinationTextList;
  }

  export namespace DestinationTextList {
    export type AsObject = {
      destinationTextsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
  }

  export class DestinationMismatch extends jspb.Message {
    clearUrlTypesList(): void;
    getUrlTypesList(): Array<google_ads_googleads_v2_enums_policy_topic_evidence_destination_mismatch_url_type_pb.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType>;
    setUrlTypesList(value: Array<google_ads_googleads_v2_enums_policy_topic_evidence_destination_mismatch_url_type_pb.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType>): void;
    addUrlTypes(value: google_ads_googleads_v2_enums_policy_topic_evidence_destination_mismatch_url_type_pb.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType, index?: number): google_ads_googleads_v2_enums_policy_topic_evidence_destination_mismatch_url_type_pb.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DestinationMismatch.AsObject;
    static toObject(includeInstance: boolean, msg: DestinationMismatch): DestinationMismatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DestinationMismatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DestinationMismatch;
    static deserializeBinaryFromReader(message: DestinationMismatch, reader: jspb.BinaryReader): DestinationMismatch;
  }

  export namespace DestinationMismatch {
    export type AsObject = {
      urlTypesList: Array<google_ads_googleads_v2_enums_policy_topic_evidence_destination_mismatch_url_type_pb.PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.PolicyTopicEvidenceDestinationMismatchUrlType>,
    }
  }

  export class DestinationNotWorking extends jspb.Message {
    hasExpandedUrl(): boolean;
    clearExpandedUrl(): void;
    getExpandedUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
    setExpandedUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

    getDevice(): google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_device_pb.PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.PolicyTopicEvidenceDestinationNotWorkingDevice;
    setDevice(value: google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_device_pb.PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.PolicyTopicEvidenceDestinationNotWorkingDevice): void;

    hasLastCheckedDateTime(): boolean;
    clearLastCheckedDateTime(): void;
    getLastCheckedDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLastCheckedDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasDnsErrorType(): boolean;
    clearDnsErrorType(): void;
    getDnsErrorType(): google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_dns_error_type_pb.PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum.PolicyTopicEvidenceDestinationNotWorkingDnsErrorType;
    setDnsErrorType(value: google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_dns_error_type_pb.PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum.PolicyTopicEvidenceDestinationNotWorkingDnsErrorType): void;

    hasHttpErrorCode(): boolean;
    clearHttpErrorCode(): void;
    getHttpErrorCode(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHttpErrorCode(value?: google_protobuf_wrappers_pb.Int64Value): void;

    getReasonCase(): DestinationNotWorking.ReasonCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DestinationNotWorking.AsObject;
    static toObject(includeInstance: boolean, msg: DestinationNotWorking): DestinationNotWorking.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DestinationNotWorking, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DestinationNotWorking;
    static deserializeBinaryFromReader(message: DestinationNotWorking, reader: jspb.BinaryReader): DestinationNotWorking;
  }

  export namespace DestinationNotWorking {
    export type AsObject = {
      expandedUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
      device: google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_device_pb.PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.PolicyTopicEvidenceDestinationNotWorkingDevice,
      lastCheckedDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      dnsErrorType: google_ads_googleads_v2_enums_policy_topic_evidence_destination_not_working_dns_error_type_pb.PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum.PolicyTopicEvidenceDestinationNotWorkingDnsErrorType,
      httpErrorCode?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }

    export enum ReasonCase {
      REASON_NOT_SET = 0,
      DNS_ERROR_TYPE = 1,
      HTTP_ERROR_CODE = 2,
    }
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    WEBSITE_LIST = 3,
    TEXT_LIST = 4,
    LANGUAGE_CODE = 5,
    DESTINATION_TEXT_LIST = 6,
    DESTINATION_MISMATCH = 7,
    DESTINATION_NOT_WORKING = 8,
  }
}

export class PolicyTopicConstraint extends jspb.Message {
  hasCountryConstraintList(): boolean;
  clearCountryConstraintList(): void;
  getCountryConstraintList(): PolicyTopicConstraint.CountryConstraintList | undefined;
  setCountryConstraintList(value?: PolicyTopicConstraint.CountryConstraintList): void;

  hasResellerConstraint(): boolean;
  clearResellerConstraint(): void;
  getResellerConstraint(): PolicyTopicConstraint.ResellerConstraint | undefined;
  setResellerConstraint(value?: PolicyTopicConstraint.ResellerConstraint): void;

  hasCertificateMissingInCountryList(): boolean;
  clearCertificateMissingInCountryList(): void;
  getCertificateMissingInCountryList(): PolicyTopicConstraint.CountryConstraintList | undefined;
  setCertificateMissingInCountryList(value?: PolicyTopicConstraint.CountryConstraintList): void;

  hasCertificateDomainMismatchInCountryList(): boolean;
  clearCertificateDomainMismatchInCountryList(): void;
  getCertificateDomainMismatchInCountryList(): PolicyTopicConstraint.CountryConstraintList | undefined;
  setCertificateDomainMismatchInCountryList(value?: PolicyTopicConstraint.CountryConstraintList): void;

  getValueCase(): PolicyTopicConstraint.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicConstraint): PolicyTopicConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyTopicConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicConstraint;
  static deserializeBinaryFromReader(message: PolicyTopicConstraint, reader: jspb.BinaryReader): PolicyTopicConstraint;
}

export namespace PolicyTopicConstraint {
  export type AsObject = {
    countryConstraintList?: PolicyTopicConstraint.CountryConstraintList.AsObject,
    resellerConstraint?: PolicyTopicConstraint.ResellerConstraint.AsObject,
    certificateMissingInCountryList?: PolicyTopicConstraint.CountryConstraintList.AsObject,
    certificateDomainMismatchInCountryList?: PolicyTopicConstraint.CountryConstraintList.AsObject,
  }

  export class CountryConstraintList extends jspb.Message {
    hasTotalTargetedCountries(): boolean;
    clearTotalTargetedCountries(): void;
    getTotalTargetedCountries(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setTotalTargetedCountries(value?: google_protobuf_wrappers_pb.Int32Value): void;

    clearCountriesList(): void;
    getCountriesList(): Array<PolicyTopicConstraint.CountryConstraint>;
    setCountriesList(value: Array<PolicyTopicConstraint.CountryConstraint>): void;
    addCountries(value?: PolicyTopicConstraint.CountryConstraint, index?: number): PolicyTopicConstraint.CountryConstraint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountryConstraintList.AsObject;
    static toObject(includeInstance: boolean, msg: CountryConstraintList): CountryConstraintList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountryConstraintList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountryConstraintList;
    static deserializeBinaryFromReader(message: CountryConstraintList, reader: jspb.BinaryReader): CountryConstraintList;
  }

  export namespace CountryConstraintList {
    export type AsObject = {
      totalTargetedCountries?: google_protobuf_wrappers_pb.Int32Value.AsObject,
      countriesList: Array<PolicyTopicConstraint.CountryConstraint.AsObject>,
    }
  }

  export class ResellerConstraint extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResellerConstraint.AsObject;
    static toObject(includeInstance: boolean, msg: ResellerConstraint): ResellerConstraint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResellerConstraint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResellerConstraint;
    static deserializeBinaryFromReader(message: ResellerConstraint, reader: jspb.BinaryReader): ResellerConstraint;
  }

  export namespace ResellerConstraint {
    export type AsObject = {
    }
  }

  export class CountryConstraint extends jspb.Message {
    hasCountryCriterion(): boolean;
    clearCountryCriterion(): void;
    getCountryCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCountryCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountryConstraint.AsObject;
    static toObject(includeInstance: boolean, msg: CountryConstraint): CountryConstraint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountryConstraint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountryConstraint;
    static deserializeBinaryFromReader(message: CountryConstraint, reader: jspb.BinaryReader): CountryConstraint;
  }

  export namespace CountryConstraint {
    export type AsObject = {
      countryCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    COUNTRY_CONSTRAINT_LIST = 1,
    RESELLER_CONSTRAINT = 2,
    CERTIFICATE_MISSING_IN_COUNTRY_LIST = 3,
    CERTIFICATE_DOMAIN_MISMATCH_IN_COUNTRY_LIST = 4,
  }
}

