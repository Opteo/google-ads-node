// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(customerId, plannableLocationId, currencyCode, budgetMicros) {
  // [START googleads_v9_generated_ReachPlanService_GenerateProductMixIdeas_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The ID of the location, this is one of the ids returned by
   *  ReachPlanService.ListPlannableLocations google.ads.googleads.v9.services.ReachPlanService.ListPlannableLocations.
   */
  // const plannableLocationId = 'abc123'
  /**
   *  Required. Currency code.
   *  Three-character ISO 4217 currency code.
   */
  // const currencyCode = 'abc123'
  /**
   *  Required. Total budget.
   *  Amount in micros. One million is equivalent to one unit.
   */
  // const budgetMicros = 1234
  /**
   *  The preferences of the suggested product mix.
   *  An unset preference is interpreted as all possible values are allowed,
   *  unless explicitly specified.
   */
  // const preferences = {}

  // Imports the Googleads library
  const {ReachPlanServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new ReachPlanServiceClient();

  async function callGenerateProductMixIdeas() {
    // Construct request
    const request = {
      customerId,
      plannableLocationId,
      currencyCode,
      budgetMicros,
    };

    // Run request
    const response = await googleadsClient.generateProductMixIdeas(request);
    console.log(response);
  }

  callGenerateProductMixIdeas();
  // [END googleads_v9_generated_ReachPlanService_GenerateProductMixIdeas_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
