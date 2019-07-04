// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/youtube_video_registration_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class YoutubeVideoRegistrationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YoutubeVideoRegistrationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: YoutubeVideoRegistrationErrorEnum): YoutubeVideoRegistrationErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: YoutubeVideoRegistrationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YoutubeVideoRegistrationErrorEnum;
  static deserializeBinaryFromReader(message: YoutubeVideoRegistrationErrorEnum, reader: jspb.BinaryReader): YoutubeVideoRegistrationErrorEnum;
}

export namespace YoutubeVideoRegistrationErrorEnum {
  export type AsObject = {
  }

  export enum YoutubeVideoRegistrationError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    VIDEO_NOT_FOUND = 2,
    VIDEO_NOT_ACCESSIBLE = 3,
  }
}

