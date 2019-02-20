import grpc from "grpc";

import GoogleAdsClient from "./client";
import { SearchGoogleAdsRequest } from "./types";

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

test("throws an unauthenticated error when access token is invalid", done => {
  const client = new GoogleAdsClient({
    access_token: ACCESS_TOKEN,
    developer_token: DEVELOPER_TOKEN,
    login_customer_id: LOGIN_CUSTOMER_ID,
  });

  const service = client.getService("GoogleAdsService");
  const request = new SearchGoogleAdsRequest();

  service.search(request, (err: Error) => {
    expect(err.message).toContain("16 UNAUTHENTICATED");
    done();
  });
});
