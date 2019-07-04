// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/conversion_upload_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionUploadErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionUploadErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionUploadErrorEnum): ConversionUploadErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionUploadErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionUploadErrorEnum;
  static deserializeBinaryFromReader(message: ConversionUploadErrorEnum, reader: jspb.BinaryReader): ConversionUploadErrorEnum;
}

export namespace ConversionUploadErrorEnum {
  export type AsObject = {
  }

  export enum ConversionUploadError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TOO_MANY_CONVERSIONS_IN_REQUEST = 2,
    UNPARSEABLE_GCLID = 3,
    CONVERSION_PRECEDES_GCLID = 4,
    EXPIRED_GCLID = 5,
    TOO_RECENT_GCLID = 6,
    GCLID_NOT_FOUND = 7,
    UNAUTHORIZED_CUSTOMER = 8,
    INVALID_CONVERSION_ACTION = 9,
    TOO_RECENT_CONVERSION_ACTION = 10,
    CONVERSION_TRACKING_NOT_ENABLED_AT_IMPRESSION_TIME = 11,
    EXTERNAL_ATTRIBUTION_DATA_SET_FOR_NON_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION = 12,
    EXTERNAL_ATTRIBUTION_DATA_NOT_SET_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION = 13,
    ORDER_ID_NOT_PERMITTED_FOR_EXTERNALLY_ATTRIBUTED_CONVERSION_ACTION = 14,
    ORDER_ID_ALREADY_IN_USE = 15,
    DUPLICATE_ORDER_ID = 16,
    TOO_RECENT_CALL = 17,
    EXPIRED_CALL = 18,
    CALL_NOT_FOUND = 19,
    CONVERSION_PRECEDES_CALL = 20,
    CONVERSION_TRACKING_NOT_ENABLED_AT_CALL_TIME = 21,
    UNPARSEABLE_CALLERS_PHONE_NUMBER = 22,
  }
}

