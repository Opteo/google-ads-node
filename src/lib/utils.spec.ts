import { formatCallResults } from "./utils";

test("proto object result is generated from field mask", () => {
  const fakeResponse = [
    {
      campaign: {
        resourceName: "customers/123/campaigns/123",
        id: { value: 123 },
        targetCpa: undefined,
        name: { value: "<campaign-name>" },
        status: 0,
        manualCpc: undefined,
        manualCpv: undefined,
      },
      metrics: {
        cost: { value: 100 },
        clicks: undefined,
      },
    },
  ];
  const fieldMask = { pathsList: ["campaign.id", "campaign.name", "metrics.cost"] };
  const parsedResults = formatCallResults(fakeResponse, fieldMask);

  expect(parsedResults).toEqual([
    {
      campaign: {
        resourceName: "customers/123/campaigns/123",
        id: 123,
        name: "<campaign-name>",
      },
      metrics: {
        cost: 100,
      },
    },
  ]);
});

test("proto object result can be parsed for deeply nested entities", () => {});
