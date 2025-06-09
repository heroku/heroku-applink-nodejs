/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { InvocationEvent } from "../index.js";

export class InvocationEventImpl implements InvocationEvent<unknown> {
  data: unknown;
  dataContentType?: string;
  id: string;
  time?: string;

  constructor(
    data: unknown,
    dataContentType: string,
    id: string,
    time: string
  ) {
    this.data = data;
    this.dataContentType = dataContentType;
    this.id = id;
    this.time = time;
  }
}
