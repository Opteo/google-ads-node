import Auth from "./auth";

function newAuth() {
  return new Auth({
    clientId: "abc123",
    clientSecret: "abc123",
    refreshToken: "abc123",
  });
}

test("new auth client", () => {
  const auth = newAuth();
  expect(auth).toBeInstanceOf(Auth);
});

test("fails when refreshing with invalid refresh token", async () => {
  const auth = newAuth();
  await expect(auth.getAccessToken()).rejects.toThrow("Failed to refresh access token");
});
