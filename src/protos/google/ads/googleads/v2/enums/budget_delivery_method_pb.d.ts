// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/budget_delivery_method.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BudgetDeliveryMethodEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetDeliveryMethodEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetDeliveryMethodEnum): BudgetDeliveryMethodEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BudgetDeliveryMethodEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetDeliveryMethodEnum;
  static deserializeBinaryFromReader(message: BudgetDeliveryMethodEnum, reader: jspb.BinaryReader): BudgetDeliveryMethodEnum;
}

export namespace BudgetDeliveryMethodEnum {
  export type AsObject = {
  }

  export enum BudgetDeliveryMethod {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    STANDARD = 2,
    ACCELERATED = 3,
  }
}

