/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Context, Org } from "../index.js";
import { OrgImpl } from "./org.js";

export class ContextImpl implements Context {
  readonly id: string;
  readonly org?: Org;

  constructor(
    accessToken: string,
    apiVersion: string,
    id: string,
    namespace: string,
    orgId: string,
    orgDomainUrl: string,
    userId: string,
    username: string,
    orgType: "SalesforceOrg" | "DataCloudOrg" | "DatacloudOrg" // DatacloudOrg for legacy Pilot/Ruby
  ) {
    this.id = id;
    this.org = new OrgImpl(
      accessToken,
      apiVersion,
      namespace,
      orgId,
      orgDomainUrl,
      userId,
      username,
      orgType
    );
  }
}
