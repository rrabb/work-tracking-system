Maintained copy: see [Decisions and tradeoffs in WI-001](../items/WI-001-portable-kit.md#decisions-and-tradeoffs). Original planning record copied 261106.

# Portable work-tracking kit: decisions and proposed plan

Created 261106 (-5). Planning only. No tracked file was changed. Inventory and options: [inventory-and-options.md](inventory-and-options.md).

## Status 261106-1854

| Step | State |
| --- | --- |
| Tracking in copilot-chat-exporter | ✅ Approved and done: WI-050 row (🔜 Next), WI-040 ↪️ Superseded, 261105 Inbox line moved to the WI-001 topic |
| Kit repo bootstrap | ✅ `C:\_DEV\work-tracking-system` created, `git init -b main`, no commits |
| Phase 1 | Not started. Runs in a VS Code window opened on the kit repo |

Check script scope (from the moved 261105 Inbox line): dashboard anchors, topic links, Closed lookup rows, statuses, and line links that point at non-blank lines on pinned commits. Minimal version before the pilot covers anchors and topic links.

## Decisions made by the dev (261106)

| # | Question | Decision |
| --- | --- | --- |
| 1 | Approach | Lean kit + pilot on real projects |
| 2 | Pilot order | codebase-context, then vsc-chat-tool, then proj-ent-cfg-test. Later: cpe-exb |
| 3 | Self-containment | Fully self-contained, but the collaboration layer is opt-in per project |
| 4 | Shared repos (private tracking) | ⏸️ Deferred until after real-world use. cpe-exb and other shared repos: tracking is only for the dev and must never be shared |
| 4b | Solo repos | Commit tracking with the code, as today |
| 5 | Packaging | Copy-in kit |
| 6 | Kit source | Its own repo: `C:\_DEV\work-tracking-system` |
| 7 | Handbook | Port as is, strip project-specific lines |
| 8 | Installed layout | One folder: `work-tracking/` |
| 9 | Updates | No upgrade path. Each copy is a fork |
| 9b | Project tweaks | Edit the project's own handbook copy. No `project-rules.md` |
| 10 | This repo | Leave as is. Improvements land in the kit repo first, then hand-copied |
| 11 | Import sources | All 7: Markdown task files, work logs, code comments (grouped per file), CHANGELOG Unreleased, GitHub issues/PRs, past chats, Git history |
| 12a | Sources per run | Ask at the start of each run |
| 12b | Where approved items land | Dev picks per item: WI row or Inbox |
| 12c | Source files after import | Leave untouched |
| 13 | Prompts | install, import, status, wrap-up, triage, critique |
| 13b | Prompt format | Plain Markdown procedure + thin VS Code `.prompt.md` wrapper |
| 14 | Collaboration switch | `Collaboration style: on/off` line in AGENTS.md, like `Project mode:` |
| 14b | Collaboration default | On |
| 15 | Check script | Node (`.mjs`, zero dependencies) |
| 15b | WI-040 | Move to the kit repo |
| 16a | Kickoff prompt | None. Do now + Resume point are the handoff |
| 16b | Evidence labels | Handbook's 5 labels, including "From past chat" |
| 16c | `Tracking:` line | Last line of the reply, or just above `Evidence:` when present |
| 17a | Writing style | Always installed as a `.github/instructions/` file |
| 17b | Commit hook | Install prompt offers it per project |
| 18 | Tracking this work | New row here (WI-050) + WI-040 set Superseded. The kit repo tracks itself in its own `work-tracking/` |

## Proposed design (needs approval)

### Kit repo layout (proposed)

| Path | Holds |
| --- | --- |
| `README.md` | What the kit is, who it's for, how to install |
| `INSTALL.md` | Install procedure an agent follows from inside the target project |
| `template/work-tracking/handbook.md` | Ported handbook, project lines stripped |
| `template/work-tracking/dashboard.md` | Empty dashboard: Start here, area tables, Inbox, Closed lookup |
| `template/work-tracking/items/_topic-template.md` | Topic sections from the handbook's Topic layout |
| `template/work-tracking/collaboration.md` | Copy of the dev's user prefs, with the kickoff line matched to decision 16a |
| `template/work-tracking/procedures/*.md` | import, status, wrap-up, triage, critique |
| `template/work-tracking/check-tracking.mjs` | Node check script (from WI-040) |
| `template/AGENTS-block.md` | Block merged into the project's AGENTS.md: Project mode, Collaboration style, read order, capture check, Tracking line |
| `template/.github/instructions/writing-style.instructions.md` | Writing style, exporter terms stripped |
| `template/.github/prompts/wt-*.prompt.md` | Thin wrappers that point at the procedures |
| `template/.githooks/commit-msg` | Offered at install |
| `work-tracking/` | The kit's own tracking (dogfood) |

### Install rules (proposed)

- Never overwrite an existing AGENTS.md, `.github/copilot-instructions.md` or writing style file. Merge or ask.
- Ask the project questions at install: Project mode, area names for the dashboard, commit hook yes/no.
- Run `git status` first. Stop if the target has uncommitted changes, and ask.

## Proposed phases and effort (inferred)

| Phase | Work | Effort | Gate |
| --- | --- | --- | --- |
| 1 | Create kit repo, port handbook, templates, AGENTS block, collaboration file, writing style | ~2-3 h | Dev approves phase |
| 2 | Write 6 procedures + wrappers, INSTALL.md, README | ~2-3 h | Dev reviews procedures |
| 3 | Minimal `check-tracking.mjs` (anchors, topic links). Full version after the pilot | ~1 h now, ~1-2 h later | Dev reviews |
| 4 | Pilot on codebase-context: install, import run, one real work session | ~1-2 h + review | Dev accepts pilot |
| 5 | Feed lessons back into the kit. Then vsc-chat-tool and proj-ent-cfg-test | ~1-2 h each | Per project |

⚠️ About 6-9 h through the first pilot, plus ~1-2 h for the full script later. That's above the ~4-8 h "lean kit" estimate in Q1, because the scope grew: 6 prompts, a Node script, the collaboration layer and the writing style.

## Open items, settled 261106

| # | Item | Decision |
| --- | --- | --- |
| 1 | Writing style source | Copy the working copy (the dev's own edits), but keep "Cut detail the reader doesn't need. Say each thing once." in the kit's copy |
| 2 | User prefs line 65 asks for a kickoff prompt | Override in the kit's AGENTS block only. User prefs stay unchanged |
| 3 | Kit version stamp | One line at the top of the project's `handbook.md`: "Copied from work-tracking-system at <commit> on <YYMMDD>" |
| 4 | Kit repo remote | Local Git only for now. Decide on GitHub after the pilot |
| 5 | Check script timing | Minimal version (dashboard anchors, topic links) before the pilot. Full version after |
| 6 | Where agents work | Kit repo in its own VS Code window. An agent here creates the folder and runs `git init`, with approval |
| 7 | Non-Git pilots | `git init` + first commit before install (check for secrets first). The read-only rule on vsc-chat-tool is lifted for its pilot only |

## Deferred (not approved, revisit later)

| Idea | Revisit when |
| --- | --- |
| Shared-repo private mode (`.git/info/exclude`, nested private repo, or outside-repo storage) | Before installing in cpe-exb or another shared repo |
| Upgrade prompt with version diff | When 4-5 projects carry copies and drift hurts |
| User-level skill packaging | If copy-in drift becomes a problem |
| Backlog.md or similar as a board UI | If a visual board is ever wanted |
