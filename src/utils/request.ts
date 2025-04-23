/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import fetch from "node-fetch";

/**
 * Handles HTTP requests.
 */
export class HttpRequestUtil {
  async request(url: string, opts: any, json = true) {
    const response = await fetch(url, opts);
    return json ? response.json() : response;
  }
}
