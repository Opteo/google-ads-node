import grpc from "grpc";

import { GoogleAdsClient } from "./client";
import { AdvertisingChannelType, BiddingStrategyType, CampaignStatus } from "./enums";
import {
  SearchGoogleAdsRequest,
  SearchGoogleAdsResponse,
  Campaign,
  SuggestGeoTargetConstantsRequest,
  AdGroupCriterion,
  AdGroupAd,
  CustomInterest,
} from "./types";

const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const CLIENT_ID = "CLIENT_ID";
const CLIENT_SECRET = "CLIENT_ID";
const DEVELOPER_TOKEN = "DEVELOPER_TOKEN";
const LOGIN_CUSTOMER_ID = "LOGIN_CUSTOMER_ID";

test("new client with access token", () => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });
  expect(client).toBeInstanceOf(GoogleAdsClient);
});

test("new client with refresh token", () => {
  const client = new GoogleAdsClient({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: REFRESH_TOKEN,
    developer_token: DEVELOPER_TOKEN,
  });
  expect(client).toBeInstanceOf(GoogleAdsClient);
});

test("new client fails when missing developer token", () => {
  expect(() => {
    // @ts-ignore
    const client = new GoogleAdsClient({
      access_token: ACCESS_TOKEN,
    });
  }).toThrow("Missing required");
});

test("new client fails when not using valid options interface", () => {
  expect(() => {
    // @ts-ignore
    const client = new GoogleAdsClient({
      client_id: CLIENT_ID,
      refresh_token: REFRESH_TOKEN,
      developer_token: DEVELOPER_TOKEN,
    });
  }).toThrow("Missing required keys");
});

test("new client from config", () => {
  const client = new GoogleAdsClient();
  expect(client).toBeInstanceOf(GoogleAdsClient);
});

test("new client from config with path", () => {
  const client = new GoogleAdsClient("./googleads.config.js");
  expect(client).toBeInstanceOf(GoogleAdsClient);
});

test("new client fails when config file does not exist", () => {
  expect(() => {
    // @ts-ignore
    const client = new GoogleAdsClient("./notfound.config.js");
  }).toThrow();
});

test("loading api services", () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });

  expect(() => client.getService("NonExistentService")).toThrowError();
  expect(() => client.getService("GoogleAdssService")).toThrowError();

  const service = client.getService("GoogleAdsService");
  expect(service).toBeInstanceOf(grpc.Client);
});

test("correctly builds a grpc resource from an object", () => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const campaign = {
    name: "Interplanetary Flights",
    advertising_channel_type: AdvertisingChannelType.SEARCH,
    status: CampaignStatus.PAUSED,
    bidding_strategy_type: BiddingStrategyType.MANUAL_CPC,
    campaign_budget: "resources/123/campaignBudgets/321",
    manual_cpc: {
      enhanced_cpc_enabled: true,
    },
  };

  const protobuf = client.buildResource("Campaign", campaign) as Campaign;

  expect(protobuf instanceof Campaign);

  expect((protobuf.getName() as any).toObject().value).toEqual("Interplanetary Flights");
  expect(protobuf.getStatus()).toEqual(3);

  expect((protobuf.getManualCpc() as any).toObject()).toEqual({
    enhancedCpcEnabled: { value: true },
  });
});

test("correctly builds a complex and deeply nested grpc resource", () => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const ad = {
    ad_group: "customers/123/adGroups/321",
    status: 3,
    ad: {
      final_urls: ["http://www.example.com"],
      type: 3,
      name: "best ad ever",
      expanded_text_ad: {
        headline_part1: "Cruise to Mars #%d",
        headline_part2: "Best Space Cruise Line",
        description: "Buy your tickets now!",
        path1: "all-inclusive",
        path2: "deals",
      },
      url_custom_parameters: [
        { key: "season", value: "easter123" },
        { key: "promocode", value: "nj123" },
      ],
    },
  };

  const protobuf = client.buildResource("AdGroupAd", ad) as AdGroupAd;

  expect(protobuf instanceof AdGroupAd);
  expect(protobuf.toObject()).toEqual(
    expect.objectContaining({
      status: 3,
      adGroup: { value: "customers/123/adGroups/321" },
      ad: expect.objectContaining({
        finalUrlsList: [{ value: "http://www.example.com" }],
        type: 3,
        name: { value: "best ad ever" },
        expandedTextAd: expect.objectContaining({
          headlinePart1: { value: "Cruise to Mars #%d" },
          headlinePart2: { value: "Best Space Cruise Line" },
          description: { value: "Buy your tickets now!" },
          path1: { value: "all-inclusive" },
          path2: { value: "deals" },
        }),
        urlCustomParametersList: [
          { key: { value: "season" }, value: { value: "easter123" } },
          { key: { value: "promocode" }, value: { value: "nj123" } },
        ],
      }),
    })
  );
});

test("correctly builds a grpc request from an object", () => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const suggestGeoTargetConstantsRequest = {
    locale: "gb",
    country_code: "GB",
    location_names: {
      names: ["location1", "location2"],
    },
  };

  const protobuf = client.buildResource(
    "SuggestGeoTargetConstantsRequest",
    suggestGeoTargetConstantsRequest
  ) as SuggestGeoTargetConstantsRequest;

  expect(protobuf instanceof SuggestGeoTargetConstantsRequest);
  expect((protobuf.getCountryCode() as any).toObject().value).toEqual("GB");
  expect(protobuf.toObject()).toEqual({
    locale: { value: "gb" },
    countryCode: { value: "GB" },
    locationNames: {
      namesList: [{ value: "location1" }, { value: "location2" }],
    },
  });
});

test("correctly builds a keyword request from an object", () => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const ad_group_criterion = {
    status: 2,
    keyword: {
      text: "some_keyword",
      match_type: 2,
    },
  };

  const protobuf = client.buildResource("AdGroupCriterion", ad_group_criterion) as AdGroupCriterion;

  expect(protobuf.toObject()).toEqual(
    expect.objectContaining({
      status: 2,
      keyword: {
        text: {
          value: "some_keyword",
        },
        matchType: 2,
      },
    })
  );
});

test("correctly builds a custom interest resource from an object", () => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const custom_interest = {
    type: 3,
    name: "I like dogs",
    description: "We love dogs, dogs are the best",
    members: [{ member_type: 2, parameter: "dog" }],
  };

  const protobuf = client.buildResource("CustomInterest", custom_interest) as CustomInterest;

  expect(protobuf.toObject()).toEqual(
    expect.objectContaining({
      type: 3,
      name: {
        value: "I like dogs",
      },
      description: {
        value: "We love dogs, dogs are the best",
      },
      membersList: [
        {
          memberType: 2,
          parameter: { value: "dog" },
        },
      ],
    })
  );
});

test("throws an error when attempting to build a non-existent resource", done => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  try {
    client.buildResource("GoogleAds", {});
  } catch (err) {
    expect(err.message).toContain("does not exist");
    done();
  }
});

test("throws an unauthenticated error when access token is invalid", async done => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const service = client.getService("GoogleAdsService");
  const request = new SearchGoogleAdsRequest();

  await service.search(request).catch((err: Error, res: SearchGoogleAdsResponse) => {
    expect(res).toBe(undefined);
    expect(err.message).toContain("16 UNAUTHENTICATED");
    done();
  });
});

test("supports using callbacks instead of async service calls", done => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const service = client.getService("GoogleAdsService");
  const request = new SearchGoogleAdsRequest();

  service.search(request, (err: Error, res: SearchGoogleAdsResponse) => {
    expect(res).toBe(undefined);
    expect(err.message).toContain("16 UNAUTHENTICATED");
    done();
  });
});

test("supports usage of an async access token getter function", async () => {
  expect.assertions(6);
  let tokenGetterCalled = "";

  async function accessTokenGetter(clientId: string, clientSecret: string, refreshToken: string) {
    tokenGetterCalled = await new Promise(resolve =>
      setTimeout(() => resolve("<access-token>"), 1000)
    );
    expect(clientId).toEqual(CLIENT_ID);
    expect(clientSecret).toEqual(CLIENT_SECRET);
    expect(refreshToken).toEqual(REFRESH_TOKEN);
    return "<access-token>";
  }

  const client = new GoogleAdsClient({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: REFRESH_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    accessTokenGetter,
  });

  /* Do a service request so the accessTokenGetter is called */
  const service = client.getService("GoogleAdsService");
  const request = new SearchGoogleAdsRequest();
  await expect(service.search(request)).rejects.toThrow();

  expect(client).toBeInstanceOf(GoogleAdsClient);
  expect(tokenGetterCalled).toEqual("<access-token>");
});

test("correctly uses logging options", async () => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
    logging: {
      output: "none",
      verbosity: "info",
      callback(message) {
        expect(message.request).toEqual({
          body: {
            customerId: "",
            pageSize: 0,
            pageToken: "",
            query: "",
            returnSummaryRow: false,
            validateOnly: false,
          },
          headers: {
            authorization: "Bearer ACCESS_TOKEN",
            "developer-token": "DEVELOPER_TOKEN",
            "login-customer-id": "LOGIN_CUSTOMER_ID",
          },
          method: "/google.ads.googleads.v2.services.GoogleAdsService/Search",
        });
      },
    },
  });

  const service = client.getService("GoogleAdsService");
  const request = new SearchGoogleAdsRequest();
  // It should also throw since we have no auth
  await expect(service.search(request)).rejects.toThrow();
});
