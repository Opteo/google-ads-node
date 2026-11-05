import assert from "node:assert/strict";
import { protos, GoogleAdsServiceClient } from "../build/src/index.js";

assert.equal(typeof GoogleAdsServiceClient, "function");
assert.equal(typeof protos.google.ads.googleads.v26, "object");
assert.equal(
  protos.google.ads.googleads.v26.enums.AdvertisingChannelTypeEnum
    .AdvertisingChannelType.SEARCH,
  2
);
