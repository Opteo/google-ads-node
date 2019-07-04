// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/matching_function.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_matching_function_context_type_pb from "../../../../../google/ads/googleads/v2/enums/matching_function_context_type_pb";
import * as google_ads_googleads_v2_enums_matching_function_operator_pb from "../../../../../google/ads/googleads/v2/enums/matching_function_operator_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MatchingFunction extends jspb.Message {
  hasFunctionString(): boolean;
  clearFunctionString(): void;
  getFunctionString(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFunctionString(value?: google_protobuf_wrappers_pb.StringValue): void;

  getOperator(): google_ads_googleads_v2_enums_matching_function_operator_pb.MatchingFunctionOperatorEnum.MatchingFunctionOperator;
  setOperator(value: google_ads_googleads_v2_enums_matching_function_operator_pb.MatchingFunctionOperatorEnum.MatchingFunctionOperator): void;

  clearLeftOperandsList(): void;
  getLeftOperandsList(): Array<Operand>;
  setLeftOperandsList(value: Array<Operand>): void;
  addLeftOperands(value?: Operand, index?: number): Operand;

  clearRightOperandsList(): void;
  getRightOperandsList(): Array<Operand>;
  setRightOperandsList(value: Array<Operand>): void;
  addRightOperands(value?: Operand, index?: number): Operand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingFunction.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingFunction): MatchingFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchingFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingFunction;
  static deserializeBinaryFromReader(message: MatchingFunction, reader: jspb.BinaryReader): MatchingFunction;
}

export namespace MatchingFunction {
  export type AsObject = {
    functionString?: google_protobuf_wrappers_pb.StringValue.AsObject,
    operator: google_ads_googleads_v2_enums_matching_function_operator_pb.MatchingFunctionOperatorEnum.MatchingFunctionOperator,
    leftOperandsList: Array<Operand.AsObject>,
    rightOperandsList: Array<Operand.AsObject>,
  }
}

export class Operand extends jspb.Message {
  hasConstantOperand(): boolean;
  clearConstantOperand(): void;
  getConstantOperand(): Operand.ConstantOperand | undefined;
  setConstantOperand(value?: Operand.ConstantOperand): void;

  hasFeedAttributeOperand(): boolean;
  clearFeedAttributeOperand(): void;
  getFeedAttributeOperand(): Operand.FeedAttributeOperand | undefined;
  setFeedAttributeOperand(value?: Operand.FeedAttributeOperand): void;

  hasFunctionOperand(): boolean;
  clearFunctionOperand(): void;
  getFunctionOperand(): Operand.FunctionOperand | undefined;
  setFunctionOperand(value?: Operand.FunctionOperand): void;

  hasRequestContextOperand(): boolean;
  clearRequestContextOperand(): void;
  getRequestContextOperand(): Operand.RequestContextOperand | undefined;
  setRequestContextOperand(value?: Operand.RequestContextOperand): void;

  getFunctionArgumentOperandCase(): Operand.FunctionArgumentOperandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operand.AsObject;
  static toObject(includeInstance: boolean, msg: Operand): Operand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operand;
  static deserializeBinaryFromReader(message: Operand, reader: jspb.BinaryReader): Operand;
}

export namespace Operand {
  export type AsObject = {
    constantOperand?: Operand.ConstantOperand.AsObject,
    feedAttributeOperand?: Operand.FeedAttributeOperand.AsObject,
    functionOperand?: Operand.FunctionOperand.AsObject,
    requestContextOperand?: Operand.RequestContextOperand.AsObject,
  }

  export class ConstantOperand extends jspb.Message {
    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStringValue(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasLongValue(): boolean;
    clearLongValue(): void;
    getLongValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLongValue(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasBooleanValue(): boolean;
    clearBooleanValue(): void;
    getBooleanValue(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setBooleanValue(value?: google_protobuf_wrappers_pb.BoolValue): void;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setDoubleValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    getConstantOperandValueCase(): ConstantOperand.ConstantOperandValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConstantOperand.AsObject;
    static toObject(includeInstance: boolean, msg: ConstantOperand): ConstantOperand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConstantOperand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConstantOperand;
    static deserializeBinaryFromReader(message: ConstantOperand, reader: jspb.BinaryReader): ConstantOperand;
  }

  export namespace ConstantOperand {
    export type AsObject = {
      stringValue?: google_protobuf_wrappers_pb.StringValue.AsObject,
      longValue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      booleanValue?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      doubleValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }

    export enum ConstantOperandValueCase {
      CONSTANT_OPERAND_VALUE_NOT_SET = 0,
      STRING_VALUE = 1,
      LONG_VALUE = 2,
      BOOLEAN_VALUE = 3,
      DOUBLE_VALUE = 4,
    }
  }

  export class FeedAttributeOperand extends jspb.Message {
    hasFeedId(): boolean;
    clearFeedId(): void;
    getFeedId(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFeedId(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasFeedAttributeId(): boolean;
    clearFeedAttributeId(): void;
    getFeedAttributeId(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFeedAttributeId(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedAttributeOperand.AsObject;
    static toObject(includeInstance: boolean, msg: FeedAttributeOperand): FeedAttributeOperand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedAttributeOperand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedAttributeOperand;
    static deserializeBinaryFromReader(message: FeedAttributeOperand, reader: jspb.BinaryReader): FeedAttributeOperand;
  }

  export namespace FeedAttributeOperand {
    export type AsObject = {
      feedId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      feedAttributeId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export class FunctionOperand extends jspb.Message {
    hasMatchingFunction(): boolean;
    clearMatchingFunction(): void;
    getMatchingFunction(): MatchingFunction | undefined;
    setMatchingFunction(value?: MatchingFunction): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionOperand.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionOperand): FunctionOperand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FunctionOperand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionOperand;
    static deserializeBinaryFromReader(message: FunctionOperand, reader: jspb.BinaryReader): FunctionOperand;
  }

  export namespace FunctionOperand {
    export type AsObject = {
      matchingFunction?: MatchingFunction.AsObject,
    }
  }

  export class RequestContextOperand extends jspb.Message {
    getContextType(): google_ads_googleads_v2_enums_matching_function_context_type_pb.MatchingFunctionContextTypeEnum.MatchingFunctionContextType;
    setContextType(value: google_ads_googleads_v2_enums_matching_function_context_type_pb.MatchingFunctionContextTypeEnum.MatchingFunctionContextType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestContextOperand.AsObject;
    static toObject(includeInstance: boolean, msg: RequestContextOperand): RequestContextOperand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestContextOperand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestContextOperand;
    static deserializeBinaryFromReader(message: RequestContextOperand, reader: jspb.BinaryReader): RequestContextOperand;
  }

  export namespace RequestContextOperand {
    export type AsObject = {
      contextType: google_ads_googleads_v2_enums_matching_function_context_type_pb.MatchingFunctionContextTypeEnum.MatchingFunctionContextType,
    }
  }

  export enum FunctionArgumentOperandCase {
    FUNCTION_ARGUMENT_OPERAND_NOT_SET = 0,
    CONSTANT_OPERAND = 1,
    FEED_ATTRIBUTE_OPERAND = 2,
    FUNCTION_OPERAND = 3,
    REQUEST_CONTEXT_OPERAND = 4,
  }
}

