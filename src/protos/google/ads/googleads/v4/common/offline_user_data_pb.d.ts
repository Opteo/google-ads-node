// package: google.ads.googleads.v4.common
// file: google/ads/googleads/v4/common/offline_user_data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OfflineUserAddressInfo extends jspb.Message {
  hasHashedFirstName(): boolean;
  clearHashedFirstName(): void;
  getHashedFirstName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHashedFirstName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHashedLastName(): boolean;
  clearHashedLastName(): void;
  getHashedLastName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHashedLastName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCity(): boolean;
  clearCity(): void;
  getCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCity(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasState(): boolean;
  clearState(): void;
  getState(): google_protobuf_wrappers_pb.StringValue | undefined;
  setState(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostalCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineUserAddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineUserAddressInfo): OfflineUserAddressInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineUserAddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineUserAddressInfo;
  static deserializeBinaryFromReader(message: OfflineUserAddressInfo, reader: jspb.BinaryReader): OfflineUserAddressInfo;
}

export namespace OfflineUserAddressInfo {
  export type AsObject = {
    hashedFirstName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hashedLastName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    city?: google_protobuf_wrappers_pb.StringValue.AsObject,
    state?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    postalCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UserIdentifier extends jspb.Message {
  hasHashedEmail(): boolean;
  clearHashedEmail(): void;
  getHashedEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHashedEmail(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHashedPhoneNumber(): boolean;
  clearHashedPhoneNumber(): void;
  getHashedPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHashedPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMobileId(): boolean;
  clearMobileId(): void;
  getMobileId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobileId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasThirdPartyUserId(): boolean;
  clearThirdPartyUserId(): void;
  getThirdPartyUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setThirdPartyUserId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAddressInfo(): boolean;
  clearAddressInfo(): void;
  getAddressInfo(): OfflineUserAddressInfo | undefined;
  setAddressInfo(value?: OfflineUserAddressInfo): void;

  getIdentifierCase(): UserIdentifier.IdentifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: UserIdentifier): UserIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIdentifier;
  static deserializeBinaryFromReader(message: UserIdentifier, reader: jspb.BinaryReader): UserIdentifier;
}

export namespace UserIdentifier {
  export type AsObject = {
    hashedEmail?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hashedPhoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mobileId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    thirdPartyUserId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    addressInfo?: OfflineUserAddressInfo.AsObject,
  }

  export enum IdentifierCase {
    IDENTIFIER_NOT_SET = 0,
    HASHED_EMAIL = 1,
    HASHED_PHONE_NUMBER = 2,
    MOBILE_ID = 3,
    THIRD_PARTY_USER_ID = 4,
    ADDRESS_INFO = 5,
  }
}

export class TransactionAttribute extends jspb.Message {
  hasTransactionDateTime(): boolean;
  clearTransactionDateTime(): void;
  getTransactionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTransactionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTransactionAmountMicros(): boolean;
  clearTransactionAmountMicros(): void;
  getTransactionAmountMicros(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTransactionAmountMicros(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;
  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConversionAction(): boolean;
  clearConversionAction(): void;
  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOrderId(): boolean;
  clearOrderId(): void;
  getOrderId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOrderId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStoreAttribute(): boolean;
  clearStoreAttribute(): void;
  getStoreAttribute(): StoreAttribute | undefined;
  setStoreAttribute(value?: StoreAttribute): void;

  hasCustomValue(): boolean;
  clearCustomValue(): void;
  getCustomValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionAttribute): TransactionAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionAttribute;
  static deserializeBinaryFromReader(message: TransactionAttribute, reader: jspb.BinaryReader): TransactionAttribute;
}

export namespace TransactionAttribute {
  export type AsObject = {
    transactionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    transactionAmountMicros?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    orderId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    storeAttribute?: StoreAttribute.AsObject,
    customValue?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class StoreAttribute extends jspb.Message {
  hasStoreCode(): boolean;
  clearStoreCode(): void;
  getStoreCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStoreCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: StoreAttribute): StoreAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreAttribute;
  static deserializeBinaryFromReader(message: StoreAttribute, reader: jspb.BinaryReader): StoreAttribute;
}

export namespace StoreAttribute {
  export type AsObject = {
    storeCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UserData extends jspb.Message {
  clearUserIdentifiersList(): void;
  getUserIdentifiersList(): Array<UserIdentifier>;
  setUserIdentifiersList(value: Array<UserIdentifier>): void;
  addUserIdentifiers(value?: UserIdentifier, index?: number): UserIdentifier;

  hasTransactionAttribute(): boolean;
  clearTransactionAttribute(): void;
  getTransactionAttribute(): TransactionAttribute | undefined;
  setTransactionAttribute(value?: TransactionAttribute): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserData.AsObject;
  static toObject(includeInstance: boolean, msg: UserData): UserData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserData;
  static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
}

export namespace UserData {
  export type AsObject = {
    userIdentifiersList: Array<UserIdentifier.AsObject>,
    transactionAttribute?: TransactionAttribute.AsObject,
  }
}

export class CustomerMatchUserListMetadata extends jspb.Message {
  hasUserList(): boolean;
  clearUserList(): void;
  getUserList(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserList(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerMatchUserListMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerMatchUserListMetadata): CustomerMatchUserListMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerMatchUserListMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerMatchUserListMetadata;
  static deserializeBinaryFromReader(message: CustomerMatchUserListMetadata, reader: jspb.BinaryReader): CustomerMatchUserListMetadata;
}

export namespace CustomerMatchUserListMetadata {
  export type AsObject = {
    userList?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class StoreSalesMetadata extends jspb.Message {
  hasLoyaltyFraction(): boolean;
  clearLoyaltyFraction(): void;
  getLoyaltyFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setLoyaltyFraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTransactionUploadFraction(): boolean;
  clearTransactionUploadFraction(): void;
  getTransactionUploadFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTransactionUploadFraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCustomKey(): boolean;
  clearCustomKey(): void;
  getCustomKey(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomKey(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasThirdPartyMetadata(): boolean;
  clearThirdPartyMetadata(): void;
  getThirdPartyMetadata(): StoreSalesThirdPartyMetadata | undefined;
  setThirdPartyMetadata(value?: StoreSalesThirdPartyMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreSalesMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: StoreSalesMetadata): StoreSalesMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreSalesMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreSalesMetadata;
  static deserializeBinaryFromReader(message: StoreSalesMetadata, reader: jspb.BinaryReader): StoreSalesMetadata;
}

export namespace StoreSalesMetadata {
  export type AsObject = {
    loyaltyFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    transactionUploadFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    customKey?: google_protobuf_wrappers_pb.StringValue.AsObject,
    thirdPartyMetadata?: StoreSalesThirdPartyMetadata.AsObject,
  }
}

export class StoreSalesThirdPartyMetadata extends jspb.Message {
  hasAdvertiserUploadDateTime(): boolean;
  clearAdvertiserUploadDateTime(): void;
  getAdvertiserUploadDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdvertiserUploadDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasValidTransactionFraction(): boolean;
  clearValidTransactionFraction(): void;
  getValidTransactionFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setValidTransactionFraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasPartnerMatchFraction(): boolean;
  clearPartnerMatchFraction(): void;
  getPartnerMatchFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPartnerMatchFraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasPartnerUploadFraction(): boolean;
  clearPartnerUploadFraction(): void;
  getPartnerUploadFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPartnerUploadFraction(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBridgeMapVersionId(): boolean;
  clearBridgeMapVersionId(): void;
  getBridgeMapVersionId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBridgeMapVersionId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPartnerId(): boolean;
  clearPartnerId(): void;
  getPartnerId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPartnerId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreSalesThirdPartyMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: StoreSalesThirdPartyMetadata): StoreSalesThirdPartyMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreSalesThirdPartyMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreSalesThirdPartyMetadata;
  static deserializeBinaryFromReader(message: StoreSalesThirdPartyMetadata, reader: jspb.BinaryReader): StoreSalesThirdPartyMetadata;
}

export namespace StoreSalesThirdPartyMetadata {
  export type AsObject = {
    advertiserUploadDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    validTransactionFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    partnerMatchFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    partnerUploadFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    bridgeMapVersionId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    partnerId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

