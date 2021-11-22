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

function main() {
  // [START googleads_v9_generated_GeoTargetConstantService_SuggestGeoTargetConstants_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  If possible, returned geo targets are translated using this locale. If not,
   *  en is used by default. This is also used as a hint for returned geo
   *  targets.
   */
  // const locale = 'abc123'
  /**
   *  Returned geo targets are restricted to this country code.
   */
  // const countryCode = 'abc123'
  /**
   *  The location names to search by. At most 25 names can be set.
   */
  // const locationNames = {}
  /**
   *  The geo target constant resource names to filter by.
   */
  // const geoTargets = {}

  // Imports the Googleads library
  const {GeoTargetConstantServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new GeoTargetConstantServiceClient();

  async function callSuggestGeoTargetConstants() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await googleadsClient.suggestGeoTargetConstants(request);
    console.log(response);
  }

  callSuggestGeoTargetConstants();
  // [END googleads_v9_generated_GeoTargetConstantService_SuggestGeoTargetConstants_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
