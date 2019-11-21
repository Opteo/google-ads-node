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
    <img src="https://img.shields.io/badge/google%20ads-v2.0.0-009688.svg?style=flat-square">
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
  for (const row of result.getResultsList()) {
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

### Client Options

| Field                 | Type              | Required | Notes                                                                                                                                                                                                                                                |
| --------------------- | ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `developer_token`     | `string`          | ✅       | Google Ads developer token. Obtained from [API Center](https://developers.google.com/google-ads/api/docs/first-call/dev-token).                                                                                                                      |
| `access_token`        | `string`          | ➖       | Obtained after completing Google Ads [Auth Flow](https://developers.google.com/google-ads/api/docs/oauth/cloud-project). Only required if using [No Internal Authentication](https://github.com/Opteo/google-ads-node#1-no-internal-authentication). |
| `client_id`           | `string`          | ➖       | Obtained from Google Developer console. Required if using library [Token Generation & Refresh Handling](https://github.com/Opteo/google-ads-node#2-token-generation-and-refresh-handling).                                                           |
| `client_secret`       | `string`          | ➖       | Same as above. Obtained from Google Developer console.                                                                                                                                                                                               |
| `refresh_token`       | `string`          | ➖       | Same as above. Obtained from [OAuth2 flow](https://developers.google.com/google-ads/api/docs/first-call/refresh-token).                                                                                                                              |
| `accessTokenGetter()` | `Promise<string>` | ❌       | Function to retrieve access token per request. See [Access Token Getter](https://github.com/Opteo/google-ads-node#3-access-token-getter).                                                                                                            |
| `parseResults`        | `boolean`         | ❌       | Formats Protobuf responses as objects. See [Results](https://github.com/Opteo/google-ads-node#results).                                                                                                                                              |
| `preventMutations`    | `boolean`         | ❌       | Safe mode to prevent accidental mutations. See [Safe Mode](https://github.com/Opteo/google-ads-node#safe-mode).                                                                                                                                      |
| `logging`             | `object`          | ❌       | See [Logging](https://github.com/Opteo/google-ads-node#logging).                                                                                                                                                                                     |

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

#### 3. Access token getter

You can also additionaly pass in an async access token getter method to the client instance. This will be called on every request. The main purpose is to allow you to handle authentication yourself, and cache tokens/use cached tokens from elsewhere. The method expects a return type of `Promise<string>` e.g. `Promise.resolve("<access-token>")`. An example of how you might use the `accessTokenGetter` option is provided below:

```typescript
const client = new GoogleAdsClient({
  client_id: "<CLIENT_ID>",
  client_secret: "<CLIENT_SECRET>",
  refresh_token: "<REFRESH_TOKEN>",
  developer_token: "<DEVELOPER_TOKEN>",
  // You can optionally use the parameters
  async accessTokenGetter(clientId?: string, clientSecret?: string, refreshToken?: string) {
    await logger.someLoggingFunction();

    if (cache.checkTokenExists()) {
      return cache.getCachedToken();
    }

    const accessToken = await auth.someCallToGetAccessToken();
    return accessToken;
  },
});
```

The returned token string will be used in the gRPC metadata per request, as the `Authorization` header. You don't need to include the `Bearer:` part of the token, this is appended automatically.

#### 4. Load `GoogleAdsClient` options from configuration file

For convenience, you can store the required settings in a configuration file. Copy the sample [`googleads.config.js`](googleads.config.js) file (the library also accepts a `.googleadsrc` file in JSON or YAML format) to your project root or home directory, and modify it to include the client ID, client secret, and refresh token.

The client will automatically read it from the configuration file if instantiated with no arguments:

```typescript
const client = new GoogleAdsClient();
```

Alternatively, if you prefer to keep the file elsewhere, you can instantiate the client by passing the path to where you keep this file:

```typescript
const client = new GoogleAdsClient("path/to/googleads.config.js");
```

### Services

To load a Google Ads service, simply use the `getService` method. It supports a single string, being the name of the service. For a full list of avaiable services, check out the [Google Ads service reference](https://developers.google.com/google-ads/api/reference/rpc/google.ads.googleads.v0.services).

```javascript
const service = client.getService("AdGroupAdService");
```

From here, you can then use all the available methods for the service e.g. `getAdGroupAd()` and `mutateAdGroupAds()`. The parameters and return value match the format specified in the Google Ads documentation.

```javascript
import { GetAdGroupAdRequest } from "google-ads-node";

const request = new GetAdGroupAdRequest();
const ad = await service.getAdGroupAd(request);
```

**Note:** Service methods use `camelCase` in this library, whereas the Google Ads documentation uses `TitleCase`, so if a service method was called `GetCampaign()`, in this library it would be `getCampaign()`

### Mutations

_to-do: make this section of the docs better_

As it can be quite verbose to create a new gRPC message, especially entities in the Google Ads API which can have many fields, this library provides a `buildResource` method to handle this for you.

```javascript
// This is a regular js object, and can't be used in gRPC requests
const campaign = {
  name: "Interplanetary Cruises",
  campaignBudget: "customers/123/campaignBudgets/123",
  status: CampaignStatusEnum.CampaignStatus.ENABLED,
  advertisingChannelType: AdvertisingChannelTypeEnum.AdvertisingChannelType.SEARCH,
};

/*
  The buildResource method takes two arguments:
    1. The message type to construct (matches the Google Ads API docs)
    2. The object to convert
  
  It returns the object converted into a gRPC message instance,
  which can then be used in mutate requests/operations
*/
const pb = client.buildResource("Campaign", campaign);
console.log(pb.getName()); // "Interplanetary Cruises"
```

### Safe Mode

To prevent accidental mutations, particularly in the case of working with the library in a development or test environment, we provide a `preventMutations` client option. This essentially intercepts all requests, and sets the `validateOnly` field to `true`. This means **no mutations** will be performed when the request is recieved by the Google Ads API. Any mutation requests will simply return an empty response, but importantly, are still validated by the API, meaning you will still be aware of any errors in the request body.

Any read only API methods, such as get/list/generate, are unaffected. For example, `GoogleAdsService.search` will still function as expected, whilst `GoogleAdsService.mutate` will only validate the request. Mutations will also be prevented for more unusual services, e.g. `MutateJobService` or `RecommendationService`.

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

### Logging

This library also includes support for logging all requests made to the Google Ads API. The logging functionality was directly inspired by the official client libraries, namely [google-ads-python](https://github.com/googleads/google-ads-python#enabling-and-configuring-logging). The `logging` field of the client constructor has the following configurable settings:

```typescript
// src/logger.ts
export interface LogOptions {
  output?: "stderr" | "stdout" | "none";
  verbosity?: "debug" | "info" | "warning";
  callback?: (message: RequestLog) => void;
}
```

The default `output` is `stderr`, and verbosity level `info`. We also provide a `callback` function if you don't want to log to stdout or stderr, which is fired on every single request. In here, you could pipe the logs to your own database, or other logging solution. Log messages follow this interface definition:

```typescript
// src/logger.ts
export interface RequestLog {
  request?: {
    method?: string;
    headers?: any;
    body?: any;
  };
  response?: {
    headers?: any;
    body?: any;
    status?: any;
  };
  meta?: {
    is_mutation?: boolean;
    elapsed_ms?: number;
  };
}
```

#### Request

The `request` field contains details of the request made to the Google Ads API, including the service `method` called, the `headers` passed (which includes your authentication tokens), and the `body` of the gRPC request (converted to a standard object, from the raw binary stream).

#### Response

The `response` field contains everything recieved from the API after the call was made, regardless if it was successful or not. The `headers` field contains the response headers, notably including the `request-id`. This value is useful when sending a bug report to the Google Ads API support team. The `body` contains the raw results from the query, and `status` contains details of whether the gRPC service call was successful or not. If an error did occur in the request, `response.status` will be a descriptive error message.

An example of a successful log message as JSON (with authentication tokens removed) is shown below:

```json
{
  "request": {
    "method": "/google.ads.googleads.v2.services.GoogleAdsService/Search",
    "headers": {
      "authorization": "[REMOVED]",
      "developer-token": "[REMOVED]",
      "login-customer-id": "[REMOVED]"
    },
    "body": {
      "customerId": "123",
      "query": "SELECT campaign.id, campaign.name FROM campaign LIMIT 1",
      "pageToken": "",
      "pageSize": 0,
      "validateOnly": false,
      "returnSummaryRow": false
    }
  },
  "response": {
    "headers": {
      "content-disposition": "attachment",
      "request-id": "zRvYunvw1zXMcAi0b1rx-A",
      "date": "Fri, 15 Nov 2019 11:47:14 GMT",
      "alt-svc": "quic=\":443\"; ma=2592000; v=\"46,43\",h3-Q050=\":443\"; ma=2592000,h3-Q049=\":443\"; ma=2592000,h3-Q048=\":443\"; ma=2592000,h3-Q046=\":443\"; ma=2592000,h3-Q043=\":443\"; ma=2592000"
    },
    "body": {
      "resultsList": [
        {
          "campaign": {
            "resourceName": "customers/123/campaigns/708736728",
            "id": {
              "value": 123
            },
            "name": {
              "value": "Campaign #1"
            },
            "status": 0,
            "servingStatus": 0,
            "adServingOptimizationStatus": 0,
            "advertisingChannelType": 0,
            "advertisingChannelSubType": 0,
            "urlCustomParametersList": [],
            "labelsList": [],
            "experimentType": 0,
            "biddingStrategyType": 0,
            "frequencyCapsList": [],
            "videoBrandSafetySuitability": 0,
            "paymentMode": 0
          }
        }
      ],
      "nextPageToken": "",
      "totalResultsCount": 154,
      "fieldMask": {
        "pathsList": ["campaign.id", "campaign.name"]
      }
    },
    "status": {
      "code": 0,
      "details": "",
      "metadata": {
        "_internal_repr": {
          "content-disposition": ["attachment"],
          "request-id": ["zRvYunvw1zXMcAi0b1rx-A"]
        },
        "flags": 0
      }
    }
  },
  "meta": {
    "is_mutation": false,
    "elapsed_ms": 502
  }
}
```

If logging to stdout, or stderr (which is the default), you can pipe messages via the command line to a log file, or any other data dump.

```bash
node google-ads-node-example.js 2> example.log
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
