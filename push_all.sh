#!/usr/bin/env bash
# Push master to both remotes (gitea + github).
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

echo "→ Pushing to Gitea..."
git push gitea master

echo "→ Pushing to GitHub..."
git push github master

echo "✓ Both remotes updated."
