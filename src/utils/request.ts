/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { randomUUID } from "node:crypto";
import packageJson from "../../package.json";

/** Error thrown by the SDK when receiving non-2xx responses on HTTP requests. */
export class HttpResponseError extends Error {
  response: any;
  constructor(response: Response) {
    super(`HTTP Error Response: ${response.status}: ${response.statusText}`);
    this.response = response;
  }
}

/**
 * UUID generator utility wrapping node:crypto's randomUUID for stubbing in tests
 */
export const uuidGenerator = {
  generate: () => randomUUID(),
};

/**
 * Handles HTTP requests.
 */
export class HttpRequestUtil {
  /**
   * Makes an HTTP request
   *
   * @param url - The URL to make the request to
   * @param opts - Fetch request options (method, headers, body, etc.). Headers will be merged
   *               with default User-Agent and X-Request-ID headers.
   * @param json - Whether to parse the response as JSON (default: true). If false,
   *               returns the raw Response object
   * @returns Promise that resolves to the parsed JSON response (if json=true) or
   *          the raw Response object (if json=false)
   * @throws {HttpResponseError} When the response status is not in the 2xx range
   */
  async request(url: string, opts: any, json = true) {
    const mergedOpts = {
      ...opts,
      headers: {
        "User-Agent": `${packageJson.name}/${packageJson.version}`,
        "X-Request-Id": uuidGenerator.generate(),
        ...(opts?.headers ?? {}),
      },
    };

    const response = await fetch(url, mergedOpts);

    if (!response.ok) {
      throw new HttpResponseError(response);
    }

    return json ? response.json() : response;
  }
}
