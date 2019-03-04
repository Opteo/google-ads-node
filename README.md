<p align="center">
  <a href="https://github.com/opteo/google-ads-node">
    Google Ads Node
  </a>
</p>

<p align="center">
  Unofficial Google Ads API gRPC client library for Node
</p>
<!-- &circle-token=ab3cda2c83e0a13712c96c088871e16ead2b78c7 -->

<p align="center">
  <a href="https://developers.google.com/google-ads/api/docs/release-notes">
    <img src="https://img.shields.io/badge/google%20ads-v0.7.0-009688.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/google-ads-node">
    <img src="https://img.shields.io/npm/v/google-ads-node.svg?style=flat-square">
  </a>
  <a>
    <img src="https://circleci.com/gh/Opteo/google-ads-node.svg?style=shield&circle-token=ab3cda2c83e0a13712c96c088871e16ead2b78c7">
  </a>
  <a>
    <img src="https://img.shields.io/npm/dm/google-ads-node.svg?style=flat-square">
    </a>
  <a>
    <img src="https://img.shields.io/david/opteo/google-ads-node.svg?style=flat-square">
  </a>
</p>

<p align="center">Built by <a href="https://opteo.com">Opteo</a></p>

<p align="center">
  <a href="https://opteo.com">
    <img src="https://app.opteo.com/icons/logo.svg">
  </a>
</p>

## Features

**Note:** This library is a minimal, low-level implementation for calling the Google Ads API with gRPC Protocol Buffers. For a more feature-complete and easier-to-use library, try our [Javascript client library](https://github.com/opteo/google-ads-api).

- Fully matches the lastest [Google Ads API documentation](https://developers.google.com/google-ads/api/reference/rpc/)
- Faster than using JSON (uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/))
- Includes Typescript definitions

## Installation

```bash
$ yarn add google-ads-node
```

## Example

```javascript
import {
  GoogleAdsClient,
  SearchGoogleAdsRequest,
  SearchGoogleAdsResponse,
  Campaign,
  Metrics
} from "google-ads-node"

// 1. Create a new client with valid authentication
const client = new GoogleAdsClient({
  access_token: "<ACCESS_TOKEN>",
  developer_token: "<DEVELOPER_TOKEN>",
  login_customer_id: "<LOGIN_CUSTOMER_ID>",
});
const customerId = "1234567890";

async function example() {
  // 2. Load a Google Ads service
  const service = client.getService("GoogleAdsService");

  // 3. Create a request
  const request = new SearchGoogleAdsRequest();
  request.setQuery(`
    SELECT
      campaign.id,
      campaign.name,
      campaign.status,
      segments.device,
      metrics.impressions,
      metrics.clicks,
      metrics.ctr,
      metrics.average_cpc,
      metrics.cost_micros
    FROM campaign
  `);
  request.setCustomerId(customerId);
  request.setPageSize(12);

  // 4. Get the results
  const result: SearchGoogleAdsResponse = await service.search(request)
    .catch((err: Error) => {
      console.log("--- Error in search ---");
      console.log(err);
    });

  // 5. Inspect the data!
  for (const row of res.getResultsList()) {
    const campaign: Campaign = row.getCampaign() as Campaign;
    const metrics: Metrics = row.getMetrics() as Metrics;

    if ((metrics.getClicks() as any) > 0) {
      console.log(`Campaign "${campaign.getName()}" has ${metrics.getClicks()} clicks.`);
    } else {
      console.log(`Campaign "${campaign.getName()}" has no clicks.`);
    }
  }
}

example();

```

## Usage

### Authentication

#### 1. No internal authentication

A valid Google Ads `access_token` must be provided. This usage depends on the `access_token` being refreshed and generated outside of the client. If the token isn't valid, an `UNAUTHENTICATED` error will be thrown. It's recommended to follow the [instructions here for generating tokens](https://developers.google.com/google-ads/api/docs/oauth/overview).

```javascript
const client = new GoogleAdsClient({
  developer_token: "<DEVELOPER_TOKEN>",
  access_token: "<ACCESS_TOKEN>",
});
```

#### 2. Token generation and refresh handling

This approach, which is recommended, internally handles access token generation and refreshing. A valid `client_id`, `client_secret` and `refresh_token` must be provided.

```javascript
const client = new GoogleAdsClient({
  client_id: "<CLIENT_ID>",
  client_secret: "<CLIENT_SECRET>",
  refresh_token: "<REFRESH_TOKEN>",
  developer_token: "<DEVELOPER_TOKEN>",
});
```

### Services

To load a Google Ads service, simply use the `getService` method. It supports a single string, being the name of the service. For a full list of avaiable services, check out the [Google Ads service reference](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v0.services).

```javascript
const service = client.getService("AdGroupAdService");
```

From here, you can then use all the available methods for the service e.g. `getAdGroupAd()` and `mutateAdGroupAds()`. The parameters and return value match the format specified in the Google Ads documentation.

```javascript
import { GetAdGroupRequest } from "google-ads-node";

const request = new GetAdGroupAdRequest();
const ad = await service.getAdGroupAd(request);
```

**Note:** Service methods use `camelCase` in this library, whereas the Google Ads documentation uses `TitleCase`, so if a service method was called `GetCampaign()`, in this library it would be `getCampaign()`

### Results

By default, since this library is implemented with gRPC, any calls via a service return an object in the protocol buffer format. This is a binary format object, which is difficult to understand, especially if you're not using the Typescript definitions.

Because of this, retrieving the results you want can be quite verbose. An example of this is below, where we show two methods for acquiring the id of a campaign.

```javascript
const results = await service.search(request);

// Method 1
const { resultsList } = results.toObject();
const id = resultsList[0].campaign.id.value;

// Method 2
const row = results.getResultsList();
const campaign = row.getCampaign();
const id = campaign.getId().value;
```

If you don't wish to work directly with protocol buffers, are unfamiliar with gRPC, or just want an easier way to retrieve the data, we recommend using the `parseResults` client option. Setting this option to `true` will internally handle parsing the results in a more _javascript friendly_ way, and return the desired entities/metrics/segments as objects (with all types correctly handled, e.g. `name` as a string, `id` as a number, etc.).

```javascript
const client = new GoogleAdsClient({
  client_id: "<CLIENT_ID>",
  client_secret: "<CLIENT_SECRET>",
  refresh_token: "<REFRESH_TOKEN>",
  developer_token: "<DEVELOPER_TOKEN>",
  parseResults: true,
});

// ...

const { resultsList } = await service.search(request);
console.log(resultsList[0].campaign.id); // 123
```

## Changelog

- [Release Notes](https://github.com/Opteo/google-ads-node/blob/master/CHANGELOG.md)
- [Google Ads API Release Notes](https://developers.google.com/google-ads/api/docs/release-notes)

## Contributing

### Protocol Buffers

To update the Google Ads API version, the latest proto files (in the `googleapis` submodule) must be compiled.

#### Requirements:

- [Protoc compiler](https://github.com/protocolbuffers/protobuf) installed on your machine and added to your `$PATH`
- Latest dependencies installed – make sure to use `yarn install` since some dependencies require a C++ compilation step

#### Steps:

1. Navigate into the `googleapis/` submodule and update with `git pull`.

2. Run `make protos` to compile the `*.proto` files

3. The new compiled proto files should now be in `src/protos/`, under the `google/ads/googleads/v0/` path.
