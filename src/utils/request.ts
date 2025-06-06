/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import fs from "fs";
import path from "path";

/** Error thrown by the SDK when receiving non-2xx responses on HTTP requests. */
export class HTTPResponseError extends Error {
  response: any;
  constructor(response: Response) {
    super(`HTTP Error Response: ${response.status}: ${response.statusText}`);
    this.response = response;
  }
}

/**
 * Handles HTTP requests.
 */
export class HttpRequestUtil {
  async request(url: string, opts: any, json = true) {
    const defaultOpts = {
      headers: {
        "User-Agent": `heroku-applink-node-sdk/1.0`,
      },
    };

    const response = await fetch(url, { ...defaultOpts, ...opts });

    if (!response.ok) {
      throw new HTTPResponseError(response);
    }

    return json ? response.json() : response;
  }
}
