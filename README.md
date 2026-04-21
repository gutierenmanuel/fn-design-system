# fn-design-system

**Read-only mirror of `@fn_library`** — the React 19 + Mantine v9 design system that lives inside [fn_registry](../..).

This repo is checked out at `fn_registry/subrepos/fn-design-system/` (gitignored by fn_registry so it keeps its own git history and remotes).

This repo exists for one purpose: **give Claude Design (and other external tools) a clean, minimal view of the design system** without exposing the rest of the monorepo.

> ⚠️ Do not edit files in `components/` directly. They are overwritten on each sync from `fn_registry`.

## Structure

```
fn-design-system/
  DESIGN_SYSTEM.md       ← the contract (read this first)
  components/            ← mirror of fn_registry/frontend/functions/ui/
    index.ts             ← @fn_library barrel
    *.tsx + *.md         ← 75 components, one pair each
  package.json           ← runtime deps (Mantine v9, Tabler, React 19)
  tsconfig.json          ← paths → @fn_library maps to ./components
  sync_from_registry.sh  ← re-syncs from fn_registry
```

## How to use

### For Claude Design

1. Link this repo to your Claude Design project (`claude.ai/design` → Settings → Connected repos).
2. In prompts, refer to components **by name from `@fn_library`** and obey `DESIGN_SYSTEM.md`.
3. Handoff to Claude Code → the generated code lands in your local `fn_registry` apps.

### For humans / agents

Read `DESIGN_SYSTEM.md`. It is the single source of truth.

## How to re-sync

When you add or modify components in `fn_registry/frontend/functions/ui/`:

```bash
./sync_from_registry.sh
git add -A
git commit -m "sync: <what changed>"
git push
```

The script auto-detects the fn_registry root when the mirror lives at `fn_registry/subrepos/fn-design-system/`. Override with `FN_REGISTRY_ROOT=/path/to/fn_registry` if needed.

## What is NOT in this repo

- Any application code (`apps/*/`)
- The registry itself (`registry.db`, `cmd/fn/`, Go code)
- Python / Bash functions
- Deploy config, operations DBs, secrets

Everything here is derivable from `fn_registry` — if this repo is lost, `./sync_from_registry.sh` rebuilds it.
