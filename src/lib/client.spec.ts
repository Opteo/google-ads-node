import grpc from "grpc";
import GoogleAdsClient from "./client";

test("GoogleAdsClient", () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });
  expect(client).toBeInstanceOf(GoogleAdsClient);
});

test("getService", () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });

  expect(() => client.getService("NonExistentService")).toThrowError();

  const service = client.getService("GoogleAdsService");
  expect(service).toBeInstanceOf(grpc.Client);
});
