# WI-001 Portable work-tracking kit

## At a glance

- **Goal:** Build a self-contained copy-in work-tracking kit and pilot it on the approved projects.
- **Progress as of 261106:** Phase 1 is accepted. A cleanup pass applied decision 16c, restored a missing writing-style rule, and moved the full decision record into this topic, with D1-D5 approved and every decision given a reason. Phase 2 has not started.
- **Decisions made:** The kit lives in its own repo, `work-tracking-system`, and is copied into each project. Project copies are self-contained forks. Collaboration is opt-in per project and defaults on. Full list: [Decisions and tradeoffs](#decisions-and-tradeoffs).
- **Next:** Phase 2 waits for the dev's approval.
- **Work in progress right now:** None. Phase 1, the cleanup pass, the stamp and the decision-record fix are committed.

## Original goal

Build a portable work-tracking kit that can be copied into solo projects, then test it on real projects before broadening its use.

## Done when

- [ ] The kit includes a handbook, templates, collaboration guidance, and writing-style instructions.
- [ ] The kit includes install, import, status, wrap-up, triage, and critique procedures with thin VS Code prompt wrappers.
- [ ] The install guide and README explain how to copy the kit into a project.
- [ ] The zero-dependency Node check script covers dashboard anchors and topic links before the pilot.
- [ ] The kit passes a pilot on codebase-context, followed by vsc-chat-tool and proj-ent-cfg-test.

## Current understanding

| Finding | Evidence label | Source |
| --- | --- | --- |
| Phase 1 covers reusable templates and this repository's initial tracking files. | Documented | Approved Phase 1 file list |
| The template handbook keeps the `<commit>` stamp placeholder for install time. The kit's own copy is stamped `dd6e59a`, the commit that added the templates. The two handbooks differ only on that line. | Observed here | `git log` after the first commits |

## Decisions and tradeoffs

Approved by the dev on 261106. Numbers match the original plan, copied under [Notes](#notes). Reasons marked "inferred, not confirmed" were drafted by an agent and approved by the dev in the 261106 cleanup. Treat them as best guesses. D1-D5 came from the plan's "Proposed design" and "Proposed phases" sections; the dev approved them in the same cleanup.

| # | Decision | Why |
| --- | --- | --- |
| 1 | Approach: lean kit, then pilot it on real projects | Existing tools don't fit: Backlog.md needs a CLI and lacks Inbox triage, Closed lookup and ask-before-close rules. Beads is built for many concurrent agents (inventory section 4) |
| 2 | Pilot order: codebase-context, then vsc-chat-tool, then proj-ent-cfg-test. Later: cpe-exb | Start with the project most like the exporter and least risky, then widen. cpe-exb is last because it's shared and needs private mode first (inferred, not confirmed) |
| 3 | Fully self-contained, with the collaboration layer opt-in per project | User prefs live outside the repo, so other projects get them only on the dev's machine (inventory row 7). Opt-in: some projects or other people may not want the dev's personal working style applied (inferred, not confirmed) |
| 4 | Shared repos (private tracking): deferred until after real-world use | Tracking in cpe-exb and other shared repos is only for the dev and must never be shared. The private mode needs design first |
| 4b | Solo repos commit tracking with the code | Same as today's practice |
| 5 | Packaging: copy-in kit | Simple, works in any harness that reads AGENTS.md, and each project stays self-contained. Accepted cost: copies drift and upgrades are manual (inventory option A) |
| 6 | Kit source: its own repo, `work-tracking-system` | Kit changes get their own history and don't mix with exporter commits (inferred, not confirmed) |
| 7 | Handbook: port as is, strip project-specific lines | Fastest path to a working kit. Trim later from pilot evidence, not guesses (inferred, not confirmed). Known cost: the handbook grew to 1,935 words, and every project pays that reading cost (inventory conflict 5) |
| 8 | Installed layout: one folder, `work-tracking/` | Easy to find, copy, and remove. Keeps the project root clean (inferred, not confirmed) |
| 9 | Updates: no upgrade path. Each copy is a fork | An upgrade tool costs more than hand-copying while only a few projects use the kit (inferred, not confirmed). An upgrade prompt is deferred until drift hurts |
| 9b | Project tweaks: edit the project's own handbook copy. No `project-rules.md` | One file to read. A separate rules file adds a merge question to every session (inferred, not confirmed) |
| 10 | copilot-chat-exporter stays as is. Improvements land in the kit first, then get hand-copied | Avoids churn in a working project. The kit proves changes first (inferred, not confirmed) |
| 11 | Import sources: all 7 (Markdown task files, work logs, code comments grouped per file, CHANGELOG Unreleased, GitHub issues/PRs, past chats, Git history) | Each project keeps its open work in different places. Missing a source loses work (inferred, not confirmed) |
| 12a | Import asks which sources to use at the start of each run | Some sources are slow or private (past chats, GitHub). The dev chooses per run (inferred, not confirmed) |
| 12b | The dev picks where each approved item lands: WI row or Inbox | Only the dev knows what's committed work versus an idea (inferred, not confirmed) |
| 12c | Import leaves source files untouched | Import is read-only on source files. Nothing is lost if the import is wrong (inferred, not confirmed) |
| 13 | Prompts: install, import, status, wrap-up, triage, critique | Wrap-up borrows an idea from ai-tasks (inventory section 4). Status, triage and critique already exist in the exporter. Install and import are new needs (inferred, not confirmed) |
| 13b | Prompt format: plain Markdown procedure plus a thin VS Code `.prompt.md` wrapper | The procedure works in any harness. The wrapper adds the VS Code slash command (inferred, not confirmed) |
| 14 | Collaboration switch: a `Collaboration style: on/off` line in AGENTS.md | Matches the existing `Project mode:` line |
| 14b | Collaboration default: on | The kit's main user is the dev, who wants it on (inferred, not confirmed) |
| 15 | Check script: Node `.mjs`, zero dependencies | Node is already in the dev's projects. No install step (inferred, not confirmed). The inventory flagged that language matters for projects without Node |
| 15b | WI-040 (check script) moves to the kit repo | The kit builds the check script |
| 16a | No kickoff prompt. Do now plus Resume point are the handoff | Resolves the conflict between the user prefs and copilot-chat-exporter's AGENTS.md (inventory conflict 1) |
| 16b | Evidence labels: the handbook's 5, including "From past chat" | The handbook and writing style had different lists. The kit needs one (inventory conflict 2) |
| 16c | `Tracking:` goes on the last line of the reply, or just above `Evidence:` when present | Works when Collaboration style is off and no `Evidence:` line exists (dev, 261106 cleanup) |
| 17a | Writing style is always installed as a `.github/instructions/` file | Tracking files are written in this style. Without it, entries drift (inferred, not confirmed) |
| 17b | The install prompt offers the commit hook per project | The hook needs Node in the target project (inventory row 11) |
| 18 | Tracking this work: WI-050 in copilot-chat-exporter, WI-040 superseded. The kit tracks itself in its own `work-tracking/` | The kit uses the system it provides |
| O1 | Writing style source: the dev's working copy, but keep "Cut detail the reader doesn't need. Say each thing once." | The dev's choice |
| O2 | The kickoff-prompt override goes in the kit's AGENTS block. User prefs stay unchanged | Later refined: the dev chose to also align the project copy of `collaboration.md` (see Phase 1 rows) |
| O3 | Version stamp: one line at the top of the project's `handbook.md`: "Copied from work-tracking-system at <commit> on <YYMMDD>" | Shows which kit version a copy came from, because there's no upgrade path (inferred, not confirmed). The installer fills it in. The template keeps the placeholder |
| O4 | Kit repo remote: local Git only. Decide on GitHub after the pilot | Nothing to share before the pilot proves the kit (inferred, not confirmed) |
| O5 | Check script: minimal version (dashboard anchors, topic links) before the pilot, full version after | Full scope also covers Closed lookup rows, statuses, and line links that point at non-blank lines on pinned commits |
| O6 | Agents work on the kit in its own VS Code window | The agent loads the kit's own AGENTS.md and doesn't edit the exporter by mistake (inferred, not confirmed) |
| O7 | Non-Git pilots get `git init` and a first commit before install, after a secrets check. The read-only rule on vsc-chat-tool is lifted for its pilot only | The kit needs Git for history and commits. The secrets check stops a first commit from leaking credentials (inferred, not confirmed) |
| D1 | Kit layout: `README.md`, `INSTALL.md`, `template/` (handbook, dashboard, topic template, collaboration, procedures, check script, AGENTS block, writing style, prompt wrappers, commit hook), and the kit's own `work-tracking/` | Proposed design in the plan. Full table under Notes. Approved by the dev 261106 (cleanup) |
| D2 | Install never overwrites an existing AGENTS.md, `.github/copilot-instructions.md` or writing-style file. It merges or asks | Proposed design in the plan. Approved by the dev 261106 (cleanup) |
| D3 | Install asks: Project mode, dashboard area names, commit hook yes/no | Proposed design in the plan. Approved by the dev 261106 (cleanup) |
| D4 | Install runs `git status` first, and stops and asks if the target has uncommitted changes | Proposed design in the plan. Approved by the dev 261106 (cleanup) |
| D5 | Phases: 1 templates; 2 procedures, wrappers, INSTALL, README; 3 minimal check script; 4 pilot on codebase-context; 5 lessons, then other pilots. Each phase needs dev approval | About 6-9 h through the first pilot (inferred estimate in the plan). Approved by the dev 261106 (cleanup) |
| P1 | Phase 1 seeds one `Kit` area and no kit-root `AGENTS.md` | Dev's choice at the Phase 1 file-list approval |
| P2 | The project copy of `collaboration.md` uses Do now plus Resume point as the handoff. The user-level prefs stay unchanged | Avoids two installed files that contradict each other |
| C1 | Add a kit-root pointer `AGENTS.md` (Project mode: prototype, Collaboration style: on). Reverses P1's "no kit-root AGENTS.md" | Without it, fresh chats here don't load the tracking rules. Accepted cost: a fourth copy of the tracking bullets that can drift (dev, 261106 cleanup) |
| C2 | Copy `collaboration.md` into the kit's own `work-tracking/` | Matches an installed project, so the "on" path gets tested here (dev, 261106 cleanup) |

Deferred, not approved: shared-repo private mode (before cpe-exb), upgrade prompt (when drift hurts), user-level skill packaging (if drift becomes a problem), Backlog.md as a board UI (if a board is wanted).

## Findings and outcomes

Phase 1 was accepted on 261106. The collaboration copy uses Do now and Resume point as the handoff; the original user-level preferences remain untouched.

## Resume point

Wait for the dev's approval before Phase 2: procedures, prompt wrappers, `INSTALL.md`, and `README.md`.

## References

- [Handbook template](../../template/work-tracking/handbook.md)
- [AGENTS block template](../../template/AGENTS-block.md)

## Notes

### 261106-2243 - Decision record gaps closed

A critique of the cleanup pass found two gaps. The dev approved D1-D5, which the plan had listed as proposals. The dev also approved agent-drafted reasons for the 21 decisions that had none. Those reasons are marked "inferred, not confirmed".

### 261106-2231 - Cleanup pass after review

The dev's review found three gaps the rubber-duck review missed. Fixed: decision 16c in the AGENTS block and both handbook copies, the restored writing-style rule (O1), and this decision record. The dev also approved a kit-root `AGENTS.md` and a copy of `collaboration.md` in `work-tracking/` (C1, C2). The plan files below were copied from copilot-chat-exporter's git-ignored `temp-tool-output/` folder, so the kit now owns them. Personal paths were replaced with the repo name. No session IDs were present.

### 261106 - Phase 1 accepted

The dev accepted the Phase 1 files and asked to pause before Phase 2.

### 261106 - Phase 1 file list approved

Seeded one `Kit` area and WI-001. No kit-root `AGENTS.md` is planned.

### 261106-1854 - Plan and decisions (copy of decisions.md)

Copied as is, except headings are demoted and personal paths removed. Paths such as `work-items/README.md` and `AGENTS.md` refer to copilot-chat-exporter. "This repo" means copilot-chat-exporter.

#### Portable work-tracking kit: decisions and proposed plan

Created 261106 (-5). Planning only. No tracked file was changed. Inventory and options: the 261106-1411 note below.

##### Status 261106-1854

| Step | State |
| --- | --- |
| Tracking in copilot-chat-exporter | ✅ Approved and done: WI-050 row (🔜 Next), WI-040 ↪️ Superseded, 261105 Inbox line moved to the WI-001 topic |
| Kit repo bootstrap | ✅ `work-tracking-system` created, `git init -b main`, no commits |
| Phase 1 | Not started. Runs in a VS Code window opened on the kit repo |

Check script scope (from the moved 261105 Inbox line): dashboard anchors, topic links, Closed lookup rows, statuses, and line links that point at non-blank lines on pinned commits. Minimal version before the pilot covers anchors and topic links.

##### Decisions made by the dev (261106)

| # | Question | Decision |
| --- | --- | --- |
| 1 | Approach | Lean kit + pilot on real projects |
| 2 | Pilot order | codebase-context, then vsc-chat-tool, then proj-ent-cfg-test. Later: cpe-exb |
| 3 | Self-containment | Fully self-contained, but the collaboration layer is opt-in per project |
| 4 | Shared repos (private tracking) | ⏸️ Deferred until after real-world use. cpe-exb and other shared repos: tracking is only for the dev and must never be shared |
| 4b | Solo repos | Commit tracking with the code, as today |
| 5 | Packaging | Copy-in kit |
| 6 | Kit source | Its own repo: `work-tracking-system` |
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

##### Proposed design (needs approval)

###### Kit repo layout (proposed)

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

###### Install rules (proposed)

- Never overwrite an existing AGENTS.md, `.github/copilot-instructions.md` or writing style file. Merge or ask.
- Ask the project questions at install: Project mode, area names for the dashboard, commit hook yes/no.
- Run `git status` first. Stop if the target has uncommitted changes, and ask.

##### Proposed phases and effort (inferred)

| Phase | Work | Effort | Gate |
| --- | --- | --- | --- |
| 1 | Create kit repo, port handbook, templates, AGENTS block, collaboration file, writing style | ~2-3 h | Dev approves phase |
| 2 | Write 6 procedures + wrappers, INSTALL.md, README | ~2-3 h | Dev reviews procedures |
| 3 | Minimal `check-tracking.mjs` (anchors, topic links). Full version after the pilot | ~1 h now, ~1-2 h later | Dev reviews |
| 4 | Pilot on codebase-context: install, import run, one real work session | ~1-2 h + review | Dev accepts pilot |
| 5 | Feed lessons back into the kit. Then vsc-chat-tool and proj-ent-cfg-test | ~1-2 h each | Per project |

⚠️ About 6-9 h through the first pilot, plus ~1-2 h for the full script later. That's above the ~4-8 h "lean kit" estimate in Q1, because the scope grew: 6 prompts, a Node script, the collaboration layer and the writing style.

##### Open items, settled 261106

| # | Item | Decision |
| --- | --- | --- |
| 1 | Writing style source | Copy the working copy (the dev's own edits), but keep "Cut detail the reader doesn't need. Say each thing once." in the kit's copy |
| 2 | User prefs line 65 asks for a kickoff prompt | Override in the kit's AGENTS block only. User prefs stay unchanged |
| 3 | Kit version stamp | One line at the top of the project's `handbook.md`: "Copied from work-tracking-system at <commit> on <YYMMDD>" |
| 4 | Kit repo remote | Local Git only for now. Decide on GitHub after the pilot |
| 5 | Check script timing | Minimal version (dashboard anchors, topic links) before the pilot. Full version after |
| 6 | Where agents work | Kit repo in its own VS Code window. An agent here creates the folder and runs `git init`, with approval |
| 7 | Non-Git pilots | `git init` + first commit before install (check for secrets first). The read-only rule on vsc-chat-tool is lifted for its pilot only |

##### Deferred (not approved, revisit later)

| Idea | Revisit when |
| --- | --- |
| Shared-repo private mode (`.git/info/exclude`, nested private repo, or outside-repo storage) | Before installing in cpe-exb or another shared repo |
| Upgrade prompt with version diff | When 4-5 projects carry copies and drift hurts |
| User-level skill packaging | If copy-in drift becomes a problem |
| Backlog.md or similar as a board UI | If a visual board is ever wanted |

### 261106-1411 - Inventory and options (copy of inventory-and-options.md)

Copied as is, except headings are demoted. Paths refer to copilot-chat-exporter unless they start with `~/`.

#### Portable work-tracking kit: inventory and options

Created 261106-1411 (-5). Read-only planning. Nothing in the repo was changed.

##### 1. What the current system is made of

| # | Component | Path | Size | Role | Portable as is? |
| --- | --- | --- | --- | --- | --- |
| 1 | Handbook | `work-items/README.md` | 1,935 words | Rules: statuses, tags, Inbox, closing, capture check, completion check, rabbit holes, topic layout, evidence labels | ⚠️ Mostly. 4 project-specific lines (see section 2) |
| 2 | Dashboard | `work-log.md` | 3,393 words | Start here, area tables, Inbox, Closed lookup, Old history | ❌ Content is project data. Needs an empty template |
| 3 | Topic files | `work-items/WI-NNN-*.md` | 18 files, 404-2,731 words | Why: goal, done when, findings, decisions, notes | ❌ Data. Needs a topic template |
| 4 | AGENTS.md tracking block | `AGENTS.md` lines 7-20 | ~300 words | Always-on rules: read order, Inbox, capture check, `Tracking:` line, completion, rabbit holes | ⚠️ Mostly. Line 14 is a project override |
| 5 | `Project mode:` line | `AGENTS.md` line 3 | 1 line | prototype vs defined | ✅ Generic concept from your user prefs |
| 6 | Copilot pointer | `.github/copilot-instructions.md` | 21 words | Points Copilot at AGENTS.md | ✅ |
| 7 | User prefs | `~/.copilot/copilot-instructions.md` | 1,043 words | Evidence line, YYMMDD dates, git safety, kickoff prompt rule | ⚠️ Lives outside the repo. Other projects get it only on your machine |
| 8 | Writing style | `.github/instructions/writing-style.instructions.md` | 2,426 words | Plain language, tables, evidence labels, exporter terms | ⚠️ Has an exporter terms table and a link to `docs/CHAT-SESSION-SCHEMA.md` |
| 9 | Status prompts | `.github/prompts/status.prompt.md`, `exporter-status.prompt.md` | ~430 words each | Read-only status table. The exporter one reads the dashboard | ⚠️ Exporter one has pnpm, corpus and S-number details |
| 10 | Critique prompts | `.github/prompts/critique-prompt.prompt.md`, `exporter-critique-prompt.prompt.md` | ~500 words each | Devil's advocate review of a draft | ✅ Not tracking, but related workflow |
| 11 | Commit hook | `.githooks/commit-msg` | Node script | Strips Copilot co-author trailers | ❓ Not tracking. Needs Node in the target project |
| 12 | Archive | `work-log-archive.md` | 27,694 words | Old history, read only through links | ❌ Data. The concept (archive file) is optional |
| 13 | Planned check script | WI-040 (Backlog) | not built | Lint anchors, links, statuses | ❓ Language choice matters for non-Node projects |

##### 2. Project-specific text that a portable copy must remove or make a placeholder

| Where | Text | Why it's project-specific |
| --- | --- | --- |
| Handbook line 20 | "Current product behavior: README and SPEC" | Other projects may have no SPEC |
| Handbook line 44 | "High means confirmed in real data, or a privacy or silent-data-loss risk..." | Exporter priority rule |
| Handbook line 184 | "WI-005 and WI-011 are unused" | Example from this repo |
| Handbook topic sections | "old #15", "pinned old log" mentions | Migration history of this repo |
| Writing style line 64 | Evidence labels "defined in CHAT-SESSION-SCHEMA.md" | Exporter doc |
| Writing style | "Use Exporter Terms Consistently" table | Exporter vocabulary |

##### 3. Conflicts and drift found while reading

| # | Conflict | Evidence | Effect on a portable kit |
| --- | --- | --- | --- |
| 1 | ⚠️ Kickoff prompt: user prefs say keep one in the work log. This project says don't | `~/.copilot/copilot-instructions.md` line 65 vs `AGENTS.md` line 14 | The kit needs one default, and a documented override |
| 2 | ⚠️ Evidence labels differ: handbook has 5 (adds "From past chat"), writing style has 4 | Handbook line 168, writing style line 64 | Pick one list for the kit |
| 3 | ℹ️ AGENTS.md calls Do now a "table". The dashboard shows it as a bold line | `AGENTS.md` line 14, `work-log.md` "Start here" | Minor wording drift |
| 4 | ℹ️ WI-001 uses "Design decisions" and "Migration status" headings not in the topic layout | `work-items/WI-001-work-tracking-setup.md` | Templates should match the handbook |
| 5 | ⚠️ Handbook grew from ~1,258 words (261022 critique, which called it over target) to 1,935 | Agent chat 261022 (from past chat), word count today (observed here) | Porting it as is spreads the reading cost to every project |

##### 4. Existing tools that already do part of this

| Tool | How it works | Fit for you | Source |
| --- | --- | --- | --- |
| Backlog.md (MrLesk) | CLI + Markdown task files in the repo, Kanban board, MCP for agents. ~6.9k stars | ⚠️ Needs a CLI install. Its own task format. No Inbox triage, Closed lookup or ask-before-close rules | https://hysenlabs.com/projects/mrlesk-backlog-md |
| Beads (steveyegge) | `bd` CLI, issues in JSONL in Git plus a local DB, dependency graph, `bd ready` | ❌ Heavier than you want. Built for many concurrent agents | https://beads.gascity.com/architecture |
| ai-tasks (onishimura) | Markdown only: `current.md`, `backlog.md`, session logs, "status" and "wrap up" commands | ✅ Close in spirit, but tiny and unproven. Good idea to borrow: a "wrap up" command | https://github.com/onishimura/ai-tasks |
| Agent Skills (open standard) | A `SKILL.md` folder with templates and scripts. Works in VS Code Copilot, Copilot CLI, Codex. Workspace or User scope | ✅ A packaging option, not a tracker | https://code.visualstudio.com/docs/agent-customization/agent-skills |

##### 5. Packaging options

| Option | What it is | Pros | Cons |
| --- | --- | --- | --- |
| A. Copy-in folder | A kit folder with templates and an install guide. You or an agent copy files into the target project | Simple. Works in any harness that reads AGENTS.md. Each project is self-contained | Each copy drifts. Upgrades are manual |
| B. User-level skill + small AGENTS.md snippet | Rules and templates live once in `~/.copilot/skills/`. Each project gets only the data files and a ~15-line always-on block | One copy of the rules. Projects stay light | Skills load on demand, so the always-on block is still needed. Works only on machines with the skill. Not versioned unless you keep it in a repo |
| C. Both | Kit source in a repo, installable as a skill or copied in | Flexible | Two install paths to maintain |

##### 6. Import prompt sketch (for discussion, not decided)

1. Read-only scan of the source project: TODO/BACKLOG/notes files, `TODO`/`FIXME` comments, plans in docs, CHANGELOG "Unreleased", existing work logs, optionally GitHub issues and past chat sessions.
2. Report a table: candidate item, source `path:line`, proposed tag, duplicate of, keep/drop suggestion.
3. Dev approves per item.
4. Write approved items into the Inbox (or rows). Leave source files untouched unless the dev says otherwise.
5. Run the completion check.

##### 7. Questions to settle (asked one at a time)

1. Build our own kit, adopt an existing tool, or do the minimum?
2. Who is it for: only your projects, or shareable with others?
3. Packaging: copy-in folder, user-level skill, or both?
4. Where the kit's source lives, and its name.
5. How copies get updates, and whether this repo switches to use the kit.
6. Port the handbook as is, or a lean core plus optional modules?
7. Import prompt: which sources, and where imported items land.
8. Which extra prompts to include (install, status, wrap up, triage, upgrade).
9. Check script: include it, and in which language?
10. Defaults for the conflicts in section 3.
11. Include the writing style and commit hook, or keep them out?
12. How to track this work here: new WI or an Inbox line.
