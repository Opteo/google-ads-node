// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/customer.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb from "../../../../../google/ads/googleads/v2/enums/customer_pay_per_conversion_eligibility_failure_reason_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Customer extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasDescriptiveName(): boolean;
  clearDescriptiveName(): void;
  getDescriptiveName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescriptiveName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;
  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTimeZone(): boolean;
  clearTimeZone(): void;
  getTimeZone(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTimeZone(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;
  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;
  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAutoTaggingEnabled(): boolean;
  clearAutoTaggingEnabled(): void;
  getAutoTaggingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAutoTaggingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasHasPartnersBadge(): boolean;
  clearHasPartnersBadge(): void;
  getHasPartnersBadge(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasPartnersBadge(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasManager(): boolean;
  clearManager(): void;
  getManager(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setManager(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasTestAccount(): boolean;
  clearTestAccount(): void;
  getTestAccount(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTestAccount(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasCallReportingSetting(): boolean;
  clearCallReportingSetting(): void;
  getCallReportingSetting(): CallReportingSetting | undefined;
  setCallReportingSetting(value?: CallReportingSetting): void;

  hasConversionTrackingSetting(): boolean;
  clearConversionTrackingSetting(): void;
  getConversionTrackingSetting(): ConversionTrackingSetting | undefined;
  setConversionTrackingSetting(value?: ConversionTrackingSetting): void;

  hasRemarketingSetting(): boolean;
  clearRemarketingSetting(): void;
  getRemarketingSetting(): RemarketingSetting | undefined;
  setRemarketingSetting(value?: RemarketingSetting): void;

  clearPayPerConversionEligibilityFailureReasonsList(): void;
  getPayPerConversionEligibilityFailureReasonsList(): Array<google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason>;
  setPayPerConversionEligibilityFailureReasonsList(value: Array<google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason>): void;
  addPayPerConversionEligibilityFailureReasons(value: google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason, index?: number): google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    descriptiveName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    timeZone?: google_protobuf_wrappers_pb.StringValue.AsObject,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    autoTaggingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hasPartnersBadge?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    manager?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    testAccount?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callReportingSetting?: CallReportingSetting.AsObject,
    conversionTrackingSetting?: ConversionTrackingSetting.AsObject,
    remarketingSetting?: RemarketingSetting.AsObject,
    payPerConversionEligibilityFailureReasonsList: Array<google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason>,
  }
}

export class CallReportingSetting extends jspb.Message {
  hasCallReportingEnabled(): boolean;
  clearCallReportingEnabled(): void;
  getCallReportingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallReportingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasCallConversionReportingEnabled(): boolean;
  clearCallConversionReportingEnabled(): void;
  getCallConversionReportingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallConversionReportingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasCallConversionAction(): boolean;
  clearCallConversionAction(): void;
  getCallConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallReportingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: CallReportingSetting): CallReportingSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallReportingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallReportingSetting;
  static deserializeBinaryFromReader(message: CallReportingSetting, reader: jspb.BinaryReader): CallReportingSetting;
}

export namespace CallReportingSetting {
  export type AsObject = {
    callReportingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callConversionReportingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callConversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ConversionTrackingSetting extends jspb.Message {
  hasConversionTrackingId(): boolean;
  clearConversionTrackingId(): void;
  getConversionTrackingId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setConversionTrackingId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCrossAccountConversionTrackingId(): boolean;
  clearCrossAccountConversionTrackingId(): void;
  getCrossAccountConversionTrackingId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCrossAccountConversionTrackingId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionTrackingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionTrackingSetting): ConversionTrackingSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionTrackingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionTrackingSetting;
  static deserializeBinaryFromReader(message: ConversionTrackingSetting, reader: jspb.BinaryReader): ConversionTrackingSetting;
}

export namespace ConversionTrackingSetting {
  export type AsObject = {
    conversionTrackingId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    crossAccountConversionTrackingId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class RemarketingSetting extends jspb.Message {
  hasGoogleGlobalSiteTag(): boolean;
  clearGoogleGlobalSiteTag(): void;
  getGoogleGlobalSiteTag(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGoogleGlobalSiteTag(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemarketingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: RemarketingSetting): RemarketingSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemarketingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemarketingSetting;
  static deserializeBinaryFromReader(message: RemarketingSetting, reader: jspb.BinaryReader): RemarketingSetting;
}

export namespace RemarketingSetting {
  export type AsObject = {
    googleGlobalSiteTag?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

