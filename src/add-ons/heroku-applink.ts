/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { HttpRequestUtil } from "../utils/request";
import { OrgImpl } from "../sdk/org";
import { Org } from "../index";
import {
  resolveAddonConfigByAttachment,
  resolveAddonConfigByUrl,
} from "~/utils/addon-config";

const HTTP_REQUEST = new HttpRequestUtil();

/**
 * Get stored Salesforce or Data Cloud org user credentials for given developer name or alias.
 * @param developerName or alias
 * @param attachmentNameOrUrl Either an attachment name (e.g. "HEROKU_APPLINK") or a full URL. Defaults to "HEROKU_APPLINK"
 * @returns Org
 */
export async function getAuthorization(
  developerName: string,
  attachmentNameOrUrl = "HEROKU_APPLINK"
): Promise<Org> {
  if (!developerName) {
    throw Error(`Developer name not provided`);
  }

  // Check if the attachmentNameOrUrl is a URL by attempting to parse it
  let resolveConfigByUrl = false;
  try {
    new URL(attachmentNameOrUrl);
    resolveConfigByUrl = true;
  } catch {
    resolveConfigByUrl = false;
  }

  const config = resolveConfigByUrl
    ? resolveAddonConfigByUrl(attachmentNameOrUrl)
    : resolveAddonConfigByAttachment(attachmentNameOrUrl);

  const authUrl = `${config.apiUrl}/authorizations/${developerName}`;
  const opts = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
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
