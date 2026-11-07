Verbatim copy dated 261106.

# Portable work-tracking kit: inventory and options

Created 261106-1411 (-5). Read-only planning. Nothing in the repo was changed.

## 1. What the current system is made of

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

## 2. Project-specific text that a portable copy must remove or make a placeholder

| Where | Text | Why it's project-specific |
| --- | --- | --- |
| Handbook line 20 | "Current product behavior: README and SPEC" | Other projects may have no SPEC |
| Handbook line 44 | "High means confirmed in real data, or a privacy or silent-data-loss risk..." | Exporter priority rule |
| Handbook line 184 | "WI-005 and WI-011 are unused" | Example from this repo |
| Handbook topic sections | "old #15", "pinned old log" mentions | Migration history of this repo |
| Writing style line 64 | Evidence labels "defined in CHAT-SESSION-SCHEMA.md" | Exporter doc |
| Writing style | "Use Exporter Terms Consistently" table | Exporter vocabulary |

## 3. Conflicts and drift found while reading

| # | Conflict | Evidence | Effect on a portable kit |
| --- | --- | --- | --- |
| 1 | ⚠️ Kickoff prompt: user prefs say keep one in the work log. This project says don't | `~/.copilot/copilot-instructions.md` line 65 vs `AGENTS.md` line 14 | The kit needs one default, and a documented override |
| 2 | ⚠️ Evidence labels differ: handbook has 5 (adds "From past chat"), writing style has 4 | Handbook line 168, writing style line 64 | Pick one list for the kit |
| 3 | ℹ️ AGENTS.md calls Do now a "table". The dashboard shows it as a bold line | `AGENTS.md` line 14, `work-log.md` "Start here" | Minor wording drift |
| 4 | ℹ️ WI-001 uses "Design decisions" and "Migration status" headings not in the topic layout | `work-items/WI-001-work-tracking-setup.md` | Templates should match the handbook |
| 5 | ⚠️ Handbook grew from ~1,258 words (261022 critique, which called it over target) to 1,935 | Agent chat 261022 (from past chat), word count today (observed here) | Porting it as is spreads the reading cost to every project |

## 4. Existing tools that already do part of this

| Tool | How it works | Fit for you | Source |
| --- | --- | --- | --- |
| Backlog.md (MrLesk) | CLI + Markdown task files in the repo, Kanban board, MCP for agents. ~6.9k stars | ⚠️ Needs a CLI install. Its own task format. No Inbox triage, Closed lookup or ask-before-close rules | https://hysenlabs.com/projects/mrlesk-backlog-md |
| Beads (steveyegge) | `bd` CLI, issues in JSONL in Git plus a local DB, dependency graph, `bd ready` | ❌ Heavier than you want. Built for many concurrent agents | https://beads.gascity.com/architecture |
| ai-tasks (onishimura) | Markdown only: `current.md`, `backlog.md`, session logs, "status" and "wrap up" commands | ✅ Close in spirit, but tiny and unproven. Good idea to borrow: a "wrap up" command | https://github.com/onishimura/ai-tasks |
| Agent Skills (open standard) | A `SKILL.md` folder with templates and scripts. Works in VS Code Copilot, Copilot CLI, Codex. Workspace or User scope | ✅ A packaging option, not a tracker | https://code.visualstudio.com/docs/agent-customization/agent-skills |

## 5. Packaging options

| Option | What it is | Pros | Cons |
| --- | --- | --- | --- |
| A. Copy-in folder | A kit folder with templates and an install guide. You or an agent copy files into the target project | Simple. Works in any harness that reads AGENTS.md. Each project is self-contained | Each copy drifts. Upgrades are manual |
| B. User-level skill + small AGENTS.md snippet | Rules and templates live once in `~/.copilot/skills/`. Each project gets only the data files and a ~15-line always-on block | One copy of the rules. Projects stay light | Skills load on demand, so the always-on block is still needed. Works only on machines with the skill. Not versioned unless you keep it in a repo |
| C. Both | Kit source in a repo, installable as a skill or copied in | Flexible | Two install paths to maintain |

## 6. Import prompt sketch (for discussion, not decided)

1. Read-only scan of the source project: TODO/BACKLOG/notes files, `TODO`/`FIXME` comments, plans in docs, CHANGELOG "Unreleased", existing work logs, optionally GitHub issues and past chat sessions.
2. Report a table: candidate item, source `path:line`, proposed tag, duplicate of, keep/drop suggestion.
3. Dev approves per item.
4. Write approved items into the Inbox (or rows). Leave source files untouched unless the dev says otherwise.
5. Run the completion check.

## 7. Questions to settle (asked one at a time)

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
