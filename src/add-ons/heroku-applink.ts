/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { HttpRequestUtil, HTTPResponseError } from "../utils/request";
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
    if (err instanceof HTTPResponseError) {
      let errorResponse;
      try {
        errorResponse = await err.response.json();
      } catch (jsonError) {
        // If JSON parsing fails, fall through to the generic error
      }

      if (errorResponse?.title && errorResponse?.detail) {
        throw new Error(`${errorResponse.title} - ${errorResponse.detail}`);
      }
    }

    throw new Error(
      `Unable to get connection ${developerName}: ${err.message}`
    );
  }

  return new OrgImpl(
    response.org.user_auth.access_token,
    response.org.api_version,
    null, // null namespace until post ga
    response.org.id,
    response.org.instance_url,
    response.org.user_auth.user_id,
    response.org.user_auth.username,
    response.org.type
  );
}
