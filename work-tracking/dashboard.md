# Work dashboard

Updated 261110. Read the [handbook](handbook.md) before changing tracking.

🔜 Next · 🔨 Active · 📋 Backlog · ⏳ Waiting · 💤 Deferred · ✅ Done · ❌ Dropped · ↪️ Superseded

## Start here

**Do now:** [question] WI-001 — Review decision 30's triage and checker changes; then retest Local triage on the codebase-context-WTS-1109 copy.

**Decisions you owe:** Accept decision 30's implementation. Phase 2 is paused.

**Inbox:** See [Inbox](#inbox). 1 entry.

**In flight:** Nothing active.

**Import status:** Not run. Sources reviewed: none. Candidates: 0 filed, 0 rejected, 0 left. Report: none.

## Overview

### Kit

| Item | What it is | Status | Type | Who | Size | Do after | Links |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a name="wi-001"></a>[WI-001 Portable work-tracking kit](items/WI-001-portable-kit.md) | Build and pilot a self-contained copy-in work-tracking kit. | ⏳ Waiting · Medium | [build] | both | L | - | Waits for acceptance of decision 30's triage and checker changes |

## Inbox

Format: `YYMMDD [tag] text (from: you|agent)`. Append only. Reread before adding.

- 261110 [idea] Stop `wt-critique` from loading by mistake: set `disable-model-invocation: true` or narrow its description. Seen in the 1109 `/wt-import` test. Checked 261110 with Opus 5.5: no stray load after C2. Revisit only if a weak model loads wt-critique by mistake. (from: agent)

## Closed lookup

Done items keep their ✅ row above. Record dropped and rejected ideas so nobody proposes them again.

| Idea | Why it was dropped | See |
| --- | --- | --- |
