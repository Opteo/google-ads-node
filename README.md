# google-ads-node

| Google Ads API version |                  [`v0_7_0`](https://developers.google.com/google-ads/api/docs/release-notes#070_2019-01-30)                   |
| ---------------------- | :---------------------------------------------------------------------------------------------------------------------------: |
| Build                  | [![CircleCI](https://circleci.com/gh/Opteo/google-ads-node.svg?style=shield&circle-token=ab3cda2c83e0a13712c96c088871e16ead2b78c7)](https://circleci.com/gh/Opteo/google-ads-node) |
| Release                |                          ![Release](https://img.shields.io/github/release/opteo/google-ads-node.svg)                          |
| Dependencies | ![Dependencies](https://img.shields.io/david/Opteo/google-ads-node.svg)

**Note:** This library is a minimal, low-level implementation for calling the Google Ads API with gRPC Protocol Buffers. For a more feature complete and easier to use library, try our [Javascript client library](https://github.com/opteo/google-ads-api).

## Features
- Fully matches the lastest [Google Ads API documentation](https://developers.google.com/google-ads/api/reference/rpc/)
- Faster than using JSON (uses [gRPC](https://grpc.io/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/))
- Typescript definitions

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

const client = new GoogleAdsClient({
  access_token: "<ACCESS_TOKEN>",
  developer_token: "<DEVELOPER_TOKEN>",
  login_customer_id: "<LOGIN_CUSTOMER_ID>",
});
const customerId = "1234567890";

async function example() {
  const service = client.getService("GoogleAdsService");

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

  service.search(request, (err: Error, res: SearchGoogleAdsResponse) => {
    if (err) {
      console.log("--- Error in search ---");
      console.log(err);
    } else {
      console.log("Results:");
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
  });
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


## Contributing

### Protocol Buffers

To update the Google Ads API version, the latest proto files (in the `googleapis` submodule) must be compiled.

#### Requirements:

- [Protoc compiler](https://github.com/protocolbuffers/protobuf) installed on your machine and added to your `$PATH`
- Latest dependencies installed. Make sure to use `yarn install` since some dependencies require a C++ compilation step

#### Steps:

1. Navigate into the `googleapis/` submodule and update with `git pull`.

2. Run `make protos` to compile the `*.proto` files

3. The new compiled proto files should now be in `src/protos/`, under the `google/ads/googleads/v0/` path.
