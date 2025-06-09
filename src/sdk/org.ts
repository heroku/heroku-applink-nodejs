/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { BulkApi, DataApi, DataCloudApi, Org, User } from "../index";
import { createBulkApi } from "./bulk-api";
import { DataApiImpl } from "./data-api";
import { DataCloudApiImpl } from "./data-cloud-api";
import { HttpRequestUtil } from "../utils/request";
import { UserImpl } from "./user";

const HTTP_REQUEST = new HttpRequestUtil();

export class OrgImpl implements Org {
  readonly accessToken: string;
  readonly apiVersion: string;
  readonly bulkApi: BulkApi;
  readonly dataApi: DataApi;
  readonly dataCloudApi?: DataCloudApi;
  readonly domainUrl: string;
  readonly id: string;
  readonly namespace: string;
  readonly user: User;

  constructor(
    accessToken: string,
    apiVersion: string,
    namespace: string,
    orgId: string,
    orgDomainUrl: string,
    userId: string,
    username: string,
    orgType: "SalesforceOrg" | "DataCloudOrg" | "DatacloudOrg" // DatacloudOrg for legacy Pilot/Ruby
  ) {
    this.accessToken = accessToken;
    this.apiVersion = apiVersion.startsWith("v")
      ? apiVersion.substring(1)
      : apiVersion;
    this.domainUrl = orgDomainUrl.startsWith("http")
      ? orgDomainUrl
      : `https://${orgDomainUrl}`;
    this.id = orgId;
    this.namespace =
      namespace === null || namespace === "null" ? "" : namespace;

    this.bulkApi = createBulkApi({
      instanceUrl: this.domainUrl,
      version: this.apiVersion,
      accessToken,
    });

    this.dataApi = new DataApiImpl(
      accessToken,
      this.apiVersion,
      this.domainUrl
    );

    if (orgType === "DataCloudOrg" || orgType === "DatacloudOrg") {
      this.dataCloudApi = new DataCloudApiImpl(accessToken, orgDomainUrl);
    }

    this.user = new UserImpl(userId, username);
  }

  async request(fullUrlOrUrlPart: string, opts: any, json = true) {
    const url = fullUrlOrUrlPart.startsWith("http")
      ? fullUrlOrUrlPart
      : `${this.domainUrl}/${fullUrlOrUrlPart}`;
    const updatedOpts = opts || {};
    updatedOpts.headers = updatedOpts.headers || {};
    if (!updatedOpts.headers["Authorization"]) {
      updatedOpts.headers["Authorization"] = `Bearer ${this.accessToken}`;
    }

    return HTTP_REQUEST.request(url, updatedOpts, json);
  }
}
