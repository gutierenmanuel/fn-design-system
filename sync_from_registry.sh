#!/usr/bin/env bash
# Sync the design system mirror from fn_registry.
# Copies:
#   fn_registry/frontend/functions/ui/      → components/
#   fn_registry/frontend/DESIGN_SYSTEM.md   → DESIGN_SYSTEM.md
#   fn_registry/frontend/design_prompts/    → design_prompts/
#
# Usage:
#   ./sync_from_registry.sh                              # auto-detects when inside fn_registry/subrepos/
#   FN_REGISTRY_ROOT=/path/to/fn_registry ./sync_from_registry.sh

set -euo pipefail

MIRROR_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Resolve fn_registry root:
#   1. $FN_REGISTRY_ROOT if set
#   2. two levels up from script (mirror at fn_registry/subrepos/fn-design-system/)
#   3. $HOME/fn_registry as last resort
if [[ -n "${FN_REGISTRY_ROOT:-}" ]]; then
  REGISTRY_ROOT="$FN_REGISTRY_ROOT"
elif [[ -d "$MIRROR_ROOT/../../frontend/functions/ui" ]]; then
  REGISTRY_ROOT="$(cd "$MIRROR_ROOT/../.." && pwd)"
else
  REGISTRY_ROOT="$HOME/fn_registry"
fi

if [[ ! -d "$REGISTRY_ROOT/frontend/functions/ui" ]]; then
  echo "ERROR: $REGISTRY_ROOT/frontend/functions/ui not found." >&2
  echo "Set FN_REGISTRY_ROOT to your fn_registry clone." >&2
  exit 1
fi

echo "→ Registry root: $REGISTRY_ROOT"

SRC_UI="$REGISTRY_ROOT/frontend/functions/ui"
SRC_DOC="$REGISTRY_ROOT/frontend/DESIGN_SYSTEM.md"
SRC_PROMPTS="$REGISTRY_ROOT/frontend/design_prompts"
DST_UI="$MIRROR_ROOT/components"
DST_DOC="$MIRROR_ROOT/DESIGN_SYSTEM.md"
DST_PROMPTS="$MIRROR_ROOT/design_prompts"

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

echo "→ Syncing design_prompts/"
if [[ -d "$SRC_PROMPTS" ]]; then
  mkdir -p "$DST_PROMPTS"
  find "$DST_PROMPTS" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
  cp -r "$SRC_PROMPTS"/. "$DST_PROMPTS"/
else
  echo "WARN: $SRC_PROMPTS not found, skipping" >&2
fi

# Counts
n_tsx=$(find "$DST_UI" -maxdepth 1 -name "*.tsx" | wc -l | tr -d ' ')
n_md=$(find "$DST_UI" -maxdepth 1 -name "*.md" | wc -l | tr -d ' ')
n_prompts=$(find "$DST_PROMPTS" -maxdepth 1 -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
echo "✓ Done — $n_tsx .tsx + $n_md .md in components/ + $n_prompts .md in design_prompts/"
