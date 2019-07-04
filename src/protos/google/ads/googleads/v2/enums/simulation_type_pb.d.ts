// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/simulation_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SimulationTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulationTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SimulationTypeEnum): SimulationTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimulationTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulationTypeEnum;
  static deserializeBinaryFromReader(message: SimulationTypeEnum, reader: jspb.BinaryReader): SimulationTypeEnum;
}

export namespace SimulationTypeEnum {
  export type AsObject = {
  }

  export enum SimulationType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CPC_BID = 2,
    CPV_BID = 3,
    TARGET_CPA = 4,
    BID_MODIFIER = 5,
  }
}

