const { protos, GoogleAdsServiceClient } = require("../build/src/index");
const assert = require("assert");

// TODO: Use tests generated within package/googleads-nodejs

// Check the proto exports exist
assert(typeof protos !== "undefined");
assert(typeof GoogleAdsServiceClient !== "undefined");

const name = "Planet Express";
const searchChannel =
  protos.google.ads.googleads.v15.enums.AdvertisingChannelTypeEnum
    .AdvertisingChannelType.SEARCH;

const campaign = protos.google.ads.googleads.v15.resources.Campaign.fromObject({
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
const error = new protos.google.ads.googleads.v15.errors.GoogleAdsError();
assert("search" in client);

// Check longs are not used (number type instead)
// const {
//   metrics,
// } = protos.google.ads.googleads.v7.services.GoogleAdsRow.fromObject({
//   metrics: {
//     clicks: "123",
//   },
// });
// assert(
//   metrics.clicks === 123,
//   `Protos should not compile with long.js extensions`,
//   metrics
// );
