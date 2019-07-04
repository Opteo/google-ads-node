// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/feed.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_affiliate_location_feed_relationship_type_pb from "../../../../../google/ads/googleads/v2/enums/affiliate_location_feed_relationship_type_pb";
import * as google_ads_googleads_v2_enums_feed_attribute_type_pb from "../../../../../google/ads/googleads/v2/enums/feed_attribute_type_pb";
import * as google_ads_googleads_v2_enums_feed_origin_pb from "../../../../../google/ads/googleads/v2/enums/feed_origin_pb";
import * as google_ads_googleads_v2_enums_feed_status_pb from "../../../../../google/ads/googleads/v2/enums/feed_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Feed extends jspb.Message {
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

  clearAttributesList(): void;
  getAttributesList(): Array<FeedAttribute>;
  setAttributesList(value: Array<FeedAttribute>): void;
  addAttributes(value?: FeedAttribute, index?: number): FeedAttribute;

  clearAttributeOperationsList(): void;
  getAttributeOperationsList(): Array<FeedAttributeOperation>;
  setAttributeOperationsList(value: Array<FeedAttributeOperation>): void;
  addAttributeOperations(value?: FeedAttributeOperation, index?: number): FeedAttributeOperation;

  getOrigin(): google_ads_googleads_v2_enums_feed_origin_pb.FeedOriginEnum.FeedOrigin;
  setOrigin(value: google_ads_googleads_v2_enums_feed_origin_pb.FeedOriginEnum.FeedOrigin): void;

  getStatus(): google_ads_googleads_v2_enums_feed_status_pb.FeedStatusEnum.FeedStatus;
  setStatus(value: google_ads_googleads_v2_enums_feed_status_pb.FeedStatusEnum.FeedStatus): void;

  hasPlacesLocationFeedData(): boolean;
  clearPlacesLocationFeedData(): void;
  getPlacesLocationFeedData(): Feed.PlacesLocationFeedData | undefined;
  setPlacesLocationFeedData(value?: Feed.PlacesLocationFeedData): void;

  hasAffiliateLocationFeedData(): boolean;
  clearAffiliateLocationFeedData(): void;
  getAffiliateLocationFeedData(): Feed.AffiliateLocationFeedData | undefined;
  setAffiliateLocationFeedData(value?: Feed.AffiliateLocationFeedData): void;

  getSystemFeedGenerationDataCase(): Feed.SystemFeedGenerationDataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feed.AsObject;
  static toObject(includeInstance: boolean, msg: Feed): Feed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feed;
  static deserializeBinaryFromReader(message: Feed, reader: jspb.BinaryReader): Feed;
}

export namespace Feed {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    attributesList: Array<FeedAttribute.AsObject>,
    attributeOperationsList: Array<FeedAttributeOperation.AsObject>,
    origin: google_ads_googleads_v2_enums_feed_origin_pb.FeedOriginEnum.FeedOrigin,
    status: google_ads_googleads_v2_enums_feed_status_pb.FeedStatusEnum.FeedStatus,
    placesLocationFeedData?: Feed.PlacesLocationFeedData.AsObject,
    affiliateLocationFeedData?: Feed.AffiliateLocationFeedData.AsObject,
  }

  export class PlacesLocationFeedData extends jspb.Message {
    hasOauthInfo(): boolean;
    clearOauthInfo(): void;
    getOauthInfo(): Feed.PlacesLocationFeedData.OAuthInfo | undefined;
    setOauthInfo(value?: Feed.PlacesLocationFeedData.OAuthInfo): void;

    hasEmailAddress(): boolean;
    clearEmailAddress(): void;
    getEmailAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmailAddress(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasBusinessAccountId(): boolean;
    clearBusinessAccountId(): void;
    getBusinessAccountId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBusinessAccountId(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasBusinessNameFilter(): boolean;
    clearBusinessNameFilter(): void;
    getBusinessNameFilter(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBusinessNameFilter(value?: google_protobuf_wrappers_pb.StringValue): void;

    clearCategoryFiltersList(): void;
    getCategoryFiltersList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCategoryFiltersList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addCategoryFilters(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    clearLabelFiltersList(): void;
    getLabelFiltersList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLabelFiltersList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addLabelFilters(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacesLocationFeedData.AsObject;
    static toObject(includeInstance: boolean, msg: PlacesLocationFeedData): PlacesLocationFeedData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacesLocationFeedData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacesLocationFeedData;
    static deserializeBinaryFromReader(message: PlacesLocationFeedData, reader: jspb.BinaryReader): PlacesLocationFeedData;
  }

  export namespace PlacesLocationFeedData {
    export type AsObject = {
      oauthInfo?: Feed.PlacesLocationFeedData.OAuthInfo.AsObject,
      emailAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
      businessAccountId?: google_protobuf_wrappers_pb.StringValue.AsObject,
      businessNameFilter?: google_protobuf_wrappers_pb.StringValue.AsObject,
      categoryFiltersList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
      labelFiltersList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }

    export class OAuthInfo extends jspb.Message {
      hasHttpMethod(): boolean;
      clearHttpMethod(): void;
      getHttpMethod(): google_protobuf_wrappers_pb.StringValue | undefined;
      setHttpMethod(value?: google_protobuf_wrappers_pb.StringValue): void;

      hasHttpRequestUrl(): boolean;
      clearHttpRequestUrl(): void;
      getHttpRequestUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
      setHttpRequestUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

      hasHttpAuthorizationHeader(): boolean;
      clearHttpAuthorizationHeader(): void;
      getHttpAuthorizationHeader(): google_protobuf_wrappers_pb.StringValue | undefined;
      setHttpAuthorizationHeader(value?: google_protobuf_wrappers_pb.StringValue): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): OAuthInfo.AsObject;
      static toObject(includeInstance: boolean, msg: OAuthInfo): OAuthInfo.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: OAuthInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): OAuthInfo;
      static deserializeBinaryFromReader(message: OAuthInfo, reader: jspb.BinaryReader): OAuthInfo;
    }

    export namespace OAuthInfo {
      export type AsObject = {
        httpMethod?: google_protobuf_wrappers_pb.StringValue.AsObject,
        httpRequestUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
        httpAuthorizationHeader?: google_protobuf_wrappers_pb.StringValue.AsObject,
      }
    }
  }

  export class AffiliateLocationFeedData extends jspb.Message {
    clearChainIdsList(): void;
    getChainIdsList(): Array<google_protobuf_wrappers_pb.Int64Value>;
    setChainIdsList(value: Array<google_protobuf_wrappers_pb.Int64Value>): void;
    addChainIds(value?: google_protobuf_wrappers_pb.Int64Value, index?: number): google_protobuf_wrappers_pb.Int64Value;

    getRelationshipType(): google_ads_googleads_v2_enums_affiliate_location_feed_relationship_type_pb.AffiliateLocationFeedRelationshipTypeEnum.AffiliateLocationFeedRelationshipType;
    setRelationshipType(value: google_ads_googleads_v2_enums_affiliate_location_feed_relationship_type_pb.AffiliateLocationFeedRelationshipTypeEnum.AffiliateLocationFeedRelationshipType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AffiliateLocationFeedData.AsObject;
    static toObject(includeInstance: boolean, msg: AffiliateLocationFeedData): AffiliateLocationFeedData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AffiliateLocationFeedData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AffiliateLocationFeedData;
    static deserializeBinaryFromReader(message: AffiliateLocationFeedData, reader: jspb.BinaryReader): AffiliateLocationFeedData;
  }

  export namespace AffiliateLocationFeedData {
    export type AsObject = {
      chainIdsList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>,
      relationshipType: google_ads_googleads_v2_enums_affiliate_location_feed_relationship_type_pb.AffiliateLocationFeedRelationshipTypeEnum.AffiliateLocationFeedRelationshipType,
    }
  }

  export enum SystemFeedGenerationDataCase {
    SYSTEM_FEED_GENERATION_DATA_NOT_SET = 0,
    PLACES_LOCATION_FEED_DATA = 6,
    AFFILIATE_LOCATION_FEED_DATA = 7,
  }
}

export class FeedAttribute extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getType(): google_ads_googleads_v2_enums_feed_attribute_type_pb.FeedAttributeTypeEnum.FeedAttributeType;
  setType(value: google_ads_googleads_v2_enums_feed_attribute_type_pb.FeedAttributeTypeEnum.FeedAttributeType): void;

  hasIsPartOfKey(): boolean;
  clearIsPartOfKey(): void;
  getIsPartOfKey(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsPartOfKey(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: FeedAttribute): FeedAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedAttribute;
  static deserializeBinaryFromReader(message: FeedAttribute, reader: jspb.BinaryReader): FeedAttribute;
}

export namespace FeedAttribute {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_feed_attribute_type_pb.FeedAttributeTypeEnum.FeedAttributeType,
    isPartOfKey?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class FeedAttributeOperation extends jspb.Message {
  getOperator(): FeedAttributeOperation.Operator;
  setOperator(value: FeedAttributeOperation.Operator): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): FeedAttribute | undefined;
  setValue(value?: FeedAttribute): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedAttributeOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FeedAttributeOperation): FeedAttributeOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedAttributeOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedAttributeOperation;
  static deserializeBinaryFromReader(message: FeedAttributeOperation, reader: jspb.BinaryReader): FeedAttributeOperation;
}

export namespace FeedAttributeOperation {
  export type AsObject = {
    operator: FeedAttributeOperation.Operator,
    value?: FeedAttribute.AsObject,
  }

  export enum Operator {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADD = 2,
  }
}

