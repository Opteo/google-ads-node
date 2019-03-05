// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/geo_target_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_geo_target_constant_pb from "../../../../../google/ads/googleads/v1/resources/geo_target_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetGeoTargetConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeoTargetConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeoTargetConstantRequest): GetGeoTargetConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGeoTargetConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeoTargetConstantRequest;
  static deserializeBinaryFromReader(message: GetGeoTargetConstantRequest, reader: jspb.BinaryReader): GetGeoTargetConstantRequest;
}

export namespace GetGeoTargetConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class SuggestGeoTargetConstantsRequest extends jspb.Message {
  hasLocale(): boolean;
  clearLocale(): void;
  getLocale(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLocale(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLocationNames(): boolean;
  clearLocationNames(): void;
  getLocationNames(): SuggestGeoTargetConstantsRequest.LocationNames | undefined;
  setLocationNames(value?: SuggestGeoTargetConstantsRequest.LocationNames): void;

  hasGeoTargets(): boolean;
  clearGeoTargets(): void;
  getGeoTargets(): SuggestGeoTargetConstantsRequest.GeoTargets | undefined;
  setGeoTargets(value?: SuggestGeoTargetConstantsRequest.GeoTargets): void;

  getQueryCase(): SuggestGeoTargetConstantsRequest.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestGeoTargetConstantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestGeoTargetConstantsRequest): SuggestGeoTargetConstantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuggestGeoTargetConstantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestGeoTargetConstantsRequest;
  static deserializeBinaryFromReader(message: SuggestGeoTargetConstantsRequest, reader: jspb.BinaryReader): SuggestGeoTargetConstantsRequest;
}

export namespace SuggestGeoTargetConstantsRequest {
  export type AsObject = {
    locale?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    locationNames?: SuggestGeoTargetConstantsRequest.LocationNames.AsObject,
    geoTargets?: SuggestGeoTargetConstantsRequest.GeoTargets.AsObject,
  }

  export class LocationNames extends jspb.Message {
    clearNamesList(): void;
    getNamesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setNamesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addNames(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocationNames.AsObject;
    static toObject(includeInstance: boolean, msg: LocationNames): LocationNames.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocationNames, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocationNames;
    static deserializeBinaryFromReader(message: LocationNames, reader: jspb.BinaryReader): LocationNames;
  }

  export namespace LocationNames {
    export type AsObject = {
      namesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
  }

  export class GeoTargets extends jspb.Message {
    clearGeoTargetConstantsList(): void;
    getGeoTargetConstantsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setGeoTargetConstantsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
    addGeoTargetConstants(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoTargets.AsObject;
    static toObject(includeInstance: boolean, msg: GeoTargets): GeoTargets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoTargets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoTargets;
    static deserializeBinaryFromReader(message: GeoTargets, reader: jspb.BinaryReader): GeoTargets;
  }

  export namespace GeoTargets {
    export type AsObject = {
      geoTargetConstantsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    LOCATION_NAMES = 1,
    GEO_TARGETS = 2,
  }
}

export class SuggestGeoTargetConstantsResponse extends jspb.Message {
  clearGeoTargetConstantSuggestionsList(): void;
  getGeoTargetConstantSuggestionsList(): Array<GeoTargetConstantSuggestion>;
  setGeoTargetConstantSuggestionsList(value: Array<GeoTargetConstantSuggestion>): void;
  addGeoTargetConstantSuggestions(value?: GeoTargetConstantSuggestion, index?: number): GeoTargetConstantSuggestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestGeoTargetConstantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestGeoTargetConstantsResponse): SuggestGeoTargetConstantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuggestGeoTargetConstantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestGeoTargetConstantsResponse;
  static deserializeBinaryFromReader(message: SuggestGeoTargetConstantsResponse, reader: jspb.BinaryReader): SuggestGeoTargetConstantsResponse;
}

export namespace SuggestGeoTargetConstantsResponse {
  export type AsObject = {
    geoTargetConstantSuggestionsList: Array<GeoTargetConstantSuggestion.AsObject>,
  }
}

export class GeoTargetConstantSuggestion extends jspb.Message {
  hasLocale(): boolean;
  clearLocale(): void;
  getLocale(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLocale(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasReach(): boolean;
  clearReach(): void;
  getReach(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setReach(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSearchTerm(): boolean;
  clearSearchTerm(): void;
  getSearchTerm(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSearchTerm(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;
  getGeoTargetConstant(): google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant | undefined;
  setGeoTargetConstant(value?: google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant): void;

  clearGeoTargetConstantParentsList(): void;
  getGeoTargetConstantParentsList(): Array<google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant>;
  setGeoTargetConstantParentsList(value: Array<google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant>): void;
  addGeoTargetConstantParents(value?: google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant, index?: number): google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetConstantSuggestion.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetConstantSuggestion): GeoTargetConstantSuggestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoTargetConstantSuggestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetConstantSuggestion;
  static deserializeBinaryFromReader(message: GeoTargetConstantSuggestion, reader: jspb.BinaryReader): GeoTargetConstantSuggestion;
}

export namespace GeoTargetConstantSuggestion {
  export type AsObject = {
    locale?: google_protobuf_wrappers_pb.StringValue.AsObject,
    reach?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    searchTerm?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetConstant?: google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.AsObject,
    geoTargetConstantParentsList: Array<google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.AsObject>,
  }
}

