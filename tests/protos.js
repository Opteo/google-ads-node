const { protos, GoogleAdsServiceClient } = require("../build/src/index");
const assert = require("assert");

// TODO: Use tests generated within package/googleads-nodejs

// Check the proto exports exist
assert(typeof protos !== "undefined");
assert(typeof GoogleAdsServiceClient !== "undefined");

const name = "Planet Express";
const searchChannel =
  protos.google.ads.googleads.v6.enums.AdvertisingChannelTypeEnum
    .AdvertisingChannelType.SEARCH;

const campaign = protos.google.ads.googleads.v6.resources.Campaign.fromObject({
  name,
  advertising_channel_type: searchChannel,
});

// Check that proto building works as expected
assert(
  campaign.name === "Planet Express",
  `Campaign.name should be set to "${name}"`
);
assert(campaign.advertising_channel_type === searchChannel);

// Check service clients can be created
const client = new GoogleAdsServiceClient();
assert("search" in client);
