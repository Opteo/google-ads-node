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

function main(customerId, conversions, partialFailure) {
  // [START googleads_v9_generated_ConversionUploadService_UploadClickConversions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer performing the upload.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The conversions that are being uploaded.
   */
  // const conversions = 1234
  /**
   *  Required. If true, successful operations will be carried out and invalid
   *  operations will return errors. If false, all operations will be carried
   *  out in one transaction if and only if they are all valid.
   *  This should always be set to true.
   *  See
   *  https://developers.google.com/google-ads/api/docs/best-practices/partial-failures
   *  for more information about partial failure.
   */
  // const partialFailure = true
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {ConversionUploadServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new ConversionUploadServiceClient();

  async function callUploadClickConversions() {
    // Construct request
    const request = {
      customerId,
      conversions,
      partialFailure,
    };

    // Run request
    const response = await googleadsClient.uploadClickConversions(request);
    console.log(response);
  }

  callUploadClickConversions();
  // [END googleads_v9_generated_ConversionUploadService_UploadClickConversions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
