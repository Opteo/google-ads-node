// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/dsa_page_feed_criterion_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DsaPageFeedCriterionFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsaPageFeedCriterionFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DsaPageFeedCriterionFieldEnum): DsaPageFeedCriterionFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DsaPageFeedCriterionFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsaPageFeedCriterionFieldEnum;
  static deserializeBinaryFromReader(message: DsaPageFeedCriterionFieldEnum, reader: jspb.BinaryReader): DsaPageFeedCriterionFieldEnum;
}

export namespace DsaPageFeedCriterionFieldEnum {
  export type AsObject = {
  }

  export enum DsaPageFeedCriterionField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PAGE_URL = 2,
    LABEL = 3,
  }
}

