// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/display_upload_product_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DisplayUploadProductTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayUploadProductTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayUploadProductTypeEnum): DisplayUploadProductTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisplayUploadProductTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayUploadProductTypeEnum;
  static deserializeBinaryFromReader(message: DisplayUploadProductTypeEnum, reader: jspb.BinaryReader): DisplayUploadProductTypeEnum;
}

export namespace DisplayUploadProductTypeEnum {
  export type AsObject = {
  }

  export enum DisplayUploadProductType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    HTML5_UPLOAD_AD = 2,
    DYNAMIC_HTML5_EDUCATION_AD = 3,
    DYNAMIC_HTML5_FLIGHT_AD = 4,
    DYNAMIC_HTML5_HOTEL_RENTAL_AD = 5,
    DYNAMIC_HTML5_JOB_AD = 6,
    DYNAMIC_HTML5_LOCAL_AD = 7,
    DYNAMIC_HTML5_REAL_ESTATE_AD = 8,
    DYNAMIC_HTML5_CUSTOM_AD = 9,
    DYNAMIC_HTML5_TRAVEL_AD = 10,
    DYNAMIC_HTML5_HOTEL_AD = 11,
  }
}

