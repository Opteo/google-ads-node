import GoogleAdsClient from "./client";

test("GoogleAdsClient", () => {
  const client = new GoogleAdsClient({
    client_id: "123",
    client_secret: "123",
    refresh_token: "123",
    developer_token: "123",
  });
  expect(client).toBeInstanceOf(GoogleAdsClient);
});
