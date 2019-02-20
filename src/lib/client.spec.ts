import grpc from "grpc";

import GoogleAdsClient from "./client";
import { SearchGoogleAdsRequest } from "./types";

test("GoogleAdsClient", () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
    login_customer_id: "abc123",
  });
  expect(client).toBeInstanceOf(GoogleAdsClient);
});

test("getService", () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });

  expect(() => client.getService("NonExistentService")).toThrowError();
  expect(() => client.getService("GoogleAdssService")).toThrowError();

  const service = client.getService("GoogleAdsService");
  expect(service).toBeInstanceOf(grpc.Client);
});

test("ExceptionInterceptor", done => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });

  const service = client.getService("GoogleAdsService");
  const request = new SearchGoogleAdsRequest();

  service.search(request, (err: Error) => {
    expect(err.message).toContain("16 UNAUTHENTICATED");
    done();
  });
});
