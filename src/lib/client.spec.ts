import grpc from "grpc";

import { GoogleAdsClient } from "./client";
import { AdvertisingChannelType, BiddingStrategyType, CampaignStatus } from "./enums";
import { SearchGoogleAdsRequest, SearchGoogleAdsResponse, Campaign } from "./types";

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
