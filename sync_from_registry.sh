#!/usr/bin/env bash
# Sync the design system mirror from fn_registry.
# Copies:
#   fn_registry/frontend/functions/ui/  → components/
#   fn_registry/frontend/DESIGN_SYSTEM.md → DESIGN_SYSTEM.md
#   fn_registry/frontend/package.json (filtered) → package.json (not overwritten)
#
# Usage:
#   FN_REGISTRY_ROOT=~/fn_registry ./sync_from_registry.sh
#   ./sync_from_registry.sh   # uses default ~/fn_registry

set -euo pipefail

MIRROR_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REGISTRY_ROOT="${FN_REGISTRY_ROOT:-$HOME/fn_registry}"

if [[ ! -d "$REGISTRY_ROOT/frontend/functions/ui" ]]; then
  echo "ERROR: $REGISTRY_ROOT/frontend/functions/ui not found." >&2
  echo "Set FN_REGISTRY_ROOT to your fn_registry clone." >&2
  exit 1
fi

SRC_UI="$REGISTRY_ROOT/frontend/functions/ui"
SRC_DOC="$REGISTRY_ROOT/frontend/DESIGN_SYSTEM.md"
DST_UI="$MIRROR_ROOT/components"
DST_DOC="$MIRROR_ROOT/DESIGN_SYSTEM.md"

echo "→ Syncing components from $SRC_UI"
mkdir -p "$DST_UI"
# Wipe destination components dir then copy fresh (avoids stale files after deletions in source)
find "$DST_UI" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
cp -r "$SRC_UI"/. "$DST_UI"/

echo "→ Syncing DESIGN_SYSTEM.md"
if [[ -f "$SRC_DOC" ]]; then
  cp "$SRC_DOC" "$DST_DOC"
else
  echo "WARN: $SRC_DOC not found, skipping" >&2
fi

# Counts
n_tsx=$(find "$DST_UI" -maxdepth 1 -name "*.tsx" | wc -l | tr -d ' ')
n_md=$(find "$DST_UI" -maxdepth 1 -name "*.md" | wc -l | tr -d ' ')
echo "✓ Done — $n_tsx .tsx + $n_md .md in components/"
