# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project type

This is a published npm SDK: `@heroku/applink`. Code shipped from this repo lands in customer environments via npm. Treat changes accordingly — backward compatibility, public API surface, and dependency hygiene matter more than in an internal service.

- Primary language: TypeScript
- Package manager: Yarn v1
- Node support: 18.x, 20.x, 22.x (CI matrix)
- Tests: Mocha + WireMock (requires Java 11+)

Customers only receive `dependencies`, never `devDependencies`. Security findings in dev tooling have zero customer impact.

## Git workflow

This repo has **two release branches**:

- `main` — stable releases, published to npm with dist-tag `latest`.
- `next` — beta / prerelease line, published with dist-tag `beta`.

When opening a PR, target the right base branch:

| Type of change                                 | Branch from | PR `--base` |
| ---------------------------------------------- | ----------- | ----------- |
| Bug fix or feature for current stable          | `main`      | `main`      |
| Breaking change / work staged for next major   | `next`      | `next`      |
| Forward-merging stable fixes into the beta line | `main`      | `next`      |

If you're unsure which line a change belongs to, ask before opening the PR.

### Conventional commits are required

release-please derives the next version from commit messages. Always use a conventional prefix:

- `feat:` → minor bump (or beta increment on `next`)
- `fix:` → patch bump
- `feat!:` or footer `BREAKING CHANGE:` → major bump
- `chore:`, `docs:`, `ci:`, `refactor:` → no release

A commit without one of these prefixes is effectively a silent commit from release-please's perspective and won't ship.

### Don't manually edit version numbers

`package.json`'s `version` field, `CHANGELOG.md`, and `.release-please-manifest*.json` are owned by release-please. Don't hand-edit them — your edits will be overwritten by the next release PR.

## Releasing

Full runbook: [`docs/RELEASING.md`](docs/RELEASING.md).

Short version:
- **Stable release:** merge `feat:`/`fix:` commits into `main` → release-please opens a release PR → merge it → publishes as `latest`.
- **Beta release:** merge into `next` → release-please opens a release PR for `X.Y.Z-beta.N` → merge it → publishes as `beta`.
- **Prerequisite:** npm Trusted Publishing must be configured on npmjs.com for `@heroku/applink` (Trusted Publisher tied to this repo + `release.yml`). Without it, all `npm publish` calls fail with a misleading `404 Not Found`.

## Testing

- `yarn test` runs WireMock + Mocha concurrently. WireMock requires Java 11+.
- Lint: `yarn lint` (max-warnings 0; takes the build down on any warning).
- Format: `yarn format:check` / `yarn format:write`.

## Security & dependencies

- Use `resolutions` in `package.json` to force secure versions of transitive dependencies.
- For Node 18.x in CI, install with `--ignore-engines` only when a transitive declares `engines.node >= 20` but is functionally compatible (see `.github/workflows/build.yml`). Don't apply this globally via `.yarnrc`.
- Don't introduce a new top-level dependency without flagging it — every entry in `dependencies` ships to customers.

## Things to verify before reporting work as done

- `yarn build` passes.
- `yarn lint` passes with zero warnings.
- For changes affecting tests, `yarn test` passes locally.
- The change targets the correct base branch (see Git workflow above).
- The commit message uses a conventional prefix.
