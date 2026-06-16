# Releasing

[release-please](https://github.com/googleapis/release-please) derives the version from conventional commits. Never edit `package.json` `version`, `CHANGELOG.md`, or `.release-please-manifest*.json` by hand.

| Branch | Manifest                             | Config                            | dist-tag |
| ------ | ------------------------------------ | --------------------------------- | -------- |
| `main` | `.release-please-manifest.json`      | `release-please-config.json`      | `latest` |
| `next` | `.release-please-manifest-next.json` | `release-please-config-next.json` | `beta`   |

| Commit prefix                         | Bump                  |
| ------------------------------------- | --------------------- |
| `fix:`                                | patch                 |
| `feat:`                               | minor                 |
| `feat!:` / `BREAKING CHANGE:` footer  | major                 |
| `chore:`, `docs:`, `ci:`, `refactor:` | none                  |

On `next`, any releasing commit increments `-beta.N`.

## Prereq (one-time)

npm Trusted Publisher on npmjs.com → `@heroku/applink`: owner `heroku`, repo `heroku-applink-nodejs`, workflow `release.yml`. Without it, publish fails with `404`.

## Stable release

```bash
git checkout main && git pull
git checkout -b fix/some-bug
# edits
git commit -m "fix: ..."
git push -u origin fix/some-bug
gh pr create --base main
```

Merge PR → merge release PR → publishes as `latest`.

## Beta release

`next` must exist. Bootstrap once if not:

```bash
git checkout main && git pull
git checkout -b next && git push -u origin next
# add branch protection on GitHub immediately
```

**Step 1 — forward-merge `main` into `next` (required before every beta):**

```bash
git checkout next && git pull
git checkout -b chore/forward-merge-main-into-next
git merge main
git push -u origin chore/forward-merge-main-into-next
gh pr create --base next --title "chore: forward-merge main into next"
```

**Step 2 — feature work against `next`:**

```bash
git checkout next && git pull
git checkout -b feat/x
git commit -m "feat!: ..."
git push -u origin feat/x
gh pr create --base next   # NOT main
```

Merge PR → merge release PR → publishes as `beta`. Install: `npm install @heroku/applink@beta`.

## Promote `next` → `main`

```bash
git checkout main && git pull
git checkout -b release/promote-next-to-main
git merge next
git push -u origin release/promote-next-to-main
gh pr create --base main --title "feat!: promote next to stable"
```

Merge PR → merge release PR on `main` → publishes new major as `latest`.

## Rules

- Never push directly to `main` or `next` — always via PR.
- Dependabot targets `main` only. Carry bumps to `next` via Step 1.
- `next` is opt-in; only open it for in-flight major work.
- Forward-merge `main` → `next` before every beta and immediately after any security fix on `main`.

## Pitfalls

- Wrong `--base` on `gh pr create`.
- Non-conventional commit message → no release.
- `1.1.2-beta.0` instead of `2.0.0-beta.0` → no `feat!:`/`BREAKING CHANGE:` on `next`.
- Merging a `feat:` doesn't publish; merging the *release PR* does.
