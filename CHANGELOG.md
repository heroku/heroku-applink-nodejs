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

## [1.0.0-ea.2] - 2025-06-20
- Update `HttpRequestUtil.request` documentation
- Update license year
- Add `X-Request-Id` header
- Extract `User-Agent` header from package.json
- Rename `HTTPResponseError` -> `HttpResponseError`
- Add GitHub pull request template
- Fix Java heap memory test issue

## [1.0.0] - 2025-07-29
- Bug fix in the Query and Ingestion calls to Datacloud

## [1.0.1] - 2025-11-10
- Switch CODEOWNERS to heroku-applink team

## [1.0.2-beta.1] - 2026-01-28
- Dependabot Security Updates
    - Bump jws from 3.2.2 to 3.2.3
    - Bump mdast-util-to-hast from 13.2.0 to 13.2.1
    - Bump lodash from 4.17.21 to 4.17.23
    - Bump js-yaml from 3.14.1 to 3.14.2 and 4.1.0 to 4.1.1