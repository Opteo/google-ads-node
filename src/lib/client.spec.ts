import grpc from "grpc";
import GoogleAdsClient from "./client";

test("GoogleAdsClient", () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });
  expect(client).toBeInstanceOf(GoogleAdsClient);
});

test("getRequestMetadata", () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });
  expect(client.getRequestMetadata()).toEqual({
    authorization: "Bearer 123",
    "developer-token": "123",
  });

  // const clientWithLoginCustomerId = new GoogleAdsClient({
  //   access_token: "123",
  //   developer_token: "123",
  //   login_customer_id: "123",
  // });
  // expect(clientWithLoginCustomerId).toMatchObject({ "login-customer-id": "123" });
});

test("getService", async () => {
  const client = new GoogleAdsClient({
    access_token: "123",
    developer_token: "123",
  });

  expect(() => client.getService("NonExistentService")).toThrowError();

  const service = await client.getService("GoogleAdsService");
  expect(service).toBeInstanceOf(grpc.Client);
});
