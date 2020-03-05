// package: google.ads.googleads.v3.common
// file: google/ads/googleads/v3/common/targeting_setting.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v3_enums_targeting_dimension_pb from "../../../../../google/ads/googleads/v3/enums/targeting_dimension_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TargetingSetting extends jspb.Message {
  clearTargetRestrictionsList(): void;
  getTargetRestrictionsList(): Array<TargetRestriction>;
  setTargetRestrictionsList(value: Array<TargetRestriction>): void;
  addTargetRestrictions(value?: TargetRestriction, index?: number): TargetRestriction;

  clearTargetRestrictionOperationsList(): void;
  getTargetRestrictionOperationsList(): Array<TargetRestrictionOperation>;
  setTargetRestrictionOperationsList(value: Array<TargetRestrictionOperation>): void;
  addTargetRestrictionOperations(value?: TargetRestrictionOperation, index?: number): TargetRestrictionOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: TargetingSetting): TargetingSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetingSetting;
  static deserializeBinaryFromReader(message: TargetingSetting, reader: jspb.BinaryReader): TargetingSetting;
}

export namespace TargetingSetting {
  export type AsObject = {
    targetRestrictionsList: Array<TargetRestriction.AsObject>,
    targetRestrictionOperationsList: Array<TargetRestrictionOperation.AsObject>,
  }
}

export class TargetRestriction extends jspb.Message {
  getTargetingDimension(): google_ads_googleads_v3_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension;
  setTargetingDimension(value: google_ads_googleads_v3_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension): void;

  hasBidOnly(): boolean;
  clearBidOnly(): void;
  getBidOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setBidOnly(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetRestriction.AsObject;
  static toObject(includeInstance: boolean, msg: TargetRestriction): TargetRestriction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetRestriction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetRestriction;
  static deserializeBinaryFromReader(message: TargetRestriction, reader: jspb.BinaryReader): TargetRestriction;
}

export namespace TargetRestriction {
  export type AsObject = {
    targetingDimension: google_ads_googleads_v3_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension,
    bidOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class TargetRestrictionOperation extends jspb.Message {
  getOperator(): TargetRestrictionOperation.Operator;
  setOperator(value: TargetRestrictionOperation.Operator): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): TargetRestriction | undefined;
  setValue(value?: TargetRestriction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetRestrictionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: TargetRestrictionOperation): TargetRestrictionOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetRestrictionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetRestrictionOperation;
  static deserializeBinaryFromReader(message: TargetRestrictionOperation, reader: jspb.BinaryReader): TargetRestrictionOperation;
}

export namespace TargetRestrictionOperation {
  export type AsObject = {
    operator: TargetRestrictionOperation.Operator,
    value?: TargetRestriction.AsObject,
  }

  export enum Operator {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADD = 2,
    REMOVE = 3,
  }
}

