#!/usr/bin/env bash
set -euo pipefail

# Default values
dry_run=false

usage() {
  echo "Usage: $0 [-d] [-h]"
  echo "  -d    Perform a dry run without actually publishing or creating git tags"
  echo "  -h    Show this help message"
  exit 1
}

while getopts ":dh" opt; do
  case $opt in
    d)
      dry_run=true
      ;;
    h)
      usage
      ;;
    \?)
      echo "Invalid option: -$OPTARG"
      usage
      ;;
  esac
done

version=$(node -p "require('./package.json').version")
if [[ $version == *-* ]]; then
  # Extract suffix after the last dash (e.g., "1.0.0-ea" -> "ea")
  tag="${version##*-}"
else
  # No suffix, use latest tag
  tag="latest"
fi

if [[ "$dry_run" == true ]]; then
  npm publish --tag "$tag" --dry-run

  echo "DRY RUN: Skipping git tag and push operations"
else
  echo "Publishing version $version with tag '$tag'..."
  npm publish --tag "$tag"

  echo "Creating git tag..."
  git tag "v${version}"
  git push --tags
fi
