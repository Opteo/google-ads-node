// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/promotion_extension_discount_modifier.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PromotionExtensionDiscountModifierEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionExtensionDiscountModifierEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionExtensionDiscountModifierEnum): PromotionExtensionDiscountModifierEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionExtensionDiscountModifierEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionExtensionDiscountModifierEnum;
  static deserializeBinaryFromReader(message: PromotionExtensionDiscountModifierEnum, reader: jspb.BinaryReader): PromotionExtensionDiscountModifierEnum;
}

export namespace PromotionExtensionDiscountModifierEnum {
  export type AsObject = {
  }

  export enum PromotionExtensionDiscountModifier {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UP_TO = 2,
  }
}

