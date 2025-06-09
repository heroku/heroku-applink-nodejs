/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {
  DataCloudApi,
  DataCloudQuery,
  DataCloudQueryResponse,
  DataCloudUpsertResponse,
} from "../index.js";
import { HttpRequestUtil } from "../utils/request";

export class DataCloudApiImpl implements DataCloudApi {
  readonly accessToken: string;
  private readonly domainUrl: string;
  private request: HttpRequestUtil;

  constructor(accessToken: string, domainUrl: string) {
    this.accessToken = accessToken;
    this.domainUrl = domainUrl;
    this.request = new HttpRequestUtil();
  }

  async query(sql: DataCloudQuery): Promise<DataCloudQueryResponse> {
    const url = `${this.domainUrl}/api/v2/query`;
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      retry: {
        limit: 1,
      },
      json: sql,
    };
    const response = await this.request.request(url, opts);
    return response as DataCloudQueryResponse;
  }

  async queryNextBatch(nextBatchId: string): Promise<DataCloudQueryResponse> {
    const url = `${this.domainUrl}/api/v2/query/${nextBatchId}`;
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      retry: {
        limit: 1,
      },
    };
    const response = await this.request.request(url, opts);
    return response as DataCloudQueryResponse;
  }

  async upsert(
    name: string,
    objectName: string,
    data: any
  ): Promise<DataCloudUpsertResponse> {
    const url = `${this.domainUrl}/api/v1/ingest/sources/${name}/${objectName}`;
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      retry: {
        limit: 1,
      },
      json: data,
    };
    const response = await this.request.request(url, opts);
    return response as DataCloudUpsertResponse;
  }
}
