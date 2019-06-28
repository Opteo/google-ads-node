// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/location_extension_targeting_criterion_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LocationExtensionTargetingCriterionFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationExtensionTargetingCriterionFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LocationExtensionTargetingCriterionFieldEnum): LocationExtensionTargetingCriterionFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationExtensionTargetingCriterionFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationExtensionTargetingCriterionFieldEnum;
  static deserializeBinaryFromReader(message: LocationExtensionTargetingCriterionFieldEnum, reader: jspb.BinaryReader): LocationExtensionTargetingCriterionFieldEnum;
}

export namespace LocationExtensionTargetingCriterionFieldEnum {
  export type AsObject = {
  }

  export enum LocationExtensionTargetingCriterionField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADDRESS_LINE_1 = 2,
    ADDRESS_LINE_2 = 3,
    CITY = 4,
    PROVINCE = 5,
    POSTAL_CODE = 6,
    COUNTRY_CODE = 7,
  }
}

