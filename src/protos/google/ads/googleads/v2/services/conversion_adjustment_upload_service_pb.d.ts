// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/conversion_adjustment_upload_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_conversion_adjustment_type_pb from "../../../../../google/ads/googleads/v2/enums/conversion_adjustment_type_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class UploadConversionAdjustmentsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearConversionAdjustmentsList(): void;
  getConversionAdjustmentsList(): Array<ConversionAdjustment>;
  setConversionAdjustmentsList(value: Array<ConversionAdjustment>): void;
  addConversionAdjustments(value?: ConversionAdjustment, index?: number): ConversionAdjustment;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadConversionAdjustmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadConversionAdjustmentsRequest): UploadConversionAdjustmentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadConversionAdjustmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadConversionAdjustmentsRequest;
  static deserializeBinaryFromReader(message: UploadConversionAdjustmentsRequest, reader: jspb.BinaryReader): UploadConversionAdjustmentsRequest;
}

export namespace UploadConversionAdjustmentsRequest {
  export type AsObject = {
    customerId: string,
    conversionAdjustmentsList: Array<ConversionAdjustment.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class UploadConversionAdjustmentsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<ConversionAdjustmentResult>;
  setResultsList(value: Array<ConversionAdjustmentResult>): void;
  addResults(value?: ConversionAdjustmentResult, index?: number): ConversionAdjustmentResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadConversionAdjustmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadConversionAdjustmentsResponse): UploadConversionAdjustmentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadConversionAdjustmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadConversionAdjustmentsResponse;
  static deserializeBinaryFromReader(message: UploadConversionAdjustmentsResponse, reader: jspb.BinaryReader): UploadConversionAdjustmentsResponse;
}

export namespace UploadConversionAdjustmentsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<ConversionAdjustmentResult.AsObject>,
  }
}

export class ConversionAdjustment extends jspb.Message {
  hasConversionAction(): boolean;
  clearConversionAction(): void;
  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdjustmentDateTime(): boolean;
  clearAdjustmentDateTime(): void;
  getAdjustmentDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdjustmentDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  getAdjustmentType(): google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType;
  setAdjustmentType(value: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType): void;

  hasRestatementValue(): boolean;
  clearRestatementValue(): void;
  getRestatementValue(): RestatementValue | undefined;
  setRestatementValue(value?: RestatementValue): void;

  hasGclidDateTimePair(): boolean;
  clearGclidDateTimePair(): void;
  getGclidDateTimePair(): GclidDateTimePair | undefined;
  setGclidDateTimePair(value?: GclidDateTimePair): void;

  hasOrderId(): boolean;
  clearOrderId(): void;
  getOrderId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOrderId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getConversionIdentifierCase(): ConversionAdjustment.ConversionIdentifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAdjustment.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAdjustment): ConversionAdjustment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionAdjustment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAdjustment;
  static deserializeBinaryFromReader(message: ConversionAdjustment, reader: jspb.BinaryReader): ConversionAdjustment;
}

export namespace ConversionAdjustment {
  export type AsObject = {
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentType: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType,
    restatementValue?: RestatementValue.AsObject,
    gclidDateTimePair?: GclidDateTimePair.AsObject,
    orderId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum ConversionIdentifierCase {
    CONVERSION_IDENTIFIER_NOT_SET = 0,
    GCLID_DATE_TIME_PAIR = 1,
    ORDER_ID = 2,
  }
}

export class RestatementValue extends jspb.Message {
  hasAdjustedValue(): boolean;
  clearAdjustedValue(): void;
  getAdjustedValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAdjustedValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;
  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestatementValue.AsObject;
  static toObject(includeInstance: boolean, msg: RestatementValue): RestatementValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestatementValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestatementValue;
  static deserializeBinaryFromReader(message: RestatementValue, reader: jspb.BinaryReader): RestatementValue;
}

export namespace RestatementValue {
  export type AsObject = {
    adjustedValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class GclidDateTimePair extends jspb.Message {
  hasGclid(): boolean;
  clearGclid(): void;
  getGclid(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGclid(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConversionDateTime(): boolean;
  clearConversionDateTime(): void;
  getConversionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GclidDateTimePair.AsObject;
  static toObject(includeInstance: boolean, msg: GclidDateTimePair): GclidDateTimePair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GclidDateTimePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GclidDateTimePair;
  static deserializeBinaryFromReader(message: GclidDateTimePair, reader: jspb.BinaryReader): GclidDateTimePair;
}

export namespace GclidDateTimePair {
  export type AsObject = {
    gclid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ConversionAdjustmentResult extends jspb.Message {
  hasConversionAction(): boolean;
  clearConversionAction(): void;
  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdjustmentDateTime(): boolean;
  clearAdjustmentDateTime(): void;
  getAdjustmentDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdjustmentDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  getAdjustmentType(): google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType;
  setAdjustmentType(value: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType): void;

  hasGclidDateTimePair(): boolean;
  clearGclidDateTimePair(): void;
  getGclidDateTimePair(): GclidDateTimePair | undefined;
  setGclidDateTimePair(value?: GclidDateTimePair): void;

  hasOrderId(): boolean;
  clearOrderId(): void;
  getOrderId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOrderId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getConversionIdentifierCase(): ConversionAdjustmentResult.ConversionIdentifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAdjustmentResult.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAdjustmentResult): ConversionAdjustmentResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionAdjustmentResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAdjustmentResult;
  static deserializeBinaryFromReader(message: ConversionAdjustmentResult, reader: jspb.BinaryReader): ConversionAdjustmentResult;
}

export namespace ConversionAdjustmentResult {
  export type AsObject = {
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentType: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType,
    gclidDateTimePair?: GclidDateTimePair.AsObject,
    orderId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum ConversionIdentifierCase {
    CONVERSION_IDENTIFIER_NOT_SET = 0,
    GCLID_DATE_TIME_PAIR = 1,
    ORDER_ID = 2,
  }
}

