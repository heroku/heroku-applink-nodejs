/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { User } from "../index.js";

export class UserImpl implements User {
  readonly id: string;
  readonly username: string;

  constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
  }
}
