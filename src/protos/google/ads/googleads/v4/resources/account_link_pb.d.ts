// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/account_link.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_account_link_status_pb from "../../../../../google/ads/googleads/v4/enums/account_link_status_pb";
import * as google_ads_googleads_v4_enums_linked_account_type_pb from "../../../../../google/ads/googleads/v4/enums/linked_account_type_pb";
import * as google_ads_googleads_v4_enums_mobile_app_vendor_pb from "../../../../../google/ads/googleads/v4/enums/mobile_app_vendor_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccountLink extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAccountLinkId(): boolean;
  clearAccountLinkId(): void;
  getAccountLinkId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAccountLinkId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getStatus(): google_ads_googleads_v4_enums_account_link_status_pb.AccountLinkStatusEnum.AccountLinkStatusMap[keyof google_ads_googleads_v4_enums_account_link_status_pb.AccountLinkStatusEnum.AccountLinkStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_account_link_status_pb.AccountLinkStatusEnum.AccountLinkStatusMap[keyof google_ads_googleads_v4_enums_account_link_status_pb.AccountLinkStatusEnum.AccountLinkStatusMap]): void;

  getType(): google_ads_googleads_v4_enums_linked_account_type_pb.LinkedAccountTypeEnum.LinkedAccountTypeMap[keyof google_ads_googleads_v4_enums_linked_account_type_pb.LinkedAccountTypeEnum.LinkedAccountTypeMap];
  setType(value: google_ads_googleads_v4_enums_linked_account_type_pb.LinkedAccountTypeEnum.LinkedAccountTypeMap[keyof google_ads_googleads_v4_enums_linked_account_type_pb.LinkedAccountTypeEnum.LinkedAccountTypeMap]): void;

  hasThirdPartyAppAnalytics(): boolean;
  clearThirdPartyAppAnalytics(): void;
  getThirdPartyAppAnalytics(): ThirdPartyAppAnalyticsLinkIdentifier | undefined;
  setThirdPartyAppAnalytics(value?: ThirdPartyAppAnalyticsLinkIdentifier): void;

  getLinkedAccountCase(): AccountLink.LinkedAccountCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLink.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLink): AccountLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLink;
  static deserializeBinaryFromReader(message: AccountLink, reader: jspb.BinaryReader): AccountLink;
}

export namespace AccountLink {
  export type AsObject = {
    resourceName: string,
    accountLinkId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v4_enums_account_link_status_pb.AccountLinkStatusEnum.AccountLinkStatusMap[keyof google_ads_googleads_v4_enums_account_link_status_pb.AccountLinkStatusEnum.AccountLinkStatusMap],
    type: google_ads_googleads_v4_enums_linked_account_type_pb.LinkedAccountTypeEnum.LinkedAccountTypeMap[keyof google_ads_googleads_v4_enums_linked_account_type_pb.LinkedAccountTypeEnum.LinkedAccountTypeMap],
    thirdPartyAppAnalytics?: ThirdPartyAppAnalyticsLinkIdentifier.AsObject,
  }

  export enum LinkedAccountCase {
    LINKED_ACCOUNT_NOT_SET = 0,
    THIRD_PARTY_APP_ANALYTICS = 5,
  }
}

export class ThirdPartyAppAnalyticsLinkIdentifier extends jspb.Message {
  hasAppAnalyticsProviderId(): boolean;
  clearAppAnalyticsProviderId(): void;
  getAppAnalyticsProviderId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAppAnalyticsProviderId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAppId(): boolean;
  clearAppId(): void;
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getAppVendor(): google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap[keyof google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap];
  setAppVendor(value: google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap[keyof google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThirdPartyAppAnalyticsLinkIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: ThirdPartyAppAnalyticsLinkIdentifier): ThirdPartyAppAnalyticsLinkIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThirdPartyAppAnalyticsLinkIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThirdPartyAppAnalyticsLinkIdentifier;
  static deserializeBinaryFromReader(message: ThirdPartyAppAnalyticsLinkIdentifier, reader: jspb.BinaryReader): ThirdPartyAppAnalyticsLinkIdentifier;
}

export namespace ThirdPartyAppAnalyticsLinkIdentifier {
  export type AsObject = {
    appAnalyticsProviderId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    appVendor: google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap[keyof google_ads_googleads_v4_enums_mobile_app_vendor_pb.MobileAppVendorEnum.MobileAppVendorMap],
  }
}

