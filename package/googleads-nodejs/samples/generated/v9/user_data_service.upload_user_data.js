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

function main(customerId, operations) {
  // [START googleads_v9_generated_UserDataService_UploadUserData_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer for which to update the user data.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The list of operations to be done.
   */
  // const operations = 1234
  /**
   *  Metadata for data updates to a Customer Match user list.
   */
  // const customerMatchUserListMetadata = {}

  // Imports the Googleads library
  const {UserDataServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new UserDataServiceClient();

  async function callUploadUserData() {
    // Construct request
    const request = {
      customerId,
      operations,
    };

    // Run request
    const response = await googleadsClient.uploadUserData(request);
    console.log(response);
  }

  callUploadUserData();
  // [END googleads_v9_generated_UserDataService_UploadUserData_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
