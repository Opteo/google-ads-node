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

function main(customerId, accountLink) {
  // [START googleads_v9_generated_AccountLinkService_CreateAccountLink_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer for which the account link is created.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The account link to be created.
   */
  // const accountLink = {}

  // Imports the Googleads library
  const {AccountLinkServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new AccountLinkServiceClient();

  async function callCreateAccountLink() {
    // Construct request
    const request = {
      customerId,
      accountLink,
    };

    // Run request
    const response = await googleadsClient.createAccountLink(request);
    console.log(response);
  }

  callCreateAccountLink();
  // [END googleads_v9_generated_AccountLinkService_CreateAccountLink_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
