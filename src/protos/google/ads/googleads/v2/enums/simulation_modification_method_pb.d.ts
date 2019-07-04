// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/simulation_modification_method.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SimulationModificationMethodEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulationModificationMethodEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SimulationModificationMethodEnum): SimulationModificationMethodEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimulationModificationMethodEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulationModificationMethodEnum;
  static deserializeBinaryFromReader(message: SimulationModificationMethodEnum, reader: jspb.BinaryReader): SimulationModificationMethodEnum;
}

export namespace SimulationModificationMethodEnum {
  export type AsObject = {
  }

  export enum SimulationModificationMethod {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNIFORM = 2,
    DEFAULT = 3,
  }
}

