// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/recommendation_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_extensions_pb from "../../../../../google/ads/googleads/v2/common/extensions_pb";
import * as google_ads_googleads_v2_enums_keyword_match_type_pb from "../../../../../google/ads/googleads/v2/enums/keyword_match_type_pb";
import * as google_ads_googleads_v2_resources_ad_pb from "../../../../../google/ads/googleads/v2/resources/ad_pb";
import * as google_ads_googleads_v2_resources_recommendation_pb from "../../../../../google/ads/googleads/v2/resources/recommendation_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetRecommendationRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationRequest): GetRecommendationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationRequest;
  static deserializeBinaryFromReader(message: GetRecommendationRequest, reader: jspb.BinaryReader): GetRecommendationRequest;
}

export namespace GetRecommendationRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class ApplyRecommendationRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<ApplyRecommendationOperation>;
  setOperationsList(value: Array<ApplyRecommendationOperation>): void;
  addOperations(value?: ApplyRecommendationOperation, index?: number): ApplyRecommendationOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationRequest): ApplyRecommendationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationRequest;
  static deserializeBinaryFromReader(message: ApplyRecommendationRequest, reader: jspb.BinaryReader): ApplyRecommendationRequest;
}

export namespace ApplyRecommendationRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<ApplyRecommendationOperation.AsObject>,
    partialFailure: boolean,
  }
}

export class ApplyRecommendationOperation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCampaignBudget(): boolean;
  clearCampaignBudget(): void;
  getCampaignBudget(): ApplyRecommendationOperation.CampaignBudgetParameters | undefined;
  setCampaignBudget(value?: ApplyRecommendationOperation.CampaignBudgetParameters): void;

  hasTextAd(): boolean;
  clearTextAd(): void;
  getTextAd(): ApplyRecommendationOperation.TextAdParameters | undefined;
  setTextAd(value?: ApplyRecommendationOperation.TextAdParameters): void;

  hasKeyword(): boolean;
  clearKeyword(): void;
  getKeyword(): ApplyRecommendationOperation.KeywordParameters | undefined;
  setKeyword(value?: ApplyRecommendationOperation.KeywordParameters): void;

  hasTargetCpaOptIn(): boolean;
  clearTargetCpaOptIn(): void;
  getTargetCpaOptIn(): ApplyRecommendationOperation.TargetCpaOptInParameters | undefined;
  setTargetCpaOptIn(value?: ApplyRecommendationOperation.TargetCpaOptInParameters): void;

  hasCalloutExtension(): boolean;
  clearCalloutExtension(): void;
  getCalloutExtension(): ApplyRecommendationOperation.CalloutExtensionParameters | undefined;
  setCalloutExtension(value?: ApplyRecommendationOperation.CalloutExtensionParameters): void;

  hasCallExtension(): boolean;
  clearCallExtension(): void;
  getCallExtension(): ApplyRecommendationOperation.CallExtensionParameters | undefined;
  setCallExtension(value?: ApplyRecommendationOperation.CallExtensionParameters): void;

  hasSitelinkExtension(): boolean;
  clearSitelinkExtension(): void;
  getSitelinkExtension(): ApplyRecommendationOperation.SitelinkExtensionParameters | undefined;
  setSitelinkExtension(value?: ApplyRecommendationOperation.SitelinkExtensionParameters): void;

  hasMoveUnusedBudget(): boolean;
  clearMoveUnusedBudget(): void;
  getMoveUnusedBudget(): ApplyRecommendationOperation.MoveUnusedBudgetParameters | undefined;
  setMoveUnusedBudget(value?: ApplyRecommendationOperation.MoveUnusedBudgetParameters): void;

  getApplyParametersCase(): ApplyRecommendationOperation.ApplyParametersCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationOperation): ApplyRecommendationOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyRecommendationOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationOperation;
  static deserializeBinaryFromReader(message: ApplyRecommendationOperation, reader: jspb.BinaryReader): ApplyRecommendationOperation;
}

export namespace ApplyRecommendationOperation {
  export type AsObject = {
    resourceName: string,
    campaignBudget?: ApplyRecommendationOperation.CampaignBudgetParameters.AsObject,
    textAd?: ApplyRecommendationOperation.TextAdParameters.AsObject,
    keyword?: ApplyRecommendationOperation.KeywordParameters.AsObject,
    targetCpaOptIn?: ApplyRecommendationOperation.TargetCpaOptInParameters.AsObject,
    calloutExtension?: ApplyRecommendationOperation.CalloutExtensionParameters.AsObject,
    callExtension?: ApplyRecommendationOperation.CallExtensionParameters.AsObject,
    sitelinkExtension?: ApplyRecommendationOperation.SitelinkExtensionParameters.AsObject,
    moveUnusedBudget?: ApplyRecommendationOperation.MoveUnusedBudgetParameters.AsObject,
  }

  export class CampaignBudgetParameters extends jspb.Message {
    hasNewBudgetAmountMicros(): boolean;
    clearNewBudgetAmountMicros(): void;
    getNewBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNewBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignBudgetParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignBudgetParameters): CampaignBudgetParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignBudgetParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignBudgetParameters;
    static deserializeBinaryFromReader(message: CampaignBudgetParameters, reader: jspb.BinaryReader): CampaignBudgetParameters;
  }

  export namespace CampaignBudgetParameters {
    export type AsObject = {
      newBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export class TextAdParameters extends jspb.Message {
    hasAd(): boolean;
    clearAd(): void;
    getAd(): google_ads_googleads_v2_resources_ad_pb.Ad | undefined;
    setAd(value?: google_ads_googleads_v2_resources_ad_pb.Ad): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextAdParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TextAdParameters): TextAdParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextAdParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextAdParameters;
    static deserializeBinaryFromReader(message: TextAdParameters, reader: jspb.BinaryReader): TextAdParameters;
  }

  export namespace TextAdParameters {
    export type AsObject = {
      ad?: google_ads_googleads_v2_resources_ad_pb.Ad.AsObject,
    }
  }

  export class KeywordParameters extends jspb.Message {
    hasAdGroup(): boolean;
    clearAdGroup(): void;
    getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

    getMatchType(): google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
    setMatchType(value: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): void;

    hasCpcBidMicros(): boolean;
    clearCpcBidMicros(): void;
    getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeywordParameters.AsObject;
    static toObject(includeInstance: boolean, msg: KeywordParameters): KeywordParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeywordParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeywordParameters;
    static deserializeBinaryFromReader(message: KeywordParameters, reader: jspb.BinaryReader): KeywordParameters;
  }

  export namespace KeywordParameters {
    export type AsObject = {
      adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
      matchType: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
      cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export class TargetCpaOptInParameters extends jspb.Message {
    hasTargetCpaMicros(): boolean;
    clearTargetCpaMicros(): void;
    getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasNewCampaignBudgetAmountMicros(): boolean;
    clearNewCampaignBudgetAmountMicros(): void;
    getNewCampaignBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNewCampaignBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetCpaOptInParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TargetCpaOptInParameters): TargetCpaOptInParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetCpaOptInParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetCpaOptInParameters;
    static deserializeBinaryFromReader(message: TargetCpaOptInParameters, reader: jspb.BinaryReader): TargetCpaOptInParameters;
  }

  export namespace TargetCpaOptInParameters {
    export type AsObject = {
      targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      newCampaignBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export class CalloutExtensionParameters extends jspb.Message {
    clearCalloutExtensionsList(): void;
    getCalloutExtensionsList(): Array<google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem>;
    setCalloutExtensionsList(value: Array<google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem>): void;
    addCalloutExtensions(value?: google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem, index?: number): google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalloutExtensionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CalloutExtensionParameters): CalloutExtensionParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalloutExtensionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalloutExtensionParameters;
    static deserializeBinaryFromReader(message: CalloutExtensionParameters, reader: jspb.BinaryReader): CalloutExtensionParameters;
  }

  export namespace CalloutExtensionParameters {
    export type AsObject = {
      calloutExtensionsList: Array<google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem.AsObject>,
    }
  }

  export class CallExtensionParameters extends jspb.Message {
    clearCallExtensionsList(): void;
    getCallExtensionsList(): Array<google_ads_googleads_v2_common_extensions_pb.CallFeedItem>;
    setCallExtensionsList(value: Array<google_ads_googleads_v2_common_extensions_pb.CallFeedItem>): void;
    addCallExtensions(value?: google_ads_googleads_v2_common_extensions_pb.CallFeedItem, index?: number): google_ads_googleads_v2_common_extensions_pb.CallFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallExtensionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: CallExtensionParameters): CallExtensionParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallExtensionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallExtensionParameters;
    static deserializeBinaryFromReader(message: CallExtensionParameters, reader: jspb.BinaryReader): CallExtensionParameters;
  }

  export namespace CallExtensionParameters {
    export type AsObject = {
      callExtensionsList: Array<google_ads_googleads_v2_common_extensions_pb.CallFeedItem.AsObject>,
    }
  }

  export class SitelinkExtensionParameters extends jspb.Message {
    clearSitelinkExtensionsList(): void;
    getSitelinkExtensionsList(): Array<google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem>;
    setSitelinkExtensionsList(value: Array<google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem>): void;
    addSitelinkExtensions(value?: google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem, index?: number): google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SitelinkExtensionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SitelinkExtensionParameters): SitelinkExtensionParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SitelinkExtensionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SitelinkExtensionParameters;
    static deserializeBinaryFromReader(message: SitelinkExtensionParameters, reader: jspb.BinaryReader): SitelinkExtensionParameters;
  }

  export namespace SitelinkExtensionParameters {
    export type AsObject = {
      sitelinkExtensionsList: Array<google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem.AsObject>,
    }
  }

  export class MoveUnusedBudgetParameters extends jspb.Message {
    hasBudgetMicrosToMove(): boolean;
    clearBudgetMicrosToMove(): void;
    getBudgetMicrosToMove(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBudgetMicrosToMove(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveUnusedBudgetParameters.AsObject;
    static toObject(includeInstance: boolean, msg: MoveUnusedBudgetParameters): MoveUnusedBudgetParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveUnusedBudgetParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveUnusedBudgetParameters;
    static deserializeBinaryFromReader(message: MoveUnusedBudgetParameters, reader: jspb.BinaryReader): MoveUnusedBudgetParameters;
  }

  export namespace MoveUnusedBudgetParameters {
    export type AsObject = {
      budgetMicrosToMove?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export enum ApplyParametersCase {
    APPLY_PARAMETERS_NOT_SET = 0,
    CAMPAIGN_BUDGET = 2,
    TEXT_AD = 3,
    KEYWORD = 4,
    TARGET_CPA_OPT_IN = 5,
    CALLOUT_EXTENSION = 6,
    CALL_EXTENSION = 7,
    SITELINK_EXTENSION = 8,
    MOVE_UNUSED_BUDGET = 9,
  }
}

export class ApplyRecommendationResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<ApplyRecommendationResult>;
  setResultsList(value: Array<ApplyRecommendationResult>): void;
  addResults(value?: ApplyRecommendationResult, index?: number): ApplyRecommendationResult;

  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationResponse): ApplyRecommendationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyRecommendationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationResponse;
  static deserializeBinaryFromReader(message: ApplyRecommendationResponse, reader: jspb.BinaryReader): ApplyRecommendationResponse;
}

export namespace ApplyRecommendationResponse {
  export type AsObject = {
    resultsList: Array<ApplyRecommendationResult.AsObject>,
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
  }
}

export class ApplyRecommendationResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyRecommendationResult.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyRecommendationResult): ApplyRecommendationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplyRecommendationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyRecommendationResult;
  static deserializeBinaryFromReader(message: ApplyRecommendationResult, reader: jspb.BinaryReader): ApplyRecommendationResult;
}

export namespace ApplyRecommendationResult {
  export type AsObject = {
    resourceName: string,
  }
}

export class DismissRecommendationRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<DismissRecommendationRequest.DismissRecommendationOperation>;
  setOperationsList(value: Array<DismissRecommendationRequest.DismissRecommendationOperation>): void;
  addOperations(value?: DismissRecommendationRequest.DismissRecommendationOperation, index?: number): DismissRecommendationRequest.DismissRecommendationOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DismissRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DismissRecommendationRequest): DismissRecommendationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DismissRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DismissRecommendationRequest;
  static deserializeBinaryFromReader(message: DismissRecommendationRequest, reader: jspb.BinaryReader): DismissRecommendationRequest;
}

export namespace DismissRecommendationRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<DismissRecommendationRequest.DismissRecommendationOperation.AsObject>,
    partialFailure: boolean,
  }

  export class DismissRecommendationOperation extends jspb.Message {
    getResourceName(): string;
    setResourceName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DismissRecommendationOperation.AsObject;
    static toObject(includeInstance: boolean, msg: DismissRecommendationOperation): DismissRecommendationOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DismissRecommendationOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DismissRecommendationOperation;
    static deserializeBinaryFromReader(message: DismissRecommendationOperation, reader: jspb.BinaryReader): DismissRecommendationOperation;
  }

  export namespace DismissRecommendationOperation {
    export type AsObject = {
      resourceName: string,
    }
  }
}

export class DismissRecommendationResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<DismissRecommendationResponse.DismissRecommendationResult>;
  setResultsList(value: Array<DismissRecommendationResponse.DismissRecommendationResult>): void;
  addResults(value?: DismissRecommendationResponse.DismissRecommendationResult, index?: number): DismissRecommendationResponse.DismissRecommendationResult;

  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DismissRecommendationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DismissRecommendationResponse): DismissRecommendationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DismissRecommendationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DismissRecommendationResponse;
  static deserializeBinaryFromReader(message: DismissRecommendationResponse, reader: jspb.BinaryReader): DismissRecommendationResponse;
}

export namespace DismissRecommendationResponse {
  export type AsObject = {
    resultsList: Array<DismissRecommendationResponse.DismissRecommendationResult.AsObject>,
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
  }

  export class DismissRecommendationResult extends jspb.Message {
    getResourceName(): string;
    setResourceName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DismissRecommendationResult.AsObject;
    static toObject(includeInstance: boolean, msg: DismissRecommendationResult): DismissRecommendationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DismissRecommendationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DismissRecommendationResult;
    static deserializeBinaryFromReader(message: DismissRecommendationResult, reader: jspb.BinaryReader): DismissRecommendationResult;
  }

  export namespace DismissRecommendationResult {
    export type AsObject = {
      resourceName: string,
    }
  }
}

