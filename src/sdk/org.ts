/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { BulkApi, DataApi, DataCloudApi, Org, User } from "../index.js";
import { createBulkApi } from "./bulk-api";
import { DataApiImpl } from "./data-api.js";
import { DataCloudApiImpl } from "./data-cloud-api.js";
import { HttpRequestUtil } from "../utils/request";
import { UserImpl } from "./user.js";

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
    dataCloudAccessToken?: string,
    dataCloudInstanceUrl?: string
  ) {
    this.accessToken = accessToken;
    this.apiVersion = apiVersion.startsWith('v') ? apiVersion.substring(1) : apiVersion;
    this.domainUrl = orgDomainUrl.startsWith('http') ? orgDomainUrl : `https://${orgDomainUrl}`;
    this.id = orgId;
    this.namespace = namespace === null || namespace === 'null' ? '' : namespace;

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

    if (dataCloudAccessToken && dataCloudInstanceUrl) {
      this.dataCloudApi = new DataCloudApiImpl(
        dataCloudAccessToken,
        dataCloudInstanceUrl
      );
    }

    this.user = new UserImpl(userId, username);
  }

  async request(fullUrlOrUrlPart: string, opts: any, json = true) {
    const url = fullUrlOrUrlPart.startsWith('http')
      ? fullUrlOrUrlPart
      : `${this.domainUrl}/${fullUrlOrUrlPart}`;
    const updatedOpts = opts || {};
    updatedOpts.headers = updatedOpts.headers || {};
    if (!updatedOpts.headers['Authorization']) {
      updatedOpts.headers['Authorization'] = `Bearer ${this.accessToken}`;
    }

    return HTTP_REQUEST.request(url, updatedOpts, json);
  }
}
