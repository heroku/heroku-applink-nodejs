/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { HttpRequestUtil } from "../utils/request";
import { OrgImpl } from "../sdk/org";
import { Org } from "../index";

const HTTP_REQUEST = new HttpRequestUtil();

/**
 * Get stored Salesforce or Data Cloud org user credentials for given name or alias.
 * @param name or alias
 * @returns Org
 */
export async function getConnection(name: string): Promise<Org> {
  if (!name) {
    throw Error(`Connection name not provided`);
  }

  const addonEndpoint =
    process.env.HEROKU_INTEGRATION_API_URL ||
    process.env.HEROKU_INTEGRATION_STAGING_API_URL;
  if (!addonEndpoint) {
    throw Error(
      `Heroku Integration add-on not provisioned on app or endpoint not provided`
    );
  }

  const addonAuthToken = process.env.HEROKU_INTEGRATION_TOKEN;
  if (!addonAuthToken) {
    throw Error(
      `Heroku Integration add-on not provisioned on app or authorization token not found`
    );
  }

  const authUrl = `${addonEndpoint}/invocations/authorization`;
  const opts = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${addonAuthToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      org_name: name,
    }),
    retry: {
      limit: 1,
    },
  };

  let response;
  try {
    response = await HTTP_REQUEST.request(authUrl, opts);
  } catch (err) {
    throw new Error(`Unable to get connection ${name}: ${err.message}`);
  }

  if (response.message) {
    throw new Error(response.message);
  }

  return new OrgImpl(
    response.access_token,
    response.api_version,
    response.namespace,
    response.org_id,
    response.org_domain_url,
    response.user_id,
    response.username,
    response.datacloud_token,
    response.datacloud_instance_url
  );
}
