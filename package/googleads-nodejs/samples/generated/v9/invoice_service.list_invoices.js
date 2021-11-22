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

function main(customerId, billingSetup, issueYear, issueMonth) {
  // [START googleads_v9_generated_InvoiceService_ListInvoices_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer to fetch invoices for.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The billing setup resource name of the requested invoices.
   *  `customers/{customer_id}/billingSetups/{billing_setup_id}`
   */
  // const billingSetup = 'abc123'
  /**
   *  Required. The issue year to retrieve invoices, in yyyy format. Only
   *  invoices issued in 2019 or later can be retrieved.
   */
  // const issueYear = 'abc123'
  /**
   *  Required. The issue month to retrieve invoices.
   */
  // const issueMonth = {}

  // Imports the Googleads library
  const {InvoiceServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new InvoiceServiceClient();

  async function callListInvoices() {
    // Construct request
    const request = {
      customerId,
      billingSetup,
      issueYear,
      issueMonth,
    };

    // Run request
    const response = await googleadsClient.listInvoices(request);
    console.log(response);
  }

  callListInvoices();
  // [END googleads_v9_generated_InvoiceService_ListInvoices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
