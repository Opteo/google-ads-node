// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/vanity_pharma_text.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class VanityPharmaTextEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanityPharmaTextEnum.AsObject;
  static toObject(includeInstance: boolean, msg: VanityPharmaTextEnum): VanityPharmaTextEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanityPharmaTextEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanityPharmaTextEnum;
  static deserializeBinaryFromReader(message: VanityPharmaTextEnum, reader: jspb.BinaryReader): VanityPharmaTextEnum;
}

export namespace VanityPharmaTextEnum {
  export type AsObject = {
  }

  export enum VanityPharmaText {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PRESCRIPTION_TREATMENT_WEBSITE_EN = 2,
    PRESCRIPTION_TREATMENT_WEBSITE_ES = 3,
    PRESCRIPTION_DEVICE_WEBSITE_EN = 4,
    PRESCRIPTION_DEVICE_WEBSITE_ES = 5,
    MEDICAL_DEVICE_WEBSITE_EN = 6,
    MEDICAL_DEVICE_WEBSITE_ES = 7,
    PREVENTATIVE_TREATMENT_WEBSITE_EN = 8,
    PREVENTATIVE_TREATMENT_WEBSITE_ES = 9,
    PRESCRIPTION_CONTRACEPTION_WEBSITE_EN = 10,
    PRESCRIPTION_CONTRACEPTION_WEBSITE_ES = 11,
    PRESCRIPTION_VACCINE_WEBSITE_EN = 12,
    PRESCRIPTION_VACCINE_WEBSITE_ES = 13,
  }
}

