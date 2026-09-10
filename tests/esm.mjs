import assert from "node:assert/strict";
import { protos, GoogleAdsServiceClient } from "../build/src/index.js";

assert.equal(typeof GoogleAdsServiceClient, "function");
assert.equal(typeof protos.google.ads.googleads.v25, "object");
assert.equal(
  protos.google.ads.googleads.v25.enums.AdvertisingChannelTypeEnum
    .AdvertisingChannelType.SEARCH,
  2
);
