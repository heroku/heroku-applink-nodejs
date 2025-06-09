# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.1.0-ea] - 2024-08-12

- Initial

## [1.0.0-ea] - 2025-06-05
- Update CODEOWNERS
- Updated `getAuthorization` to use the correct API URL.
- Rename `getConnection(name: string)` -> `getAuthorization(developerName: string, attachmentNameOrColorUrl = "HEROKU_APPLINK")`, accepting a new attachmentNameOrColorOrUrl to use a specific Applink addon's config.
- Remove node-fetch in favor of native fetch, add `HTTPResponseError`

## [1.0.0-ea.0] - 2025-06-06
- Add `X-App-UUID` header, `heroku-applink-node-sdk` UA.

## [1.0.0-ea.1] - 2025-06-06
- Remove dynamic UA.

## [Unreleased]
- Update `HttpRequestUtil.request` documentation
- Update license year
