/*
 * Copyright (c) 2025, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

type AppUuid = string;

interface AddonConfig {
  apiUrl: string;
  token: string;
  appUuid: AppUuid;
}

export function resolveAddonConfigByAttachmentOrColor(
  attachmentOrColor: string
): AddonConfig {
  const appUuid = process.env.HEROKU_APP_ID;

  if (!appUuid) {
    throw Error(`Heroku Applink app UUID not found`);
  }

  const addon = process.env.HEROKU_APPLINK_ADDON_NAME || "HEROKU_APPLINK";

  let apiUrl;
  let token;

  // lookup by attachment
  apiUrl = process.env[`${attachmentOrColor.toUpperCase()}_API_URL`];
  token = process.env[`${attachmentOrColor.toUpperCase()}_TOKEN`];

  // if not found, lookup by color using HEROKU_APPLINK prefix for attachment name
  if (!apiUrl || !token) {
    apiUrl = process.env[`${addon}_${attachmentOrColor.toUpperCase()}_API_URL`];
    token = process.env[`${addon}_${attachmentOrColor.toUpperCase()}_TOKEN`];
  }

  if (!apiUrl || !token) {
    throw Error(
      `Heroku Applink config not found under attachment or color ${attachmentOrColor}`
    );
  }

  return {
    apiUrl,
    token,
    appUuid,
  };
}

export function resolveAddonConfigByUrl(url: string): AddonConfig {
  const appUuid = process.env.HEROKU_APP_ID;

  if (!appUuid) {
    throw Error(`Heroku Applink app UUID not found`);
  }

  // Find the environment variable ending with _API_URL that matches the given URL
  const envVarEntries = Object.entries(process.env);
  const matchingApiUrlEntry = envVarEntries.find(
    ([key, value]) =>
      key.endsWith("_API_URL") && value.toLowerCase() === url.toLowerCase()
  );

  if (!matchingApiUrlEntry) {
    throw Error(`Heroku Applink config not found for API URL: ${url}`);
  }

  // Extract the prefix from the API_URL environment variable name
  const [envVarName] = matchingApiUrlEntry;
  const prefix = envVarName.slice(0, -"_API_URL".length); // Remove '_API_URL' suffix

  // Look for corresponding token
  const token = process.env[`${prefix}_TOKEN`];
  if (!token) {
    throw Error(`Heroku Applink token not found for API URL: ${url}`);
  }

  return {
    apiUrl: matchingApiUrlEntry[1],
    token,
    appUuid,
  };
}
