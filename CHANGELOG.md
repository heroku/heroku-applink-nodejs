# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
- Update CODEOWNERS

## [0.1.0-ea] - 2024-08-12

- Initial

## [1.0.0]

- Rename `getConnection(name: string)` -> `getAuthorization(developerName: string, attachmentNameOrColorUrl = "HEROKU_APPLINK")`, accepting a new attachmentNameOrColorUrl to use a specific Applink addon's config.