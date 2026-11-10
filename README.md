# Portable Work-Tracking Kit

A copy-in set of Markdown files and agent instructions for tracking project work with an AI coding assistant. The kit keeps decisions, evidence, current status, and next steps in the project instead of relying on chat history alone.

## Who it is for

The kit is for individual developers using an AI coding assistant in a Git-based project. It works with any harness that reads `AGENTS.md`. Its project skills provide `/wt-*` slash commands in both the VS Code Local and Copilot harnesses.

It is best suited to solo projects or projects where the tracking files can be committed with the code. Private tracking inside a shared repository is not designed yet.

## What is included

- A handbook, dashboard, and topic template under `work-tracking/`.
- Optional collaboration guidance and project writing-style instructions.
- Plain Markdown procedures for importing work, status, Inbox triage, and draft critique.
- Five project skills under `.github/skills/` for import, status, triage, critique, and pausing. Each one points to its procedure.
- A zero-dependency check script at `work-tracking/check-tracking.mjs`.
- An optional commit-message hook. It requires Node and removes Copilot `Co-authored-by` trailers.

The import procedure scans only sources selected for that run, leaves source files unchanged, and waits for approval before adding items to tracking. It asks which folders to exclude. For each open-work list it finds, it asks whether to retire that section after filing or keep it as reference.

## Install

Open the target project in VS Code and type this in its chat:

```text
Follow C:\_DEV\work-tracking-system\INSTALL.md for this workspace.
```

Use your own kit path if it differs. Install from a clean kit checkout. The guide checks the target's Git status, collects project choices, and presents the planned changes for approval. Nothing is installed in your user profile.

For `/wt-import`, pick a strong model in the chat's model picker instead of Auto. In testing, Auto twice picked a weaker model.

## Check tracking

From an installed project root, run `node work-tracking/check-tracking.mjs`. To check this kit's own tracking from the repository root, run `node template/work-tracking/check-tracking.mjs work-tracking`. The optional path names the tracking directory; without it, the script checks the folder containing itself. The checker validates WI anchors and topic links from the dashboard, plus inline local Markdown file links in WI topic files. It does not scan `notes/`, resolve heading fragments or reference-style links, or check statuses and pinned-commit line links.

Run the bad-link regression fixture with `node --test test/check-tracking.test.mjs`.

## Out of scope

- There is no upgrade path. An installed copy is a fork; improvements must be hand-copied when wanted. The one exception: install offers to remove `wt-*` prompt files left by an earlier kit version.
- Private tracking within a shared repository is deferred until that mode is designed.
- The kit is not a hosted service, shared task database, or visual board.
- The full consistency checker, including Closed lookup rows, statuses, and pinned-commit line links, is not included yet.
