# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.0-ea.2](https://github.com/heroku/heroku-applink-nodejs/compare/v1.0.0-ea.1...v1.0.0-ea.2) - 2025-06-20

### Changes

### Features
* Add X-Request-Id header
* Extract User-Agent header from package.json
* Add GitHub pull request template

### Fixes
* Fix Java heap memory test issue

### Docs
* Update HttpRequestUtil.request documentation
* Update license year

### Other
* Rename HTTPResponseError -> HttpResponseError

## [1.0.0-ea.1](https://github.com/heroku/heroku-applink-nodejs/compare/v1.0.0-ea.0...v1.0.0-ea.1) - 2025-06-06

### Changes

### Other
* Remove dynamic UA

## [1.0.0-ea.0](https://github.com/heroku/heroku-applink-nodejs/compare/v1.0.0-ea...v1.0.0-ea.0) - 2025-06-06

### Changes

### Features
* Add X-App-UUID header, heroku-applink-node-sdk UA

## [1.0.0-ea](https://github.com/heroku/heroku-applink-nodejs/compare/v0.1.0-ea...v1.0.0-ea) - 2025-06-05

### Changes

### Features
* Updated getAuthorization to use the correct API URL
* Rename getConnection(name: string) -> getAuthorization(developerName: string, attachmentNameOrColorUrl = "HEROKU_APPLINK"), accepting a new attachmentNameOrColorOrUrl to use a specific Applink addon's config
* Remove node-fetch in favor of native fetch, add HTTPResponseError

### Other
* Update CODEOWNERS

## [0.1.0-ea] - 2024-08-12

### Changes

### Features
* Initial release
