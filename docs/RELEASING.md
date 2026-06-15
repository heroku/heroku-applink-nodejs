# Releasing

This package uses [release-please](https://github.com/googleapis/release-please) to automate version bumps, changelog updates, GitHub releases, and npm publishes. **You never set a version number by hand** — release-please derives it from your conventional commit messages.

## How it works at a glance

There are two release lines, each driven by its own branch:

| Branch | Purpose                                    | Manifest                              | Config                                | npm dist-tag |
| ------ | ------------------------------------------ | ------------------------------------- | ------------------------------------- | ------------ |
| `main` | Stable releases (`1.2.3`)                  | `.release-please-manifest.json`       | `release-please-config.json`          | `latest`     |
| `next` | Beta / prerelease (`2.0.0-beta.0`, `.1`, …) | `.release-please-manifest-next.json`  | `release-please-config-next.json`     | `beta`       |

When you merge a commit to either branch, release-please:

1. Reads conventional commits since the last release.
2. Opens (or updates) a **release PR** that bumps `package.json`, updates `CHANGELOG.md`, and updates the manifest.
3. When you merge that release PR, release-please tags the commit, creates a GitHub Release, and triggers the `publish` job which runs `npm publish` with the right dist-tag.

You merge feature work; release-please opens release PRs; you merge those when ready.

## Prerequisites (one-time setup)

Before any release will succeed, **npm Trusted Publishing must be configured** for `@heroku/applink` on npmjs.com:

1. Go to npmjs.com → `@heroku/applink` package settings → Trusted Publishers.
2. Add a GitHub Actions Trusted Publisher with:
   - Owner: `heroku`
   - Repository: `heroku-applink-nodejs`
   - Workflow filename: `release.yml`
   - Environment: *(leave blank)*

Without this, `npm publish` will fail with a misleading `404 Not Found`.

## Conventional commits — the version determinant

Your commit message prefix decides the version bump:

| Prefix                                    | Bump on `main`         | Bump on `next`           |
| ----------------------------------------- | ---------------------- | ------------------------ |
| `fix:`                                    | patch (`1.1.1 → 1.1.2`) | beta increment           |
| `feat:`                                   | minor (`1.1.1 → 1.2.0`) | beta increment           |
| `feat!:` or footer `BREAKING CHANGE:`     | major (`1.1.1 → 2.0.0`) | beta increment           |
| `chore:`, `docs:`, `ci:`, `refactor:`     | no release             | no release               |

On `next`, the `-beta.N` counter increments on each release. The base version (e.g., `2.0.0` in `2.0.0-beta.3`) is whatever the highest commit type warrants.

## Releasing a stable version

```bash
git checkout main
git pull
git checkout -b fix/some-bug
# ...edits...
git commit -m "fix: handle empty response from data api"
git push -u origin fix/some-bug
gh pr create --base main
```

After your PR merges:

1. release-please opens (or updates) a PR titled like `chore(main): release 1.1.2`.
2. Review the PR — it should bump `package.json`, append to `CHANGELOG.md`, update `.release-please-manifest.json`.
3. Merge the release PR.
4. The `publish` job runs and publishes to npm with `--tag latest`.

## Releasing a beta version

> First time? You need a `next` branch. If it doesn't exist yet:
> ```bash
> git checkout main && git pull
> git checkout -b next
> git push -u origin next
> ```

### Step 1 — make your change against `next`

```bash
git checkout next
git pull
git checkout -b feat/rewrite-data-api
# ...edits...
git commit -m "feat!: rewrite data-api client

BREAKING CHANGE: removes legacy XYZ method"
git push -u origin feat/rewrite-data-api
gh pr create --base next        # <-- IMPORTANT: --base next, not main
```

### Step 2 — merge into `next`

Get review, merge the PR. release-please will open a release PR titled like `chore(next): release 2.0.0-beta.0`.

### Step 3 — merge the release PR

Once you're happy with the bump and changelog entry, merge the release PR. The `publish` job runs and publishes to npm with `--tag beta`.

Users install it explicitly:
```bash
npm install @heroku/applink@beta
```

### Step 4 — iterate

Land more PRs against `next` (`fix:`, `feat:`, etc.) — release-please keeps the open release PR updated to `beta.1`, `beta.2`, …. Merge whenever you're ready to ship the next beta.

## Promoting a beta to stable

When the beta line is ready to become the new stable:

```bash
git checkout main
git pull
git merge next                  # bring all beta work into main
git push
```

release-please on `main` sees the breaking-change history and opens a release PR for the clean stable version (e.g., `2.0.0`, no `-beta` suffix). Merge it → publishes as `latest`.

After promotion, `next` can be deleted (or left to start the next major's beta line).

## Pulling stable hotfixes into `next`

If a `fix:` lands on `main` and you want it in the beta line too:

```bash
git checkout next
git pull
git merge main                  # forward-merge stable into beta
git push
```

This keeps `next` ahead of `main` at all times.

## Common pitfalls

- **PR targeting `main` when it should target `next` (or vice versa).** Always check `--base` when running `gh pr create`. The branch you target decides which release line picks up the commit.
- **Non-conventional commit messages.** A commit like `update data api` won't trigger any release. Always use `feat:`/`fix:`/`chore:` prefixes.
- **Editing `package.json` version manually.** Don't. release-please owns that field. Hand-edits will get overwritten by the next release PR.
- **Expecting an immediate publish on a feature merge.** Merging a `feat:` commit doesn't publish — it updates the *open release PR*. The publish only happens when that release PR itself is merged.
- **Beta version came out as `1.1.2-beta.0` and you wanted `2.0.0-beta.0`.** That means no commits on `next` were marked breaking. Add a `feat!:` commit or a `BREAKING CHANGE:` footer.
