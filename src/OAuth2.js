import { Service } from './Service';
import { STORAGE_PREFIX_ } from './Consts';

// Copyright 2014 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @file Contains the methods exposed by the library, and performs
 * any required setup.
 */

/**
 * Creates a new OAuth2 service with the name specified. It's usually best to
 * create and configure your service once at the start of your script, and then
 * reference them during the different phases of the authorization flow.
 * @param {string} serviceName The name of the service.
 * @return {Service} The service object.
 */
export function createService(serviceName) {
  return new Service(serviceName);
}

/**
 * Gets the list of services with tokens stored in the given property store.
 * This is useful if you connect to the same API with multiple accounts and
 * need to keep track of them. If no stored tokens are found this will return
 * an empty array.
 * @param {PropertiesService.Properties} propertyStore The properties to check.
 * @return {Array.<string>} The service names.
 */
export function getServiceNames(propertyStore) {
  var props = propertyStore.getProperties();
  return Object.keys(props).filter(key => {
    var parts = key.split('.');
    return key.indexOf(STORAGE_PREFIX_) == 0 && parts.length > 1 && parts[1];
  }).map(key => {
    return key.split('.')[1];
  }).reduce((result, key) => {
    if (result.indexOf(key) < 0) {
      result.push(key);
    }
    return result;
  }, []);
}
