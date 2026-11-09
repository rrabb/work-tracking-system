# Portable Work-Tracking Kit

A copy-in set of Markdown files and agent instructions for tracking project work with an AI coding assistant. The kit keeps decisions, evidence, current status, and next steps in the project instead of relying on chat history alone.

## Who it is for

The kit is for individual developers using an AI coding assistant in a Git-based project. It works with any harness that reads `AGENTS.md`; its `.prompt.md` wrappers provide VS Code slash commands.

It is best suited to solo projects or projects where the tracking files can be committed with the code. Private tracking inside a shared repository is not designed yet.

## What is included

- A handbook, dashboard, and topic template under `work-tracking/`.
- Optional collaboration guidance and project writing-style instructions.
- Plain Markdown procedures for importing work, status, Inbox triage, and draft critique.
- Five project-local VS Code prompt wrappers for import, status, triage, critique, and pausing.
- A `wt-install` prompt at `prompts/wt-install.prompt.md`.
- A zero-dependency check script at `work-tracking/check-tracking.mjs`.
- An optional commit-message hook. It requires Node and removes Copilot `Co-authored-by` trailers.

The import procedure scans only sources selected for that run, leaves source files unchanged, and waits for approval before adding items to tracking.

## Install

Copy `prompts/wt-install.prompt.md` once into the VS Code user prompts folder so `/wt-install` is available in any workspace. Do this yourself; the kit does not install it there. Then open the target project and follow [INSTALL.md](./INSTALL.md) from a clean kit checkout. The guide checks the target's Git status, collects project choices, and presents the planned changes for approval.

## Check tracking

From an installed project root, run `node work-tracking/check-tracking.mjs`. To check this kit's own tracking from the repository root, run `node template/work-tracking/check-tracking.mjs work-tracking`. The optional path names the tracking directory; without it, the script checks the folder containing itself. The checker validates WI anchors and topic links from the dashboard, plus inline local Markdown file links in WI topic files. It does not scan `notes/`, resolve heading fragments or reference-style links, or check statuses and pinned-commit line links.

Run the bad-link regression fixture with `node --test test/check-tracking.test.mjs`.

## Out of scope

- There is no upgrade path. An installed copy is a fork; improvements must be hand-copied when wanted.
- Private tracking within a shared repository is deferred until that mode is designed.
- The kit is not a hosted service, shared task database, or visual board.
- The full consistency checker, including Closed lookup rows, statuses, and pinned-commit line links, is not included yet.
