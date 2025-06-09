/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Connection } from "jsforce/lib/connection.js";

export type CreateConnectionOptions = {
  accessToken: string;
  instanceUrl: string;
  version: string;
};

export function createConnection(options: CreateConnectionOptions) {
  const { accessToken, instanceUrl, version } = options;
  return new Connection({
    accessToken,
    instanceUrl,
    version,
    callOptions: {
      client: `salesforce-sdk-nodejs-v1:${process.env.npm_package_version}`,
    },
  });
}
