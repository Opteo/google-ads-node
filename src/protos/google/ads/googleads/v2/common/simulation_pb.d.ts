// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/simulation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BidModifierSimulationPointList extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<BidModifierSimulationPoint>;
  setPointsList(value: Array<BidModifierSimulationPoint>): void;
  addPoints(value?: BidModifierSimulationPoint, index?: number): BidModifierSimulationPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BidModifierSimulationPointList.AsObject;
  static toObject(includeInstance: boolean, msg: BidModifierSimulationPointList): BidModifierSimulationPointList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BidModifierSimulationPointList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BidModifierSimulationPointList;
  static deserializeBinaryFromReader(message: BidModifierSimulationPointList, reader: jspb.BinaryReader): BidModifierSimulationPointList;
}

export namespace BidModifierSimulationPointList {
  export type AsObject = {
    pointsList: Array<BidModifierSimulationPoint.AsObject>,
  }
}

export class CpcBidSimulationPointList extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<CpcBidSimulationPoint>;
  setPointsList(value: Array<CpcBidSimulationPoint>): void;
  addPoints(value?: CpcBidSimulationPoint, index?: number): CpcBidSimulationPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpcBidSimulationPointList.AsObject;
  static toObject(includeInstance: boolean, msg: CpcBidSimulationPointList): CpcBidSimulationPointList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpcBidSimulationPointList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpcBidSimulationPointList;
  static deserializeBinaryFromReader(message: CpcBidSimulationPointList, reader: jspb.BinaryReader): CpcBidSimulationPointList;
}

export namespace CpcBidSimulationPointList {
  export type AsObject = {
    pointsList: Array<CpcBidSimulationPoint.AsObject>,
  }
}

export class CpvBidSimulationPointList extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<CpvBidSimulationPoint>;
  setPointsList(value: Array<CpvBidSimulationPoint>): void;
  addPoints(value?: CpvBidSimulationPoint, index?: number): CpvBidSimulationPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpvBidSimulationPointList.AsObject;
  static toObject(includeInstance: boolean, msg: CpvBidSimulationPointList): CpvBidSimulationPointList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpvBidSimulationPointList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpvBidSimulationPointList;
  static deserializeBinaryFromReader(message: CpvBidSimulationPointList, reader: jspb.BinaryReader): CpvBidSimulationPointList;
}

export namespace CpvBidSimulationPointList {
  export type AsObject = {
    pointsList: Array<CpvBidSimulationPoint.AsObject>,
  }
}

export class TargetCpaSimulationPointList extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<TargetCpaSimulationPoint>;
  setPointsList(value: Array<TargetCpaSimulationPoint>): void;
  addPoints(value?: TargetCpaSimulationPoint, index?: number): TargetCpaSimulationPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetCpaSimulationPointList.AsObject;
  static toObject(includeInstance: boolean, msg: TargetCpaSimulationPointList): TargetCpaSimulationPointList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetCpaSimulationPointList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetCpaSimulationPointList;
  static deserializeBinaryFromReader(message: TargetCpaSimulationPointList, reader: jspb.BinaryReader): TargetCpaSimulationPointList;
}

export namespace TargetCpaSimulationPointList {
  export type AsObject = {
    pointsList: Array<TargetCpaSimulationPoint.AsObject>,
  }
}

export class BidModifierSimulationPoint extends jspb.Message {
  hasBidModifier(): boolean;
  clearBidModifier(): void;
  getBidModifier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBiddableConversions(): boolean;
  clearBiddableConversions(): void;
  getBiddableConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiddableConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBiddableConversionsValue(): boolean;
  clearBiddableConversionsValue(): void;
  getBiddableConversionsValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiddableConversionsValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasClicks(): boolean;
  clearClicks(): void;
  getClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCostMicros(): boolean;
  clearCostMicros(): void;
  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasImpressions(): boolean;
  clearImpressions(): void;
  getImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTopSlotImpressions(): boolean;
  clearTopSlotImpressions(): void;
  getTopSlotImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTopSlotImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasParentBiddableConversions(): boolean;
  clearParentBiddableConversions(): void;
  getParentBiddableConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setParentBiddableConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasParentBiddableConversionsValue(): boolean;
  clearParentBiddableConversionsValue(): void;
  getParentBiddableConversionsValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setParentBiddableConversionsValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasParentClicks(): boolean;
  clearParentClicks(): void;
  getParentClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasParentCostMicros(): boolean;
  clearParentCostMicros(): void;
  getParentCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasParentImpressions(): boolean;
  clearParentImpressions(): void;
  getParentImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasParentTopSlotImpressions(): boolean;
  clearParentTopSlotImpressions(): void;
  getParentTopSlotImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentTopSlotImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasParentRequiredBudgetMicros(): boolean;
  clearParentRequiredBudgetMicros(): void;
  getParentRequiredBudgetMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentRequiredBudgetMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BidModifierSimulationPoint.AsObject;
  static toObject(includeInstance: boolean, msg: BidModifierSimulationPoint): BidModifierSimulationPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BidModifierSimulationPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BidModifierSimulationPoint;
  static deserializeBinaryFromReader(message: BidModifierSimulationPoint, reader: jspb.BinaryReader): BidModifierSimulationPoint;
}

export namespace BidModifierSimulationPoint {
  export type AsObject = {
    bidModifier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    biddableConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    biddableConversionsValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    clicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    impressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    topSlotImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    parentBiddableConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    parentBiddableConversionsValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    parentClicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    parentCostMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    parentImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    parentTopSlotImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    parentRequiredBudgetMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class CpcBidSimulationPoint extends jspb.Message {
  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;
  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBiddableConversions(): boolean;
  clearBiddableConversions(): void;
  getBiddableConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiddableConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBiddableConversionsValue(): boolean;
  clearBiddableConversionsValue(): void;
  getBiddableConversionsValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiddableConversionsValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasClicks(): boolean;
  clearClicks(): void;
  getClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCostMicros(): boolean;
  clearCostMicros(): void;
  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasImpressions(): boolean;
  clearImpressions(): void;
  getImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTopSlotImpressions(): boolean;
  clearTopSlotImpressions(): void;
  getTopSlotImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTopSlotImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpcBidSimulationPoint.AsObject;
  static toObject(includeInstance: boolean, msg: CpcBidSimulationPoint): CpcBidSimulationPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpcBidSimulationPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpcBidSimulationPoint;
  static deserializeBinaryFromReader(message: CpcBidSimulationPoint, reader: jspb.BinaryReader): CpcBidSimulationPoint;
}

export namespace CpcBidSimulationPoint {
  export type AsObject = {
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    biddableConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    biddableConversionsValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    clicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    impressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    topSlotImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class CpvBidSimulationPoint extends jspb.Message {
  hasCpvBidMicros(): boolean;
  clearCpvBidMicros(): void;
  getCpvBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpvBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCostMicros(): boolean;
  clearCostMicros(): void;
  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasImpressions(): boolean;
  clearImpressions(): void;
  getImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasViews(): boolean;
  clearViews(): void;
  getViews(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setViews(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CpvBidSimulationPoint.AsObject;
  static toObject(includeInstance: boolean, msg: CpvBidSimulationPoint): CpvBidSimulationPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CpvBidSimulationPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CpvBidSimulationPoint;
  static deserializeBinaryFromReader(message: CpvBidSimulationPoint, reader: jspb.BinaryReader): CpvBidSimulationPoint;
}

export namespace CpvBidSimulationPoint {
  export type AsObject = {
    cpvBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    impressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    views?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class TargetCpaSimulationPoint extends jspb.Message {
  hasTargetCpaMicros(): boolean;
  clearTargetCpaMicros(): void;
  getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBiddableConversions(): boolean;
  clearBiddableConversions(): void;
  getBiddableConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiddableConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBiddableConversionsValue(): boolean;
  clearBiddableConversionsValue(): void;
  getBiddableConversionsValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBiddableConversionsValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasClicks(): boolean;
  clearClicks(): void;
  getClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCostMicros(): boolean;
  clearCostMicros(): void;
  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasImpressions(): boolean;
  clearImpressions(): void;
  getImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTopSlotImpressions(): boolean;
  clearTopSlotImpressions(): void;
  getTopSlotImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTopSlotImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetCpaSimulationPoint.AsObject;
  static toObject(includeInstance: boolean, msg: TargetCpaSimulationPoint): TargetCpaSimulationPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetCpaSimulationPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetCpaSimulationPoint;
  static deserializeBinaryFromReader(message: TargetCpaSimulationPoint, reader: jspb.BinaryReader): TargetCpaSimulationPoint;
}

export namespace TargetCpaSimulationPoint {
  export type AsObject = {
    targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    biddableConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    biddableConversionsValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    clicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    impressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    topSlotImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

