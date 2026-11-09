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
- An optional commit-message hook. It requires Node and removes Copilot `Co-authored-by` trailers.

The import procedure scans only sources selected for that run, leaves source files unchanged, and waits for approval before adding items to tracking.

## Install

Copy `prompts/wt-install.prompt.md` once into the VS Code user prompts folder so `/wt-install` is available in any workspace. Do this yourself; the kit does not install it there. Then open the target project and follow [INSTALL.md](./INSTALL.md) from a clean kit checkout. The guide checks the target's Git status, collects project choices, and presents the planned changes for approval.

## Out of scope

- There is no upgrade path. An installed copy is a fork; improvements must be hand-copied when wanted.
- Private tracking within a shared repository is deferred until that mode is designed.
- The kit is not a hosted service, shared task database, or visual board.
- The planned consistency-check script is not included in this kit version.
