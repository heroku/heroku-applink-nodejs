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
  resolveAddonConfigByAttachmentOrColor,
  resolveAddonConfigByUrl,
} from "../utils/addon-config";

const HTTP_REQUEST = new HttpRequestUtil();

/**
 * Get stored Salesforce or Data Cloud org user credentials for given developer name or alias.
 * @param developerName or alias
 * @param attachmentNameOrColorOrUrl Either an attachment name, (e.g. "HEROKU_APPLINK"), color (e.g. "purple" in "HEROKU_APPLINK_PURPLE") or the value of the attachment's API_URL config. Defaults to "HEROKU_APPLINK"
 * @returns Org
 */
export async function getAuthorization(
  developerName: string,
  attachmentNameOrColorOrUrl = process.env.HEROKU_APPLINK_ADDON_NAME ||
    "HEROKU_APPLINK"
): Promise<Org> {
  if (!developerName) {
    throw Error(`Developer name not provided`);
  }

  let resolveConfigByUrl = false;
  try {
    new URL(attachmentNameOrColorOrUrl);
    resolveConfigByUrl = true;
  } catch {
    resolveConfigByUrl = false;
  }

  const config = resolveConfigByUrl
    ? resolveAddonConfigByUrl(attachmentNameOrColorOrUrl)
    : resolveAddonConfigByAttachmentOrColor(attachmentNameOrColorOrUrl);

  const authUrl = `${config.apiUrl}/invocations/authorization`;
  const opts = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      org_name: developerName,
    }),
    retry: {
      limit: 1,
    },
  };

  let response;
  try {
    response = await HTTP_REQUEST.request(authUrl, opts);
  } catch (err) {
    throw new Error(
      `Unable to get connection ${developerName}: ${err.message}`
    );
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
