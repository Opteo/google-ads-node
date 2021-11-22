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

function main(customerId, customerClient) {
  // [START googleads_v9_generated_CustomerService_CreateCustomerClient_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Manager under whom client customer is being created.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The new client customer to create. The resource name on this customer
   *  will be ignored.
   */
  // const customerClient = {}
  /**
   *  Email address of the user who should be invited on the created client
   *  customer. Accessible only to customers on the allow-list.
   */
  // const emailAddress = 'abc123'
  /**
   *  The proposed role of user on the created client customer.
   *  Accessible only to customers on the allow-list.
   */
  // const accessRole = {}
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {CustomerServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new CustomerServiceClient();

  async function callCreateCustomerClient() {
    // Construct request
    const request = {
      customerId,
      customerClient,
    };

    // Run request
    const response = await googleadsClient.createCustomerClient(request);
    console.log(response);
  }

  callCreateCustomerClient();
  // [END googleads_v9_generated_CustomerService_CreateCustomerClient_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
