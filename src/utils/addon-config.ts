/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

interface AddonConfig {
  apiUrl: string;
  token: string;
}

export function resolveAddonConfigByAttachment(
  attachment: string
): AddonConfig {
  const apiUrl = process.env[`${attachment.toUpperCase()}_API_URL`];
  const token = process.env[`${attachment.toUpperCase()}_TOKEN`];

  if (!apiUrl || !token) {
    throw Error(
      `Heroku Applink config not found under attachment ${attachment}`
    );
  }

  return {
    apiUrl,
    token,
  };
}

export function resolveAddonConfigByUrl(url: string): AddonConfig {
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
  };
}
